import { useEffect } from 'react'
import { diwaliRegistration } from '../data/diwaliForms.js'

// ntuia.org/registration: the Jashn-e-Diwali registration form, shown inside the
// site so the address bar stays on ntuia.org. The form fills the screen below the
// header and scrolls on its own, so it fits however many guests are added.
export default function Registration() {
  useEffect(() => { document.title = 'Register | Jashn-e-Diwali 2026 | NTU India Association' }, [])

  return (
    <section className="registration" aria-labelledby="reg-title">
      <div className="registration__bar container">
        <h1 id="reg-title">Jashn-e-Diwali 2026 registration</h1>
        <a href={diwaliRegistration} target="_blank" rel="noreferrer" className="link-arrow">Form not loading? Open it here</a>
      </div>
      <iframe
        className="registration__frame"
        src={diwaliRegistration}
        title="Jashn-e-Diwali 2026 registration form"
        loading="eager"
      />
    </section>
  )
}
