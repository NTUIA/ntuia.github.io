import { useEffect, useState } from 'react'
import { carnival, highlights, mains, sharedDishes, stage, welcome } from '../../data/diwaliProgram.js'
import { programArt, Samosa } from './ProgramArt.jsx'

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
  ['#get-involved', 'Get involved'],
  ['#stage', 'Stage'],
  ['#food', 'Food'],
  ['#carnival', 'Carnival'],
  ['#details', 'Event details'],
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

function Heading({ num, eyebrow, title, accent, children }) {
  return (
    <header className="dsec__head">
      <div>
        <p className="dsec__eyebrow"><span>{num}</span>{eyebrow}</p>
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
        <Heading num="01" eyebrow="The stage" title="Feel every" accent="beat.">
          A taste of the performances to come. Artists and show times will be announced.
        </Heading>
        <div className="dcards">
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
      </div>
    </section>
  )
}

export function DiwaliMenu() {
  const [tab, setTab] = useState('veg')
  const tabs = [['veg', 'Vegetarian mains'], ['nonveg', 'Non-vegetarian mains']]

  return (
    <section className="dsec dsec--food" id="food" aria-label="Food and drink">
      <div className="container">
        <Heading num="02" eyebrow="The festival table" title="A festive meal," accent="made to share.">
          Start with a welcome snack at registration, then enjoy the shared dishes with your choice of mains.
        </Heading>

        <div className="dmenu__shared">
          <div className="dmenu__shared-head">
            <p className="dcard__kicker">On every plate</p>
            <h3>Included with both meal choices</h3>
          </div>
          <ul>
            {sharedDishes.map((d, i) => (
              <li key={d.name}>
                <span className="dmenu__num">{String(i + 1).padStart(2, '0')}</span>
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
        <Heading num="03" eyebrow="The carnival" title="A little colour." accent="A little wonder.">
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
