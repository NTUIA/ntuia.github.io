import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DiwaliHero from '../components/festive/DiwaliHero.jsx'
import { events } from '../data/events.js'
import { formatDate } from '../utils.js'

const programme = [
  { title: 'Diyas and rangoli', text: 'Light a diya and help draw the rangoli as the evening begins.' },
  { title: 'Cultural performances', text: 'Classical and Bollywood dance, music and student acts on stage.' },
  { title: 'Indian food', text: 'Festival snacks and sweets to share with friends.' },
  { title: 'Open to everyone', text: 'Bring friends from NTU and across Taipei. No membership needed.' },
]

export default function DiwaliEvent() {
  const event = events.find((e) => e.slug === 'jashn-e-diwali-2026')
  useEffect(() => { document.title = `${event.title} | NTU India Association` }, [event.title])

  return (
    <div className="theme-diwali">
      <DiwaliHero />
      <section className="section" id="details">
        <div className="container diwali-details">
          <div>
            <p className="dhero__script">Event details</p>
            <h2>{event.title}</h2>
            <dl className="diwali-facts">
              <div><dt>Date</dt><dd>{formatDate(event.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</dd></div>
              <div><dt>Time</dt><dd>{event.time}</dd></div>
              <div><dt>Venue</dt><dd>{event.location}</dd></div>
            </dl>
            <Link reloadDocument to="/contact" className="btn btn--primary">Ask the organisers</Link>
          </div>
          <div className="diwali-programme">
            {programme.map((p) => (
              <article key={p.title} className="card feature">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
