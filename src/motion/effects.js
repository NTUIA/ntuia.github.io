import { createContext, useContext } from 'react'

// Every motion graphic on the site. Each one can be switched on or off.
export const EFFECTS = [
  { key: 'greeting', label: 'Taipei 101 light show', hint: 'The tower spells HAPPY DIWALI with fireworks, like its New Year show' },
  { key: 'scrollUnroll', label: 'Unrolling scroll', hint: 'The board unrolls from the centre when the page opens (click it to replay)' },
  { key: 'scrollWave', label: 'Waving scroll', hint: 'The board sways like cloth, with ripples of light' },
  { key: 'twinkle', label: 'Twinkling lights', hint: 'Fairy lights and sparkles glow on and off' },
  { key: 'flicker', label: 'Diya flames', hint: 'Oil-lamp flames flicker softly' },
  { key: 'sway', label: 'Swaying lanterns', hint: 'Lanterns and marigold garlands sway in the breeze' },
  { key: 'skyLanterns', label: 'Rising sky lanterns', hint: 'Pingxi-style lanterns drift up, a Taiwan touch' },
  { key: 'rangoli', label: 'Spinning rangoli', hint: 'Corner rangoli turns slowly' },
  { key: 'petals', label: 'Marigold petal shower', hint: 'Petals float down across the hero' },
  { key: 'fireworks', label: 'Fireworks', hint: 'Phuljhari-style bursts in the sky' },
]

export const PRESETS = {
  off: { label: 'Off', effects: [] },
  subtle: { label: 'Subtle', effects: ['scrollUnroll', 'greeting', 'twinkle', 'flicker', 'sway'] },
  festive: { label: 'Festive', effects: ['scrollUnroll', 'scrollWave', 'greeting', 'twinkle', 'flicker', 'sway', 'skyLanterns', 'rangoli'] },
  grand: { label: 'Grand', effects: EFFECTS.map((e) => e.key) },
}

// Site-wide default. Change to 'subtle', 'grand' or 'off' to pick what visitors see first.
export const DEFAULT_PRESET = 'festive'

// Hero design options. Visitors can switch in the Motion panel; DEFAULT_DESIGN is what they see first.
export const DESIGNS = {
  celebration: { label: 'Scroll', hint: 'Title on a festive gold scroll' },
  classic: { label: 'Classic', hint: 'Lanterns, diyas and rangoli on cream' },
  night: { label: 'Night', hint: 'Glowing lights under a Taipei night sky' },
}
export const DEFAULT_DESIGN = 'celebration'

export const MotionContext = createContext(null)

export function useMotion() {
  return useContext(MotionContext)
}
