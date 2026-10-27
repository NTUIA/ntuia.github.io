import { Link } from 'react-router-dom'
import { registrationOpen } from '../../data/diwaliForms.js'

export default function RegisterButton() {
  if (!registrationOpen) {
    return (
      <span className="btn btn--soon">
        <span className="btn--soon__dot" aria-hidden="true" />Registration coming soon
      </span>
    )
  }
  return (
    <Link reloadDocument to="/registration" className="btn btn--soon btn--register">
      <span className="btn--soon__dot" aria-hidden="true" />Register here
    </Link>
  )
}
