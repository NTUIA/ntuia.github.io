// Small white icons for each act on the rundown timeline, drawn to sit on the
// orange performance dots. Keys match the performance keys (and 'dj').
const S = { fill: 'none', stroke: '#fff', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' }
const INK = '#8a1c3c'

// Bharatanatyam: a dancer in aramandi (half-sitting, knees out) with the pleated
// fan of the costume, one hand raised in a mudra and her hair in a bun.
function Bharatanatyam() {
  return (
    <>
      <circle cx="16" cy="4.8" r="2.5" fill="#fff" />
      <circle cx="18.4" cy="3.5" r="1.15" fill="#fff" />
      <path fill="#fff" d="M13.4 8.2h5.2l-1.3 6.9h-2.6z" />
      <path {...S} strokeWidth="1.9" d="M13.8 9.2H8.2L6.6 6M18.2 9.2l3.3 3.3 3-3" />
      <path {...S} strokeWidth="2" d="M14.6 15.6 9.6 22.6l1 6.4H7.6M17.4 15.6l5 7-1 6.4h3" />
      <path fill="#fff" d="M14.4 14.8 10.6 23.6q5.4 2.2 10.8 0L17.6 14.8z" />
      <path d="M16 15.6v8.8M13.6 17.4l-1.5 6M18.4 17.4l1.5 6" stroke={INK} strokeWidth="0.7" strokeLinecap="round" />
    </>
  )
}

// Indian Classical Fusion: ghungroo, the ankle bells worn by Indian classical dancers.
function Ghungroo() {
  return (
    <>
      <path {...S} strokeWidth="2.6" d="M4 10c4 4 20 4 24 0" />
      {[[6.5, 15.5], [11, 18], [16, 19], [21, 18], [25.5, 15.5], [8.7, 22.5], [13.4, 24.6], [18.6, 24.6], [23.3, 22.5]].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="2.3" fill="#fff" />
          <path d={`M${x - 1.2} ${y + 0.6}h2.4`} stroke={INK} strokeWidth="0.8" strokeLinecap="round" />
        </g>
      ))}
    </>
  )
}

// Ukulele, tilted like it is being played.
function Ukulele() {
  return (
    <g transform="rotate(38 16 16)">
      <rect x="15" y="1.5" width="2" height="11" fill="#fff" />
      <rect x="14" y="0" width="4" height="3.6" rx="1" fill="#fff" />
      <circle cx="16" cy="16.2" r="5" fill="#fff" />
      <circle cx="16" cy="23.4" r="6.4" fill="#fff" />
      <circle cx="16" cy="18" r="1.9" fill={INK} />
      <rect x="13.3" y="24.4" width="5.4" height="1.4" rx=".6" fill={INK} />
    </g>
  )
}

// Tabla: the tall dayan beside the round bayan, each with its black syahi spot.
function Tabla() {
  return (
    <>
      <path fill="#fff" d="M4 10.5 5.2 27c1 1.3 6.6 1.3 7.6 0L14 10.5z" />
      <ellipse cx="9" cy="10.5" rx="5" ry="2" fill="#fff" stroke={INK} strokeWidth="0.9" />
      <ellipse cx="9" cy="10.5" rx="1.8" ry=".75" fill={INK} />
      <path d="M6.6 13.5l.6 12M11.4 13.5l-.6 12" stroke={INK} strokeWidth="0.8" />
      <path fill="#fff" d="M15.5 16c0 7.5 2.8 11.5 6.75 11.5S29 23.5 29 16z" />
      <ellipse cx="22.25" cy="16" rx="6.75" ry="2.3" fill="#fff" stroke={INK} strokeWidth="0.9" />
      <ellipse cx="20.6" cy="16" rx="2.1" ry=".85" fill={INK} />
    </>
  )
}

// Bollywood Fusion: a dancer mid-twirl, one arm thrown up, skirt flaring, with sparkles.
function Bollywood() {
  return (
    <>
      <circle cx="16.6" cy="4.6" r="2.5" fill="#fff" />
      <path fill="#fff" d="M14.6 8h4.6l-.9 6.9h-3.2z" />
      <path {...S} strokeWidth="1.9" d="M18.6 8.8 22 5.6l2.4-3.4M15 9.2l-3.8 3.4-3.4-.6" />
      <path fill="#fff" d="M14.8 14.3h3.8q6.6 5.4 8.6 11.2-10.4 3.6-20.8 0 3-6.1 8.4-11.2z" />
      <path d="M11 24.6q3.2-4.6 5.6-9.6M16.9 26.4q.4-5.6 0-11M22.8 24.6q-2.6-5-5.2-9.6" fill="none" stroke={INK} strokeWidth="0.75" strokeLinecap="round" />
      <path d="M14 27.6v2.6M19.4 27.6l1.2 2.6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      <path fill="#fff" d="m5.6 3.4.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7zM27 11.4l.55 1.35 1.35.55-1.35.55L27 15.2l-.55-1.35-1.35-.55 1.35-.55z" />
    </>
  )
}

// DJ night: a turntable with its record and tone arm.
function Dj() {
  return (
    <>
      <rect x="3" y="6" width="26" height="20" rx="3" fill="#fff" />
      <circle cx="13.5" cy="16" r="7.4" fill={INK} />
      <circle cx="13.5" cy="16" r="4.6" fill="none" stroke="#fff" strokeOpacity=".35" strokeWidth=".7" />
      <circle cx="13.5" cy="16" r="1.6" fill="#fff" />
      <circle cx="25" cy="10" r="1.6" fill={INK} />
      <path d="M25 10v8.5l-3.5 2.5" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  )
}

const ICONS = { bharatanatyam: Bharatanatyam, classical: Ghungroo, ukulele: Ukulele, tabla: Tabla, bollywood: Bollywood, dj: Dj }

export function ActIcon({ name }) {
  const Icon = ICONS[name]
  if (!Icon) return null
  return <svg className="rundown__icon" viewBox="0 0 32 32" aria-hidden="true"><Icon /></svg>
}

export const hasActIcon = (name) => Boolean(ICONS[name])
