#!/usr/bin/env bash
#
# Move the Odyssey workbooks from Google Drive into the repo, so the Odyssey
# page serves them itself rather than linking out — matching how the
# myth-and-religion pages serve their PDFs.
#
# The script does two things, in this order:
#   1. downloads all 25 PDFs into the-odyssey/workbooks/
#   2. only if all 25 arrive intact, rewrites the 26 links in the-odyssey/
#      index.html from Drive URLs to relative ./workbooks/ paths
#
# So it is safe to run, and safe NOT to run: until it succeeds the page keeps
# its working Drive links, and it never leaves the page pointing at files that
# are not there. Re-running it is harmless.
#
# Run once from anywhere in the repo, then commit:
#
#   ./scripts/fetch-odyssey-workbooks.sh
#   git add version2/subjects/classical-civilisation/the-odyssey
#   git commit -m "Serve Odyssey workbooks from the repo"
#
# All 25 files are shared read-to-anyone, so no Google login is needed.

set -euo pipefail

PAGE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/version2/subjects/classical-civilisation/the-odyssey"
DEST="$PAGE_DIR/workbooks"
PAGE="$PAGE_DIR/index.html"
mkdir -p "$DEST"

# filename<TAB>drive file id
FILES=$(cat <<'LIST'
odyssey-scheme-of-work.pdf	1PNvXH2pW7b1f971UXa5nj6xiKZNDcRCF
odyssey-book-01.pdf	1ImSs5z7urlJ1T2bdidUGq4pO72sIhkNh
odyssey-book-02.pdf	1_8TmWscMTquAx6H7N35LxML6zH_2T19V
odyssey-book-03.pdf	1Qg8UPoKXfk1cBRt9Wt53agg8Jej2BRki
odyssey-book-04.pdf	1ibuMQABrsVsx0gpuAaolEGj-7sk-cJ-h
odyssey-book-05.pdf	1UtwqMBtfGKAvYiSEmIsQtb_CmADoV7Xa
odyssey-book-06.pdf	13iLZlFbS2AkEC5FCni5HH1yEr-ohF18O
odyssey-book-07.pdf	1T6D96MNjzQe4NPKFY0r22-iYlrYEUU6H
odyssey-book-08.pdf	1GlY3srygENa9hmEV1_ZJteVxQcGWxv3Z
odyssey-book-09.pdf	1L3BgX-3a2MOoWo_OumFW5iMiRLcGIhlG
odyssey-book-10.pdf	1xaV_q13sA-oZr7TZEfIt73F2E3vHN1Rk
odyssey-book-11.pdf	1hxunvfvAQ8su2EOtE8uyac5pp6K6DdY9
odyssey-book-12.pdf	1IO9VhfmFvxk4JPQvlhB8J2nxj2KMph-O
odyssey-book-13.pdf	1aXhXcR5OFVOKxlhBTK2_eRh6HtwbPh_v
odyssey-book-14.pdf	1VgF5T7SWxYQ0QOq2gbVDL_fHTqGjfnC1
odyssey-book-15.pdf	1VeSDCg1H43pQ1Vqv_OTUJ9aUy7A-D7Jl
odyssey-book-16.pdf	1pX55xETUaTYfQM6xwqWzs1Ks_baKqyRV
odyssey-book-17.pdf	1b9kTnWFxzUviWTeRsPqgg54aOm5uvyqL
odyssey-book-18.pdf	1NI3DmRuv8iLamID9EgE7SwHQ88X9epYW
odyssey-book-19.pdf	1LU9cBNTN1-pS6C7XcEqUvWsH-hgBtu-j
odyssey-book-20.pdf	13CZ4C7XyNKZVeRCIzeW0GWC11yw8L9yR
odyssey-book-21.pdf	1hyTQZz-bymVXrvH92YgQ5bdLXlIKHjde
odyssey-book-22.pdf	1UQJius8kTZbeP93ZiqqcHZ9bfsmxjJji
odyssey-book-23.pdf	1qBK3FvAdy5BW1R-igLajex_gB6WKEGhd
odyssey-book-24.pdf	1V96DOsBrDtFSLXViaHFwePWdpRMVfLij
LIST
)

fail=0
while IFS=$'\t' read -r name id; do
  [ -z "${name:-}" ] && continue
  out="$DEST/$name"
  printf '%-32s ' "$name"

  # Drive interposes a virus-scan confirmation page on larger files, so keep
  # a cookie jar and re-request with the confirm token if one comes back.
  jar="$(mktemp)"
  curl -sL --max-time 120 -c "$jar" -o "$out" \
    "https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t" || true

  if [ -s "$out" ] && [ "$(head -c 4 "$out")" = "%PDF" ]; then
    printf 'ok (%s)\n' "$(du -h "$out" | cut -f1)"
  else
    token=$(sed -n 's/.*confirm=\([0-9A-Za-z_-]*\).*/\1/p' "$out" 2>/dev/null | head -1 || true)
    if [ -n "$token" ]; then
      curl -sL --max-time 120 -b "$jar" -o "$out" \
        "https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${token}" || true
    fi
    if [ -s "$out" ] && [ "$(head -c 4 "$out")" = "%PDF" ]; then
      printf 'ok (%s)\n' "$(du -h "$out" | cut -f1)"
    else
      printf 'FAILED\n'
      rm -f "$out"
      fail=1
    fi
  fi
  rm -f "$jar"
