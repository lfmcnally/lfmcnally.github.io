# Do Now background music

The projected Do Now class view (`/version2/tracking/do-now.html`) can play
background music while a class answers — a **♪ Music** play/pause toggle (mute)
and a volume slider sit in the class-view toolbar. The teacher's on/off and
volume choice is remembered per browser. If nothing loads, the control hides
itself, so nothing breaks.

## Recommended: a shuffled playlist of short tracks

Drop several short (~2 min) royalty-free tracks in this folder and list them in
`tracks.json`. The player shuffles through them, advancing to the next when one
ends and reshuffling each lap.

1. Add your files here, e.g. `lofi1.mp3`, `lofi2.mp3`, `lofi3.mp3` …
2. Create `tracks.json` listing them:

   ```json
   ["lofi1.mp3", "lofi2.mp3", "lofi3.mp3", "lofi4.mp3"]
   ```

   (Bare filenames resolve against this folder; full `/version2/...` paths or
   `https://` URLs also work.)

## Simple alternative: one track

Skip `tracks.json` and just drop a single `lofi.mp3` here — the player falls
back to looping/replaying that one file.

## Getting tracks (royalty-free only)

Use music you're licensed to use — ideally CC0 / royalty-free lo-fi:

- **Pixabay Music** — https://pixabay.com/music/search/lofi/ (free, no attribution required)
- **Chosic** — https://www.chosic.com/free-music/lofi/
- **Free Music Archive** — https://freemusicarchive.org/ (check each track's licence)

Do **not** embed YouTube "lofi radio" streams — autoplay is unreliable and it
breaches their terms for classroom rebroadcast. Self-hosted royalty-free files
are the robust choice.
