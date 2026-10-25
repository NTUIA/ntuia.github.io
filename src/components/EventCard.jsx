import { Link } from 'react-router-dom'
import { formatDate } from '../utils.js'

export default function EventCard({ event, past = false }) {
  const d = new Date(`${event.date}T00:00:00`)
  const href = event.slug ? `/events/${event.slug}` : null
  return (
    <article className={`event-card ${past ? 'is-past' : ''}`}>
      <div className="event-card__date">
        <span className="day">{d.getDate()}</span>
        <span className="month">{d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
      </div>
      <div>
        <h3>{href ? <Link to={href}>{event.title}</Link> : event.title}</h3>
        <p className="meta">
          <time dateTime={event.date}>{formatDate(event.date, { weekday: 'long', day: 'numeric', month: 'long' })}</time> · {event.time} · {event.location}
        </p>
        <p>{event.description}</p>
      </div>
      {href && <Link className="link-arrow event-card__more" to={href}>Event page</Link>}
    </article>
  )
}
