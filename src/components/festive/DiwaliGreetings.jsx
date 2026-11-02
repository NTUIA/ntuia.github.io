import { greetings as all } from '../../data/diwaliProgram.js'

// Some languages write "Happy Diwali" the same way (Hindi, Nepali and Maithili,
// for example), so each wording is shown only once. Arabic vowel marks are
// ignored, so Urdu and Kashmiri count as the same too.
const greetings = all.filter((g, i) => {
  const plain = (t) => t.replace(/[\u064B-\u0652]/g, '')
  return all.findIndex((o) => plain(o.text) === plain(g.text)) === i
})

// Same numbers on every visit, so the words never jump around on reload.
function seeded(seed) {
  return () => {
    seed = (seed * 16807) % 2147483647
    return (seed - 1) / 2147483646
  }
}

// Spreads the words over a grid, nudged off-centre inside each cell so they
// look scattered but never pile up. Phones get a narrower, taller grid.
function scatter(cols, rows, seed) {
  const rand = seeded(seed)
  const cells = Array.from({ length: cols * rows }, (_, i) => i)
  for (let i = cells.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[cells[i], cells[j]] = [cells[j], cells[i]]
  }
  return greetings.map((_, i) => {
    const c = cells[i % cells.length]
    return {
      x: ((c % cols) + 0.2 + rand() * 0.6) / cols * 100,
      y: (Math.floor(c / cols) + 0.15 + rand() * 0.7) / rows * 100,
    }
  })
}

// On big screens the words stay in the two side bands, clear of the board and
// the text. Left words are pinned by their left edge, right words by their right.
function sides(rows, seed) {
  return scatter(4, rows, seed).map(({ x, y }) => {
    const right = x >= 50
    const band = (x % 50) / 50
    return { x: right ? 100 - (2 + band * 20) : 2 + band * 20, y, right }
  })
}

const desk = sides(7, 5)
const wide = scatter(6, 5, 7)
const phone = scatter(3, 10, 11)
const look = (() => {
  const rand = seeded(23)
  return greetings.map(() => ({
    size: (0.8 + rand() * 0.7).toFixed(2),
    tilt: Math.round(rand() * 16 - 8),
    float: (9 + rand() * 8).toFixed(1),
    delay: (-rand() * 20).toFixed(1),
    blink: (-rand() * 14).toFixed(1),
  }))
})()

// "Happy Diwali" in many languages scattered behind the banner. Each word
// drifts on its own and lights up now and then.
export default function DiwaliGreetings() {
  return (
    <div className="dgreet" aria-hidden="true">
      {greetings.map((g, i) => (
        <span
          key={g.lang}
          className={`dgreet__w${desk[i].right ? ' dgreet__w--right' : ''}`}
          style={{
            '--dx': `${desk[i].x}%`, '--dy': `${desk[i].y}%`,
            '--x': `${wide[i].x}%`, '--y': `${wide[i].y}%`,
            '--px': `${phone[i].x}%`, '--py': `${phone[i].y}%`,
            '--size': look[i].size, '--tilt': `${look[i].tilt}deg`,
            '--float': `${look[i].float}s`, '--delay': `${look[i].delay}s`, '--blink': `${look[i].blink}s`,
          }}
        >
          <span lang={g.lang} dir="auto">{g.text}</span>
        </span>
      ))}
    </div>
  )
}
