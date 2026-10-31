import { useId } from 'react'

// Deterministic pseudo-random so layouts are stable between renders.
function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

/* ---------- String of fairy lights across the top ---------- */
const BULB_COLORS = ['#ffd36b', '#f5a524', '#fff1b8', '#e8730c']
const SWOOPS = 3
const BULBS_PER_SWOOP = 9
const bulbs = Array.from({ length: SWOOPS * BULBS_PER_SWOOP }, (_, i) => {
  const swoop = Math.floor(i / BULBS_PER_SWOOP)
  const t = ((i % BULBS_PER_SWOOP) + 0.5) / BULBS_PER_SWOOP
  return {
    left: ((swoop + t) / SWOOPS) * 100,
    top: 8 + Math.sin(Math.PI * t) * 46,
    color: BULB_COLORS[i % BULB_COLORS.length],
    delay: (i % 7) * 0.35,
  }
})
const wirePath = Array.from({ length: SWOOPS }, (_, s) => {
  const x0 = (s / SWOOPS) * 1200
  const x1 = ((s + 1) / SWOOPS) * 1200
  return `M${x0} 4 Q${(x0 + x1) / 2} 104 ${x1} 4`
}).join(' ')

export function StringLights() {
  return (
    <div className="string-lights" aria-hidden="true">
      <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
        <path d={wirePath} fill="none" stroke="#7a4a2a" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      {bulbs.map((b, i) => (
        <span
          key={i}
          className="bulb"
          style={{ left: `${b.left}%`, top: `${b.top}px`, '--c': b.color, '--d': `${b.delay}s` }}
        />
      ))}
    </div>
  )
}

/* ---------- Hanging kandil lantern ---------- */
export function Lantern({ color = '#7a1a36', length = 40, className = '' }) {
  const id = useId()
  return (
    <div className={`lantern-hang ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 60 ${length + 112}`} width="60" height={length + 112}>
        <defs>
          <radialGradient id={`${id}g`} cx="50%" cy="55%" r="55%">
            <stop offset="0" stopColor="#fff2b0" />
            <stop offset="0.5" stopColor="#f5a524" />
            <stop offset="1" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="30" y1="0" x2="30" y2={length} stroke="#7a4a2a" strokeWidth="1.5" />
        <g transform={`translate(0 ${length})`}>
          <rect x="22" y="0" width="16" height="7" rx="2" fill="#c9962b" />
          <path d="M30 7 C4 14 2 56 30 70 C58 56 56 14 30 7Z" fill={color} />
          <path d="M30 14 C15 20 13 52 30 62 C47 52 45 20 30 14Z" fill={`url(#${id}g)`} className="lantern-glow" />
          <path d="M8 38 H52 M12 24 H48 M12 54 H48" stroke="#c9962b" strokeWidth="1.5" opacity=".8" />
          <path d="M30 7 V70" stroke="#c9962b" strokeWidth="1" opacity=".6" />
          <rect x="23" y="70" width="14" height="6" rx="2" fill="#c9962b" />
          <g stroke="#e8730c" strokeWidth="1.6" strokeLinecap="round">
            {[24, 27, 30, 33, 36].map((x) => <line key={x} x1={x} y1="76" x2={x + (x - 30) * 0.3} y2="108" />)}
          </g>
        </g>
      </svg>
    </div>
  )
}

