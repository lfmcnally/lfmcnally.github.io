# `edit-content` — on-page admin editor backend

Commit-broker for the v2 on-page content editor
(`/version2/assets/js/page-editor.js`). When a signed-in **admin** edits text on
a v2 page and clicks **Save**, the browser calls this Edge Function, which:

1. verifies the caller's Supabase JWT and re-checks `is_admin()` **server-side**
   (this is the real security boundary — the page UI is just convenience),
2. fetches the target file from GitHub,
3. replaces each edited snippet (each must match exactly once),
4. commits straight to the default branch. GitHub Pages redeploys (~1 min).

Scope is locked to v2 content: the function rejects any path that isn't
`version2/….html`.

---

## One-time setup

### 1. Create a GitHub token
Create a **fine-grained personal access token** (GitHub → Settings → Developer
settings → Fine-grained tokens):

- **Repository access:** only `lfmcnally/lfmcnally.github.io`
- **Permissions:** **Contents → Read and write**
- Copy the token (starts `github_pat_…`).

### 2. Set the function secrets
From the repo root, with the [Supabase CLI](https://supabase.com/docs/guides/cli)
linked to your project (`supabase link --project-ref kqdnqaqqhpdryzoqvdac`):

```bash
supabase secrets set GH_TOKEN=github_pat_xxxxxxxx
supabase secrets set GH_REPO=lfmcnally/lfmcnally.github.io
supabase secrets set GH_BRANCH=main
```

(`SUPABASE_URL` and `SUPABASE_ANON_KEY` are provided by the platform — don't set
them.)

### 3. Deploy
```bash
supabase functions deploy edit-content
```

That's it. Sign in as an admin (`lawrencefmcnally@gmail.com`), open any v2
revision page, and you'll see an **✎ Edit page** button bottom-right.

---

## How editing behaves

- Only **leaf, text-only** blocks are editable (paragraphs, headings, list
  items, captions, etc.). Blocks containing inline markup (`<b>`, links) and
  JS-generated widgets (flashcards) are intentionally left alone in v1.
- Saving writes back **plain re-encoded text**, so a stray paste can never
  inject HTML into the source.
- An edit only commits if its original text is found **exactly once** in the
  file. If a snippet is ambiguous or can't be located, that edit is reported
  and **nothing is committed** — edit it in the repo instead.
- Anonymous visitors never load Supabase at all (the script bails on a
  `localStorage` check), so there's zero cost to the public.

## Testing locally
```bash
supabase functions serve edit-content --env-file supabase/.env.local
```
with `GH_TOKEN`, `GH_REPO`, `GH_BRANCH` in `supabase/.env.local`.
