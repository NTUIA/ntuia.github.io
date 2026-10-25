import { useEffect, useRef, useState } from 'react'
import { CampusArtGroup, TAIPEI_101 } from '../festive/Decorations.jsx'
import {
  CIEN_PAGODA, ELUANBI_LIGHTHOUSE, GATEWAY_OF_INDIA, HOWRAH_BRIDGE, INDIA_CITIES, INDIA_ISLANDS, INDIA_PATH,
  LIGHTHOUSE_BEAMS, MEENAKSHI_GOPURAM, PLANE, TAIWAN_PATH, TAIWAN_PLACES, TAJ_MAHAL,
} from './journeyArt.js'

// The story, in order. `ms` is how long each scene stays on screen.
const SCENES = [
  { id: 'globe', tag: 'The journey', title: 'Every NTUIA story begins with a journey', ms: 3800 },
  { id: 'india', tag: 'India', title: 'Home, from the Himalayas to Kanyakumari', ms: 3600 },
  { id: 'taj', kind: 'india', city: 'agra', art: TAJ_MAHAL, tag: 'North · Agra', title: 'Taj Mahal', ms: 3400 },
  { id: 'gateway', kind: 'india', city: 'mumbai', art: GATEWAY_OF_INDIA, tag: 'West · Mumbai', title: 'Gateway of India', ms: 3400 },
  { id: 'howrah', kind: 'india', city: 'kolkata', art: HOWRAH_BRIDGE, tag: 'East · Kolkata', title: 'Howrah Bridge', ms: 3400 },
  { id: 'gopuram', kind: 'india', city: 'madurai', art: MEENAKSHI_GOPURAM, tag: 'South · Madurai', title: 'Meenakshi Temple', ms: 3400 },
  { id: 'flight', tag: 'Departure', title: 'New Delhi to Taipei, about 4,400 km', ms: 4400 },
  { id: 't101', kind: 'taiwan', place: 'taipei', tag: 'North Taiwan · Taipei', title: 'Taipei 101', ms: 3400 },
  { id: 'pagoda', kind: 'taiwan', place: 'sunmoon', art: CIEN_PAGODA, tag: 'Central Taiwan · Nantou', title: 'Ci’en Pagoda, Sun Moon Lake', ms: 3400 },
  { id: 'lighthouse', kind: 'taiwan', place: 'kenting', art: ELUANBI_LIGHTHOUSE, tag: 'South Taiwan · Pingtung', title: 'Eluanbi Lighthouse, Kenting', ms: 3600 },
  { id: 'ntu', tag: 'Arrival · Taipei', title: 'National Taiwan University, our home away from home', ms: 7500 },
]

// Screen positions for the flight scene (India and Taiwan maps placed side by side).
const INDIA_FLIGHT = { x: 10, y: 96, s: 0.6 }
const TAIWAN_FLIGHT = { x: 470, y: 60, s: 0.85 }
const delhi = INDIA_CITIES.delhi.at
const taipei = TAIWAN_PLACES.taipei.at
const FROM = [INDIA_FLIGHT.x + delhi[0] * INDIA_FLIGHT.s, INDIA_FLIGHT.y + delhi[1] * INDIA_FLIGHT.s]
const TO = [TAIWAN_FLIGHT.x + taipei[0] * TAIWAN_FLIGHT.s, TAIWAN_FLIGHT.y + taipei[1] * TAIWAN_FLIGHT.s]
const ROUTE = `M${FROM[0].toFixed(1)} ${FROM[1].toFixed(1)} C200 -10, 420 -20, ${TO[0].toFixed(1)} ${TO[1].toFixed(1)}`

const GLOBE_S = 0.22
const GLOBE_DELHI = [238 + delhi[0] * GLOBE_S, 92 + delhi[1] * GLOBE_S].map((v) => +v.toFixed(1))

const T101_S = 0.36
const T101_TRANSFORM = `translate(${-165 * T101_S} ${-637 * T101_S}) scale(${T101_S})`

// Andaman & Nicobar and Lakshadweep, drawn wherever the India map appears.
function Islands({ className = 'j-map' }) {
  return INDIA_ISLANDS.map(([cx, cy, rx, ry], i) => <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} className={className} />)
}

function Strokes({ list, step = 0.06 }) {
  return list.map((d, i) => (
    <path key={i} d={d} pathLength="1" className="j-draw" style={{ '--delay': `${i * step}s` }} />
  ))
}

function reducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export default function JourneyStory() {
  const [index, setIndex] = useState(() => (reducedMotion() ? SCENES.length - 1 : 0))
  const [paused, setPaused] = useState(reducedMotion)
  const routeRef = useRef(null)
  const planeRef = useRef(null)
  const scene = SCENES[index]

  // Advance to the next scene.
  useEffect(() => {
    if (paused) return undefined
    const t = setTimeout(() => setIndex((i) => (i + 1) % SCENES.length), scene.ms)
    return () => clearTimeout(t)
  }, [index, paused, scene.ms])

  // Fly the plane along the route during the departure scene.
  useEffect(() => {
    const route = routeRef.current
    const plane = planeRef.current
    if (!route || !plane) return undefined
    const len = route.getTotalLength()
    const place = (t) => {
      const p = route.getPointAtLength(len * t)
      const q = route.getPointAtLength(Math.min(len, len * t + 1))
      const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI
      plane.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${angle.toFixed(1)})`)
    }
    if (scene.id !== 'flight') {
      place(0)
      return undefined
    }
    let raf = 0
    const start = performance.now() + 500
    const dur = 3200
    const tick = (now) => {
      const t = Math.min(1, Math.max(0, (now - start) / dur))
      place(t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [scene.id])

  const on = (cond) => (cond ? 'j-layer is-on' : 'j-layer')

  return (
    <figure className={`journey ${paused ? 'is-paused' : ''}`}>
      <svg className="journey__svg" viewBox="0 0 600 300" role="img" aria-label={`Animated journey from India to National Taiwan University. Now showing: ${scene.title}`}>
        <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* 1. Globe */}
          <g className={on(scene.id === 'globe')}>
            <circle cx="300" cy="150" r="126" className="j-faint" />
            <circle cx="300" cy="150" r="118" pathLength="1" className="j-draw" />
            {[0, 1, 2, 3, 4].map((i) => (
              <ellipse key={i} cx="300" cy="150" rx="118" ry="118" className="j-meridian" style={{ animationDelay: `${-i * 1.4}s` }} />
            ))}
            {[-80, -40, 0, 40, 80].map((d) => {
              const half = Math.sqrt(118 * 118 - d * d)
              return <path key={d} d={`M${300 - half} ${150 + d} H${300 + half}`} className="j-faint" />
            })}
            <path d={INDIA_PATH} transform={`translate(238 92) scale(${GLOBE_S})`} className="j-land" />
            <path d={TAIWAN_PATH} transform="translate(346 104) scale(0.16)" className="j-land" />
            <path d={`M${GLOBE_DELHI[0]} ${GLOBE_DELHI[1]} Q310 60 352 110`} className="j-route" pathLength="1" />
            <circle cx={GLOBE_DELHI[0]} cy={GLOBE_DELHI[1]} r="4" className="j-dot j-dot--saffron" />
            <circle cx="352" cy="110" r="4" className="j-dot j-dot--red" />
          </g>

          {/* 2. India, full map with cities */}
          <g className={on(scene.id === 'india')} transform="translate(183 20)">
            <path d={INDIA_PATH} pathLength="1" className="j-draw j-draw--slow" />
            <g className="j-pop" style={{ '--delay': '2s' }}><Islands className="j-island" /></g>
            {['delhi', 'mumbai', 'kolkata', 'madurai'].map((c, i) => {
              const [x, y] = INDIA_CITIES[c].at
              return (
                <g key={c} className="j-pop" style={{ '--delay': `${1 + i * 0.3}s` }}>
                  <circle cx={x} cy={y} r="4" className="j-dot j-dot--saffron" />
                  <text x={x + 8} y={y + 4} className="j-label">{INDIA_CITIES[c].name}</text>
                </g>
              )
            })}
          </g>

          {/* 3. Small India map shared by the landmark scenes */}
          <g className={on(scene.kind === 'india')} transform="translate(14 104) scale(0.56)">
            <path d={INDIA_PATH} className="j-map" />
            <Islands />
            {['agra', 'mumbai', 'kolkata', 'madurai'].map((c) => {
              const [x, y] = INDIA_CITIES[c].at
              const active = scene.city === c
              return (
                <g key={c}>
                  {active && <circle cx={x} cy={y} r="14" className="j-pulse" />}
                  <circle cx={x} cy={y} r={active ? 7 : 4.5} className={`j-dot ${active ? 'j-dot--saffron' : 'j-dot--muted'}`} />
                </g>
              )
            })}
          </g>

          {/* 4. India landmarks */}
          {SCENES.filter((s) => s.kind === 'india').map((s) => (
            <g key={s.id} className={on(scene.id === s.id)} transform="translate(392 268)">
              <Strokes list={s.art} />
            </g>
          ))}

          {/* 5. Flight */}
          <g className={on(scene.id === 'flight')}>
            <g transform={`translate(${INDIA_FLIGHT.x} ${INDIA_FLIGHT.y}) scale(${INDIA_FLIGHT.s})`}>
              <path d={INDIA_PATH} className="j-map" />
              <Islands />
            </g>
            <path d={TAIWAN_PATH} transform={`translate(${TAIWAN_FLIGHT.x} ${TAIWAN_FLIGHT.y}) scale(${TAIWAN_FLIGHT.s})`} className="j-map" />
            <path ref={routeRef} d={ROUTE} pathLength="1" className="j-draw j-route-draw" />
            <circle cx={FROM[0]} cy={FROM[1]} r="5" className="j-dot j-dot--saffron" />
            <circle cx={TO[0]} cy={TO[1]} r="5" className="j-dot j-dot--red" />
            <text x={FROM[0] - 10} y={FROM[1] + 22} className="j-label">New Delhi</text>
            <text x={TO[0] - 50} y={TO[1] - 14} className="j-label">Taipei</text>
            <path ref={planeRef} d={PLANE} className="j-plane" />
          </g>

          {/* 6. Small Taiwan map shared by the Taiwan scenes */}
          <g className={on(scene.kind === 'taiwan')} transform="translate(60 34)">
            <path d={TAIWAN_PATH} className="j-map" />
            {Object.entries(TAIWAN_PLACES).map(([k, p]) => {
              const active = scene.place === k
              return (
                <g key={k}>
                  {active && <circle cx={p.at[0]} cy={p.at[1]} r="9" className="j-pulse" />}
                  <circle cx={p.at[0]} cy={p.at[1]} r={active ? 5 : 3.5} className={`j-dot ${active ? 'j-dot--red' : 'j-dot--muted'}`} />
                  {active && <text x={p.at[0] + 10} y={p.at[1] + 4} className="j-label">{p.name}</text>}
                </g>
              )
            })}
          </g>

          {/* 7. Taiwan landmarks */}
          <g className={on(scene.id === 't101')} transform="translate(410 268)">
            <g className="j-rise">
              <g transform={T101_TRANSFORM} strokeWidth={1.6 / T101_S}>
                <path d={TAIPEI_101.shade} fill="currentColor" stroke="none" opacity=".14" />
                <path d={TAIPEI_101.line} />
                <circle cx="148" cy="520" r="7" />
                <circle cx="184" cy="520" r="7" />
              </g>
            </g>
            <path d="M-120 0 H120" pathLength="1" className="j-draw" />
          </g>
          {SCENES.filter((s) => s.kind === 'taiwan' && s.art).map((s) => (
            <g key={s.id} className={on(scene.id === s.id)} transform="translate(410 262)">
              <Strokes list={s.art} />
              {s.id === 'lighthouse' && LIGHTHOUSE_BEAMS.map((d) => <path key={d} d={d} className="j-beam" />)}
            </g>
          ))}

          {/* 8. NTU, the destination */}
          <g className={on(scene.id === 'ntu')}>
            <svg x="0" y="26" width="600" height="252" viewBox="420 0 610 256">
              <g className="j-reveal"><CampusArtGroup /></g>
            </svg>
          </g>
        </g>
      </svg>

      <figcaption className="journey__caption">
        <span className="journey__tag">{scene.tag}</span>
        <span className="journey__title">{scene.title}</span>
      </figcaption>

      <div className="journey__controls">
        <button
          type="button"
          className="journey__pause"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play the journey' : 'Pause the journey'}
        >
          {paused ? '▶' : '❚❚'}
        </button>
        <ol className="journey__steps">
          {SCENES.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                className={i === index ? 'is-current' : i < index ? 'is-done' : ''}
                onClick={() => setIndex(i)}
                aria-label={`Show ${s.title}`}
                aria-current={i === index ? 'step' : undefined}
              >
                {i === index && <span key={index} className="journey__fill" style={{ animationDuration: `${s.ms}ms` }} />}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  )
}
