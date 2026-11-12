// Google Form links for Jashn-e-Diwali 2026.
// Paste each form's full link between the quotes. While a link is empty,
// its button shows "Form link coming soon" and cannot be clicked.
export const diwaliForms = {
  volunteers: 'https://forms.gle/MKnJP93G4fztqXGk8',
  performers: 'https://forms.gle/42PcEgkgCJMZ6Vct7',
  stalls: 'https://forms.gle/5ppb5tjXdbacpKpb8',
}

// Set to true to reopen volunteer sign-up. While false, the volunteer buttons read
// "Volunteer sign-up closed" and the news post says registration is closed.
export const volunteersOpen = false

// Set to true to reopen performer sign-up. While false, the news post says registration
// is closed and has no form button.
export const performersOpen = false

// Set to true to reopen stall sign-up. While false, the news post says registration is
// closed, and the Diwali page hides the Stalls section and its menu link.
export const stallsOpen = false

// Jashn-e-Diwali 2026 attendee registration (Google Apps Script web app).
// Shown inside https://ntuia.org/registration so visitors stay on ntuia.org.
export const diwaliRegistration = 'https://script.google.com/macros/s/AKfycbyjMare0Q3Hi1pbox8SG_Jhenk1U81vhOe77xdyOGSzS0ro9UqX4yJSEkFxUCN6XP3t/exec'

// Set to true to open registration. While false, the "Register now" buttons read
// "Registration coming soon" and ntuia.org/registration shows a notice instead of the form.
export const registrationOpen = true

// Set to true once every seat is taken. This wins over registrationOpen: the
// "Register now" buttons become a "Thank you, we are fully booked" badge, the
// countdown is hidden, and ntuia.org/registration shows a thank-you note instead of the form.
export const registrationFull = true

// Last day to register (Taiwan time). The Diwali page shows it beside "Register now"
// with a countdown, and hides it once the day has passed.
export const registrationDeadline = '2026-11-13'

// Set to true while the deadline above has been pushed back. The countdown card then
// shows a "Deadline extended" tag above the date.
export const deadlineExtended = true