done <<< "$FILES"

echo
if [ "$fail" -ne 0 ]; then
  echo "Some downloads failed, so index.html has been left alone and the page"
  echo "keeps its working Drive links. Re-run this script, or save the missing"
  echo "files by hand into:"
  echo "  $DEST"
  exit 1
fi

got=$(find "$DEST" -maxdepth 1 -name '*.pdf' | wc -l | tr -d ' ')
if [ "$got" -ne 25 ]; then
  echo "Expected 25 PDFs in $DEST but found $got — leaving index.html alone."
  exit 1
fi
echo "All 25 PDFs are in $DEST"

# Only now repoint the page at the local copies. Idempotent: a page that has
# already been switched over simply has nothing left to replace.
python3 - "$PAGE" <<'PY'
import re, sys

IDS = {
 "1PNvXH2pW7b1f971UXa5nj6xiKZNDcRCF": "odyssey-scheme-of-work.pdf",
 "1ImSs5z7urlJ1T2bdidUGq4pO72sIhkNh": "odyssey-book-01.pdf",
 "1_8TmWscMTquAx6H7N35LxML6zH_2T19V": "odyssey-book-02.pdf",
 "1Qg8UPoKXfk1cBRt9Wt53agg8Jej2BRki": "odyssey-book-03.pdf",
 "1ibuMQABrsVsx0gpuAaolEGj-7sk-cJ-h": "odyssey-book-04.pdf",
 "1UtwqMBtfGKAvYiSEmIsQtb_CmADoV7Xa": "odyssey-book-05.pdf",
 "13iLZlFbS2AkEC5FCni5HH1yEr-ohF18O": "odyssey-book-06.pdf",
 "1T6D96MNjzQe4NPKFY0r22-iYlrYEUU6H": "odyssey-book-07.pdf",
 "1GlY3srygENa9hmEV1_ZJteVxQcGWxv3Z": "odyssey-book-08.pdf",
 "1L3BgX-3a2MOoWo_OumFW5iMiRLcGIhlG": "odyssey-book-09.pdf",
 "1xaV_q13sA-oZr7TZEfIt73F2E3vHN1Rk": "odyssey-book-10.pdf",
 "1hxunvfvAQ8su2EOtE8uyac5pp6K6DdY9": "odyssey-book-11.pdf",
 "1IO9VhfmFvxk4JPQvlhB8J2nxj2KMph-O": "odyssey-book-12.pdf",
 "1aXhXcR5OFVOKxlhBTK2_eRh6HtwbPh_v": "odyssey-book-13.pdf",
 "1VgF5T7SWxYQ0QOq2gbVDL_fHTqGjfnC1": "odyssey-book-14.pdf",
 "1VeSDCg1H43pQ1Vqv_OTUJ9aUy7A-D7Jl": "odyssey-book-15.pdf",
 "1pX55xETUaTYfQM6xwqWzs1Ks_baKqyRV": "odyssey-book-16.pdf",
 "1b9kTnWFxzUviWTeRsPqgg54aOm5uvyqL": "odyssey-book-17.pdf",
 "1NI3DmRuv8iLamID9EgE7SwHQ88X9epYW": "odyssey-book-18.pdf",
 "1LU9cBNTN1-pS6C7XcEqUvWsH-hgBtu-j": "odyssey-book-19.pdf",
 "13CZ4C7XyNKZVeRCIzeW0GWC11yw8L9yR": "odyssey-book-20.pdf",
 "1hyTQZz-bymVXrvH92YgQ5bdLXlIKHjde": "odyssey-book-21.pdf",
 "1UQJius8kTZbeP93ZiqqcHZ9bfsmxjJji": "odyssey-book-22.pdf",
 "1qBK3FvAdy5BW1R-igLajex_gB6WKEGhd": "odyssey-book-23.pdf",
 "1V96DOsBrDtFSLXViaHFwePWdpRMVfLij": "odyssey-book-24.pdf",
}

path = sys.argv[1]
html = open(path, encoding="utf-8").read()
n = 0
for fid, name in IDS.items():
    for amp in ("&amp;", "&"):
        url = "https://drive.google.com/uc?export=download%sid=%s" % (amp, fid)
        n += html.count(url)
        html = html.replace(url, "./workbooks/%s" % name)

left = len(re.findall(r"drive\.google\.com", html))
open(path, "w", encoding="utf-8").write(html)
print("Rewrote %d link(s) in index.html; %d Drive reference(s) left." % (n, left))
if left:
    print("WARNING: some Drive references remain — check them by hand.")
PY

echo
echo "Done. Review with 'git status', then commit:"
echo "  git add version2/subjects/classical-civilisation/the-odyssey"
echo "  git commit -m \"Serve Odyssey workbooks from the repo\""
