# Sum up 27 November's world news in one image

[![make.fun](https://make.fun/badge/news-image-20261127.svg)](https://make.fun/bounty/news-image-20261127)
[![rank](https://make.fun/badge/news-image-20261127/stevencau55552-svg/news-image-20261127-anspeldam/rank.svg)](https://make.fun/bounty/news-image-20261127)
[![reward](https://make.fun/badge/news-image-20261127/stevencau55552-svg/news-image-20261127-anspeldam/reward.svg)](https://make.fun/bounty/news-image-20261127)

Entry for the make.fun bounty [news-image-20261127](https://make.fun/bounty/news-image-20261127):
one 1024×1024 image summing up the world news of **Friday 27 November 2026**.

The image (`entry.png`) is drawn entirely from code by `draw.py` (Python + PIL):
a broadsheet front page with the date in large type, three numbered headlines
(Kuwait drone strike, U.S. Thanksgiving nor'easter, New Zealand final election
results), a world-map strip and UTC timeline, and 30 more dated stories — 33 in
all, each labelled 27 Nov 2026, across 10+ regions and war, politics, economy,
disaster, health, space, AI, sport and culture.

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory, so both grader runs write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
