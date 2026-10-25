import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

export default function NotFound() {
  return (
    <>
      <PageHeader eyebrow="Error 404" title="Page not found" subtitle="The page you are looking for does not exist or has moved." />
      <section className="section">
        <div className="container"><Link reloadDocument to="/" className="btn btn--primary">Back to home</Link></div>
      </section>
    </>
  )
}
