import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/site.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label={`${site.name} home`}>
          <img className="brand__logo" src="/ntuia-logo.png" alt={site.fullName} width="254" height="92" />
        </Link>
        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav id="primary-nav" className={`navbar__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="navbar__cta" onClick={() => setOpen(false)}>Become a member</Link>
        </nav>
      </div>
    </header>
  )
}
