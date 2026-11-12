import CarnivalFeatures from './CarnivalFeatures.jsx'
import { useEffect, useRef, useState } from 'react'
import { dj, highlights, mains, performances, moreActsComing, sharedDishes, welcome } from '../../data/diwaliProgram.js'
import { events } from '../../data/events.js'
import { Diya } from './Decorations.jsx'

// Things that slide in as they scroll into view. Children of the same parent
// come in one after another.
const REVEAL = '.dsec__head, .perf, .perfs__head, .calls__head, .call, .dcard, .chalk-steps, .chalk-intro, .chalk-head, .chalk-dish, .chalk-tabs, .chalk-warn, .ddetails > *, .ddetails__facts > div'

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
          Classical grace, Bollywood energy, live ukulele and tabla, and a DJ night to close. Meet the performers taking the stage.
        </Heading>
        <DjNight />
        <Performances />
      </div>
    </section>
  )
}

// The stage line-up in the look of the performer posters: aged paper, the
// performers' photo with their names, then the write-up in English and Chinese.
// Acts still to be announced show as one teaser card after the confirmed ones.
function Performances() {
    return (
    <div className="perfs">
      <div className="perfs__head">
        <p className="perfs__script">Performances</p>
        <p className="perfs__count">{moreActsComing ? 'More acts to be announced' : `${performances.length} acts on the night`}</p>
      </div>
      {performances.map((p) => (
        <article key={p.key} className={`perf perf--${p.key}`} aria-labelledby={`perf-${p.key}`}>
          <span className="perf__sparks" aria-hidden="true"><i /><i /><i /><i /><i /></span>
          <figure className="perf__photo">
            <img src={p.image} alt={p.alt || `${p.performers.join(' and ')} in costume for ${p.title}`} width="1100" height="734" loading="lazy" />
          </figure>
          <div className="perf__body">
            <h3 id={`perf-${p.key}`}>“{p.title}”</h3>
            <p className="perf__sub">{p.type || 'Dance Performance'}</p>
            <p className="perf__by">Performed by <strong>{p.performers.join(' & ')}</strong></p>
            {p.guide && (
              <p className="perf__guide">
                Under the guidance of{' '}
                <a href={p.guide.link} target="_blank" rel="noopener noreferrer"><strong>{p.guide.name}</strong> <span lang="zh-Hant">({p.guide.zh})</span></a>
                , {p.guide.note}
              </p>
            )}
            <p className="perf__text">{p.text}</p>
            <p className="perf__zh" lang="zh-Hant">{p.zh}</p>
          </div>
        </article>
      ))}
      {moreActsComing && (
        <article className="perf perf--soon" aria-labelledby="perf-soon">
          <span className="perf__sparks" aria-hidden="true"><i /><i /><i /><i /><i /></span>
          <div className="perf__mystery" aria-hidden="true">
            <span>?</span>
          </div>
          <div className="perf__body">
            <p className="perf__num">Coming soon</p>
            <h3 id="perf-soon">More performers on the way</h3>
            <p className="perf__sub">Stay tuned</p>
            <p className="perf__text">More performers are joining the Diwali stage. Watch this space for the reveal.</p>
            <p className="perf__zh" lang="zh-Hant">更多精彩表演即將登場，敬請期待！</p>
          </div>
        </article>
      )}
    </div>
  )
}

// Rising light pixels (left %, delay, duration) and equaliser bar delays.
const PIXELS = [[6, 0, 5], [14, 2.1, 6.5], [23, 0.8, 4.6], [34, 3.2, 5.8], [46, 1.4, 6.2], [55, 4, 5], [63, 0.4, 5.6], [71, 2.7, 4.8], [79, 1.1, 6.8], [88, 3.6, 5.2], [95, 0.2, 6]]
const EQ = [0, 0.35, 0.15, 0.5, 0.25, 0.6, 0.1]

