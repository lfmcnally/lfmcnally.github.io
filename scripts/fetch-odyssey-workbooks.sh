#!/usr/bin/env bash
#
# Refresh the Odyssey workbook PDFs in the repo from the source Drive folder
# (Classicalia Course Odyssey 12Cc).
#
# The PDFs already live in the-odyssey/resources/ and the page links them from
# there, so this is only needed when a workbook is revised in Drive and you
# want the site copy brought up to date. It overwrites the local files in
# place, keeping the existing names, and touches nothing else.
#
#   ./scripts/fetch-odyssey-workbooks.sh
#   git add version2/subjects/classical-civilisation/the-odyssey/resources
#   git commit -m "Refresh Odyssey workbooks"
#
# A file that fails to download is left as it was, so a partial run can never
# blank out a workbook that is already on the site.
#
# All 25 files are shared read-to-anyone, so no Google login is needed.

set -euo pipefail

DEST="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/version2/subjects/classical-civilisation/the-odyssey/resources"
mkdir -p "$DEST"

# filename<TAB>drive file id
FILES=$(cat <<'LIST'
Odyssey_SchemeOfWork_Classicalia.pdf	1PNvXH2pW7b1f971UXa5nj6xiKZNDcRCF
Odyssey_Book_1_Classicalia.pdf	1ImSs5z7urlJ1T2bdidUGq4pO72sIhkNh
Odyssey_Book_2_Classicalia.pdf	1_8TmWscMTquAx6H7N35LxML6zH_2T19V
Odyssey_Book_3_Classicalia.pdf	1Qg8UPoKXfk1cBRt9Wt53agg8Jej2BRki
Odyssey_Book_4_Classicalia.pdf	1ibuMQABrsVsx0gpuAaolEGj-7sk-cJ-h
Odyssey_Book_5_Classicalia.pdf	1UtwqMBtfGKAvYiSEmIsQtb_CmADoV7Xa
Odyssey_Book_6_Classicalia.pdf	13iLZlFbS2AkEC5FCni5HH1yEr-ohF18O
Odyssey_Book_7_Classicalia.pdf	1T6D96MNjzQe4NPKFY0r22-iYlrYEUU6H
Odyssey_Book_8_Classicalia.pdf	1GlY3srygENa9hmEV1_ZJteVxQcGWxv3Z
Odyssey_Book_9_Classicalia.pdf	1L3BgX-3a2MOoWo_OumFW5iMiRLcGIhlG
Odyssey_Book_10_Classicalia.pdf	1xaV_q13sA-oZr7TZEfIt73F2E3vHN1Rk
Odyssey_Book_11_Classicalia.pdf	1hxunvfvAQ8su2EOtE8uyac5pp6K6DdY9
Odyssey_Book_12_Classicalia.pdf	1IO9VhfmFvxk4JPQvlhB8J2nxj2KMph-O
Odyssey_Book_13_Classicalia.pdf	1aXhXcR5OFVOKxlhBTK2_eRh6HtwbPh_v
Odyssey_Book_14_Classicalia.pdf	1VgF5T7SWxYQ0QOq2gbVDL_fHTqGjfnC1
Odyssey_Book_15_Classicalia.pdf	1VeSDCg1H43pQ1Vqv_OTUJ9aUy7A-D7Jl
Odyssey_Book_16_Classicalia.pdf	1pX55xETUaTYfQM6xwqWzs1Ks_baKqyRV
Odyssey_Book_17_Classicalia.pdf	1b9kTnWFxzUviWTeRsPqgg54aOm5uvyqL
Odyssey_Book_18_Classicalia.pdf	1NI3DmRuv8iLamID9EgE7SwHQ88X9epYW
Odyssey_Book_19_Classicalia.pdf	1LU9cBNTN1-pS6C7XcEqUvWsH-hgBtu-j
Odyssey_Book_20_Classicalia.pdf	13CZ4C7XyNKZVeRCIzeW0GWC11yw8L9yR
Odyssey_Book_21_Classicalia.pdf	1hyTQZz-bymVXrvH92YgQ5bdLXlIKHjde
Odyssey_Book_22_Classicalia.pdf	1UQJius8kTZbeP93ZiqqcHZ9bfsmxjJji
Odyssey_Book_23_Classicalia.pdf	1qBK3FvAdy5BW1R-igLajex_gB6WKEGhd
Odyssey_Book_24_Classicalia.pdf	1V96DOsBrDtFSLXViaHFwePWdpRMVfLij
LIST
)

fail=0
while IFS=$'\t' read -r name id; do
  [ -z "${name:-}" ] && continue
  out="$DEST/$name"
  tmp="$(mktemp)"
  printf '%-32s ' "$name"

  # Drive interposes a virus-scan confirmation page on larger files, so keep
  # a cookie jar and re-request with the confirm token if one comes back.
  jar="$(mktemp)"
  curl -sL --max-time 120 -c "$jar" -o "$tmp" \
    "https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t" || true

  if [ -s "$tmp" ] && [ "$(head -c 4 "$tmp")" = "%PDF" ]; then
    mv "$tmp" "$out"
    printf 'ok (%s)\n' "$(du -h "$out" | cut -f1)"
  else
    token=$(sed -n 's/.*confirm=\([0-9A-Za-z_-]*\).*/\1/p' "$tmp" 2>/dev/null | head -1 || true)
    if [ -n "$token" ]; then
      curl -sL --max-time 120 -b "$jar" -o "$tmp" \
        "https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${token}" || true
    fi
    if [ -s "$tmp" ] && [ "$(head -c 4 "$tmp")" = "%PDF" ]; then
      mv "$tmp" "$out"
      printf 'ok (%s)\n' "$(du -h "$out" | cut -f1)"
    else
      printf 'FAILED (existing file left as it was)\n'
      fail=1
    fi
  fi
  rm -f "$jar" "$tmp"
done <<< "$FILES"

echo
if [ "$fail" -ne 0 ]; then
  echo "Some downloads failed. Those workbooks keep their existing copy in:"
  echo "  $DEST"
  echo "Re-run the script, or save the missing files there by hand."
  exit 1
fi
echo "All 25 workbooks refreshed in $DEST"
echo
echo "Review with 'git status', then commit:"
echo "  git add version2/subjects/classical-civilisation/the-odyssey/resources"
echo "  git commit -m \"Refresh Odyssey workbooks\""
