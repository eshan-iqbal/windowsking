# Windows King — Premium uPVC Doors & Windows

An exact, pixel-perfect Next.js web application replica of the **Windows King** uPVC Doors & Windows platform, featuring modern responsive design, interactive quote calculators, 3D technical cutaway visualizations, and full asset generation in `public/images/`.

---

## 🌟 Key Features

1. **Top Contact Bar**:
   - Location: Srinagar, Jammu & Kashmir
   - Direct phone: `+91 70060 12345`
   - Email: `info@windows-king.com`
   - Services: *Manufacturing | Supply | Installation*

2. **Header & Navigation**:
   - High-resolution Windows King glossy emblem branding
   - Dropdown menus for Products & Solutions
   - Instant Search Modal & "Get a Quote" call-to-action
   - Responsive mobile navigation drawer

3. **Hero Section**:
   - Modern architectural villa background with warm glowing interior
   - "PREMIUM uPVC SOLUTIONS" category badge
   - "Windows That *Define Your Space.*" hero typography
   - Feature badges: *Energy Efficient*, *Sound Insulation*, *Weather Resistant*, *Low Maintenance*, *Long Lasting*
   - "Watch Our Factory Tour" interactive video modal

4. **Floating Statistics Banner**:
   - 10+ Years of Experience
   - 500+ Projects Completed
   - In-House Manufacturing Facility
   - 20-Year Product & 10-Year Hardware Warranty

5. **Products Carousel & Specifications**:
   - Casement Windows
   - Sliding Windows
   - Bi-Fold Patio Doors
   - French Doors
   - Fixed Panoramic Windows
   - Interactive detail drawer with specs (depth, U-value, dB rating) and live toggle between original screenshot crop & 4K AI photorealistic renders.

6. **"Why Windows King" (Thermal & Security Engineering)**:
   - "Built for Comfort, Safety and *Longevity.*"
   - Interactive 3D technical profile cutaway with interactive callouts:
     - Double/Triple Glazing (better insulation & noise control)
     - Multi-chamber uPVC Profile (strong, durable & low-maintenance)
   - 5 interactive feature cards:
     - Thermal Insulation
     - Sound Insulation
     - Weather Resistance
     - Low Maintenance
     - Enhanced Security

7. **Manufacturing Process**:
   - 6 sequential fabrication steps:
     1. Profile Selection
     2. Precision Cutting
     3. Welding & Fabrication
     4. Hardware Installation
     5. Quality Inspection
     6. Packaging & Delivery
   - Modal deep-dive into factory engineering and quality standards

8. **Featured Projects**:
   - Dark forest green container (`#05261e`)
   - Projects:
     - Residential Villa (Srinagar)
     - Commercial Complex (Jammu)
     - Modern Residence (Anantnag)
   - Metrics: 500+ Installations, 50+ Commercial Projects, 98% Client Satisfaction

9. **Trust & Proof**:
   - Client Testimonial slider featuring Imran Dar (Homeowner, Srinagar)
   - Certification Badges: ISO 9001:2015, RoHS Compliant, CE Certified
   - "Need a Custom Solution?" card with direct consultation trigger

10. **Interactive Custom Quote Estimator**:
    - Select window/door system, glazing thickness, lamination finish, and dimensions
    - Real-time square footage and price estimation in INR
    - Quick contact submission with location targeting (Srinagar, Jammu, Anantnag, Baramulla, etc.)

---

## 🔍 SEO Setup

All SEO configuration lives in **`src/lib/seo.ts`** — update the domain, address,
phones or keywords there once and everything else follows.

What's included:

- **Per-page metadata** — unique titles, descriptions, canonical URLs and Open Graph/Twitter cards for every route (via segment layouts in `src/app/*/layout.tsx`)
- **`sitemap.xml`** (`src/app/sitemap.ts`) and **`robots.txt`** (`src/app/robots.ts`) generated dynamically
- **Structured data (JSON-LD)** — `LocalBusiness`/`Organization`, `WebSite`, `Service` and `BreadcrumbList` schemas
- **PWA manifest** (`src/app/manifest.ts`) with brand icons in `public/icons/`
- **Favicons** — `src/app/favicon.ico`, `icon.png`, `apple-icon.png` (Next.js file conventions)
- **Open Graph image** — `public/images/og-image.jpg` (1200×630, auto-generated)
- **Geo metadata** — geo region/placename/coordinates tags for local search
- **Custom 404** (`src/app/not-found.tsx`) with helpful navigation
- **Legal pages** — `/privacy-policy`, `/terms`, `/warranty` (linked from the footer)

Regenerate icon/OG assets after changing brand imagery:

```bash
node scripts/generate_seo_assets.js
```

> ⚠️ Replace `SITE_URL` in `src/lib/seo.ts` with your real production domain before deploying.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3002](http://localhost:3002) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Public Assets Stored in `public/images/`

- `logo.png`: High-resolution Windows King glossy crown emblem
- `hero.jpg`: Modern luxury villa hero background
- `hero-original.jpg`: Original screenshot hero crop
- `product-casement.jpg` & `casement-hires.jpg`: Casement Windows
- `product-sliding.jpg` & `sliding-hires.jpg`: Sliding Windows
- `product-bifold.jpg` & `bifold-hires.jpg`: Bi-Fold Patio Doors
- `product-french.jpg` & `french-hires.jpg`: French Doors
- `product-fixed.jpg` & `fixed-hires.jpg`: Fixed Windows
- `profile-cutaway.png` & `profile-hires.jpg`: 3D Technical cutaway profile
- `process-step-1.jpg` to `process-step-6.jpg`: 6 In-house manufacturing steps
- `project-villa.jpg` & `project-villa-hires.jpg`: Srinagar Villa Project
- `project-commercial.jpg`: Jammu Commercial Complex Project
- `project-residence.jpg`: Anantnag Residence Project
- `avatar-imran.jpg`: Testimonial client avatar
- `cert-iso.png`: ISO 9001:2015 badge
- `cert-rohs.png`: RoHS Compliant badge
- `cert-ce.png`: CE Certified badge

