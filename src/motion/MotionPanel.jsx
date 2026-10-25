import { useState } from 'react'
import { DESIGNS, EFFECTS, PRESETS, useMotion } from './effects.js'

export default function MotionPanel() {
  const [open, setOpen] = useState(false)
  const motion = useMotion()

  return (
    <div className="motion-panel">
      {open && (
        <div className="motion-panel__card" role="dialog" aria-label="Motion graphics settings">
          <div className="motion-panel__head">
            <strong>Design and motion</strong>
            <button className="motion-panel__close" onClick={() => setOpen(false)} aria-label="Close">×</button>
          </div>
          <p className="motion-panel__label">Design</p>
          <div className="motion-panel__presets motion-panel__presets--3" role="radiogroup" aria-label="Design">
            {Object.entries(DESIGNS).map(([key, d]) => (
              <button
                key={key}
                role="radio"
                aria-checked={motion.design === key}
                className={motion.design === key ? 'is-active' : ''}
                onClick={() => motion.setDesign(key)}
                title={d.hint}
              >
                {d.label}
              </button>
            ))}
          </div>
          <p className="motion-panel__label">Motion</p>
          <div className="motion-panel__presets" role="radiogroup" aria-label="Preset">
            {Object.entries(PRESETS).map(([key, p]) => (
              <button
                key={key}
                role="radio"
                aria-checked={motion.preset === key}
                className={motion.preset === key ? 'is-active' : ''}
                onClick={() => motion.setPreset(key)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <ul className="motion-panel__list">
            {EFFECTS.map((e) => (
              <li key={e.key}>
                <label>
                  <input type="checkbox" checked={motion.has(e.key)} onChange={() => motion.toggle(e.key)} />
                  <span>
                    {e.label}
                    <small>{e.hint}</small>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button className="motion-panel__fab" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        ✦ {DESIGNS[motion.design].label} · {motion.preset !== 'custom' ? PRESETS[motion.preset].label : 'Custom'}
      </button>
    </div>
  )
}
