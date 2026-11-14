import { useEffect, useRef, useState } from 'react'
import { floorMaps, mapPdfs } from '../../data/diwaliMaps.js'

// Pop-up with the venue floor maps: first a list of maps to choose from,
// then the chosen map with back / previous / next.
export default function FloorMapsDialog({ open, onClose }) {
  const ref = useRef(null)
  const backRef = useRef(null)
  const [idx, setIdx] = useState(null)

  useEffect(() => {
    const d = ref.current
    if (open && d && !d.open) { setIdx(null); d.showModal() }
    if (!open && d?.open) d.close()
  }, [open])

  useEffect(() => {
    if (ref.current) ref.current.scrollTop = 0
    if (idx !== null) backRef.current?.focus()
  }, [idx])

  const m = idx === null ? null : floorMaps[idx]
  const prev = idx > 0 ? idx - 1 : null
  const next = idx !== null && idx < floorMaps.length - 1 ? idx + 1 : null

  return (
    <dialog ref={ref} className="rdlg fmap" aria-labelledby="fmap-title" onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      {!m ? (
        <div className="fmap__body">
        <button type="button" className="rdlg__x" onClick={onClose} aria-label="Close">×</button>
          <p className="fmap__kicker">Find your way</p>
          <h2 id="fmap-title">Floor maps and directions</h2>
          <p className="fmap__sub">Room 103, Boya Building (N13), first floor. Tap a map to open it.</p>
          <ul className="fmap__list">
            {floorMaps.map((f, i) => (
              <li key={f.key}>
                <button type="button" className={'fmap__opt' + (f.alert ? ' is-alert' : '') + (i === 0 ? ' is-main' : '')} onClick={() => setIdx(i)}>
                  <span className="fmap__ic" aria-hidden="true">{f.icon}</span>
                  <span className="fmap__txt">
                    <strong>{f.num && <em>Map {f.num}</em>}{f.title}</strong>
                    <span>{f.note}</span>
                  </span>
                  <span className="fmap__go" aria-hidden="true">→</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="fmap__pdfs">
            <span>Download to print or keep offline:</span>
            {mapPdfs.map((p) => <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer">⬇ {p.label}</a>)}
          </p>
        </div>
      ) : (
        <div className="fmap__view">
          <div className="fmap__bar">
            <button ref={backRef} type="button" className="fmap__back" onClick={() => setIdx(null)}>← All maps</button>
            <h2 id="fmap-title">{m.num && <em>Map {m.num}</em>}{m.title}</h2>
            <button type="button" className="rdlg__x" onClick={onClose} aria-label="Close">×</button>
          </div>
          <a className="fmap__img" href={m.image} target="_blank" rel="noopener noreferrer" title="Open full size">
            <img src={m.image} width={m.w} height={m.h} alt={`Floor map: ${m.title}. ${m.note}.`} />
          </a>
          <p className="fmap__hint">Tap the map to open it full size and zoom in.</p>
          <div className="fmap__nav">
            <button type="button" className="fmap__step" disabled={prev === null} onClick={() => setIdx(prev)}>
              ← {prev === null ? 'Previous' : floorMaps[prev].title}
            </button>
            <button type="button" className="fmap__step is-next" disabled={next === null} onClick={() => setIdx(next)}>
              {next === null ? 'Next' : floorMaps[next].title} →
            </button>
          </div>
        </div>
      )}
    </dialog>
  )
}
