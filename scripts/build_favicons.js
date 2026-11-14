const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const root = path.resolve(__dirname, '..');
  const srcLogo = path.join(root, 'public/images/logo.png');

  fs.mkdirSync(path.join(root, 'public/icons'), { recursive: true });

  // 1. Trimmed high-res crown emblem
  const trimmedBuffer = await sharp(srcLogo)
    .trim()
    .toBuffer();

  // Save clean 512x512 logo-mark.png
  await sharp(trimmedBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(root, 'public/images/logo-mark.png'));
  console.log('✓ public/images/logo-mark.png generated (512x512)');

  // 2. Favicon 16x16 and 32x32 png
  const png16 = await sharp(trimmedBuffer)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(root, 'public/favicon-16x16.png'), png16);

  const png32 = await sharp(trimmedBuffer)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(root, 'public/favicon-32x32.png'), png32);

  const png48 = await sharp(trimmedBuffer)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const png64 = await sharp(trimmedBuffer)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(root, 'src/app/icon.png'), png64);
  fs.writeFileSync(path.join(root, 'public/icon.png'), png64);
  console.log('✓ src/app/icon.png & public/icon.png (64x64)');

  // 3. Apple Touch Icon 180x180 (on brand dark tile)
  const appleIcon = await sharp(trimmedBuffer)
    .resize(140, 140, { fit: 'contain', background: { r: 4, g: 26, b: 20, alpha: 0 } })
    .extend({
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
      background: { r: 4, g: 26, b: 20, alpha: 1 }
    })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(root, 'src/app/apple-icon.png'), appleIcon);
  fs.writeFileSync(path.join(root, 'public/apple-touch-icon.png'), appleIcon);
  console.log('✓ src/app/apple-icon.png & public/apple-touch-icon.png (180x180)');

  // 4. PWA Icons 192 and 512
  for (const size of [192, 512]) {
    const pad = Math.round(size * 0.12);
    const inner = size - pad * 2;
    await sharp(trimmedBuffer)
      .resize(inner, inner, { fit: 'contain', background: { r: 4, g: 26, b: 20, alpha: 0 } })
      .extend({
        top: pad,
        bottom: pad,
        left: pad,
        right: pad,
        background: { r: 4, g: 26, b: 20, alpha: 1 }
      })
      .png()
      .toFile(path.join(root, 'public/icons', 'icon-' + size + '.png'));
    console.log('✓ public/icons/icon-' + size + '.png');
  }

  // 5. Build proper multi-size ICO file (16, 32, 48)
  function createIco(images) {
    const numImages = images.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type: ICO
    header.writeUInt16LE(numImages, 4); // count

    const entrySize = 16;
    let offset = 6 + (numImages * entrySize);
    const entries = [];

    for (const img of images) {
      const entry = Buffer.alloc(entrySize);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color count
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bpp
      entry.writeUInt32LE(img.buffer.length, 8); // size of image data
      entry.writeUInt32LE(offset, 12); // offset of image data
      offset += img.buffer.length;
      entries.push(entry);
    }

    return Buffer.concat([header, ...entries, ...images.map(img => img.buffer)]);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  fs.writeFileSync(path.join(root, 'src/app/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(root, 'public/favicon.ico'), icoBuffer);
  console.log('✓ src/app/favicon.ico & public/favicon.ico (Multi-size 16/32/48 ICO)');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