/* ---------- Chinese / Taiwanese red lantern ---------- */
export function ChineseLantern({ length = 50, size = 64, className = '' }) {
  const id = useId()
  const h = length + 118
  return (
    <div className={`lantern-hang chinese-lantern ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 80 ${h}`} width={size} height={(size / 80) * h}>
        <defs>
          <radialGradient id={`${id}body`} cx="45%" cy="45%" r="60%">
            <stop offset="0" stopColor="#ff7a45" />
            <stop offset="0.45" stopColor="#e03a2b" />
            <stop offset="1" stopColor="#a3161c" />
          </radialGradient>
          <radialGradient id={`${id}glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#ffe29a" stopOpacity=".9" />
            <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="40" y1="0" x2="40" y2={length} stroke="#7a4a2a" strokeWidth="1.5" />
        <g transform={`translate(0 ${length})`}>
          <rect x="27" y="0" width="26" height="9" rx="2" fill="#d4a017" />
          <rect x="24" y="7" width="32" height="4" rx="1.5" fill="#b8860b" />
          <ellipse cx="40" cy="45" rx="36" ry="34" fill={`url(#${id}body)`} />
          <ellipse cx="40" cy="45" rx="22" ry="22" fill={`url(#${id}glow)`} className="lantern-glow" />
          {/* Curved ribs */}
          <g fill="none" stroke="#8f1218" strokeWidth="1.4" opacity=".55">
            <ellipse cx="40" cy="45" rx="12" ry="34" />
            <ellipse cx="40" cy="45" rx="25" ry="34" />
            <line x1="40" y1="11" x2="40" y2="79" />
          </g>
          <path d="M8 30 Q40 22 72 30 M8 60 Q40 68 72 60" stroke="#d4a017" strokeWidth="2" fill="none" opacity=".9" />
          <rect x="24" y="79" width="32" height="4" rx="1.5" fill="#b8860b" />
          <rect x="27" y="82" width="26" height="8" rx="2" fill="#d4a017" />
          <circle cx="40" cy="95" r="3.5" fill="#d4a017" />
          <g stroke="#c8102e" strokeWidth="2" strokeLinecap="round">
            {[33, 36.5, 40, 43.5, 47].map((x) => <line key={x} x1={x} y1="98" x2={x + (x - 40) * 0.25} y2="116" />)}
          </g>
          <rect x="33" y="97" width="14" height="4" rx="1.5" fill="#d4a017" />
        </g>
      </svg>
    </div>
  )
}

/* ---------- Marigold garland hanging down ---------- */
export function Garland({ flowers = 11, className = '' }) {
  const h = flowers * 22 + 40
  return (
    <div className={`garland ${className}`} aria-hidden="true">
      <svg viewBox={`0 0 30 ${h}`} width="30" height={h}>
        <line x1="15" y1="0" x2="15" y2={h - 30} stroke="#7a4a2a" strokeWidth="1" />
        {Array.from({ length: flowers }, (_, i) => (
          <g key={i} transform={`translate(15 ${14 + i * 22})`}>
            <circle r="11" fill={i % 2 ? '#e8730c' : '#f5a524'} />
            <circle r="7" fill={i % 2 ? '#f5a524' : '#ffc94d'} opacity=".8" />
            <circle r="2.5" fill="#b4520a" opacity=".6" />
          </g>
        ))}
        <path d={`M15 ${h - 32} q-12 14 -4 28 q6 -12 4 -28Z M15 ${h - 32} q12 14 4 28 q-6 -12 -4 -28Z`} fill="#3f7a3a" />
      </svg>
    </div>
  )
}

/* ---------- Diya (clay oil lamp) with flame ---------- */
export function Diya({ size = 110, className = '' }) {
  const id = useId()
  return (
    <div className={`diya ${className}`} aria-hidden="true" style={{ width: size }}>
      <svg viewBox="0 0 120 100" width={size}>
        <defs>
          <radialGradient id={`${id}glow`}>
            <stop offset="0" stopColor="#ffd36b" stopOpacity=".75" />
            <stop offset="1" stopColor="#ffd36b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}flame`} x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#e8730c" />
            <stop offset="0.55" stopColor="#ffb52e" />
            <stop offset="1" stopColor="#fff6c9" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="36" r="34" fill={`url(#${id}glow)`} className="diya-glow" />
        <path className="flame" d="M60 8 C52 24 50 34 60 44 C70 34 68 24 60 8Z" fill={`url(#${id}flame)`} />
        <path d="M60 22 C57 30 57 36 60 41 C63 36 63 30 60 22Z" fill="#fff8de" className="flame" />
        <path d="M8 52 C20 50 100 50 112 52 C108 80 86 92 60 92 C34 92 12 80 8 52Z" fill="#8a2a1a" />
        <path d="M8 52 C20 50 100 50 112 52 C100 58 20 58 8 52Z" fill="#b4441f" />
        <path d="M18 66 Q60 80 102 66" stroke="#f5a524" strokeWidth="2.5" fill="none" />
        {[30, 45, 60, 75, 90].map((x) => <circle key={x} cx={x} cy={74 + Math.abs(60 - x) * -0.12} r="2.6" fill="#ffc94d" />)}
      </svg>
    </div>
  )
}

/* ---------- Rangoli mandala ---------- */
function petalRing(n, r, len, w, color, offset = 0) {
  return Array.from({ length: n }, (_, i) => (
    <ellipse
      key={i}
      cx="0"
      cy={-(r + len / 2)}
      rx={w}
      ry={len / 2}
      fill={color}
      transform={`rotate(${(360 / n) * i + offset})`}
    />
  ))
}

export function Rangoli({ size = 260, className = '' }) {
  return (
    <div className={`rangoli-wrap ${className}`} aria-hidden="true" style={{ width: size, height: size }}>
      <svg viewBox="-130 -130 260 260" width={size} height={size} className="rangoli">
        {petalRing(12, 62, 56, 20, '#6e1631')}
        {petalRing(12, 62, 40, 12, '#e8730c', 0)}
        {petalRing(12, 40, 44, 16, '#f5a524', 15)}
        {petalRing(16, 22, 26, 7, '#a52a4a', 0)}
        <circle r="26" fill="#fdf6e8" />
        <circle r="20" fill="#c9962b" />
        <circle r="12" fill="#6e1631" />
        <circle r="5" fill="#ffd36b" />
        {Array.from({ length: 24 }, (_, i) => (
          <circle key={i} cx="0" cy="-122" r="3.5" fill="#c9962b" transform={`rotate(${i * 15})`} />
        ))}
      </svg>
    </div>
  )
}

/* ---------- Sparkle stars ---------- */
const rand = seeded(7)
const sparkles = Array.from({ length: 16 }, () => ({
  left: 4 + rand() * 92,
  top: 8 + rand() * 70,
  size: 8 + rand() * 12,
  delay: rand() * 3,
  color: rand() > 0.5 ? '#c9962b' : '#a52a4a',
}))

export function Sparkles() {
  return (
    <div className="sparkles" aria-hidden="true">
      {sparkles.map((s, i) => (
        <svg
          key={i}
          viewBox="-10 -10 20 20"
          className="sparkle"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, '--d': `${s.delay}s` }}
        >
          <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2Z" fill={s.color} />
        </svg>
      ))}
    </div>
  )
}

