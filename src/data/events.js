// NTUIA events. Dates use ISO format (YYYY-MM-DD).
// Events dated today or later appear under "Upcoming"; earlier ones move to "Past events".
// Optional fields: slug (links to an event page), image (poster in public/images/events).
export const events = [
  {
    id: 'diwali-2026',
    slug: 'jashn-e-diwali-2026',
    title: 'Jashn-e-Diwali 2026',
    date: '2026-11-08',
    time: 'Evening (TBA)',
    location: 'NTU campus, Taipei (venue TBA)',
    description: 'Our Festival of Lights celebration with diyas, rangoli, cultural performances, and Indian food. Everyone is welcome.',
  },
  {
    id: 'freshers-2026',
    title: 'Freshers’ Party 2026',
    date: '2026-10-11',
    time: '7:00 PM – 9:00 PM',
    location: 'Room 603, Second Activity Center, NTU',
    description: 'An evening to kick-start the college journey for new students: music, dancing, and the chance to meet a new squad.',
    image: '/images/events/freshers-party-2026.webp',
    imageAlt: 'NTUIA Freshers’ Party poster, 11 October 2026, Room 603, Second Activity Center, 7 to 9 PM',
  },
]
