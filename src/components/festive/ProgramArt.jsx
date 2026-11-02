// Line drawings for the Diwali programme cards. They use currentColor so each
// card sets the ink colour, and the .art-sway / .art-glow parts animate gently.

function Dance() {
  return (
    <svg viewBox="0 0 400 280" aria-hidden="true">
      <circle cx="200" cy="140" r="104" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle className="art-spin" cx="200" cy="140" r="88" fill="none" stroke="currentColor" strokeDasharray="2 9" />
      <g className="art-sway">
        <circle cx="204" cy="72" r="15" fill="currentColor" />
        <path d="M200 92L177 145L126 205Q196 234 266 202L222 145L217 96M190 103L143 116L112 80M220 104L264 72L278 33M197 217L179 258M222 216L246 252" fill="currentColor" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function Music() {
  return (
    <svg viewBox="0 0 400 280" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle className="art-spin" cx="200" cy="140" r="100" strokeDasharray="2 9" />
        <ellipse cx="160" cy="135" rx="45" ry="18" />
        <path d="M115 135L125 216Q160 240 195 216L205 135M126 151L139 221M145 155L150 226M178 153L171 226M193 150L184 222" />
        <ellipse cx="247" cy="167" rx="38" ry="14" />
        <path d="M209 167L216 229Q247 248 278 229L285 167M224 180L232 233M267 180L262 234" />
        <g className="art-float">
          <path d="M125 81V47L144 41V72M257 90V50L283 43V82" />
          <ellipse cx="119" cy="82" rx="6" ry="4" fill="currentColor" />
          <ellipse cx="138" cy="73" rx="6" ry="4" fill="currentColor" />
          <ellipse cx="251" cy="91" rx="6" ry="4" fill="currentColor" />
          <ellipse cx="277" cy="83" rx="6" ry="4" fill="currentColor" />
        </g>
      </g>
    </svg>
  )
}

function Dj() {
  return (
    <svg viewBox="0 0 400 280" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="200" cy="140" r="100" />
        <path d="M110 190H290V233H110Z" />
        <circle className="art-spin" cx="151" cy="211" r="14" strokeDasharray="6 4" />
        <circle className="art-spin" cx="249" cy="211" r="14" strokeDasharray="6 4" />
        <path d="M150 160V116Q150 62 200 62Q250 62 250 116V160" strokeWidth="7" />
        <rect x="140" y="115" width="20" height="46" rx="8" />
        <rect x="240" y="115" width="20" height="46" rx="8" />
        <g className="art-pulse">
          <path d="M200 89V142M182 100V132M218 100V132M167 110V122M233 110V122" strokeWidth="3" strokeLinecap="round" />
        </g>
        <path className="art-glow" d="M89 80L110 101M311 80L290 101M200 23V43" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  )
}

function Henna() {
  return (
    <svg viewBox="0 0 240 200" aria-hidden="true">
      <circle cx="120" cy="100" r="82" fill="none" stroke="currentColor" opacity=".25" />
      <path d="M92 188V124Q74 108 70 86Q68 74 78 76Q86 78 92 100V44Q92 34 101 34Q110 34 110 44V92V30Q110 20 120 20Q130 20 130 30V92V36Q130 26 139 26Q148 26 148 36V96V52Q148 43 156 43Q164 43 164 52V122Q164 150 148 166V188" fill="#fbecd7" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <g className="art-glow" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="128" cy="128" r="16" />
        <circle cx="128" cy="128" r="8" />
        <path d="M128 112V104M128 144V152M112 128H104M144 128H152M117 117L111 111M139 139L145 145M139 117L145 111M117 139L111 145" />
        <path d="M101 52Q105 58 101 64Q97 70 101 76M120 40Q124 46 120 52Q116 58 120 64M139 46Q143 52 139 58Q135 64 139 70M156 60Q159 66 156 72" />
        <path d="M108 168Q128 160 148 168M108 176Q128 168 148 176" />
      </g>
    </svg>
  )
}

function Tarot() {
  return (
    <svg viewBox="0 0 240 200" aria-hidden="true">
      <circle cx="120" cy="100" r="82" fill="none" stroke="currentColor" opacity=".25" />
      <g transform="rotate(-16 120 170)">
        <rect x="70" y="50" width="64" height="104" rx="8" fill="#f3d9a4" stroke="currentColor" strokeWidth="2" />
      </g>
      <g transform="rotate(14 120 170)">
        <rect x="106" y="50" width="64" height="104" rx="8" fill="#f3d9a4" stroke="currentColor" strokeWidth="2" />
      </g>
      <g className="art-sway">
        <rect x="88" y="40" width="64" height="108" rx="8" fill="#6e1631" stroke="#c9962b" strokeWidth="2.5" />
        <rect x="95" y="47" width="50" height="94" rx="5" fill="none" stroke="#c9962b" strokeWidth="1" />
        <path d="M128 76A16 16 0 1 1 112 100A13 13 0 1 0 128 76Z" fill="#f2c14e" />
        <path className="art-glow" d="M120 120L123 127L130 128L125 133L126 140L120 136L114 140L115 133L110 128L117 127Z" fill="#f2c14e" />
      </g>
    </svg>
  )
}

function Paint() {
  return (
    <svg viewBox="0 0 240 200" aria-hidden="true">
      <circle cx="120" cy="100" r="82" fill="none" stroke="currentColor" opacity=".25" />
      <path d="M58 112Q50 64 104 52Q160 42 178 84Q188 110 160 112Q144 112 146 128Q148 148 120 150Q66 154 58 112Z" fill="#fbf1dc" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="92" cy="80" r="10" fill="#c8414b" />
      <circle cx="124" cy="70" r="10" fill="#f5a524" />
      <circle cx="154" cy="84" r="9" fill="#4c8176" />
      <circle cx="84" cy="114" r="10" fill="#7b5ea7" />
      <circle cx="114" cy="128" r="9" fill="#e8730c" />
      <g className="art-sway">
        <path d="M150 168L196 64" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
        <path d="M196 64L204 46Q208 38 200 40L192 52Z" fill="#c8414b" stroke="currentColor" strokeWidth="2" />
      </g>
      <path className="art-glow" d="M40 60L46 66M46 60L40 66M196 150L202 156M202 150L196 156" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function Booth() {
  return (
    <svg viewBox="0 0 240 200" aria-hidden="true">
      <circle cx="120" cy="100" r="82" fill="none" stroke="currentColor" opacity=".25" />
      <g transform="rotate(-6 120 100)">
        <rect x="72" y="36" width="96" height="124" rx="4" fill="#6e1631" stroke="#c9962b" strokeWidth="2.5" />
        <rect x="80" y="44" width="80" height="84" fill="#f8e3bd" />
        <circle cx="120" cy="78" r="14" fill="#6e1631" opacity=".85" />
        <path d="M94 128Q96 100 120 98Q144 100 146 128Z" fill="#6e1631" opacity=".85" />
        <text x="120" y="148" textAnchor="middle" fontSize="11" fill="#f2c14e" fontFamily="Cinzel, serif" fontWeight="700">DIWALI</text>
      </g>
      <g className="art-flash">
        <path d="M186 48L192 60L204 62L194 70L196 82L186 76L176 82L178 70L168 62L180 60Z" fill="#f2c14e" />
      </g>
    </svg>
  )
}

export function Samosa() {
  return (
    <svg viewBox="0 0 240 160" aria-hidden="true">
      <ellipse cx="120" cy="132" rx="87" ry="14" fill="#dfca9e" />
      <path d="M46 121Q75 63 108 27Q117 21 124 32L181 119Q146 143 46 121Z" fill="#dba14e" stroke="#a9702d" strokeWidth="2" />
      <path d="M108 28L98 116L181 119M98 116L46 121" fill="none" stroke="#b67d34" strokeWidth="2" />
      <path d="M64 108L94 54M130 55L159 106" stroke="#f3ce88" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8" />
      <path className="art-steam" d="M96 20Q90 10 96 0M120 16Q114 6 120 -4M144 22Q138 12 144 2" fill="none" stroke="#c9962b" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export const programArt = { dance: Dance, music: Music, dj: Dj, henna: Henna, tarot: Tarot, paint: Paint, booth: Booth }
