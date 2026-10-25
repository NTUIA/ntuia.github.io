import { Link } from 'react-router-dom'
import { navLinks, site } from '../data/site.js'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__logo">
            <img src="/ntuia-logo.png" alt={site.fullName} width="254" height="92" />
          </div>
          <p className="footer__tagline">{site.tagline}</p>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}><Link reloadDocument to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Get involved</h3>
          <ul>
            <li><Link reloadDocument to="/contact">Become a member</Link></li>
            <li><Link reloadDocument to="/contact">Partner with us</Link></li>
            <li><Link reloadDocument to="/events">Attend an event</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li><Link reloadDocument to="/contact">Send us a message</Link></li>
            <li>{site.address}</li>
            <li className="footer__social">
              {site.social.map((s, i) => (
                <span key={s.label}>
                  {i > 0 && ' · '}
                  <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span><span className="footer__flag" aria-hidden="true" />© {year} {site.fullName}</span>
          <span>A student-run, non-profit association at National Taiwan University</span>
        </div>
      </div>
    </footer>
  )
}
