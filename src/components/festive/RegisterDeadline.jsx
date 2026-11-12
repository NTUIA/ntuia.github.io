import { useEffect, useState } from 'react'
import { deadlineExtended, registrationDeadline, registrationFull, registrationOpen } from '../../data/diwaliForms.js'

// Registration closes at the end of the deadline day, Taiwan time.
const CLOSES = new Date(`${registrationDeadline}T23:59:59+08:00`).getTime()
const DAY = 24 * 60 * 60 * 1000

const pad = (n) => String(n).padStart(2, '0')

// "Registration closes" card with the deadline date and a live countdown, shown under
// the hero buttons. It hides itself once the deadline has passed.
export default function RegisterDeadline() {
  const [now, setNow] = useState(Date.now)

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  const left = CLOSES - now
  if (registrationFull || !registrationOpen || left <= 0) return null

  const date = new Date(CLOSES)
  const part = (o) => date.toLocaleDateString('en-GB', { timeZone: 'Asia/Taipei', ...o })
  const units = [
    ['Days', Math.floor(left / DAY)],
    ['Hours', Math.floor(left / 3600000) % 24],
    ['Mins', Math.floor(left / 60000) % 60],
    ['Secs', Math.floor(left / 1000) % 60],
  ]

  return (
    <div className={`reg-deadline${left < 2 * DAY ? ' reg-deadline--urgent' : ''}`}>
      {deadlineExtended && <span className="reg-deadline__extended">✨ Deadline extended</span>}
      <div className="reg-deadline__text">
        <span className="reg-deadline__label">Registration closes</span>
        <strong>{part({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</strong>
      </div>
      <div className="reg-deadline__clock" role="timer" aria-label={`${units[0][1]} days ${units[1][1]} hours left to register`}>
        {units.map(([label, value]) => (
          <span key={label} className="reg-deadline__unit" aria-hidden="true">
            <b>{label === 'Days' ? value : pad(value)}</b>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
