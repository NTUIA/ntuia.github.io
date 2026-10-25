import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DiwaliHero from '../components/festive/DiwaliHero.jsx'
import DiwaliCalls from '../components/festive/DiwaliCalls.jsx'
import { events } from '../data/events.js'
import { formatDate } from '../utils.js'

export default function DiwaliEvent() {
  const event = events.find((e) => e.slug === 'jashn-e-diwali-2026')
  useEffect(() => { document.title = `${event.title} | NTU India Association` }, [event.title])

  return (
    <div className="theme-diwali">
      <DiwaliHero />
      <DiwaliCalls />
      <section className="section" id="details">
        <div className="container diwali-details diwali-details--single">
          <div>
            <p className="dhero__script">Event details</p>
            <h2>{event.title}</h2>
            <dl className="diwali-facts">
              <div><dt>Date</dt><dd>{event.date ? formatDate(event.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'To be announced'}</dd></div>
              <div><dt>Time</dt><dd>{event.time || 'To be announced'}</dd></div>
              <div><dt>Venue</dt><dd>{event.location}{event.venueTba && ' (exact venue to be announced)'}</dd></div>
            </dl>
            <Link reloadDocument to="/contact" className="btn btn--primary">Ask the organisers</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
