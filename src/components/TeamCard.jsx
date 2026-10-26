export default function TeamCard({ member }) {
  return (
    <article className="member">
      <div className="member__photo">
        <img src={member.photo} alt={`${member.name}, ${member.role}`} width="480" height="600" loading="lazy" />
      </div>
      <p className="member__role">{member.role}</p>
      <h3 className="member__name">{member.name}</h3>
      <span className="member__degree">{member.degree}</span>
    </article>
  )
}
