import { Link } from 'react-router-dom'
import { useMotion } from '../../motion/effects.js'
import { ChineseLantern, Diya, Garland, Lantern, Ornament, Rangoli, SkyLanterns, Sparkles, StringLights, TaipeiSkyline } from './Decorations.jsx'
import FestiveBoard from './FestiveBoard.jsx'
import Fireworks from './Fireworks.jsx'
import PetalShower from './PetalShower.jsx'
import { events } from '../../data/events.js'
import { formatDate } from '../../utils.js'

const LEAD =
  'Celebrate Diwali with the Indian community at National Taiwan University. Join us for diyas, rangoli, music, dance, and food, and bring your friends from every corner of Taiwan.'

const diwali = events.find((e) => e.slug === 'jashn-e-diwali-2026')

// Event date pill shown above the intro text.
function EventDate() {
  if (!diwali?.date) return null
  return (
    <p className="dhero__date">
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="dhero__date-label">Event day</span>
      <time dateTime={diwali.date}>{formatDate(diwali.date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</time>
    </p>
  )
}

function DefaultActions() {
  return (
    <>
      <a href="#details" className="btn btn--primary">Event details</a>
      <Link reloadDocument to="/events" className="btn btn--outline">All NTUIA events</Link>
    </>
  )
}

// `actions` lets each page choose the banner's buttons.
export default function DiwaliHero({ actions = <DefaultActions /> }) {
  const motion = useMotion()
  const design = motion.design

  return (
    <section className={`dhero dhero--${design}`}>
      <div className="dhero__glow" aria-hidden="true" />
      <TaipeiSkyline className="dhero__skyline dhero__skyline--wide" />
      <TaipeiSkyline className="dhero__skyline dhero__skyline--phone" viewBox="440 -12 580 266" fit="xMidYMax meet" />
      <SkyLanterns />
      <Sparkles />
      {motion.has('fireworks') && <Fireworks />}
      <StringLights />

      <div className="dhero__hangers dhero__hangers--left" aria-hidden="true">
        <Garland flowers={9} />
        <Lantern length={36} />
        <ChineseLantern length={70} size={42} className="only-sm" />
        <ChineseLantern length={120} size={58} className="hide-sm" />
        <Garland flowers={6} className="hide-sm" />
        <Lantern length={86} color="#8a2440" className="hide-sm" />
        <ChineseLantern length={30} size={50} className="hide-md" />
      </div>
      <div className="dhero__hangers dhero__hangers--right" aria-hidden="true">
        <ChineseLantern length={30} size={50} className="hide-md" />
        <Lantern length={86} color="#8a2440" className="hide-sm" />
        <Garland flowers={6} className="hide-sm" />
        <ChineseLantern length={120} size={58} className="hide-sm" />
        <ChineseLantern length={70} size={42} className="only-sm" />
        <Lantern length={36} />
        <Garland flowers={9} />
      </div>

      <Rangoli className="dhero__rangoli dhero__rangoli--left" />
      <Rangoli className="dhero__rangoli dhero__rangoli--right" />

      {design === 'celebration' ? (
        <div className="container dhero__content dhero__content--celebration">
          <FestiveBoard />
          <EventDate />
          <p className="dhero__lead">{LEAD}</p>
          <div className="dhero__actions">{actions}</div>
        </div>
      ) : (
        <div className="container dhero__content">
          <Ornament>NTU India Association</Ornament>
          <h1 className="dhero__title">Jashn-e-Diwali 2026</h1>
          <p className="dhero__script">Festival of Lights in Taipei</p>
          <EventDate />
          <p className="dhero__lead">{LEAD}</p>
          <div className="dhero__actions">{actions}</div>
        </div>
      )}

      <Diya size={92} className="dhero__diya dhero__diya--left" />
      <Diya size={92} className="dhero__diya dhero__diya--right" />
      {motion.has('petals') && <PetalShower />}
    </section>
  )
}