/* ---------- Pingxi-style sky lanterns (Taiwan) ---------- */
const rand2 = seeded(21)
const skyLanterns = Array.from({ length: 9 }, (_, i) => ({
  left: 6 + ((i * 11 + rand2() * 8) % 88),
  top: 10 + rand2() * 50,
  size: 22 + rand2() * 20,
  dur: 16 + rand2() * 14,
  delay: -rand2() * 30,
  drift: (rand2() - 0.5) * 80,
}))

export function SkyLanterns() {
  return (
    <div className="sky-lanterns" aria-hidden="true">
      {skyLanterns.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 40 54"
          className="sky-lantern"
          style={{
            left: `${l.left}%`,
            top: `${l.top}%`,
            width: l.size,
            '--dur': `${l.dur}s`,
            '--delay': `${l.delay}s`,
            '--drift': `${l.drift}px`,
          }}
        >
          <path d="M5 4 Q20 -1 35 4 L30 46 Q20 50 10 46Z" fill="#f08a24" />
          <path d="M9 8 Q20 5 31 8 L27 42 Q20 45 13 42Z" fill="#ffd36b" opacity=".85" />
          <ellipse cx="20" cy="47" rx="7" ry="2.5" fill="#fff1b8" />
          <path d="M8 18 H32 M10 32 H30" stroke="#c0392b" strokeWidth="1.2" opacity=".5" />
        </svg>
      ))}
    </div>
  )
}

