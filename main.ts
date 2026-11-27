// news-image-20261127 entry (Node 22, standard library only).
// The image for Friday 27 November 2026 is drawn by draw.py (PIL) into
// entry.png beside this file; the program copies it to /output/entry.png.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Both runs copy the same committed bytes, so the outputs are identical.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
copyFileSync(source, join(targetDir, 'entry.png'));
