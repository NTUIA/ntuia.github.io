import { Link } from 'react-router-dom'
import { formatDate } from '../utils.js'

export default function EventCard({ event, past = false }) {
  const d = event.date ? new Date(`${event.date}T00:00:00`) : null
  const href = event.slug ? `/events/${event.slug}` : null
  return (
    <article className={`event-card ${past ? 'is-past' : ''} ${event.image ? 'has-poster' : ''}`}>
      <div className="event-card__date">
        {d ? (
          <>
            <span className="day">{d.getDate()}</span>
            <span className="month">{d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
          </>
        ) : (
          <>
            <span className="day day--tba">TBA</span>
            <span className="month">{event.title.match(/\d{4}/)?.[0] ?? 'Soon'}</span>
          </>
        )}
      </div>
      <div>
        <h3>{href ? <Link reloadDocument to={href}>{event.title}</Link> : event.title}</h3>
        <p className="meta event-card__when">
          {event.date
            ? <><time dateTime={event.date}>{formatDate(event.date, { weekday: 'long', day: 'numeric', month: 'long' })}</time>{event.time && `, ${event.time}`}</>
            : 'Date and time to be announced'}
        </p>
        <p className="meta event-card__where">{event.location}</p>
        <p>{event.description}</p>
      </div>
      {event.image && (
        <a className="event-card__poster" href={event.image} target="_blank" rel="noreferrer" aria-label={`Open the ${event.title} poster`}>
          <img src={event.image} alt={event.imageAlt || `${event.title} poster`} width="1000" height="1410" loading="lazy" />
        </a>
      )}
      {href && <Link reloadDocument className="link-arrow event-card__more" to={href}>Event page</Link>}
    </article>
  )
}
