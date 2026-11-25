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
revoke all on public.learning_profiles from anon, authenticated;
grant select, insert, delete on public.learning_profiles to authenticated;
grant update (learning_data, revision) on public.learning_profiles to authenticated;
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
