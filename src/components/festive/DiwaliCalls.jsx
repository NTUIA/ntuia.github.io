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

function Medallion() {
  return (
    <div className="calls__medallion" aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <ellipse className="call-glow" cx="32" cy="24" rx="14" ry="16" fill="#f2c14e" opacity=".4" />
        <path className="flame" d="M32 8 C26 18 25 26 32 33 C39 26 38 18 32 8Z" fill="#f5a524" />
        <path className="flame" d="M32 17 C29 23 29 27 32 31 C35 27 35 23 32 17Z" fill="#fff1b8" />
        <path d="M10 36 C16 35 48 35 54 36 C52 50 43 56 32 56 C21 56 12 50 10 36Z" fill="#6e1631" />
        <path d="M10 36 C16 35 48 35 54 36 C48 40 16 40 10 36Z" fill="#a52a4a" />
        <path d="M17 45 Q32 51 47 45" stroke="#f2c14e" strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

// "Call for Volunteers" and "Call for Performers", side by side on the Diwali event page.
export default function DiwaliCalls() {
  return (
    <section className="calls" id="get-involved" aria-labelledby="calls-title">
      <div className="container">
        <header className="calls__head">
          <p className="calls__eyebrow">Jashn-e-Diwali 2026 · NTU</p>
          <h2 id="calls-title">Two ways to light up the night</h2>
          <p>Help us build the celebration behind the scenes, or take the stage and share your art. Everyone at NTU is welcome to join.</p>
        </header>

        <div className="calls__grid">
          <article className="call call--vol" aria-labelledby="vol-title">
            <p className="call__kicker">Call for</p>
            <h3 id="vol-title">Volunteers</h3>
            <p className="call__lede">Be the spark behind NTU’s Diwali celebration. Join the team and bring the energy, colour and joy.</p>
            <ul className="vol-points">
              <li>Jashn-e-Diwali 2026 at NTU</li>
              <li>Volunteer registration is open</li>
            </ul>
            <div className="call__foot">
              <FormButton href={diwaliForms.volunteers}>Volunteer sign-up</FormButton>
            </div>
            <figure className="call__people call__people--vol">
              <img src="/images/diwali/volunteers.webp" alt="Four friends in festive Indian clothes lighting diyas together" width="900" height="369" loading="lazy" />
            </figure>
          </article>

          <Medallion />

          <article className="call call--perf" aria-labelledby="perf-title">
            <p className="call__kicker">Call for</p>
            <h3 id="perf-title">Performers</h3>
            <p className="call__lede">The Spirit of India in Taiwan. All kinds of performances are welcome on the Diwali stage.</p>
            <ul className="perf-types" aria-label="Performance types">
              <li>Classical dance</li>
              <li>Fusion singing</li>
              <li>Musical performance</li>
              <li>Open cultural acts</li>
            </ul>
            <div className="call__foot">
              <FormButton href={diwaliForms.performers}>Register to perform</FormButton>
            </div>
            <figure className="call__people call__people--perf">
              <img src="/images/diwali/performers.webp" alt="Illustrated performers: a classical dancer, a singer, sitar and tabla players, and a group of folk dancers" width="900" height="245" loading="lazy" />
            </figure>
          </article>
        </div>
      </div>
    </section>
  )
}
