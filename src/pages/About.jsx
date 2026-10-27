import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import TeamCard from '../components/TeamCard.jsx'
import PastCommittees from '../components/PastCommittees.jsx'
import { site } from '../data/site.js'
import { committeeYear, team } from '../data/team.js'

const values = [
  { title: 'Welcome', text: 'Everyone is welcome at NTUIA, whatever their nationality, field or background.' },
  { title: 'Service', text: 'We give our time to support students and to give back to Taipei.' },
  { title: 'Culture', text: 'We share India’s festivals, food and arts with the NTU community.' },
  { title: 'Integrity', text: 'We run the association openly, with clear accounts and elected leadership.' },
]

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About NTUIA" title="Who we are" subtitle={site.mission} />

      <section className="section">
        <div className="container split">
          <div className="split__aside">
            <p className="eyebrow">Our purpose</p>
            <h2>Mission and vision</h2>
          </div>
          <div className="pillars pillars--wide">
            <article className="pillar">
              <h3>Mission</h3>
              <p>{site.fullName} supports Indian students and researchers at National Taiwan University from their first week in Taipei to graduation and beyond, and shares India’s culture with the wider NTU community.</p>
            </article>
            <article className="pillar">
              <h3>Vision</h3>
              <p>A connected, confident community where every Indian student at NTU feels at home, and where Taiwan and India learn from each other.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <div className="split__aside">
            <p className="eyebrow">How we work</p>
            <h2>Our values</h2>
          </div>
          <div className="pillars">
            {values.map((v) => (
              <article key={v.title} className="pillar">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">Executive committee {committeeYear}</p>
              <h2>Meet our team</h2>
            </div>
            <Link reloadDocument to="/contact" className="link-arrow">Contact the committee</Link>
          </div>
          <div className="team__grid team__grid--compact">
            {team.map((m) => <TeamCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="past-committees">
        <div className="container">
          <div className="section__head">
            <div>
              <p className="eyebrow">Past committees</p>
              <h2>Those who led before us</h2>
            </div>
          </div>
          <PastCommittees />
        </div>
      </section>
    </>
  )
}
