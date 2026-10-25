export function formatDate(iso, opts = { day: 'numeric', month: 'long', year: 'numeric' }) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', opts)
}

// Events without an announced date (date: null) count as upcoming.
export function isUpcoming(iso) {
  if (!iso) return true
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return new Date(`${iso}T00:00:00`) >= today
}

// Sort by date, earliest first; events without a date go last.
export function byDate(a, b) {
  if (!a.date) return b.date ? 1 : 0
  if (!b.date) return -1
  return a.date.localeCompare(b.date)
}
