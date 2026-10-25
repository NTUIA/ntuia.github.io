import { formatDate } from '../utils.js'

export default function NewsCard({ post }) {
  return (
    <article className={`news-card ${post.image ? 'has-image' : ''}`}>
      {post.image && (
        <div className={`news-card__image news-card__image--${post.imageTone || 'plain'}`}>
          <img src={post.image} alt={post.imageAlt || ''} loading="lazy" />
        </div>
      )}
      <span className="badge">{post.category}</span>
      <h3>{post.title}</h3>
      <p className="meta"><time dateTime={post.date}>{formatDate(post.date)}</time></p>
      <p>{post.excerpt}</p>
      {post.link?.href && (
        <a className="btn btn--primary news-card__cta" href={post.link.href} target="_blank" rel="noreferrer">
          {post.link.label} <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  )
}
