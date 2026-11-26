# Lumen security policy

This is a public source repository. Anything committed, including old commits, branches, workflow logs and release artifacts, must be treated as publicly accessible. Never add user data, authentication tokens, database credentials, Supabase secret/service-role keys, JWT signing keys, CAPTCHA secrets, SMTP credentials or actual exports. Only a publishable key and project URL may be used in a browser on a separate account-enabled deployment; the public GitHub Pages configuration is empty and account access is disabled.

## Reporting
Use GitHub's private vulnerability reporting feature at https://github.com/MattKHering/Lumen/security/advisories/new once enabled by the maintainer. Do not post vulnerability details, credentials, or user information in public issues. If private reporting is unavailable, do not disclose sensitive details publicly.

## Public deployment boundary
GitHub Pages is guest-only. Its content security policy blocks network connections, remote scripts, inline JavaScript and native form submissions. The deployment stages only referenced JavaScript and explicit static assets, rejects enabled account settings and checks for common credential patterns. This is defense in depth, not a comprehensive secret scanner. GitHub Pages paths under one github.io hostname share an origin; browser storage is not isolated between them. Never enable real accounts there. Use a dedicated HTTPS hostname for an independently reviewed account-enabled deployment with appropriate HTTP security headers, including frame-ancestors 'none'. CSP meta tags cannot set all HTTP security headers.

## Release gate
Do not turn on public registration until the backend isolation tests, real-device auth tests, rate limiting/CAPTCHA, email verification, privacy and account deletion are implemented and checked. Keep signup disabled in Supabase itself; hiding a frontend button is not authorization. See supabase/SETUP.md. User-owned learning progress is not a trusted certification record.

If a secret ever reaches a public commit, immediately revoke/rotate it; deleting the file is not sufficient. Review access logs and assess exposure. Enable GitHub secret scanning/push protection if available, require MFA on admin accounts, review changes to deployments, protect main and enable dependency update reviews.
