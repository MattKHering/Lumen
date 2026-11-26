# Lumen accounts — deployment checklist

Status: SQL migration and disabled account frontend prepared; authentication and sync are **not enabled**. The pilot is not approved for public use until integration and security tests pass.

## Owner setup

1. Create a Supabase project at https://supabase.com/dashboard.
2. Review and run `supabase/schema.sql` in the SQL editor of that project. Review policies in the dashboard. Test with a separate development project before using real data.
3. Supply the project URL and its public publishable key for frontend configuration. Never send or commit the secret/service-role key, database password, JWT signing secret, SMTP password, or OAuth client secret.
4. Configure the application's site URL and exact permitted auth redirect URL (initially a dedicated HTTPS test hostname; never use the shared github.io origin for account access).
5. Configure a production email delivery provider, email verification, rate limits, and password recovery in the Supabase dashboard. Keep guest access available.

Official references:
- https://supabase.com/docs/guides/auth
- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/auth/redirect-urls
- https://supabase.com/docs/guides/auth/auth-smtp
- https://supabase.com/docs/guides/api/api-keys

## Frontend pilot (implemented, disabled and not live-tested)

- Offer sign in, register, verify email, recover password, sign out, and continue as guest. Use Supabase Auth; do not implement password storage.
- Keep guest and each signed-in account in separate local-storage namespaces. Never show a previous user's private notes when another user signs in.
- After a successful verified login, fetch only the authenticated user's row. Ask before importing or merging guest data. Never overwrite a remote profile silently.
- Save only allowlisted learning fields: course progress, checks, bookmarks, notes, preferences, knowledge profile, review scheduling and activity. Treat browser data as untrusted; exclude tokens, credentials, private app settings and device identifiers.
- Validate sizes and shapes before sending. Use debounced saves and preserve pending writes offline. Update with a filter on user_id and the last observed revision and increment revision by one; if zero rows are returned, retrieve the current version and surface the conflict rather than overwriting it. Merge rules need testing; do not add cumulative counters from two overlapping snapshots.
- On sign-out, clear in-memory account data and show the separate guest profile. Provide data export.
- Account deletion requires a secure authenticated server-side operation to remove the Auth user (not simply deleting the profile row); do not expose admin credentials in browser code.
- Disclose cloud storage, notes, retention, deletion, processors and contact information in the privacy notice before a public launch.

## Required integration tests before enabling registration

- Anonymous requests cannot read, create, update, or delete profile rows.
- Account A cannot access account B's row even by guessing its UUID.
- Valid account can insert, read, update and delete its own row. Stale revisions cannot overwrite a newer profile when the client uses the revision filter.
- Existing guest data is preserved, and import is opt-in.
- Registration, verification, recovery and sign-out work on mobile and desktop.
- Concurrent changes, offline recovery, migration, account switching, and actual account deletion are tested.
- Rate limits, email delivery and error reporting are configured.
- SQL has been drafted but not executed or validated against a live Supabase instance.

## Pilot activation — development only

Keep `account-config.js` disabled on main until all release tests pass. On an isolated development branch, vendor the reviewed, exact-version official Supabase JS v2 browser UMD bundle as `supabase-client.js` (the module loads it only when enabled). Record its exact version, checksum and license; do not use a floating CDN version. Set the dedicated HTTPS site origin, the HTTPS project URL and public `sb_publishable_...` key in `account-config.js`. Set `sdkIntegrity` to the reviewed bundle's SHA-384 SRI value. Set `enabled: true` only against the isolated test project, on a dedicated HTTPS origin. Modify the development deployment's CSP to allow only the exact Supabase project in connect-src; never relax the public GitHub Pages CSP. Leave `allowRegistration: false` and turn off self-service signup in Supabase Auth; invite test users via its dashboard. The frontend uses sessionStorage for the SDK session, verifies the authenticated email user before loading account data, keeps the guest profile untouched and uses per-account local cache keys. Sync requires a manual action or explicit automatic-sync opt-in; local/remote conflicts require an explicit choice. Custom lesson definitions and their related records stay local; guest imports exclude them. Account-specific cache and custom data are limited to the current tab and are cleared on sign-out; export unsynced data before closing the tab. A production forget-device flow, account deletion service, retention policy, and real-device and two-account security testing are still required; do not enable public registration before those are complete.

Check the pilot in a real browser with two independent accounts, separate browser profiles and concurrent writes. The catalog tests validate default-off behavior and payload/optimistic revision logic with fake clients only. They do not validate a live Supabase deployment.

## Security requirements for the public repository

- Keep the GitHub Pages configuration empty and disabled; CI enforces this. A separate test hostname is mandatory because paths under the same github.io host share browser storage and scripts' origin privileges. A new hostname has separate guest storage; existing users would need an explicit migration/export flow.
- Use a dedicated Supabase development project. Turn off public signup and anonymous sign-ins in its dashboard; invite only designated test users. Keep email confirmation, set a minimum 12-character password, rate limits and CAPTCHA before public registration. CAPTCHA requires frontend integration, not just a dashboard toggle; that integration is not built.
- The private SQL helper checks actual verified-email status and non-anonymous identity; restrictive RLS checks owner on all browser-role operations. Do not expose the lumen_private schema through the Data API or grant broad browser-role privileges. Run schema.sql only after reviewing it against the actual project and testing in development.
- Do not add secret/service-role keys to GitHub, browser code, local exports, or build logs. Use a private server/Edge Function secret store for any future account-deletion operation. No account deletion service currently exists.
- Configure a dedicated origin with a strict CSP and appropriate HTTP headers, including frame-ancestors 'none', HSTS and Referrer-Policy. Do not add third-party scripts without review.
- Test with verified users A and B, an unverified user, an anonymous Auth user if supported in the test project, and a signed-out request. Confirm direct Data API reads and writes cannot bypass the UI. Test owner insert, update, delete, stale revision, oversized/malformed payload, same-tab account switching, sign-out and tab close. The pilot is not production approved.
- Enable private vulnerability reporting and secret scanning/push protection if available in GitHub settings. Require admin MFA, and review deployment changes before merging.

Official checklists: https://supabase.com/docs/guides/security/production-checklist and https://docs.github.com/en/actions/reference/security/secure-use
