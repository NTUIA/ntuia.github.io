import { formatDate } from '../utils.js'

export default function NewsCard({ post }) {
  return (
    <article className={`news-card ${post.image ? 'has-poster' : ''}`}>
      {post.image && (
        <a className="news-card__poster" href={post.image} target="_blank" rel="noreferrer" aria-label={`Open the ${post.title} poster`}>
          <img src={post.image} alt={post.imageAlt || `${post.title} poster`} loading="lazy" />
        </a>
      )}
      <div>
        <span className="badge">{post.category}</span>
        <h3>{post.title}</h3>
        <p className="meta"><time dateTime={post.date}>{formatDate(post.date)}</time></p>
        <p>{post.excerpt}</p>
      </div>
    </article>
  )
}
