import { useEffect } from 'react'
import { site } from '../data/site.js'

export default function PageHeader({ eyebrow, title, subtitle }) {
  useEffect(() => {
    document.title = `${title} | ${site.fullName}`
  }, [title])

  return (
    <section className="page-header">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  )
}
