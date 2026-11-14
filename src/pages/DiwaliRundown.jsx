import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Diya, Rangoli } from '../components/festive/Decorations.jsx'
import { rundown, rundownDate } from '../data/diwaliRundown.js'

export default function DiwaliRundown() {
  useEffect(() => { document.title = 'Event rundown | Jashn-e-Diwali 2026 | NTU India Association' }, [])

  return (
    <div className="theme-diwali rundown">
      <header className="rundown__hero">
        <div className="rundown__rangoli rundown__rangoli--l"><Rangoli size={300} /></div>
        <div className="rundown__rangoli rundown__rangoli--r"><Rangoli size={240} /></div>
        <div className="container rundown__heroin">
          <Link reloadDocument to="/events/jashn-e-diwali-2026" className="rundown__back">← Back to the Diwali event</Link>
          <Diya size={70} className="rundown__diya" />
          <p className="rundown__kicker">Jashn-e-Diwali 2026</p>
          <h1>Event Rundown</h1>
          <p className="rundown__sub">Your evening at a glance</p>
          <ul className="rundown__chips">
            <li><span aria-hidden="true">📅</span>{rundownDate}</li>
            <li><span aria-hidden="true">🕕</span>5:45 – 9:00 PM</li>
            <li><span aria-hidden="true">📍</span>103, Boya Building, NTU</li>
          </ul>
        </div>
      </header>

      <div className="container rundown__body">
        {rundown.map((g, gi) => (
          <section key={g.part} className="rundown__part" aria-labelledby={`part-${gi}`}>
            <div className="rundown__parthead">
              <span className="rundown__num" aria-hidden="true">{gi + 1}</span>
              <div>
                <h2 id={`part-${gi}`}>{g.part}</h2>
                <p>{g.note}</p>
              </div>
            </div>
            <ol className="rundown__list">
              {g.items.map((it) => (
                <li key={it.time + it.what} className={it.act ? 'is-act' : undefined}>
                  <span className="rundown__dot" aria-hidden="true">{it.icon}</span>
                  <div className="rundown__card">
                    <time>{it.time}{it.approx && <small> approx.</small>}</time>
                    <strong>{it.what}</strong>
                    <span>{it.who}</span>
                    {it.act && <em className="rundown__tag">Performance</em>}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
        <p className="rundown__note">🪔 Stage times are a guide and may shift by a few minutes. See you there!</p>
      </div>
    </div>
  )
}
