import { useEffect, useState } from 'react'
import { carnival, dj, highlights, mains, sharedDishes, stage, welcome } from '../../data/diwaliProgram.js'
import { events } from '../../data/events.js'
import { programArt, Samosa } from './ProgramArt.jsx'
import { Diya } from './Decorations.jsx'

// Things that slide in as they scroll into view. Children of the same parent
// come in one after another.
const REVEAL = '.dsec__head, .calls__head, .call, .dcard, .dmenu__shared li, .dmenu__shared-head, .dmenu__tabs, .dmenu__welcome, .ddetails > *, .ddetails__facts > div'

export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = [...document.querySelectorAll(REVEAL)]
    const seen = new Map()
    els.forEach((el) => {
      const i = seen.get(el.parentNode) || 0
      seen.set(el.parentNode, i + 1)
      el.style.setProperty('--rv', Math.min(i, 6))
      el.classList.add('rv')
    })
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.add('rv-in')
        io.unobserve(e.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const JUMPS = [
  ['#stage', 'Stage'],
  ['#food', 'Food'],
  ['#carnival', 'Carnival'],
  ['#details', 'Event details'],
  ['#stalls', 'Stalls'],
]

// Sliding strip of highlights under the banner, then quick links to each section.
export function DiwaliHighlights() {
  const items = [...highlights, ...highlights]
  return (
    <>
      <div className="dstrip" aria-label="Festival highlights">
        <ul className="dstrip__track">
          {items.map((h, i) => (
            <li key={i} aria-hidden={i >= highlights.length || undefined}>{h}</li>
          ))}
        </ul>
      </div>
      <nav className="djump" aria-label="On this page">
        <div className="container djump__inner">
          {JUMPS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>
      </nav>
    </>
  )
}

function Heading({ eyebrow, title, accent, children }) {
  return (
    <header className="dsec__head">
      <div>
        <p className="dsec__eyebrow"><Diya size={40} className="dsec__diya" />{eyebrow}</p>
        <h2>{title} <em>{accent}</em></h2>
      </div>
      <p>{children}</p>
    </header>
  )
}

export function DiwaliStage() {
  return (
    <section className="dsec" id="stage" aria-label="The stage">
      <div className="container">
        <Heading eyebrow="The stage" title="Feel every" accent="beat.">
          A taste of the performances to come. Artists and show times will be announced.
        </Heading>
        <div className="dcards dcards--two">
          {stage.map((s) => {
            const Art = programArt[s.key]
            return (
              <article key={s.key} className={`dcard dcard--${s.key}`}>
                <div className="dcard__art"><Art /></div>
                <div className="dcard__body">
                  <p className="dcard__kicker">{s.kicker}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.link
                    ? <a className="dcard__tag dcard__tag--link" href={s.link} target="_blank" rel="noreferrer">{s.tag} <span aria-hidden="true">↗</span></a>
                    : <span className="dcard__tag">{s.tag}</span>}
                </div>
              </article>
            )
          })}
        </div>
        <DjNight />
      </div>
    </section>
  )
}

// DJ night feature in the look of the DJ poster: dark stage, orange glow and a
// moving grid floor behind the DJ's cut-out photo.
function DjNight() {
  const diwali = events.find((e) => e.slug === 'jashn-e-diwali-2026')
  const day = diwali?.date ? diwali.date.slice(2).split('-').reverse().join('.') : 'TBA'
  const start = diwali?.time?.split('–')[0].trim()
  return (
    <article className="djnight" aria-label={`DJ night with ${dj.name}`}>
      <div className="djnight__floor" aria-hidden="true" />
      <div className="djnight__glow" aria-hidden="true" />
      <div className="djnight__copy">
        <p className="djnight__guest">Guest DJ</p>
        <h3 className="djnight__name">{dj.name}</h3>
        <p className="djnight__kicker">{dj.kicker}</p>
        <p className="djnight__text">{dj.text}</p>
        <div className="djnight__panel">
          <div><span>Event</span><strong>Diwali</strong></div>
          <div><span>Venue</span><strong>NTU</strong></div>
          <p className="djnight__when"><b>{day}</b>{start && <> <i aria-hidden="true">|</i> {start}</>}</p>
        </div>
        <a className="djnight__ig" href={dj.link} target="_blank" rel="noreferrer">Meet the DJ {dj.handle} <span aria-hidden="true">↗</span></a>
      </div>
      <img className="djnight__photo" src={dj.image} alt={`${dj.name} wearing headphones`} width="900" height="846" loading="lazy" />
    </article>
  )
}

export function DiwaliMenu() {
  const [tab, setTab] = useState('veg')
  const tabs = [['veg', 'Vegetarian mains'], ['nonveg', 'Non-vegetarian mains']]

  return (
    <section className="dsec dsec--food" id="food" aria-label="Food and drink">
      <div className="container">
        <Heading eyebrow="The festival table" title="A festive meal," accent="made to share.">
          Start with a welcome snack at registration, then enjoy the shared dishes with your choice of mains.
        </Heading>

        <div className="dmenu__shared">
          <div className="dmenu__shared-head">
            <p className="dcard__kicker">On every plate</p>
            <h3>Included with both meal choices</h3>
          </div>
          <ul>
            {sharedDishes.map((d) => (
              <li key={d.name}>
                <strong>{d.name}</strong>
                <span lang="zh-Hant" className="dmenu__zh">{d.zh}</span>
                <small>{d.note}</small>
              </li>
            ))}
          </ul>
        </div>

        <div className="dmenu__tabs" role="tablist" aria-label="Meal choices">
          {tabs.map(([key, label]) => (
            <button key={key} type="button" role="tab" id={`tab-${key}`} aria-selected={tab === key} aria-controls="dmenu-panel" onClick={() => setTab(key)}>
              <span className={`dmenu__mark${key === 'nonveg' ? ' dmenu__mark--meat' : ''}`} aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
        <div className="dmenu__panel" id="dmenu-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
          {mains[tab].map((d) => (
            <article key={d.name} className="dmenu__dish">
              <h3>{d.name}</h3>
              <p className="dmenu__sub">{d.sub} <span lang="zh-Hant">{d.zhName}</span></p>
              <p>{d.text}</p>
              <p lang="zh-Hant" className="dmenu__zhline">{d.zh}</p>
            </article>
          ))}
        </div>

        <div className="dmenu__welcome">
          <div className="dmenu__samosa"><Samosa /></div>
          <div>
            <p className="dcard__kicker">A warm welcome at registration</p>
            <h3>{welcome.snack.name} <span lang="zh-Hant">{welcome.snack.zhName}</span></h3>
            <p>{welcome.snack.text}</p>
            <p lang="zh-Hant" className="dmenu__zhline">{welcome.snack.zh}</p>
            <ul className="dmenu__drinks">
              {welcome.drinks.map((d) => <li key={d.name}>{d.name} <span lang="zh-Hant">{d.zh}</span></li>)}
            </ul>
          </div>
        </div>
        <p className="dmenu__note">Recipes and spice levels may vary. Please check ingredients, dietary needs and allergens with the serving team.</p>
      </div>
    </section>
  )
}

export function DiwaliCarnival() {
  return (
    <section className="dsec" id="carnival" aria-label="The carnival">
      <div className="container">
        <Heading eyebrow="The carnival" title="A little colour." accent="A little wonder.">
          Explore between performances. Find a new look, a playful moment or a little mystery.
        </Heading>
        <div className="dcards dcards--four">
          {carnival.map((c) => {
            const Art = programArt[c.key]
            return (
              <article key={c.key} className={`dcard dcard--${c.key}`}>
                <div className="dcard__art dcard__art--small"><Art /></div>
                <div className="dcard__body">
                  <p className="dcard__kicker">{c.kicker}</p>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Opens the phone's share sheet, or copies the link on computers.
export function ShareButton() {
  const [status, setStatus] = useState('')
  const share = async () => {
    const data = {
      title: 'Jashn-e-Diwali 2026 | NTUIA',
      text: 'Join us for Jashn-e-Diwali 2026 at National Taiwan University!',
      url: 'https://ntuia.org/events/jashn-e-diwali-2026',
    }
    try {
      if (navigator.share) {
        await navigator.share(data)
      } else {
        await navigator.clipboard.writeText(data.url)
        setStatus('Link copied. Share it with your friends!')
      }
    } catch (e) {
      if (e.name !== 'AbortError') setStatus('Copy the page address from your browser to share it.')
    }
  }
  return (
    <>
      <button type="button" className="btn btn--outline" onClick={share}>Share with friends</button>
      <p className="dshare__status" role="status" aria-live="polite">{status}</p>
    </>
  )
}
