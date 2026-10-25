import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { site } from '../data/site.js'

const topics = ['Membership', 'Partnership or sponsorship', 'Question about an event', 'Something else']

// No backend: the form opens the visitor's email app with the message pre-filled.
// To receive submissions directly, swap this for a form service such as Formspree.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: topics[0], message: '' })
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`NTUIA website: ${form.topic}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" subtitle="Join as a member, propose a partnership, or ask the committee a question." />
      <section className="section">
        <div className="container split">
          <div className="split__aside">
            <p className="eyebrow">Reach the committee</p>
            <dl className="contact__list">
              <dt>Email</dt>
              <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              <dt>Address</dt>
              <dd>{site.address}</dd>
              <dt>Membership</dt>
              <dd>Free and open to all NTU students, staff and friends of India.</dd>
            </dl>
          </div>
          <form className="card form" onSubmit={submit}>
            <h2>Send a message</h2>
            <label htmlFor="c-name">Name<input id="c-name" name="name" value={form.name} onChange={update} required autoComplete="name" /></label>
            <label htmlFor="c-email">Email<input id="c-email" type="email" name="email" value={form.email} onChange={update} required autoComplete="email" /></label>
            <label htmlFor="c-topic">Topic
              <select id="c-topic" name="topic" value={form.topic} onChange={update}>
                {topics.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label htmlFor="c-message">Message<textarea id="c-message" name="message" rows="6" value={form.message} onChange={update} required /></label>
            <button type="submit" className="btn btn--primary">Send message</button>
          </form>
        </div>
      </section>
    </>
  )
}
