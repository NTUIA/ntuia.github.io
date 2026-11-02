import { greetings } from '../../data/diwaliProgram.js'

const ROWS = 4

// "Happy Diwali" in 23 languages drifting behind the banner. Each row slides the
// opposite way to the one above it, and the words twinkle one after another.
export default function DiwaliGreetings() {
  const rows = Array.from({ length: ROWS }, (_, r) => greetings.filter((_, i) => i % ROWS === r))
  return (
    <div className="dgreet" aria-hidden="true">
      {rows.map((row, r) => (
        <div key={r} className={`dgreet__row dgreet__row--${r % 2 ? 'right' : 'left'}`} style={{ '--row': r }}>
          {[...row, ...row, ...row, ...row].map((g, i) => (
            <span key={i} lang={g.lang} dir="auto" style={{ '--i': (i * 3 + r) % 7 }}>{g.text}</span>
          ))}
        </div>
      ))}
    </div>
  )
}
