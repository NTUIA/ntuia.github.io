import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Diya, Rangoli } from '../components/festive/Decorations.jsx'
import { rundown, rundownDate } from '../data/diwaliRundown.js'
import { dj, performances } from '../data/diwaliProgram.js'

// The details shown in the pop-up for a performance or the DJ night.
function detailsFor(it) {
  if (it.dj) return { title: dj.name, type: 'DJ Night', image: dj.image, alt: `${dj.name} at the DJ decks`, text: dj.text, link: dj.link, handle: dj.handle }
  const p = performances.find((x) => x.key === it.perf)
  if (!p) return null
  return { title: it.what, type: p.type || 'Dance Performance', image: p.image, alt: p.alt || `${p.title} performers`, by: p.performers.join(' & '), text: p.text, zh: p.zh, guide: p.guide }
}

function DetailsDialog({ item, onClose }) {
  const ref = useRef(null)
  useEffect(() => {
    const d = ref.current
    if (item && d && !d.open) d.showModal()
    if (!item && d?.open) d.close()
  }, [item])
  const info = item && detailsFor(item)
  return (
    <dialog ref={ref} className="rdlg" aria-labelledby="rdlg-title" onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      {info && (
        <div className="rdlg__box">
          <button type="button" className="rdlg__x" onClick={onClose} aria-label="Close">×</button>
          <img className="rdlg__img" src={info.image} alt={info.alt} />
          <div className="rdlg__body">
            <p className="rdlg__meta"><span>{info.type}</span>{item.time}{item.approx && ' (approx.)'}</p>
            <h2 id="rdlg-title">{info.title}</h2>
            {info.by && <p className="rdlg__by">by {info.by}</p>}
            {info.guide && <p className="rdlg__guide">Under the guidance of <a href={info.guide.link} target="_blank" rel="noopener noreferrer"><strong>{info.guide.name}</strong> <span lang="zh-Hant">({info.guide.zh})</span></a></p>}
            <p>{info.text}</p>
            {info.zh && <p lang="zh-Hant" className="rdlg__zh">{info.zh}</p>}
            {info.link && <p><a href={info.link} target="_blank" rel="noopener noreferrer">Follow {info.handle} on Instagram ↗</a></p>}
            <button type="button" className="btn btn--primary rdlg__close" onClick={onClose}>Close</button>
          </div>
        </div>
      )}
    </dialog>
  )
}

export default function DiwaliRundown() {
  const [open, setOpen] = useState(null)
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
                  {(() => {
                    const body = (
                      <>
                        <time>{it.time}{it.approx && <small> approx.</small>}</time>
                        <strong>{it.what}</strong>
                        <span>{it.who}</span>
                        {it.act && <em className="rundown__tag">{it.dj ? 'DJ night' : 'Performance'}</em>}
                        {(it.perf || it.dj) && <b className="rundown__more">View details →</b>}
                      </>
                    )
                    return it.perf || it.dj
                      ? <button type="button" className="rundown__card rundown__card--btn" onClick={() => setOpen(it)} aria-haspopup="dialog">{body}</button>
                      : <div className="rundown__card">{body}</div>
                  })()}
                </li>
              ))}
            </ol>
          </section>
        ))}
        <DetailsDialog item={open} onClose={() => setOpen(null)} />
        <p className="rundown__note">🪔 Stage times are a guide and may shift by a few minutes. See you there!</p>
      </div>
    </div>
  )
}
