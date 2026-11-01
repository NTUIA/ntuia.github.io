// Reloads the site when a newer version has been deployed, so visitors who
// keep a tab open never stay on an old build. Checks every few minutes and
// whenever the tab comes back into view.
const CHECK_EVERY = 5 * 60 * 1000

export function startAutoUpdate() {
  if (!import.meta.env.PROD) return

  const current = new URL(import.meta.url).pathname
  let pending = false

  const reload = () => window.location.reload()

  async function check() {
    if (pending) return
    try {
      const res = await fetch('/', { cache: 'no-store' })
      const html = await res.text()
      const latest = html.match(/\/assets\/index-[\w-]+\.js/)?.[0]
      if (!latest || latest === current) return
      pending = true
      // Don't interrupt someone filling in the registration form.
      if (document.hidden && !location.pathname.startsWith('/registration')) reload()
    } catch {
      // Offline or network hiccup: try again next time.
    }
  }

  // With an update waiting, the next page change loads the new version.
  const push = history.pushState.bind(history)
  history.pushState = (state, title, url) => {
    if (pending && url) return window.location.assign(url)
    push(state, title, url)
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return
    if (pending && !location.pathname.startsWith('/registration')) reload()
    else check()
  })
  setInterval(check, CHECK_EVERY)
}
