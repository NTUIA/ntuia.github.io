// Mehndi, tarot and the two food stalls at the carnival, shown as feature cards in the same paper style
// as the performer cards on the stage. Mehndi photos are cropped to show only the
// designs, never anyone's face.
const DESIGNS = [
  { src: '/images/diwali/mehndi-1.webp', w: 480, h: 641, alt: 'Sun and moon henna design on a forearm' },
  { src: '/images/diwali/mehndi-2.webp', w: 720, h: 576, alt: 'Henna portrait art on the back of a hand' },
  { src: '/images/diwali/mehndi-3.webp', w: 520, h: 756, alt: 'Compass and arrow line design on a forearm' },
  { src: '/images/diwali/mehndi-4.webp', w: 360, h: 385, alt: 'Floral bracelet henna design on a hand' },
]

// Two food stalls, after their "Snack First, Chill Later" posters. Spicy, salty and sweet run 0 to 3.
const SNACK_STALLS = [
  {
    key: 'snack1',
    title: 'Chaat & Mithai',
    text: 'Start with something spicy, finish with something sweet. Tuck into a flaky Pyazz Kachori with tangy chutneys, then cool down with soft Cham Cham and creamy Rasmalai soaked in saffron milk.',
    zh: '先來點辣，再來點甜！酥脆的洋蔥 Pyazz Kachori 搭配酸甜醬汁，接著品嚐鬆軟的 Cham Cham 和浸滿番紅花牛奶的 Rasmalai。',
    dishes: [
      { name: 'Pyazz Kachori', img: 'pyaaz', spicy: 2, salty: 2, sweet: 0 },
      { name: 'Cham Cham', img: 'chamcham', spicy: 0, salty: 0, sweet: 3 },
      { name: 'Rasmalai', img: 'rasmalai', spicy: 0, salty: 0, sweet: 3 },
    ],
  },
  {
    key: 'snack2',
    title: 'Street Bites & Chai',
    text: "India's favourite street snacks in one stop. Burst a Pani Puri full of tangy, spicy water, grab a melt-in-the-mouth Besan Laddu, and warm up with a glass of Indian tea.",
    zh: '一站嚐遍印度街頭人氣小吃！一口咬下裝滿酸辣香料水的 Pani Puri，再來一顆入口即化的 Besan Laddu，最後用一杯印度奶茶暖暖身。',
    dishes: [
      { name: 'Pani Puri', img: 'panipuri', spicy: 2, salty: 1, sweet: 1 },
      { name: 'Besan Laddu', img: 'laddu', spicy: 0, salty: 0, sweet: 3 },
      { name: 'Indian Tea', img: 'chai', spicy: 1, salty: 0, sweet: 2 },
    ],
  },
]

function Taste({ label, level }) {
  return (
    <span className={`taste taste--${label.toLowerCase()}`} aria-label={`${label} ${level} out of 3`}>
      {label}
      <span className="taste__dots" aria-hidden="true">{[1, 2, 3].map((n) => <i key={n} className={n <= level ? 'on' : ''} />)}</span>
    </span>
  )
}

const Twinkle = ({ className }) => (
  <svg className={`csnack__star ${className}`} viewBox="0 0 40 40" aria-hidden="true">
    <path d="M20 0 L21.2 18.8 L40 20 L21.2 21.2 L20 40 L18.8 21.2 L0 20 L18.8 18.8Z M7 7 L20.6 19.4 L33 7 L20.6 20.6 L33 33 L19.4 20.6 L7 33 L19.4 19.4Z" />
  </svg>
)

function SnackStall({ s }) {
  return (
    <article className={`perf perf--snack perf--${s.key}`} id={`carnival-${s.key}`} aria-labelledby={`perf-${s.key}`}>
      <span className="cdecor" aria-hidden="true">
        <Twinkle className="csnack__star--a" /><Twinkle className="csnack__star--b" /><Twinkle className="csnack__star--c" />
      </span>
      <Sparks />
      <figure className="perf__photo csnack">
        {s.dishes.map((d, i) => (
          <span key={d.name} className="csnack__dish" style={{ '--d': i }}>
            <img src={`/images/diwali/snack-${d.img}.webp`} alt={d.name} width="360" height="360" loading="lazy" />
            <span className="csnack__pill">{d.name}</span>
          </span>
        ))}
      </figure>
      <div className="perf__body">
        <h3 id={`perf-${s.key}`}>“{s.title}”</h3>
        <p className="perf__sub">Snack First, Chill Later</p>
        <p className="perf__by">Food stall at the <strong>carnival</strong></p>
        <p className="perf__text">{s.text}</p>
        <ul className="csnack__menu">
          {s.dishes.map((d) => (
            <li key={d.name}>
              <span className="csnack__name">{d.name}</span>
              <Taste label="Spicy" level={d.spicy} />
              <Taste label="Salty" level={d.salty} />
              <Taste label="Sweet" level={d.sweet} />
            </li>
          ))}
        </ul>
        <p className="perf__zh" lang="zh-Hant">{s.zh}</p>
      </div>
    </article>
  )
}

