# Password reset: how it works and what to check

## The flow

1. `/auth/forgot-password.html` calls `requestPasswordReset()` in `auth.js`, which
   asks Supabase to email a link back to `https://classicalia.co.uk/auth/reset-password.html`.
2. The user clicks the link. Supabase verifies it and redirects to that page with
   recovery tokens attached, either as a URL hash (`#access_token=...&type=recovery`),
   as `?token_hash=...&type=recovery`, or as `?code=...` depending on the template.
3. `/auth/reset-password.html` turns whichever of those it receives into a session
   and shows the "set a new password" form.

## Why people were landing on the homepage, logged out

Supabase only redirects to URLs that match the **Redirect URLs** allow-list in the
project settings. If nothing matches, it falls back to the **Site URL**, which is
the homepage. The homepage had no idea what to do with the tokens, and the old
root `index.html` redirect to `/version2/` threw away the query string and hash on
the way, so the tokens vanished entirely.

`auth/recovery-guard.js` now runs on the root page and the v2 homepage. If it sees
recovery tokens in the URL it forwards them, intact, to the reset page.

## Supabase dashboard settings to confirm

Under **Authentication → URL Configuration**:

- **Site URL**: `https://classicalia.co.uk`
- **Redirect URLs** must include:
  - `https://classicalia.co.uk/auth/reset-password.html`
  - `https://classicalia.co.uk/**` (covers local variants and future pages)
  - `http://localhost:*/**` if you test locally

Under **Authentication → Email Templates → Reset Password**, the link should use
`{{ .ConfirmationURL }}`. If you switch it to the `{{ .TokenHash }}` style, the
reset page handles that too.

## Things that still legitimately fail

- The link is over an hour old, or has already been used once.
- A mail scanner opened the link first and spent it.
- A `?code=` style link opened in a different browser from the one that requested
  it. The reset page now says so rather than showing a generic error.