/* ---------- Skyline line art: Ram Mandir, NTU Main Library, Taipei 101 ---------- */

// Ayodhya Ram Mandir: Nagara-style temple on a raised plinth, with a row of
// mandapa spires rising to the tall main shikhara and its flag.
function shikhara(cx, base, apex, half) {
  return (
    `M${cx - half} ${base} C${cx - half + 2} ${base - (base - apex) * 0.45} ${cx - half * 0.45} ${apex + 18} ${cx} ${apex} ` +
    `C${cx + half * 0.45} ${apex + 18} ${cx + half - 2} ${base - (base - apex) * 0.45} ${cx + half} ${base}`
  )
}
function bands(cx, base, apex, half, n) {
  // Horizontal courses across a shikhara, narrowing towards the top.
  return Array.from({ length: n }, (_, i) => {
    const t = (i + 1) / (n + 1)
    const y = base - (base - apex) * t
    const w = half * (1 - t * 0.75)
    return `M${cx - w} ${y} H${cx + w}`
  }).join(' ')
}
function finial(cx, apex, flag = false) {
  return (
    `M${cx - 7} ${apex} a7 3 0 1 0 14 0 a7 3 0 1 0 -14 0 ` +
    `M${cx} ${apex - 3} v-8 m-3 0 h6` +
    (flag ? ` M${cx} ${apex - 11} v-26 l18 6 l-18 6` : '')
  )
}

function RamMandir() {
  const spires = [
    { cx: 148, base: 206, apex: 168, half: 18 },
    { cx: 196, base: 200, apex: 148, half: 24 },
    { cx: 248, base: 194, apex: 126, half: 28 },
    { cx: 318, base: 190, apex: 70, half: 40 },
  ]
  return (
    <g>
      {/* Plinth with steps */}
      <path d="M108 250 V232 H392 V250 M118 232 V222 H382 V232 M206 250 h46 v-6 h-46z M214 244 v-6 h30 v6" />
      {/* Pillared halls under each spire */}
      <path d="M126 222 V206 H170 V222 M172 222 V200 H222 V222 M218 222 V194 H278 V222 M276 222 V190 H362 V222" />
      {[134, 146, 158, 180, 192, 204, 214, 228, 240, 252, 264, 286, 300, 314, 328, 342, 354].map((x) => (
        <path key={x} d={`M${x} 222 v-${x < 172 ? 12 : x < 218 ? 18 : x < 276 ? 24 : 28}`} />
      ))}
      {/* Spires */}
      {spires.map((sp) => (
        <path key={sp.cx} d={shikhara(sp.cx, sp.base, sp.apex, sp.half)} />
      ))}
      {spires.map((sp, i) => (
        <path key={`b${sp.cx}`} d={bands(sp.cx, sp.base, sp.apex, sp.half, i === 3 ? 6 : 3)} opacity=".7" />
      ))}
      {spires.map((sp, i) => (
        <path key={`f${sp.cx}`} d={finial(sp.cx, sp.apex, i === 3)} />
      ))}
    </g>
  )
}

// NTU Main Library, after the library's own line-art emblem: the tall bell tower
// with its domed cupola on the left, a long ground-floor arcade, a ribbon-window
// middle block, arched pavilions, and the central gable with its great arched
// window. Drawn in the emblem's own coordinates (ground at y=195), then scaled
// into the skyline.
const LIB_SCALE = 0.68
const arch = (x, base, w, h) => `M${x} ${base} V${base - h + w / 2} a${w / 2} ${w / 2} 0 0 1 ${w} 0 V${base}`
const box = (x, y, w, h) => `M${x} ${y} h${w} v${h} h-${w}z`

