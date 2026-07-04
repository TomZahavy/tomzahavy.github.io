// One-off image preparation: smart-crops the scraped originals into
// consistent, compressed thumbnails. Originals are kept outside the repo.
// Usage: node scripts/crop-images.mjs <originals-dir>
import sharp from "sharp";
import path from "path";

const SRC = process.argv[2];
if (!SRC) {
  console.error("Usage: node scripts/crop-images.mjs <originals-dir>");
  process.exit(1);
}
const OUT = path.join(import.meta.dirname, "..", "public");

// Profile: replicate the Wix crop (square from the top, y=11) then downscale.
// Source is 1216x1651; face sits in the upper part of the frame.
await sharp(path.join(SRC, "profile.jpg"))
  .extract({ left: 0, top: 11, width: 1216, height: 1216 })
  .resize(480, 480)
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(path.join(OUT, "profile.jpg"));
console.log("profile.jpg done");

// Project thumbnails: smart (attention) crop to 16:10, 800x500, webp.
const thumbs = [
  ["alphaproof.webp", "alphaproof.webp"],
  ["corigami.jpg", "corigami.webp"],
  ["puzzle.jpg", "puzzle.webp"],
  ["azdb.png", "azdb.webp"],
  ["llms-cant-jump.jpeg", "llms-cant-jump.webp"],
];

for (const [src, out] of thumbs) {
  const info = await sharp(path.join(SRC, src))
    .resize(800, 500, { fit: "cover", position: sharp.strategy.attention })
    .webp({ quality: 82 })
    .toFile(path.join(OUT, "projects", out));
  console.log(`${out}: ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB`);
}
