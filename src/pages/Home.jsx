import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../data/site.js'
import { events } from '../data/events.js'
import { news } from '../data/news.js'
import { committeeYear, team } from '../data/team.js'
import { byDate, isUpcoming } from '../utils.js'
import EventCard from '../components/EventCard.jsx'
import NewsCard from '../components/NewsCard.jsx'
import TeamCard from '../components/TeamCard.jsx'
import JourneyStory from '../components/journey/JourneyStory.jsx'
import DiwaliHero from '../components/festive/DiwaliHero.jsx'

const facts = [
  { label: 'Based at', value: 'National Taiwan University, Taipei' },
  { label: 'Run by', value: 'A volunteer committee of NTU students' },
  { label: 'Open to', value: 'Everyone, whatever their nationality' },
]

const pillars = [
  { title: 'Settling in Taipei', text: 'Practical help for new arrivals: housing, banking, ARC paperwork, and finding a familiar meal near campus.' },
  { title: 'Culture and festivals', text: 'Diwali, Holi, Independence Day and more, celebrated with the whole NTU community.' },
  { title: 'Academic and career network', text: 'Talks, mentoring and alumni connections across research labs and industry in Taiwan.' },
  { title: 'Community and service', text: 'Volunteering, fundraising and outreach that give back to Taipei and to India.' },
]

export default function Home() {
  useEffect(() => { document.title = `${site.fullName} | NTUIA` }, [])

  const upcoming = events
    .filter((e) => isUpcoming(e.date))
    .sort(byDate)
  const rest = upcoming.slice(0, 3)

  return (
    <>
      <div className="theme-diwali">
        <DiwaliHero
          actions={
            <>
              <Link reloadDocument to="/registration" className="btn btn--soon btn--register">
                <span className="btn--soon__dot" aria-hidden="true" />Register here
              </Link>
              <Link reloadDocument to="/events/jashn-e-diwali-2026" className="btn btn--primary">Diwali event details</Link>
            </>
          }
        />
      </div>

      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__text">
            <p className="eyebrow">Student association at National Taiwan University</p>
            <h1>A home for Indian students at NTU.</h1>
            <p className="lead">{site.mission}</p>
            <div className="home-hero__actions">
              <Link reloadDocument to="/contact" className="btn btn--primary">Become a member</Link>
              <Link reloadDocument to="/events" className="btn btn--outline">Upcoming events</Link>
            </div>
          </div>
          <div className="home-hero__art">
            <JourneyStory />
          </div>
        </div>
        <div className="container">
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__aside">
            <p className="eyebrow">What we do</p>
            <h2>Four ways we support our community</h2>
            <Link reloadDocument to="/about" className="link-arrow">About NTUIA</Link>
          </div>
          <div className="pillars">
            {pillars.map((p) => (
              <article key={p.title} className="pillar">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">Calendar</p>
              <h2>Upcoming events</h2>
            </div>
            <Link reloadDocument to="/events" className="link-arrow">All events</Link>
          </div>
          {rest.length ? (
            <div className="stack">{rest.map((e) => <EventCard key={e.id} event={e} />)}</div>
          ) : (
            <p>No events are scheduled right now. Follow us for announcements.</p>
          )}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">Executive committee {committeeYear}</p>
              <h2>The people behind NTUIA</h2>
            </div>
            <Link reloadDocument to="/about" className="link-arrow">Meet the team</Link>
          </div>
          <div className="team__grid team__grid--compact">
            {team.map((m) => <TeamCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <p className="eyebrow eyebrow--light">Partner with NTUIA</p>
            <h2>Support Indian students in Taiwan</h2>
            <p>Sponsors, university offices and community partners help us run free events and welcome new students every semester. We would be glad to talk.</p>
          </div>
          <div className="cta__actions">
            <Link reloadDocument to="/contact" className="btn btn--light">Become a partner</Link>
            <Link reloadDocument to="/contact" className="btn btn--outline">Contact the committee</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">News</p>
              <h2>Latest from NTUIA</h2>
            </div>
            <Link reloadDocument to="/news" className="link-arrow">All news</Link>
          </div>
          <div className="grid grid--3">
            {news.slice(0, 3).map((n) => <NewsCard key={n.id} post={n} />)}
          </div>
        </div>
      </section>
    </>
  )
}
