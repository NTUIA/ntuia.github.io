import { useCallback, useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { gallery } from '../data/gallery.js'
import { site } from '../data/site.js'

export default function Gallery() {
  const [index, setIndex] = useState(null)
  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (d) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    [],
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, close, step])

  return (
    <>
      <PageHeader eyebrow="Gallery" title="Moments from our events" subtitle="Photos from NTUIA gatherings and celebrations." />
      {gallery.length === 0 && (
        <section className="section">
          <div className="container">
            <div className="gallery-soon">
              <h2>Photos coming soon</h2>
              <p>We'll share photos from our events here soon. Until then, follow us on Instagram.</p>
              <div className="gallery-soon__actions">
                <a href={site.social.find((s) => s.label === 'Instagram').url} target="_blank" rel="noreferrer" className="btn btn--primary">Follow us on Instagram</a>
              </div>
            </div>
          </div>
        </section>
      )}
      {gallery.length > 0 && (
      <section className="section">
        <div className="container gallery">
          {gallery.map((img, i) => (
            <button key={img.src} className="gallery__item" onClick={() => setIndex(i)} aria-label={`Open ${img.alt}`}>
              <img src={img.src} alt={img.alt} loading="lazy" width="800" height="600" />
            </button>
          ))}
        </div>
      </section>
      )}

      {index !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={gallery[index].alt} onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close">×</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Previous">‹</button>
          <img src={gallery[index].src} alt={gallery[index].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Next">›</button>
        </div>
      )}
    </>
  )
}