// DJ night feature in the look of the DJ poster: dark stage, orange glow and a
// moving grid floor behind the DJ's cut-out photo.
function DjNight() {
  const ref = useRef(null)
  // Plays the entrance once the panel scrolls into view, then lets the photo and
  // glow drift with the scroll (--p runs from 1 below the fold to -1 above it).
  useEffect(() => {
    const el = ref.current
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect() }
    }, { threshold: 0.25 })
    io.observe(el)
    let frame = 0
    const drift = () => {
      frame = 0
      const r = el.getBoundingClientRect()
      const p = (r.top + r.height / 2 - innerHeight / 2) / (innerHeight / 2 + r.height / 2)
      el.style.setProperty('--p', Math.max(-1, Math.min(1, p)).toFixed(3))
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(drift) }
    drift()
    addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); removeEventListener('scroll', onScroll); cancelAnimationFrame(frame) }
  }, [])
  const diwali = events.find((e) => e.slug === 'jashn-e-diwali-2026')
  const day = diwali?.date ? diwali.date.slice(2).split('-').reverse().join('.') : 'TBA'
  const start = diwali?.time?.split('–')[0].trim()
  return (
    <article ref={ref} className="djnight" aria-label={`DJ night with ${dj.name}`}>
      <div className="djnight__floor" aria-hidden="true" />
      <div className="djnight__glow" aria-hidden="true" />
      <div className="djnight__beams" aria-hidden="true"><span /><span /></div>
      <div className="djnight__pixels" aria-hidden="true">
        {PIXELS.map(([x, d, s], i) => <span key={i} style={{ '--x': `${x}%`, '--d': `${d}s`, '--s': `${s}s` }} />)}
      </div>
      <div className="djnight__copy">
        <p className="djnight__guest">Guest DJ</p>
        <h3 className="djnight__name">{dj.name}</h3>
        <p className="djnight__kicker">{dj.kicker}</p>
        <p className="djnight__text">{dj.text}</p>
        <div className="djnight__panel">
          <div><span>Event</span><strong>Diwali</strong></div>
          <div><span>Venue</span><strong>NTU</strong></div>
          <div className="djnight__eq" aria-hidden="true">{EQ.map((d, i) => <span key={i} style={{ '--d': `${d}s` }} />)}</div>
          <p className="djnight__when"><b>{day}</b>{start && <> <i aria-hidden="true">|</i> {start}</>}</p>
        </div>
        <a className="djnight__ig" href={dj.link} target="_blank" rel="noreferrer">Meet the DJ {dj.handle} <span aria-hidden="true">↗</span></a>
      </div>
      <img className="djnight__photo" src={dj.image} alt={`${dj.name} wearing headphones`} width="900" height="846" loading="lazy" />
    </article>
  )
}

// A dish photo in a hand-drawn chalk ring, with its name and Chinese name under it.
// The ring draws itself and the photo pops in as the dish scrolls into view.
function ChalkDish({ name, zh, image, size }) {
  return (
    <figure className={`chalk-dish${size ? ` chalk-dish--${size}` : ''}`}>
      <div className="chalk-dish__ring">
        <svg className="chalk-dish__chalk" viewBox="0 0 200 200" aria-hidden="true">
          <path className="chalk-dish__line" pathLength="1" d="M100 6 C 152 4, 196 46, 194 100 C 192 154, 150 196, 98 194 C 46 192, 4 152, 6 98 C 8 50, 46 8, 104 8" />
          <path className="chalk-dish__dots" d="M100 14 C 146 13, 187 52, 186 101 C 185 150, 148 186, 99 186 C 52 186, 13 150, 14 100 C 15 55, 50 16, 96 15" />
        </svg>
        <img src={image} alt={name} width="640" height="640" loading="lazy" />
      </div>
      <figcaption>
        <strong>{name}</strong>
        <span lang="zh-Hant">{zh}</span>
      </figcaption>
    </figure>
  )
}

