import { diwaliForms } from './diwaliForms.js'

// NTUIA news posts, newest first.
// Optional: image (+ imageAlt, imageTone 'plum' | 'marigold') and link { href, label }.
export const news = [
  {
    id: 'call-for-performers-2026',
    title: 'Call for Performers: Jashn-e-Diwali 2026',
    date: '2026-10-24',
    category: 'Performers',
    excerpt: 'The Spirit of India in Taiwan. All kinds of performances are welcome at Jashn-e-Diwali 2026: classical dance, fusion singing, musical performances and open cultural acts.',
    image: '/images/diwali/performers.webp',
    imageAlt: 'Illustrated performers: a classical dancer, a singer, sitar and tabla players, and folk dancers',
    imageTone: 'marigold',
    link: { href: diwaliForms.performers, label: 'Register to perform' },
  },
  {
    id: 'volunteers-for-diwali-2026',
    title: 'Volunteers for Diwali: Registration Open',
    date: '2026-10-22',
    category: 'Volunteers',
    excerpt: 'Be the spark behind NTU’s Diwali celebration. Join the Jashn-e-Diwali 2026 team and bring the energy, colour and joy. Volunteer registration is now open.',
    image: '/images/diwali/volunteers.webp',
    imageAlt: 'Four friends in festive Indian clothes lighting diyas together',
    imageTone: 'plum',
    link: { href: diwaliForms.volunteers, label: 'Volunteer sign-up' },
  },
  {
    id: 'diwali-2026-is-coming',
    title: 'Jashn-e-Diwali 2026 Is Coming',
    date: '2026-10-11',
    category: 'Festival',
    excerpt: 'Our Festival of Lights returns to NTU with diyas, rangoli, music, dance, and food. Everyone is welcome. Details coming soon.',
  },
  {
    id: 'executive-committee-2026',
    title: 'New Executive Committee Announced',
    date: '2026-09-15',
    category: 'Announcement',
    excerpt: 'We are pleased to introduce the new executive committee who will lead NTUIA for the coming year.',
  },
]
