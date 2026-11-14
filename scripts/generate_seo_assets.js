/**
 * Generates SEO assets (favicons, manifest icons, Open Graph image)
 * from the existing brand assets in public/images/.
 *
 * Run: node scripts/generate_seo_assets.js
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const IMG = path.join(ROOT, 'public', 'images');
const APP = path.join(ROOT, 'src', 'app');
const ICONS = path.join(ROOT, 'public', 'icons');

async function run() {
  fs.mkdirSync(ICONS, { recursive: true });

  const logoMark = path.join(IMG, 'logo-mark.png');
  const logo = path.join(IMG, 'logo.png');
  const hero = path.join(IMG, 'hero.jpg');

  // --- Manifest / favicon icons (logo mark on brand-dark rounded tile) ---
  for (const size of [192, 512]) {
    await sharp(logoMark)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 4, g: 26, b: 20, alpha: 1 }, // #041a14 brand dark
      })
      .flatten({ background: { r: 4, g: 26, b: 20, alpha: 1 } })
      .png()
      .toFile(path.join(ICONS, `icon-${size}.png`));
    console.log(`✓ public/icons/icon-${size}.png`);
  }

  // --- Next.js app icons (src/app/icon.png + apple-icon.png are auto-served) ---
  await sharp(logoMark)
    .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(APP, 'icon.png'));
  console.log('✓ src/app/icon.png');

  // --- favicon.ico: proper ICO container wrapping PNG entries (16/32/48) ---
  function wrapIco(pngBuffers) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type: icon
    header.writeUInt16LE(pngBuffers.length, 4); // count
    const directory = Buffer.alloc(16 * pngBuffers.length);
    let offset = 6 + directory.length;
    pngBuffers.forEach((png, i) => {
      const size = png.sizes[png.sizes.length - 1]; // sharp reports last size used
      const entry = directory.subarray(i * 16, i * 16 + 16);
      entry.writeUInt8(size > 255 ? 0 : size, 0); // width
      entry.writeUInt8(size > 255 ? 0 : size, 1); // height
      entry.writeUInt8(0, 2); // palette
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(png.data.length, 8); // data size
      entry.writeUInt32LE(offset, 12); // data offset
      offset += png.data.length;
    });
    return Buffer.concat([header, directory, ...pngBuffers.map((p) => p.data)]);
  }

  const icoSizes = [16, 32, 48];
  const icoPngs = await Promise.all(
    icoSizes.map((s) =>
      sharp(logoMark)
        .resize(s, s, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .png()
        .toBuffer()
        .then((data) => ({ data, size: s }))
    )
  );
  fs.writeFileSync(
    path.join(APP, 'favicon.ico'),
    wrapIco(icoPngs.map((p, i) => ({ data: p.data, sizes: [icoSizes[i]] })))
  );
  console.log('✓ src/app/favicon.ico');

  await sharp(logoMark)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(APP, 'apple-icon.png'));
  console.log('✓ src/app/apple-icon.png');

  // --- Open Graph image: 1200x630 hero crop + logo overlay ---
  const logoPadded = await sharp(logo)
    .resize(160, 160, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toBuffer();

  await sharp(hero)
    .resize(1200, 630, { fit: 'cover', position: 'attention' })
    .composite([
      {
        input: await sharp({
          create: { width: 1200, height: 630, channels: 4, background: { r: 4, g: 26, b: 20, alpha: 0.35 } },
        }).png().toBuffer(),
        blend: 'over',
      },
      { input: logoPadded, top: 40, left: 40 },
    ])
    .jpeg({ quality: 82 })
    .toFile(path.join(IMG, 'og-image.jpg'));
  console.log('✓ public/images/og-image.jpg');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
