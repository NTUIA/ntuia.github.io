import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { diwaliRegistration, registrationOpen } from '../data/diwaliForms.js'

// ntuia.org/registration: the Jashn-e-Diwali registration form, shown inside the
// site so the address bar stays on ntuia.org. The form fills the screen below the
// header and scrolls on its own, so it fits however many guests are added.
export default function Registration() {
  useEffect(() => { document.title = 'Register | Jashn-e-Diwali 2026 | NTU India Association' }, [])

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
        className="registration__frame"
        src={diwaliRegistration}
        title="Jashn-e-Diwali 2026 registration form"
        loading="eager"
      />
    </section>
  )
}
