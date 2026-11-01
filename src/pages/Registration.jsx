import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { diwaliRegistration, registrationOpen } from '../data/diwaliForms.js'

// ntuia.org/registration: the Jashn-e-Diwali registration form, shown inside the
// site so the address bar stays on ntuia.org. The form fills the screen below the
// header and scrolls on its own, so it fits however many guests are added.

// A form left unfinished for this long starts over the next time it's opened,
// so an old half-filled form from a previous day never comes back.
const RESET_AFTER = 30 * 60 * 1000
const AWAY_KEY = 'ntuia-reg-away'

function awayTooLong() {
  try {
    const away = Number(sessionStorage.getItem(AWAY_KEY))
    return away > 0 && Date.now() - away > RESET_AFTER
  } catch {
    return false
  }
}

// A fresh address also stops the browser from refilling the old answers.
const freshSrc = () => `${diwaliRegistration}?fresh=${Date.now()}`

export default function Registration() {
  const [src, setSrc] = useState(() => (awayTooLong() ? freshSrc() : diwaliRegistration))

  useEffect(() => { document.title = 'Register | Jashn-e-Diwali 2026 | NTU India Association' }, [])

  useEffect(() => {
    const onReturn = () => {
      if (awayTooLong()) setSrc(freshSrc())
      try { sessionStorage.removeItem(AWAY_KEY) } catch { /* storage blocked */ }
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        try { sessionStorage.setItem(AWAY_KEY, String(Date.now())) } catch { /* storage blocked */ }
      } else onReturn()
    }
    const onPageShow = (e) => { if (e.persisted) onReturn() }
    try { sessionStorage.removeItem(AWAY_KEY) } catch { /* storage blocked */ }
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pageshow', onPageShow)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pageshow', onPageShow)
    }
  }, [])

  if (!registrationOpen) {
    return (
      <section className="registration registration--closed" aria-labelledby="reg-title">
        <div className="container registration__soon">
          <h1 id="reg-title">Jashn-e-Diwali 2026 registration</h1>
          <p>Registration is coming soon. Follow our news for the opening date.</p>
          <Link reloadDocument to="/events/jashn-e-diwali-2026" className="link-arrow">Diwali event details</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="registration" aria-label="Jashn-e-Diwali 2026 registration">
      <iframe
        key={src}
        className="registration__frame"
        src={src}
        title="Jashn-e-Diwali 2026 registration form"
        loading="eager"
      />
    </section>
  )
}