function libraryPaths() {
  const d = []
  // Bell tower
  d.push('M528 195 V160 H566 V195', arch(540, 195, 16, 30))
  d.push('M526 160 H568 M528 156 H566 M532 156 V88 M562 156 V88', arch(543, 148, 8, 46))
  d.push('M526 88 H568 M528 84 H566 M533 84 V50 M561 84 V50', arch(537, 80, 8, 26), arch(549, 80, 8, 26))
  d.push('M527 50 H567 M529 46 H565 M531 50 v-4 M563 50 v-4')
  d.push('M537 46 V24 M557 46 V24', arch(542, 42, 10, 15), 'M535 24 H559')
  d.push('M538 24 Q538 12 547 10 Q556 12 556 24 M547 10 V2')
  // Low block left of the tower
  d.push('M528 195 H492 V112 H528 M492 112 h6 v-6 h24 v6', arch(497, 158, 9, 34), arch(513, 158, 9, 34))
  d.push(arch(496, 195, 11, 18), arch(511, 195, 11, 18), 'M490 176 H528')
  // Ground arcade with a band above it
  d.push('M566 175 H758 M812 175 H936')
  for (let x = 568; x < 930; x += 14) {
    if (x > 752 && x < 814) continue
    d.push(arch(x, 195, 11, 17))
  }
  // Ribbon-window middle block
  d.push('M566 122 H650 V175 M566 122 V175 M566 118 H650')
  d.push(box(572, 128, 72, 16), box(572, 152, 72, 16))
  for (let x = 581; x < 644; x += 9) d.push(`M${x} 128 v16 M${x} 152 v16`)
  // Grid block
  d.push('M650 175 V110 H700 V175 M648 110 H702')
  for (const y of [118, 134, 150]) for (const x of [656, 670, 684]) d.push(box(x, y, 9, 10))
  // Pavilions either side of the gable
  for (const x0 of [700, 830]) {
    d.push(`M${x0} 175 V94 H${x0 + 40} V175 M${x0 - 2} 94 H${x0 + 42} M${x0 - 2} 98 H${x0 + 42}`)
    d.push(box(x0 + 13, 104, 14, 12), `M${x0 + 20} 104 v12 M${x0 + 13} 110 h14`)
    d.push(arch(x0 + 11, 156, 18, 36), `M${x0 + 20} 156 V128 M${x0 + 9} 158 H${x0 + 31}`)
  }
  // Central gable, oculus and great arched window
  d.push('M740 175 V104 M830 175 V104 M736 104 L785 80 L834 104 Z M744 104 H826')
  d.push(arch(758, 195, 54, 82), arch(766, 166, 38, 52))
  d.push('M775 166 V124 M785 166 V117 M795 166 V124 M766 142 H804 M766 154 H804')
  d.push(arch(763, 195, 12, 20), arch(779, 195, 12, 23), arch(795, 195, 12, 20))
  // Right wing
  d.push('M870 175 V112 H936 V195 M868 112 H938')
  for (const y of [120, 140, 156]) for (const x of [878, 894, 910, 924]) d.push(box(x, y, 8, 10))
  return d.join(' ')
}
const LIBRARY_D = libraryPaths()

function NtuLibrary() {
  // Place the emblem's left edge at x=452 and its ground on the skyline ground (y=250).
  const tx = 452 - 490 * LIB_SCALE
  const ty = 250 - 195 * LIB_SCALE
  return (
    <g transform={`translate(${tx} ${ty}) scale(${LIB_SCALE})`} strokeWidth={1.6 / LIB_SCALE}>
      <path d={LIBRARY_D} />
      <circle cx="785" cy="96" r="4" />
    </g>
  )
}

// Taipei 101, after the flat reference illustration: wide plinth, tapered base
// with two coin ornaments and window slats, eight flared sections each capped by
// a ledge, a stepped crown and a tall spire. Drawn in the reference's own
// coordinates (centre x=165, ground y=637), then scaled into the skyline.
const T101_SCALE = 0.4

