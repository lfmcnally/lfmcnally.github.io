# Homepage skins

Seasonal looks for the v2 homepage (`version2/index.html`). A skin is an
add-on: a CSS file and a JS file that sit on top of the standard design and
never change it. Take the skin out and the homepage is exactly as it was.

## Current skin: Halloween

Switched on by these two lines in the `<head>` of `version2/index.html`:

```html
<link rel="stylesheet" href="./assets/skins/halloween/halloween.css">
<script src="./assets/skins/halloween/halloween.js"></script>
```

- **Preview the standard homepage** while the skin is on:
  `https://classicalia.co.uk/version2/?skin=classic`
- **Go back to the standard homepage:** delete those two lines (and the
  comment above them). Nothing else needs touching.
- **Bring Halloween back next year:** paste the two lines back in.

## The saved standard homepage

`classic/index.html` is a copy of the homepage exactly as it was before the
Halloween skin went on (October 2026), kept for reference. In git, the last
commit before the skin is `93d9cab` (`git show 93d9cab:version2/index.html`). The live `index.html` still holds the
same design, so normally you just remove the skin lines; use the copy only if
the live page has drifted and you want to compare.

## Adding another skin

Make a folder here (e.g. `christmas/`) with a CSS file whose rules are all
scoped under a class on `<html>` (e.g. `html.skin-christmas`), and a JS file
that adds that class. The JS can also set `window.CLASSICALIA_SKIN` with
`heroSky` / `curtainSky` colour options (`background`, `starRgb`, `lineRgb`,
`lineAlpha`), which the homepage passes to the starfields.
