import { useRef } from 'react'
import { registrationOpen } from '../../data/diwaliForms.js'

// "Register now" first opens a short notice with help for booking and payment
// problems, then "Continue to registration" goes on to the form.
export default function RegisterButton() {
  const dialog = useRef(null)

  if (!registrationOpen) {
    return (
      <span className="btn btn--soon">
        <span className="btn--soon__dot" aria-hidden="true" />Registration coming soon
      </span>
    )
  }

  const open = (e) => {
    // Let ctrl/cmd-click or middle-click open the form in a new tab as usual.
    if (e.metaKey || e.ctrlKey || e.shiftKey || !dialog.current?.showModal) return
    e.preventDefault()
    dialog.current.showModal()
  }
  const close = () => dialog.current.close()

  return (
    <>
      <a href="/registration" className="btn btn--soon btn--register" onClick={open}>
        <span className="btn--soon__dot" aria-hidden="true" />Register now
      </a>
      <dialog
        ref={dialog}
        className="theme-diwali regnote"
        aria-labelledby="regnote-title"
        onClick={(e) => { if (e.target === e.currentTarget) close() }}
      >
        <div className="regnote__box">
          <button type="button" className="regnote__close" onClick={close} aria-label="Close">×</button>
          <p className="regnote__kicker">Jashn-e-Diwali 2026</p>
          <h2 id="regnote-title">Before you register</h2>
          <p className="regnote__intro">A few quick tips for a smooth booking.</p>
          <ol className="regnote__list">
            <li><span><strong>Page not loading?</strong> If the booking page shows an error, open it in a different browser.</span></li>
            <li><span><strong>Payment stuck?</strong> Email <a href="mailto:support@ntuia.org">support@ntuia.org</a> and we will sort it out.</span></li>
            <li><span><strong>Need help with your ticket?</strong> Our team is a call away at <a href="tel:+886987191187">+886 987 191 187</a>.</span></li>
          </ol>
          <aside className="regnote__bank" aria-labelledby="regnote-bank">
            <p className="regnote__bank-tag">Exchange &amp; visiting students</p>
            <h3 id="regnote-bank">No Taiwan bank account?</h3>
            <p>You can still join us. Reach out to our team before you register and we will help you pay another way.</p>
            <div className="regnote__bank-links">
              <a href="mailto:support@ntuia.org?subject=Diwali%20registration%20payment%20help"><span aria-hidden="true">✉</span> support@ntuia.org</a>
              <a href="tel:+886987191187"><span aria-hidden="true">☎</span> +886 987 191 187</a>
            </div>
          </aside>
          <div className="regnote__actions">
            <a href="/registration" className="btn btn--primary">Continue to registration <span aria-hidden="true">→</span></a>
            <button type="button" className="regnote__back" onClick={close}>Not now</button>
          </div>
        </div>
      </dialog>
    </>
  )
}