function taipei101() {
  const line = []
  const shade = []
  line.push('M87 628 h160 v9 h-160z')
  line.push('M100 628 L130 514 H200 L232 628 Z M165 514 V628')
  shade.push('M165 514 H200 L232 628 H165 Z')
  for (let y = 536; y <= 596; y += 6) {
    const k = (y - 536) * 0.16
    line.push(`M${(134 - k).toFixed(1)} ${y} H156 M174 ${y} H${(197 + k).toFixed(1)}`)
  }
  for (let i = 0; i < 8; i++) {
    const yt = 178 + i * 42
    const yb = yt + 42
    line.push(`M122 ${yt} h88 v4 h-88z`)
    line.push(`M133 ${yb} L126 ${yt + 4} H206 L199 ${yb} M165 ${yt + 4} V${yb}`)
    shade.push(`M165 ${yt + 4} H206 L199 ${yb} H165 Z`)
    line.push(`M131 ${yt + 18} L158 ${yt + 9}`)
  }
  line.push('M140 178 L152 150 H178 L190 178 M165 150 V178')
  shade.push('M165 150 H178 L190 178 H165 Z')
  line.push('M154 150 V128 H176 V150 M148 128 h34 v-6 h-34z M156 122 V102 H174 V122 M160 102 V86 H170 V102')
  line.push('M165 86 V30 M161 70 h8 M162 56 h6')
  return { line: line.join(' '), shade: shade.join(' ') }
}
const T101 = taipei101()

const T101_CX = 950
const T101_TRANSFORM = `translate(${T101_CX - 165 * T101_SCALE} ${250 - 637 * T101_SCALE}) scale(${T101_SCALE})`

function Taipei101() {
  return (
    <g transform={T101_TRANSFORM} strokeWidth={1.6 / T101_SCALE}>
      <path d={T101.shade} fill="currentColor" stroke="none" opacity=".16" />
      <path d={T101.line} />
      <circle cx="148" cy="520" r="7" />
      <circle cx="184" cy="520" r="7" />
    </g>
  )
}

// Taipei 101 light show, like its New Year countdown: the eight sections light
// up bottom to top, spell HAPPY then DIWALI one letter per section (top down),
// and fireworks burst from the sides of each section, climbing the tower.
const SECTION_TOP = (i) => 178 + i * 42 // i = 0 is the top section
const panelPath = (i) => {
  const yt = SECTION_TOP(i)
  return `M133 ${yt + 42} L126 ${yt + 4} H206 L199 ${yt + 42} Z`
}
const WORDS = [
  { cls: 'led-word--a', text: 'HAPPY', start: 2 },
  { cls: 'led-word--b', text: 'DIWALI', start: 1 },
]
function burstPath(cx, cy, dir) {
  // Short rays fanning outward from the tower edge.
  return Array.from({ length: 9 }, (_, k) => {
    const a = (dir === 1 ? -80 : 100) + k * 20
    const r = (a * Math.PI) / 180
    return `M${cx + Math.cos(r) * 6} ${cy + Math.sin(r) * 6} L${(cx + Math.cos(r) * 38).toFixed(1)} ${(cy + Math.sin(r) * 38).toFixed(1)}`
  }).join(' ')
}

function Taipei101LightShow() {
  return (
    <g className="t101-show" transform={T101_TRANSFORM}>
      {Array.from({ length: 8 }, (_, i) => (
        <path key={i} className="led-panel" d={panelPath(i)} style={{ '--i': 7 - i }} />
      ))}
      {WORDS.map((w) => (
        <g key={w.cls} className={`led-word ${w.cls}`}>
          {w.text.split('').map((ch, k) => (
            <text key={k} x="166" y={SECTION_TOP(w.start + k) + 36} textAnchor="middle" className="led-letter">
              {ch}
            </text>
          ))}
        </g>
      ))}
      {Array.from({ length: 8 }, (_, i) =>
        [-1, 1].map((dir) => (
          <path
            key={`${i}${dir}`}
            className="t101-burst"
            d={burstPath(dir === 1 ? 212 : 120, SECTION_TOP(i) + 22, dir)}
            style={{ '--i': 7 - i, transformOrigin: `${dir === 1 ? 212 : 120}px ${SECTION_TOP(i) + 22}px` }}
          />
        )),
      )}
    </g>
  )
}

