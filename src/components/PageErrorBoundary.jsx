import { Component } from 'react'

const KEY = 'ntuia-reloaded-at'

// If a page fails to render (which would leave a blank white screen), reload once
// automatically, the same as pressing refresh. If it fails again straight away,
// show a short message with a reload button instead of a blank page.
export default class PageErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { failed: false }
  }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch(error) {
    console.error('NTUIA page failed to render:', error)
    let last = 0
    try { last = Number(sessionStorage.getItem(KEY)) || 0 } catch { /* storage blocked */ }
    if (Date.now() - last > 15000) {
      try { sessionStorage.setItem(KEY, String(Date.now())) } catch { /* storage blocked */ }
      window.location.reload()
    }
  }

  render() {
    if (!this.state.failed) return this.props.children
    return (
      <section className="section">
        <div className="container">
          <p className="eyebrow">Something went wrong</p>
          <h1>This page didn’t load</h1>
          <p className="lead">Please reload the page. If it keeps happening, let us know through the contact form.</p>
          <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>Reload page</button>
        </div>
      </section>
    )
  }
}
