import { Link } from 'react-router-dom'
import { site } from '../data/site.js'

const ICONS = {
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M6.9 8.6H3.8V20h3.1V8.6zM5.3 3.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM20.2 13.6c0-3-1.6-5.2-4.5-5.2-1.5 0-2.5.8-2.9 1.6V8.6H9.8V20h3.1v-5.8c0-1.5.4-2.9 2.2-2.9 1.8 0 1.9 1.6 1.9 3V20h3.1v-6.4z" />
    </svg>
  ),
}

export default function SocialIcons({ className = '' }) {
  return (
    <ul className={`social ${className}`}>
      {site.social.map((s) => (
        <li key={s.label}>
          <a className={`social__link social__link--${s.label.toLowerCase()}`} href={s.url} target="_blank" rel="noreferrer" aria-label={`NTUIA on ${s.label}`} title={s.label}>
            {ICONS[s.label]}
          </a>
        </li>
      ))}
      <li>
        <Link reloadDocument to="/contact" className="social__link social__link--mail" aria-label="Contact NTUIA" title="Contact us">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </Link>
      </li>
    </ul>
  )
}
