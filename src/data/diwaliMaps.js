// Floor maps and walking directions for Jashn-e-Diwali 2026 (N13 / Boya
// Building, first floor), shown in the "Floor maps" pop-up on the rundown page.
// Images are cropped from the direction-map PDFs; the PDFs themselves are in
// public/files for download.

const base = '/images/diwali/maps/'

export const mapPdfs = [
  { label: 'All direction maps (PDF)', href: '/files/ntu-diwali-2026-direction-maps.pdf' },
]

export const floorMaps = [
  { key: 'overview', icon: '🏢', title: 'Venue overview', note: 'The whole first floor and how to read the maps', image: base + 'overview.webp', w: 1277, h: 1678 },
  { key: 'arrival', num: 1, icon: '🚪', title: 'Arrival: entrance, registration, stalls', note: 'Main Entrance 1 and Entrance 2', image: base + 'arrival.webp', w: 1272, h: 1698 },
  { key: 'venue-room', num: 2, icon: '🎭', title: 'Entering the venue room (Room 103)', note: 'Use Gate 1 and Gate 2', image: base + 'venue-room.webp', w: 1272, h: 1688 },
  { key: 'washrooms', num: 3, icon: '🚻', title: 'Washrooms', note: "Men's and women's", image: base + 'washrooms.webp', w: 1272, h: 1698 },
  { key: 'dinner', num: 4, icon: '🍛', title: 'Dinner boxes: non-veg and veg', note: 'Which gate to use for each', image: base + 'dinner.webp', w: 1272, h: 1698 },
  { key: 'trash-bins', num: 5, icon: '🗑️', title: 'After dinner: trash bins', note: 'Two bin areas', image: base + 'trash-bins.webp', w: 1272, h: 1698 },
  { key: 'dj-area', num: 6, icon: '🎧', title: 'After dinner: DJ area', note: 'On the terrace, through the registration entrance', image: base + 'dj-area.webp', w: 1272, h: 1603 },
  { key: 'water', num: 7, icon: '💧', title: 'Water dispenser', note: "Beside the teachers' lounge", image: base + 'water.webp', w: 1272, h: 1649 },
  { key: 'fire-exits', num: 8, icon: '🚨', title: 'Fire exits (emergency)', note: 'Ways out in an emergency', image: base + 'fire-exits.webp', w: 1273, h: 1320, alert: true },
]
