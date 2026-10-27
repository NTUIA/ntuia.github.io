import { useState } from 'react'
import { pastCommittees } from '../data/team.js'

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('')
}

function PastMember({ member }) {
  const name = member.name || 'Name to be added'
  return (
    <article className={`past-member${member.name ? '' : ' past-member--empty'}`}>
      <div className="past-member__photo">
        {member.photo
          ? <img src={member.photo} alt={`${name}, ${member.role}`} width="320" height="320" loading="lazy" />
          : <span aria-hidden="true">{member.name ? initials(member.name) : '?'}</span>}
      </div>
      <p className="member__role">{member.role}</p>
      <h3 className="past-member__name">{name}</h3>
    </article>
  )
}

export default function PastCommittees() {
  const [year, setYear] = useState(pastCommittees[0]?.year)
  const current = pastCommittees.find((c) => c.year === year)
  if (!current) return null

  return (
    <>
      <div className="past-tabs" role="tablist" aria-label="Committee year">
        {pastCommittees.map((c) => (
          <button
            key={c.year}
            type="button"
            role="tab"
            aria-selected={c.year === year}
            className={`past-tabs__tab${c.year === year ? ' is-active' : ''}`}
            onClick={() => setYear(c.year)}
          >
            {c.year}
          </button>
        ))}
      </div>
      <div className="past-grid" role="tabpanel" aria-label={`Executive committee ${year}`}>
        {current.members.map((m, i) => <PastMember key={`${year}-${i}`} member={m} />)}
      </div>
    </>
  )
}
