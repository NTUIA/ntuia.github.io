// "Stalls at the festival" section on the Diwali page: the Mehndi stall, styled after its poster.
// Photos are cropped to show only the henna designs, never anyone's face.
const DESIGNS = [
  { src: '/images/diwali/mehndi-1.webp', w: 480, h: 641, label: 'Sun and moon design' },
  { src: '/images/diwali/mehndi-2.webp', w: 720, h: 576, label: 'Custom portrait art' },
  { src: '/images/diwali/mehndi-3.webp', w: 520, h: 756, label: 'Modern line work' },
  { src: '/images/diwali/mehndi-4.webp', w: 360, h: 385, label: 'Floral bracelet' },
]

export default function DiwaliStalls() {
  return (
    <>
    <section className="mstall" id="stalls" aria-labelledby="mstall-title">
      <img className="mstall__mandala" src="/images/diwali/mehndi-mandala.webp" alt="" aria-hidden="true" width="600" height="600" loading="lazy" />
      <img className="mstall__leaf mstall__leaf--l" src="/images/diwali/mehndi-leaf-l.webp" alt="" aria-hidden="true" loading="lazy" />
      <img className="mstall__leaf mstall__leaf--r" src="/images/diwali/mehndi-leaf-r.webp" alt="" aria-hidden="true" loading="lazy" />

      <div className="container mstall__inner">
        <header className="mstall__head">
          <span className="mstall__pill">Stalls at the festival</span>
          <h2 id="mstall-title">Mehndi</h2>
          <p className="mstall__sub">
            <svg viewBox="0 0 120 14" aria-hidden="true"><path d="M2 7 C 40 2, 80 12, 118 7" /><path d="M8 7 l-5 -4 M8 7 l-5 4" /></svg>
            Beautiful designs
            <svg viewBox="0 0 120 14" aria-hidden="true"><path d="M2 7 C 40 2, 80 12, 118 7" /><path d="M112 7 l5 -4 M112 7 l5 4" /></svg>
          </p>
          <p className="mstall__lede">Stop by the Mehndi stall for a henna design of your own: classic florals, modern line work or a custom piece drawn while you wait.</p>
        </header>

        <div className="mstall__sparks" aria-hidden="true">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => <span key={n} className={`mstall__spark mstall__spark--${n}`}>✦</span>)}
        </div>
        <ul className="mstall__grid">
          {DESIGNS.map((d, i) => (
            <li key={d.src} className={`mstall__card mstall__card--${i + 1}`} style={{ '--d': i }}>
              <span className="mstall__frame">
                <img src={d.src} alt={`Henna design: ${d.label.toLowerCase()}`} width={d.w} height={d.h} loading="lazy" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <TarotStall />
    </>
  )
}

const READINGS = [
  { icon: '☾', title: 'Tarot reading', text: 'Draw from the deck and see what the cards reveal.' },
  { icon: '✦', title: 'Ganesha & Kali oracle', text: 'Oracle card readings guided by Ganesha and Kali.' },
  { icon: '✧', title: 'Angelic oracle', text: 'Gentle messages from the angelic oracle deck.' },
]

const FAN = [-34, -17, 0, 17, 34]
const RAYS = Array.from({ length: 28 }, (_, i) => i * (360 / 28))
const sparkle = (x, y, r) => `M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r}Z`

// Card back drawn in SVG (after the poster's sun-and-moon cards) so each card can move on its own.
function TarotBack() {
  return (
    <svg className="tcard__back" viewBox="0 0 120 180">
      <rect x="2" y="2" width="116" height="176" rx="11" className="tcard__edge" />
      <rect x="8" y="8" width="104" height="164" rx="7" className="tcard__dash" />
      {[[14, 14, 1, 1], [106, 14, -1, 1], [14, 166, 1, -1], [106, 166, -1, -1]].map(([x, y, sx, sy]) => (
        <path key={`${x}${y}`} className="tcard__ink" d={`M${x} ${y + sy * 14} Q${x} ${y} ${x + sx * 14} ${y} Q${x + sx * 4} ${y + sy * 4} ${x} ${y + sy * 14}Z`} />
      ))}
      <g transform="translate(60 90)">
        {RAYS.map((r, i) => <line key={r} className="tcard__ray" x1="0" y1={-21} x2="0" y2={i % 2 ? -32 : -38} transform={`rotate(${r})`} />)}
        <circle r="17" className="tcard__line" />
        <circle r="13" className="tcard__line" />
        <path className="tcard__ink" d="M3 -9 A9.5 9.5 0 1 0 3 9 A7.5 7.5 0 1 1 3 -9Z" />
        <path className="tcard__ink" d={sparkle(6, -2, 3)} />
      </g>
      {[[30, 34, 4], [88, 30, 3], [96, 46, 2.5], [26, 146, 3], [92, 148, 4], [60, 156, 3], [60, 26, 2.5]].map(([x, y, r]) => (
        <path key={`${x}-${y}`} className="tcard__ink" d={sparkle(x, y, r)} />
      ))}
    </svg>
  )
}

// Face of the middle card, shown when it flips over.
function TarotFace() {
  return (
    <svg className="tcard__face" viewBox="0 0 120 180">
      <rect x="2" y="2" width="116" height="176" rx="11" className="tcard__faceedge" />
      <rect x="8" y="8" width="104" height="164" rx="7" className="tcard__facedash" />
      <g transform="translate(60 78)">
        {RAYS.map((r, i) => <line key={r} className="tcard__fray" x1="0" y1={-24} x2="0" y2={i % 2 ? -33 : -40} transform={`rotate(${r})`} />)}
        <circle r="20" className="tcard__fline" />
        <path className="tcard__fink" d="M4 -12 A12.5 12.5 0 1 0 4 12 A10 10 0 1 1 4 -12Z" />
      </g>
      {[[24, 30, 4], [96, 30, 4], [30, 128, 3], [90, 128, 3]].map(([x, y, r]) => <path key={`${x}-${y}`} className="tcard__fink" d={sparkle(x, y, r)} />)}
      <line x1="16" y1="140" x2="104" y2="140" className="tcard__fline" />
      <text x="60" y="158" textAnchor="middle" className="tcard__title">THE MOON</text>
    </svg>
  )
}

// Tarot & Oracle stall, styled after its purple-and-cream poster.
function TarotStall() {
  return (
    <section className="tstall" id="stall-tarot" aria-labelledby="tstall-title">
      {['tl', 'tr', 'bl', 'br'].map((c) => <img key={c} className={`tstall__star tstall__star--${c}`} src="/images/diwali/tarot-star.webp" alt="" aria-hidden="true" width="200" height="200" loading="lazy" />)}
      <div className="tstall__twinkles" aria-hidden="true">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <span key={n} className={`tstall__tw tstall__tw--${n}`}>✦</span>)}
      </div>
      <div className="container tstall__inner">
        <header className="tstall__head">
          <span className="tstall__pill">Also at the stalls</span>
          <h2 id="tstall-title">Tarot <span>&amp;</span> Oracle</h2>
          <p className="tstall__sub"><span aria-hidden="true">✦ ·</span> Card Readings <span aria-hidden="true">· ✦</span></p>
          <p className="tstall__by">with <strong>Doris Yu</strong></p>
        </header>
        <div className="tstall__fan" aria-hidden="true">
          {FAN.map((a, i) => (
            <span key={a} className={`tcard${i === 2 ? ' tcard--mid' : ''}`} style={{ '--a': `${a}deg`, '--i': i }}>
              <span className="tcard__inner">
                <TarotBack />
                {i === 2 && <TarotFace />}
              </span>
            </span>
          ))}
        </div>
        <p className="tstall__lede">Tarot readings and Ganesha, Kali and angelic oracle card readings. Pull up a chair and ask the cards.</p>
        <ul className="tstall__cards">
          {READINGS.map((r, i) => (
            <li key={r.title} className="tstall__card" style={{ '--d': i }}>
              <span className="tstall__icon" aria-hidden="true">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ul>
        <img className="tstall__hand" src="/images/diwali/tarot-hand.webp" alt="" aria-hidden="true" width="300" height="392" loading="lazy" />
      </div>
    </section>
  )
}
