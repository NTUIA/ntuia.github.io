import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_DESIGN, DEFAULT_PRESET, DESIGNS, EFFECTS, MotionContext, PRESETS } from './effects.js'

const STORAGE_KEY = 'ntuia-motion'

// Every visitor sees the site's default design and motion (DEFAULT_DESIGN and
// DEFAULT_PRESET in effects.js). Reduced-motion users get no animation.
// A link with ?design=...&motion=... can still preview another option.
function initialState() {
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const preset = reduced ? 'off' : DEFAULT_PRESET
  let state = { preset, effects: PRESETS[preset].effects, design: DEFAULT_DESIGN }
  const params = new URLSearchParams(window.location.search)
  const motion = params.get('motion')
  const design = params.get('design')
  if (motion && PRESETS[motion]) state = { ...state, preset: motion, effects: PRESETS[motion].effects }
  if (design && DESIGNS[design]) state = { ...state, design }
  return state
}

function presetFor(effects) {
  const match = Object.entries(PRESETS).find(
    ([, p]) => p.effects.length === effects.length && p.effects.every((k) => effects.includes(k)),
  )
  return match ? match[0] : 'custom'
}

export default function MotionProvider({ children }) {
  const [state, setState] = useState(initialState)

  // Expose each active effect as an fx-* class on <html> so CSS can animate it.
  useEffect(() => {
    const root = document.documentElement
    EFFECTS.forEach(({ key }) => root.classList.toggle(`fx-${key}`, state.effects.includes(key)))
    try {
      localStorage.removeItem(STORAGE_KEY) // clear choices saved by the old motion button
    } catch {
      // Storage unavailable: nothing to clear.
    }
  }, [state])

  const value = useMemo(
    () => ({
      preset: state.preset,
      effects: state.effects,
      design: state.design,
      has: (key) => state.effects.includes(key),
      setDesign: (design) => setState((s) => ({ ...s, design })),
      setPreset: (preset) => setState((s) => ({ ...s, preset, effects: PRESETS[preset].effects })),
      toggle: (key) =>
        setState((s) => {
          const effects = s.effects.includes(key) ? s.effects.filter((k) => k !== key) : [...s.effects, key]
          return { ...s, preset: presetFor(effects), effects }
        }),
    }),
    [state],
  )

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
}
