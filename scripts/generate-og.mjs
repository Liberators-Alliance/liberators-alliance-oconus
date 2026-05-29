/**
 * Generates a 1200×630 Open Graph image for Liberators Alliance.
 * Uses sharp to rasterize an SVG — no headless browser required.
 * Run via: node scripts/generate-og.mjs
 * Wired into package.json prebuild so it runs before every build.
 */

import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.join(__dirname, "..", "public", "og-image.png");

mkdirSync(path.join(__dirname, "..", "public"), { recursive: true });

const W = 1200;
const H = 630;

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="100%" stop-color="#0e0e0e"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#F6DB06"/>
      <stop offset="100%" stop-color="#c9b105"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bgGrad)"/>

  <!-- Subtle grid lines -->
  <line x1="0" y1="210" x2="${W}" y2="210" stroke="#F6DB06" stroke-width="0.5" opacity="0.06"/>
  <line x1="0" y1="420" x2="${W}" y2="420" stroke="#F6DB06" stroke-width="0.5" opacity="0.06"/>
  <line x1="400" y1="0" x2="400" y2="${H}" stroke="#F6DB06" stroke-width="0.5" opacity="0.06"/>
  <line x1="800" y1="0" x2="800" y2="${H}" stroke="#F6DB06" stroke-width="0.5" opacity="0.06"/>

  <!-- Left yellow accent bar -->
  <rect x="0" y="0" width="6" height="${H}" fill="url(#accentGrad)"/>

  <!-- Top-right corner accent -->
  <rect x="${W - 6}" y="0" width="6" height="${H}" fill="#F6DB06" opacity="0.15"/>
  <rect x="0" y="${H - 3}" width="${W}" height="3" fill="#F6DB06" opacity="0.12"/>

  <!-- Org name — two lines -->
  <text
    x="80" y="210"
    font-family="Arial Black, Impact, 'Helvetica Neue', sans-serif"
    font-size="108"
    font-weight="900"
    fill="#FFFFFF"
    letter-spacing="6"
  >LIBERATORS</text>

  <text
    x="80" y="330"
    font-family="Arial Black, Impact, 'Helvetica Neue', sans-serif"
    font-size="108"
    font-weight="900"
    fill="#F6DB06"
    letter-spacing="6"
  >ALLIANCE</text>

  <!-- Yellow rule -->
  <rect x="80" y="358" width="140" height="4" fill="#F6DB06"/>

  <!-- Tagline -->
  <text
    x="80" y="418"
    font-family="Arial, Helvetica, sans-serif"
    font-size="30"
    font-weight="300"
    fill="#FFFFFF"
    opacity="0.70"
    letter-spacing="1"
  >Building Alliances to Free the Oppressed</text>

  <!-- Sub descriptor -->
  <text
    x="80" y="468"
    font-family="Arial, Helvetica, sans-serif"
    font-size="20"
    font-weight="300"
    fill="#FFFFFF"
    opacity="0.38"
    letter-spacing="2"
  >ANTI-TRAFFICKING  ·  HUMANITARIAN RELIEF  ·  INTERNATIONAL OPERATIONS</text>

  <!-- Domain -->
  <text
    x="80" y="590"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18"
    font-weight="400"
    fill="#F6DB06"
    opacity="0.55"
    letter-spacing="1"
  >oconus.liberators-alliance.org</text>
</svg>
`;

try {
  await sharp(Buffer.from(svg)).png({ quality: 100 }).toFile(OUTPUT);
  console.log(`✓ OG image generated → ${OUTPUT}`);
} catch (err) {
  console.error("Failed to generate OG image:", err.message);
  process.exit(1);
}
