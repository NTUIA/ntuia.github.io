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
    <section className="mstall" id="stalls" aria-labelledby="mstall-title">
      <img className="mstall__mandala" src="/images/diwali/mehndi-mandala.webp" alt="" aria-hidden="true" width="470" height="470" loading="lazy" />
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
  )
}
