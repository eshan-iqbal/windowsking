const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outDir = '/Users/mac/Downloads/windowsking/public/images';

async function generateAssets() {
  console.log('Generating crisp Full HD assets...');

  // 1. High-resolution avatar for Imran Dar (256x256)
  const avatarSvg = `
    <svg width="256" height="256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatarGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0b4838" />
          <stop offset="100%" stop-color="#06261d" />
        </linearGradient>
      </defs>
      <circle cx="128" cy="128" r="128" fill="url(#avatarGrad)" />
      <circle cx="128" cy="95" r="48" fill="#e2e8f0" />
      <path d="M128,145 C75,145 40,185 40,240 L216,240 C216,185 181,145 128,145 Z" fill="#cbd5e1" />
      <circle cx="128" cy="128" r="122" fill="none" stroke="#34d399" stroke-width="6" stroke-opacity="0.4" />
      <text x="128" y="105" font-family="sans-serif" font-size="36" font-weight="bold" fill="#0f172a" text-anchor="middle">ID</text>
    </svg>
  `;
  await sharp(Buffer.from(avatarSvg)).png().toFile(path.join(outDir, 'avatar-imran.jpg'));
  console.log('Generated HD avatar-imran.jpg');

  // 2. High-res Commercial Complex Jammu (1200x800)
  const commSvg = `
    <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0c4a6e" />
          <stop offset="50%" stop-color="#38bdf8" />
          <stop offset="100%" stop-color="#bae6fd" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0284c7" stop-opacity="0.85" />
          <stop offset="50%" stop-color="#0369a1" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#075985" stop-opacity="0.95" />
        </linearGradient>
        <linearGradient id="frameGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#skyGrad)" />
      <ellipse cx="300" cy="150" rx="200" ry="40" fill="#ffffff" fill-opacity="0.3" />
      <ellipse cx="900" cy="120" rx="240" ry="50" fill="#ffffff" fill-opacity="0.3" />
      <path d="M0,520 Q300,450 600,500 T1200,480 L1200,800 L0,800 Z" fill="#64748b" fill-opacity="0.4" />
      <rect x="250" y="220" width="700" height="580" fill="url(#frameGrad)" rx="12" />
      ${Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 7 }).map((_, c) => {
          const x = 275 + c * 94;
          const y = 245 + r * 85;
          return `<rect x="${x}" y="${y}" width="82" height="73" fill="url(#glassGrad)" rx="4" stroke="#0f172a" stroke-width="4" />
                  <line x1="${x+5}" y1="${y+10}" x2="${x+75}" y2="${y+65}" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.4" />`;
        }).join('')
      ).join('')}
      <rect x="0" y="730" width="1200" height="70" fill="#334155" />
      <rect x="0" y="760" width="1200" height="40" fill="#1e293b" />
      <rect x="520" y="680" width="160" height="50" fill="#047857" rx="6" />
      <text x="600" y="712" font-family="sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">WINDOWS KING PLAZA</text>
    </svg>
  `;
  await sharp(Buffer.from(commSvg)).jpeg({ quality: 95 }).toFile(path.join(outDir, 'project-commercial-hires.jpg'));
  await sharp(Buffer.from(commSvg)).jpeg({ quality: 95 }).toFile(path.join(outDir, 'project-commercial.jpg'));
  console.log('Generated HD project-commercial-hires.jpg');

  // 3. High-res Modern Residence Anantnag (1200x800)
  const resSvg = `
    <svg width="1200" height="800" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="duskSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1b4b" />
          <stop offset="40%" stop-color="#4338ca" />
          <stop offset="80%" stop-color="#f43f5e" />
          <stop offset="100%" stop-color="#fb923c" />
        </linearGradient>
        <linearGradient id="warmInterior" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#duskSky)" />
      <polygon points="0,550 250,420 500,530 850,380 1200,510 1200,800 0,800" fill="#0f172a" fill-opacity="0.8" />
      <rect x="220" y="320" width="760" height="420" fill="#1e293b" rx="8" />
      <rect x="200" y="300" width="460" height="200" fill="#0f172a" rx="6" />
      <rect x="230" y="330" width="400" height="140" fill="url(#warmInterior)" fill-opacity="0.85" rx="4" />
      <line x1="330" y1="330" x2="330" y2="470" stroke="#0f172a" stroke-width="8" />
      <line x1="430" y1="330" x2="430" y2="470" stroke="#0f172a" stroke-width="8" />
      <line x1="530" y1="330" x2="530" y2="470" stroke="#0f172a" stroke-width="8" />
      <rect x="210" y="460" width="440" height="40" fill="#38bdf8" fill-opacity="0.3" stroke="#e2e8f0" stroke-width="2" />
      <rect x="260" y="520" width="680" height="200" fill="url(#warmInterior)" fill-opacity="0.9" rx="4" />
      ${[390, 520, 650, 780].map(x => `<line x1="${x}" y1="520" x2="${x}" y2="720" stroke="#090d16" stroke-width="10" />`).join('')}
      <rect x="0" y="720" width="1200" height="80" fill="#064e3b" />
      <rect x="200" y="720" width="800" height="40" fill="#334155" />
    </svg>
  `;
  await sharp(Buffer.from(resSvg)).jpeg({ quality: 95 }).toFile(path.join(outDir, 'project-residence-hires.jpg'));
  await sharp(Buffer.from(resSvg)).jpeg({ quality: 95 }).toFile(path.join(outDir, 'project-residence.jpg'));
  console.log('Generated HD project-residence-hires.jpg');

  // 4. Manufacturing steps HD (600x400 each)
  const stepsData = [
    { name: 'process-step-1.jpg', title: 'Profile Selection', color: '#047857', icon: 'EXTRUSION' },
    { name: 'process-step-2.jpg', title: 'Precision Cutting', color: '#0284c7', icon: 'CNC MITRE SAW' },
    { name: 'process-step-3.jpg', title: 'Welding &amp; Fabrication', color: '#b45309', icon: '4-POINT WELD' },
    { name: 'process-step-4.jpg', title: 'Hardware Installation', color: '#4f46e5', icon: 'GERMAN LOCKS' },
    { name: 'process-step-5.jpg', title: 'Quality Inspection', color: '#059669', icon: 'PRESSURE SEAL QC' },
    { name: 'process-step-6.jpg', title: 'Packaging &amp; Delivery', color: '#0f766e', icon: 'WHITE GLOVE TRANSIT' },
  ];

  for (let i = 0; i < stepsData.length; i++) {
    const s = stepsData[i];
    const stepSvg = `
      <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="stepGrad${i}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0f172a" />
            <stop offset="100%" stop-color="${s.color}" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#stepGrad${i})" />
        <rect x="20" y="20" width="560" height="360" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.2" rx="16" />
        <circle cx="300" cy="160" r="70" fill="#ffffff" fill-opacity="0.08" stroke="#34d399" stroke-width="3" />
        <text x="300" y="175" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff" text-anchor="middle">0${i+1}</text>
        <text x="300" y="270" font-family="sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">${s.title}</text>
        <text x="300" y="305" font-family="sans-serif" font-size="14" font-weight="600" fill="#34d399" text-anchor="middle" letter-spacing="2">${s.icon}</text>
      </svg>
    `;
    await sharp(Buffer.from(stepSvg)).jpeg({ quality: 95 }).toFile(path.join(outDir, s.name));
    console.log(`Generated HD ${s.name}`);
  }
}

generateAssets().catch(console.error);
