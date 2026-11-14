const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = '/Users/mac/.gemini/antigravity/brain/b1bb51ee-680d-4db6-9f00-6fbb7844c46e/.user_uploaded/media_1794386086855_9eda97f7.jpg';
const outDir = '/Users/mac/Downloads/windowsking/public/images';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function run() {
  const meta = await sharp(inputPath).metadata();
  console.log('Original image dimensions:', meta.width, meta.height);

  // We define regions precisely on 681 x 1024
  const crops = [
    // Hero background image
    {
      name: 'hero-original.jpg',
      left: 0,
      top: 67,
      width: 681,
      height: 220
    },
    // Products
    {
      name: 'product-casement.jpg',
      left: 33,
      top: 382,
      width: 118,
      height: 86
    },
    {
      name: 'product-sliding.jpg',
      left: 157,
      top: 382,
      width: 118,
      height: 86
    },
    {
      name: 'product-bifold.jpg',
      left: 280,
      top: 382,
      width: 118,
      height: 86
    },
    {
      name: 'product-french.jpg',
      left: 404,
      top: 382,
      width: 118,
      height: 86
    },
    {
      name: 'product-fixed.jpg',
      left: 528,
      top: 382,
      width: 118,
      height: 86
    },
    // Technical cutaway
    {
      name: 'profile-cutaway.png',
      left: 300,
      top: 520,
      width: 180,
      height: 160
    },
    // Manufacturing steps
    {
      name: 'process-step-1.jpg',
      left: 39,
      top: 724,
      width: 80,
      height: 40
    },
    {
      name: 'process-step-2.jpg',
      left: 145,
      top: 724,
      width: 80,
      height: 40
    },
    {
      name: 'process-step-3.jpg',
      left: 251,
      top: 724,
      width: 80,
      height: 40
    },
    {
      name: 'process-step-4.jpg',
      left: 357,
      top: 724,
      width: 80,
      height: 40
    },
    {
      name: 'process-step-5.jpg',
      left: 463,
      top: 724,
      width: 80,
      height: 40
    },
    {
      name: 'process-step-6.jpg',
      left: 569,
      top: 724,
      width: 80,
      height: 40
    },
    // Featured Projects
    {
      name: 'project-villa.jpg',
      left: 183,
      top: 810,
      width: 115,
      height: 60
    },
    {
      name: 'project-commercial.jpg',
      left: 304,
      top: 810,
      width: 115,
      height: 60
    },
    {
      name: 'project-residence.jpg',
      left: 426,
      top: 810,
      width: 115,
      height: 60
    },
    // Testimonial avatar
    {
      name: 'avatar-imran.jpg',
      left: 44,
      top: 968,
      width: 18,
      height: 18
    },
    // Logo mark
    {
      name: 'logo-mark.png',
      left: 35,
      top: 35,
      width: 20,
      height: 22
    },
    // Certifications
    {
      name: 'cert-iso.png',
      left: 288,
      top: 938,
      width: 44,
      height: 38
    },
    {
      name: 'cert-rohs.png',
      left: 350,
      top: 938,
      width: 44,
      height: 38
    },
    {
      name: 'cert-ce.png',
      left: 408,
      top: 938,
      width: 44,
      height: 38
    }
  ];

  for (const c of crops) {
    const dest = path.join(outDir, c.name);
    await sharp(inputPath)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .toFile(dest);
    console.log(`Saved ${c.name}`);
  }
}

run().catch(console.error);

