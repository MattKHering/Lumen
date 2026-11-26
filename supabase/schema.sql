-- Lumen account storage proposal. Run only in your own Supabase project.
-- No secrets belong in this repository. This migration is not deployed.
-- One row per authenticated user; no anonymous access.
begin;
create table if not exists public.learning_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  learning_data jsonb not null default '{}'::jsonb,
  revision bigint not null default 0 check (revision >= 0),
  updated_at timestamptz not null default now(),
  constraint learning_data_is_object check (jsonb_typeof(learning_data) = 'object'),
  constraint learning_data_size_limit check (octet_length(learning_data::text) <= 1048576)
);
alter table public.learning_profiles enable row level security;
revoke all on public.learning_profiles from public, anon, authenticated;
grant select, delete on public.learning_profiles to authenticated;
grant insert (user_id, learning_data, revision) on public.learning_profiles to authenticated;
grant update (learning_data, revision) on public.learning_profiles to authenticated;
-- Private helper, not exposed via the Data API. Identity is derived from the authenticated JWT,
-- not the browser's user_id, email or editable user metadata.
create schema if not exists lumen_private;
revoke all on schema lumen_private from public, anon, authenticated;
grant usage on schema lumen_private to authenticated;
create or replace function lumen_private.verified_email_user()
returns boolean
language sql stable security definer set search_path = ''
as $verified_email$
  select exists (
    select 1 from auth.users u
    where u.id = (select auth.uid())
      and u.email is not null
      and u.email_confirmed_at is not null
      and coalesce(u.is_anonymous, false) = false
      and (u.banned_until is null or u.banned_until <= now())
  );
$verified_email$;
revoke all on function lumen_private.verified_email_user() from public, anon, authenticated;
grant execute on function lumen_private.verified_email_user() to authenticated;

-- Restrictive policies are ANDed with all permissive policies. An accidental permissive
-- policy cannot make another account's row accessible to the authenticated browser role.
drop policy if exists lumen_verified_owner_guard on public.learning_profiles;
create policy lumen_verified_owner_guard on public.learning_profiles
  as restrictive for all to authenticated
  using ((select auth.uid()) = user_id and (select lumen_private.verified_email_user()))
  with check ((select auth.uid()) = user_id and (select lumen_private.verified_email_user()));

-- Deny anonymous-role access even if a future migration adds an overly broad permissive policy.
drop policy if exists lumen_no_anonymous_guard on public.learning_profiles;
create policy lumen_no_anonymous_guard on public.learning_profiles
  as restrictive for all to anon using (false) with check (false);

-- Enforce allowed top-level data fields and basic shapes on the server, not only in JS.
-- Existing invalid rows cause the migration to fail rather than being silently discarded.
alter table public.learning_profiles drop constraint if exists lumen_profile_allowed_fields;
alter table public.learning_profiles add constraint lumen_profile_allowed_fields check (
  jsonb_typeof(learning_data) = 'object'
  and (learning_data - array['schemaVersion','theme','goal','interests','onboarded','progress','saved','notes','review','activity','knowledge','attempts','correct']::text[]) = '{}'::jsonb
  and (learning_data = '{}'::jsonb or (
    learning_data ? 'schemaVersion' and learning_data->'schemaVersion' = '1'::jsonb
    and (not learning_data ? 'theme' or learning_data->>'theme' in ('light','dark'))
    and (not learning_data ? 'goal' or learning_data->'goal' in ('5'::jsonb,'10'::jsonb,'15'::jsonb,'20'::jsonb))
    and (not learning_data ? 'interests' or jsonb_typeof(learning_data->'interests') = 'array')
    and (not learning_data ? 'onboarded' or jsonb_typeof(learning_data->'onboarded') = 'boolean')
    and (not learning_data ? 'progress' or jsonb_typeof(learning_data->'progress') = 'object')
    and (not learning_data ? 'saved' or jsonb_typeof(learning_data->'saved') = 'object')
    and (not learning_data ? 'notes' or jsonb_typeof(learning_data->'notes') = 'object')
    and (not learning_data ? 'review' or jsonb_typeof(learning_data->'review') = 'object')
    and (not learning_data ? 'activity' or jsonb_typeof(learning_data->'activity') = 'object')
    and (not learning_data ? 'knowledge' or jsonb_typeof(learning_data->'knowledge') = 'object')
    and (not learning_data ? 'attempts' or jsonb_typeof(learning_data->'attempts') = 'number')
    and (not learning_data ? 'correct' or jsonb_typeof(learning_data->'correct') = 'number')
  )) is true
);
alter table public.learning_profiles drop constraint if exists lumen_profile_public_size;
alter table public.learning_profiles add constraint lumen_profile_public_size check (octet_length(learning_data::text) <= 1048576);
drop policy if exists read_own_learning_profile on public.learning_profiles;
create policy read_own_learning_profile on public.learning_profiles for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists create_own_learning_profile on public.learning_profiles;
create policy create_own_learning_profile on public.learning_profiles for insert to authenticated with check ((select auth.uid()) = user_id and revision = 0);
drop policy if exists update_own_learning_profile on public.learning_profiles;
create policy update_own_learning_profile on public.learning_profiles for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists delete_own_learning_profile on public.learning_profiles;
create policy delete_own_learning_profile on public.learning_profiles for delete to authenticated using ((select auth.uid()) = user_id);
create or replace function public.lumen_profile_update_guard()
returns trigger language plpgsql set search_path = '' as $$
begin
  if new.user_id <> old.user_id then
    raise exception 'Profile owner cannot change';
  end if;
  if new.revision <> old.revision + 1 then
    raise exception 'Profile revision must increase by one';
  end if;
  new.updated_at := now();
  return new;
end;
$$;
revoke all on function public.lumen_profile_update_guard() from public, anon, authenticated;
drop trigger if exists lumen_profile_update_guard on public.learning_profiles;
create trigger lumen_profile_update_guard before update on public.learning_profiles
for each row execute function public.lumen_profile_update_guard();
commit;