const FAN = [-34, -17, 0, 17, 34]
const RAYS = Array.from({ length: 28 }, (_, i) => i * (360 / 28))
const sparkle = (x, y, r) => `M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r}Z`

const Sparks = () => <span className="perf__sparks" aria-hidden="true"><i /><i /><i /><i /><i /></span>

export default function CarnivalFeatures() {
  return (
    <div className="perfs perfs--carnival">
      <article className="perf perf--mehndi" id="carnival-mehndi" aria-labelledby="perf-mehndi">
        <span className="cdecor" aria-hidden="true">
          <img className="cdecor__mandala" src="/images/diwali/mehndi-mandala.webp" alt="" width="600" height="600" loading="lazy" />
          <img className="cdecor__leaf cdecor__leaf--l" src="/images/diwali/mehndi-leaf-l.webp" alt="" loading="lazy" />
          <img className="cdecor__leaf cdecor__leaf--r" src="/images/diwali/mehndi-leaf-r.webp" alt="" loading="lazy" />
          <span className="cdecor__hill" />
        </span>
        <Sparks />
        <figure className="perf__photo cmehndi">
          {DESIGNS.map((d, i) => (
            <span key={d.src} className="cmehndi__frame" style={{ '--d': i }}>
              <img src={d.src} alt={d.alt} width={d.w} height={d.h} loading="lazy" />
            </span>
          ))}
        </figure>
        <div className="perf__body">
          <h3 id="perf-mehndi">“Henna &amp; Mehndi”</h3>
          <p className="perf__sub">Beautiful Designs</p>
          <p className="perf__by">Drawn live at the <strong>carnival</strong></p>
          <p className="perf__text">Celebrate with beautiful henna designs and a touch of festive artistry. Choose classic florals, modern line work or a custom piece, drawn while you wait.</p>
          <p className="perf__zh" lang="zh-Hant">現場手繪指甲花彩繪！從經典花卉、現代線條到客製化圖案，為你的排燈節增添一份傳統與藝術之美。</p>
        </div>
      </article>

      <article className="perf perf--tarot" id="carnival-tarot" aria-labelledby="perf-tarot">
        <span className="cdecor" aria-hidden="true">
          {['tr', 'br'].map((c) => <img key={c} className={`cdecor__star cdecor__star--${c}`} src="/images/diwali/tarot-star.webp" alt="" width="200" height="200" loading="lazy" />)}
        </span>
        <Sparks />
        <figure className="perf__photo ctarot" aria-hidden="true">
          <div className="ctarot__fan">
            {FAN.map((a, i) => (
              <span key={a} className={`tcard${i === 2 ? ' tcard--mid' : ''}`} style={{ '--a': `${a}deg`, '--i': i }}>
                <span className="tcard__inner">
                  <TarotBack />
                  {i === 2 && <TarotFace />}
                </span>
              </span>
            ))}
          </div>
        </figure>
        <div className="perf__body">
          <h3 id="perf-tarot">“Tarot &amp; Oracle Card Readings”</h3>
          <p className="perf__sub">A Moment of Mystery</p>
          <p className="perf__by">Readings by <strong>Doris Yu</strong></p>
          <p className="perf__text">Tarot readings and Ganesha, Kali and angelic oracle card readings. Take a seat, pick a card and enjoy a light-hearted reading.</p>
          <p className="perf__zh" lang="zh-Hant">塔羅牌占卜，以及象神、迦梨女神與天使神諭卡解讀。坐下來抽一張牌，享受一段輕鬆有趣的占卜時光。</p>
        </div>
      </article>

      {SNACK_STALLS.map((st) => <SnackStall key={st.key} s={st} />)}
    </div>
  )
}

// Card back drawn in SVG (after the tarot poster's sun-and-moon cards) so each card can move on its own.
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