// Taipei towers behind and around 101, drawn lighter so 101 stays the hero.
function floors(x0, x1, top, step = 11) {
  const out = []
  for (let y = top + step; y < 246; y += step) out.push(`M${x0 + 3} ${y} H${x1 - 3}`)
  return out.join(' ')
}
const CITY = [
  'M812 250 V196 H842 V250', floors(812, 842, 196, 12),
  'M846 250 V150 H874 V250 M860 150 V136 M856 136 h8', floors(846, 874, 150),
  'M878 250 V186 h6 v-8 h22 v8 h6 V250', floors(878, 912, 186),
  'M992 250 V140 L1028 126 V250 M1002 136 V246 M1010 133 V246 M1018 130 V246',
  'M1034 250 V158 L1047 144 L1060 158 V250', floors(1034, 1060, 158),
  'M1066 250 V190 H1102 V250', floors(1066, 1102, 190, 12),
  'M1106 250 V214 H1130 V250',
].join(' ')

// viewBox/fit let phones frame a narrower slice (Taipei 101 and its neighbours) at a readable size.
export function TaipeiSkyline({ className = '', viewBox = '0 -70 1200 330', fit = 'xMidYMax slice' }) {
  const palm = (x, h) =>
    `M${x} 250 Q${x - 4} ${250 - h / 2} ${x} ${250 - h} ` +
    `M${x} ${250 - h} q-22 -4 -34 12 M${x} ${250 - h} q-14 -16 -30 -14 M${x} ${250 - h} q4 -20 -6 -30 ` +
    `M${x} ${250 - h} q14 -16 30 -14 M${x} ${250 - h} q22 -4 34 12`
  // The viewBox reaches above y=0 so fireworks from the top of Taipei 101 have room.
  return (
    <svg className={`skyline ${className}`} viewBox={viewBox} preserveAspectRatio={fit} aria-hidden="true">
      <g className="skyline-art" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 210 Q120 150 240 190 T480 180 T720 170 T960 185 T1200 165" opacity=".15" />
        <RamMandir />
        <NtuLibrary />
        <path d={CITY} opacity=".5" strokeWidth="1.3" />
        <Taipei101 />
        {[40, 418, 790, 1160].map((x, i) => <path key={x} d={palm(x, 84 + (i % 2) * 24)} />)}
        <path d="M0 250 H1200" />
      </g>
      <Taipei101LightShow />
    </svg>
  )
}

/* ---------- Ornamental divider used around the association name ---------- */
export function Ornament({ children }) {
  return (
    <p className="ornament">
      <span className="ornament__line" aria-hidden="true" />
      <span className="ornament__text">{children}</span>
      <span className="ornament__line" aria-hidden="true" />
    </p>
  )
}

/* ---------- Campus line art for the main site: NTU Main Library and Taipei 101 ---------- */
const campusPalm = (x, h) =>
  `M${x} 250 Q${x - 4} ${250 - h / 2} ${x} ${250 - h} ` +
  `M${x} ${250 - h} q-22 -4 -34 12 M${x} ${250 - h} q-14 -16 -30 -14 M${x} ${250 - h} q4 -20 -6 -30 ` +
  `M${x} ${250 - h} q14 -16 30 -14 M${x} ${250 - h} q22 -4 34 12`

// The drawing itself, reusable inside other SVGs (viewBox space 420..1030 x 0..256).
export function CampusArtGroup() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d={CITY} opacity=".35" strokeWidth="1.2" />
      <NtuLibrary />
      <Taipei101 />
      {[436, 790].map((x, i) => <path key={x} d={campusPalm(x, 92 + i * 14)} opacity=".7" />)}
      <path d="M420 250 H1030" />
    </g>
  )
}

export function CampusLineArt({ className = '' }) {
  return (
    <svg className={className} viewBox="420 0 610 256" role="img" aria-label="Line drawing of the NTU Main Library and Taipei 101">
      <CampusArtGroup />
    </svg>
  )
}

// Taipei 101 path data for reuse at other scales.
export const TAIPEI_101 = T101
