import { diwaliForms } from '../../data/diwaliForms.js'

function FormButton({ href, children }) {
  if (!href) {
    return (
      <>
        <span className="call__btn" aria-disabled="true">{children} <span aria-hidden="true">→</span></span>
        <span className="call__note">Form link coming soon.</span>
      </>
    )
  }
  return (
    <a className="call__btn" href={href} target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">→</span>
    </a>
  )
}

const STALL_TYPES = ['Snacks and sweets', 'Mehndi', 'Handicrafts', 'Accessories', 'Cultural items']

const STALL_ART = [
  ['crafts', 355],
  ['chaat', 551],
  ['bakery', 301],
  ['fresh', 433],
]

// "Call for Stalls" card at the end of the Diwali event page.
export default function DiwaliCalls() {
  return (
    <section className="calls" id="stalls" aria-labelledby="calls-title">
      <div className="container">
        <header className="calls__head">
          <p className="calls__eyebrow">Jashn-e-Diwali 2026 at NTU</p>
          <h2 id="calls-title">Run a stall at the festival</h2>
          <p>Bring your food, crafts or creative ideas and be part of the celebration.</p>
        </header>

        <article className="call call--stall" aria-labelledby="stall-title">
          <div className="stall__main">
            <p className="call__kicker">Call for</p>
            <h3 id="stall-title">Stalls</h3>
            <p className="call__lede">NTU students, non-NTU participants and business owners are welcome to set up their own stall at Jashn-e-Diwali 2026.</p>
            <div className="call__foot">
              <FormButton href={diwaliForms.stalls}>Register a stall</FormButton>
            </div>
          </div>
          <div className="stall__side">
            <ul className="perf-types stall-names" aria-label="Stall types">
              {STALL_TYPES.map((label) => <li key={label}>{label}</li>)}
            </ul>
            <ul className="vol-points stall-points">
              <li>Free stall registration for NTU students</li>
              <li>First come, first served</li>
              <li>Only 4 to 5 stalls, so register early</li>
            </ul>
          </div>
          <div className="call__people call__people--stall" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((n) => <span key={n} className={`stall-spark stall-spark--${n}`}>✦</span>)}
            {STALL_ART.map(([img, w], i) => (
              <img key={img} src={`/images/diwali/stall-art-${img}.webp`} alt="" width={w} height="360" loading="lazy" style={{ '--i': i, flexGrow: w }} />
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
