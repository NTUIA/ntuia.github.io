import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DiwaliHero from '../components/festive/DiwaliHero.jsx'
import RegisterButton from '../components/festive/RegisterButton.jsx'
import RegisterDeadline from '../components/festive/RegisterDeadline.jsx'
import DiwaliCalls from '../components/festive/DiwaliCalls.jsx'
import { DiwaliCarnival, DiwaliHighlights, DiwaliMenu, DiwaliStage, ShareButton, useReveal } from '../components/festive/DiwaliProgram.jsx'
import { events } from '../data/events.js'
import { stallsOpen } from '../data/diwaliForms.js'
import { formatDate } from '../utils.js'

export default function DiwaliEvent() {
  const event = events.find((e) => e.slug === 'jashn-e-diwali-2026')
  useEffect(() => { document.title = `${event.title} | NTU India Association` }, [event.title])
  useReveal()

  return (
    <div className="theme-diwali">
      <DiwaliHero
        actions={
          <>
            <RegisterButton />
            <a href="#details" className="btn btn--primary">Diwali event details</a>
            <Link reloadDocument to="/events/jashn-e-diwali-2026/rundown" className="btn btn--outline">Event rundown</Link>
            <RegisterDeadline />
          </>
        }
      />
      <DiwaliHighlights />
      <DiwaliStage />
      <DiwaliMenu />
      <DiwaliCarnival />
      <section className="dsec dsec--details" id="details" aria-labelledby="details-title">
        <div className="dlanterns" aria-hidden="true">
          {[8, 22, 37, 63, 78, 92].map((x, i) => <span key={x} style={{ '--x': `${x}%`, '--i': i }} />)}
        </div>
        <div className="container ddetails">
          <p className="ddetails__kicker">Your evening, illuminated</p>
          <h2 id="details-title">Come as you are. <em>Leave a little brighter.</em></h2>
          <dl className="ddetails__facts">
            <div><dt>Date</dt><dd>{event.date ? formatDate(event.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'To be announced'}</dd></div>
            <div><dt>Time</dt><dd>{event.time || 'To be announced'}</dd></div>
            <div><dt>Venue</dt><dd>{event.mapUrl ? <a className="map-link" href={event.mapUrl} target="_blank" rel="noreferrer">{event.location} <span aria-hidden="true">↗</span></a> : event.location}</dd></div>
          </dl>
          <div className="ddetails__actions">
            <RegisterButton />
            <ShareButton />
          </div>
          <Link reloadDocument to="/events/jashn-e-diwali-2026/rundown" className="link-arrow">See the evening's rundown</Link>
          <Link reloadDocument to="/contact" className="link-arrow">Questions? Ask the organisers</Link>
        </div>
      </section>
      {stallsOpen && <DiwaliCalls />}
    </div>
  )
}
