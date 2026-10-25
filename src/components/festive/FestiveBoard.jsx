import { useState } from 'react'
import { Diya, Ornament, Rangoli } from './Decorations.jsx'

// Quarter-rangoli motif for each corner of the board.
function CornerMotif({ className }) {
  const petals = [0, 22.5, 45, 67.5, 90]
  return (
    <svg className={`board__corner ${className}`} viewBox="0 0 80 80" aria-hidden="true">
      {petals.map((a) => (
        <ellipse key={`o${a}`} cx="34" cy="0" rx="20" ry="7" fill="#6e1631" transform={`rotate(${a})`} />
      ))}
      {petals.map((a) => (
        <ellipse key={`m${a}`} cx="30" cy="0" rx="11" ry="4" fill="#e8730c" transform={`rotate(${a})`} />
      ))}
      {[11.25, 33.75, 56.25, 78.75].map((a) => (
        <ellipse key={`i${a}`} cx="20" cy="0" rx="9" ry="4.5" fill="#f5a524" transform={`rotate(${a})`} />
      ))}
      <circle r="13" fill="#c9962b" />
      <circle r="7" fill="#6e1631" />
      {Array.from({ length: 7 }, (_, i) => {
        const r = ((i * 15 + 0) * Math.PI) / 180
        return <circle key={i} cx={Math.cos(r) * 62} cy={Math.sin(r) * 62} r="2.6" fill="#c9962b" />
      })}
      <path d="M58 4 q14 2 18 14 M4 58 q2 14 14 18" stroke="#c9962b" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function LotusCrest() {
  return (
    <svg className="board__crest" viewBox="-60 -40 120 50" aria-hidden="true">
      <path d="M-56 8 Q0 -4 56 8" stroke="#c9962b" strokeWidth="2.5" fill="none" />
      {[-62, 62].map((a) => (
        <path key={a} d="M0 4 C10 -10 10 -26 0 -36 C-10 -26 -10 -10 0 4Z" fill="#f5a524" transform={`rotate(${a} 0 4)`} />
      ))}
      {[-32, 32].map((a) => (
        <path key={a} d="M0 4 C10 -10 10 -26 0 -36 C-10 -26 -10 -10 0 4Z" fill="#a52a4a" transform={`rotate(${a} 0 4)`} />
      ))}
      <path d="M0 4 C11 -10 11 -28 0 -38 C-11 -28 -11 -10 0 4Z" fill="#6e1631" />
      <path d="M0 -4 C4 -12 4 -22 0 -28 C-4 -22 -4 -12 0 -4Z" fill="#f5a524" />
      <circle cx="0" cy="6" r="4" fill="#c9962b" />
    </svg>
  )
}

// Toran: marigolds and mango leaves hanging from a cord along the top edge.
const TORAN = Array.from({ length: 17 }, (_, i) => i)
function Toran() {
  return (
    <div className="board__toran" aria-hidden="true">
      {TORAN.map((i) => (
        <svg key={i} className="board__toran-item" viewBox="0 0 20 34" style={{ left: `${3 + i * (94 / (TORAN.length - 1))}%` }}>
          <line x1="10" y1="0" x2="10" y2="6" stroke="#7a4a2a" strokeWidth="1" />
          {i % 2 ? (
            <path d="M10 5 C17 12 16 24 10 33 C4 24 3 12 10 5Z M10 8 V30" fill="#3f7a3a" stroke="#2d5a2a" strokeWidth=".8" />
          ) : (
            <g>
              <circle cx="10" cy="13" r="7" fill={i % 4 ? '#e8730c' : '#f5a524'} />
              <circle cx="10" cy="13" r="4" fill="#ffc94d" />
              <circle cx="10" cy="24" r="5" fill={i % 4 ? '#f5a524' : '#e8730c'} />
            </g>
          )}
        </svg>
      ))}
    </div>
  )
}

function Rod({ side }) {
  return (
    <div className={`board__rod board__rod--${side}`} aria-hidden="true">
      <svg className="board__tassel" viewBox="0 0 20 46">
        <line x1="10" y1="0" x2="10" y2="10" stroke="#c9962b" strokeWidth="2" />
        <circle cx="10" cy="12" r="4" fill="#c9962b" />
        <path d="M6 15 h8 l3 28 h-14z" fill="#6e1631" />
        <path d="M8 16 v26 M10 16 v27 M12 16 v26" stroke="#a52a4a" strokeWidth=".8" />
      </svg>
    </div>
  )
}

export default function FestiveBoard() {
  // Changing the key remounts the board, which replays the unroll animation.
  const [play, setPlay] = useState(0)

  return (
    <div className="board" key={play} onClick={() => setPlay((n) => n + 1)} title="Click to unroll again">
      <Rod side="left" />
      <Rod side="right" />
      <div className="board__panel">
        <div className="board__folds" aria-hidden="true" />
        <Toran />
        <LotusCrest />
        <CornerMotif className="board__corner--tl" />
        <CornerMotif className="board__corner--tr" />
        <CornerMotif className="board__corner--bl" />
        <CornerMotif className="board__corner--br" />
        <div className="board__watermark" aria-hidden="true">
          <Rangoli size={300} />
        </div>
        <div className="board__content">
          <Ornament>NTU India Association</Ornament>
          <h1 className="dhero__title board__title">
            <span className="board__title-main">Jashn-e-Diwali</span>
            <span className="board__title-year">2026</span>
          </h1>
          <div className="board__divider" aria-hidden="true">
            <span />
            <Diya size={46} />
            <span />
          </div>
          <p className="dhero__script">Festival of Lights in Taipei</p>
        </div>
      </div>
    </div>
  )
}