// Food section in the look of the Instagram menu: a chalkboard with the dish photos
// in chalk rings, white marker headings and yellow chalk accents.
export function DiwaliMenu() {
  const [tab, setTab] = useState('veg')
  const tabs = [['veg', 'Vegetarian mains', '素食主菜'], ['nonveg', 'Non-vegetarian mains', '葷食主菜']]
  const starters = [{ name: welcome.snack.name, zh: welcome.snack.zhName, image: welcome.snack.image }, ...welcome.drinks]

  return (
    <section className="dsec dsec--food" id="food" aria-label="Food and drink">
      <div className="container">
        <Heading eyebrow="The festival table" title="A festive meal," accent="made to share.">
          Start with a welcome snack at registration, then enjoy the shared dishes with your choice of mains.
        </Heading>

        <div className="chalkboard">
          <ol className="chalk-steps" aria-label="How the meal works">
            <li><b>1</b> Start with a samosa <span lang="zh-Hant">先來一個酥脆咖哩角</span></li>
            <li><b>2</b> Share the feast <span lang="zh-Hant">一起分享滿桌美食</span></li>
            <li><b>3</b> Pick your curry <span lang="zh-Hant">挑一道你最愛的咖哩</span></li>
          </ol>
          <div className="chalk-intro">
            <p className="chalk-intro__q">Why is food the heart of Diwali?</p>
            <p>Because the festival of lights is about sharing light, laughter and a full plate with everyone around you.</p>
            <p lang="zh-Hant">為什麼美食是排燈節的靈魂？因為這個節日的意義，就是和身邊的人分享光明、歡笑與滿滿的美食。</p>
          </div>

          <div className="chalk-block">
            <header className="chalk-head">
              <p className="chalk-tag">first up</p>
              <h3>Welcome at registration</h3>
              <span className="chalk-line" aria-hidden="true" />
            </header>
            <div className="chalk-row chalk-row--three">
              {starters.map((d) => <ChalkDish key={d.name} {...d} />)}
            </div>
          </div>

          <div className="chalk-block">
            <header className="chalk-head">
              <p className="chalk-tag">on every plate</p>
              <h3>Shared dishes</h3>
              <span className="chalk-line" aria-hidden="true" />
            </header>
            <div className="chalk-row chalk-row--four">
              {sharedDishes.map((d) => <ChalkDish key={d.name} {...d} />)}
            </div>
          </div>

          <div className="chalk-block">
            <header className="chalk-head">
              <p className="chalk-tag">your choice</p>
              <h3>Pick your main</h3>
              <span className="chalk-line" aria-hidden="true" />
            </header>
            <div className="chalk-tabs" role="tablist" aria-label="Meal choices">
              {tabs.map(([key, label, zh]) => (
                <button key={key} type="button" role="tab" id={`tab-${key}`} aria-selected={tab === key} aria-controls="dmenu-panel" onClick={() => setTab(key)}>
                  <span className={`dmenu__mark${key === 'nonveg' ? ' dmenu__mark--meat' : ''}`} aria-hidden="true" />
                  {label} <span lang="zh-Hant">{zh}</span>
                </button>
              ))}
            </div>
            <div className="chalk-mains" id="dmenu-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} key={tab}>
              {mains[tab].map((d) => (
                <article key={d.name} className="chalk-main">
                  <ChalkDish name={d.name} zh={d.zhName} image={d.image} size="big" />
                  <div className="chalk-main__text">
                    <p className="chalk-main__sub">{d.sub}</p>
                    <p>{d.text}</p>
                    <p lang="zh-Hant" className="chalk-main__zh">{d.zh}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="chalk-warn">Warning: this menu may cause sudden hunger.<span lang="zh-Hant">警告：看完這份菜單可能會突然肚子餓！</span></p>
          <p className="chalk-note">Images and portions are for reference only. Recipes and spice levels may vary; please ask our team about allergens.<br /><span lang="zh-Hant">圖片及份量僅供參考，實際餐點以現場為準。如有過敏或飲食需求，請洽服務人員。</span></p>
        </div>
      </div>
    </section>
  )
}

export function DiwaliCarnival() {
  return (
    <section className="dsec" id="carnival" aria-label="The carnival">
      <div className="container">
        <Heading eyebrow="The carnival" title="A little colour." accent="A little wonder.">
          Explore between performances. Get a henna design, ask the tarot cards, and grab something tasty to snack on.
        </Heading>
        <CarnivalFeatures />
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
