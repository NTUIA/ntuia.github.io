import { Link } from 'react-router-dom'
import { useMotion } from '../../motion/effects.js'
import { ChineseLantern, Diya, Garland, Lantern, Ornament, Rangoli, SkyLanterns, Sparkles, StringLights, TaipeiSkyline } from './Decorations.jsx'
import FestiveBoard from './FestiveBoard.jsx'
import Fireworks from './Fireworks.jsx'
import PetalShower from './PetalShower.jsx'

const LEAD =
  'Celebrate Diwali with the Indian community at National Taiwan University. Join us for diyas, rangoli, music, dance, and food, and bring your friends from every corner of Taiwan.'

function DefaultActions() {
  return (
    <>
      <a href="#details" className="btn btn--primary">Event details</a>
      <Link to="/events" className="btn btn--outline">All NTUIA events</Link>
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
      <TaipeiSkyline className="dhero__skyline" />
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
          <p className="dhero__lead">{LEAD}</p>
          <div className="dhero__actions">{actions}</div>
        </div>
      ) : (
        <div className="container dhero__content">
          <Ornament>NTU India Association</Ornament>
          <h1 className="dhero__title">Jashn-e-Diwali 2026</h1>
          <p className="dhero__script">Festival of Lights in Taipei</p>
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
