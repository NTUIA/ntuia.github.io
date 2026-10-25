import { useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { site } from '../data/site.js'

const topics = ['Membership', 'Partnership or sponsorship', 'Question about an event', 'Something else']
const empty = { name: '', email: '', topic: topics[0], message: '' }

// Messages are sent through FormSubmit (https://formsubmit.co) to the inbox linked
// to site.contactFormId. No email address is stored in the site's code.
export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const ready = Boolean(site.contactFormId)

  const submit = async (e) => {
    e.preventDefault()
    if (!ready || status === 'sending') return
    const botcheck = e.target.elements.botcheck?.checked
    if (botcheck) return
    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.contactFormId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `NTUIA website: ${form.topic}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: form.email,
          name: form.name,
          email: form.email,
          topic: form.topic,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || 'Send failed')
      setStatus('sent')
      setForm(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHeader eyebrow="Contact" title="Get in touch" subtitle="Join as a member, propose a partnership, or ask the committee a question." />
      <section className="section">
        <div className="container split">
          <div className="split__aside">
            <p className="eyebrow">Reach the committee</p>
            <dl className="contact__list">
              <dt>Message us</dt>
              <dd>Use the form and the committee will reply to the email address you give.</dd>
              <dt>Address</dt>
              <dd>{site.address}</dd>
              <dt>Membership</dt>
              <dd>Free and open to all NTU students, staff and friends of India.</dd>
            </dl>
          </div>
          <form className="card form" onSubmit={submit}>
            <h2>Send a message</h2>
            <label htmlFor="c-name">Name<input id="c-name" name="name" value={form.name} onChange={update} required autoComplete="name" /></label>
            <label htmlFor="c-email">Your email<input id="c-email" type="email" name="email" value={form.email} onChange={update} required autoComplete="email" /></label>
            <label htmlFor="c-topic">Topic
              <select id="c-topic" name="topic" value={form.topic} onChange={update}>
                {topics.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>
            <label htmlFor="c-message">Message<textarea id="c-message" name="message" rows="6" value={form.message} onChange={update} required /></label>
            <input type="checkbox" name="botcheck" className="form__trap" tabIndex="-1" autoComplete="off" aria-hidden="true" />
            <button type="submit" className="btn btn--primary" disabled={!ready || status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className={`form__status form__status--${ready ? status : 'off'}`} role="status" aria-live="polite">
              {!ready && 'The contact form is being set up. Please check back soon.'}
              {ready && status === 'sent' && 'Thank you. Your message has been sent to the NTUIA committee.'}
              {ready && status === 'error' && 'Your message could not be sent. Please check your connection and try again.'}
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
