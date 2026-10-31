import { diwaliForms, volunteersOpen } from './diwaliForms.js'

// NTUIA news posts, newest first.
// Optional: image (+ imageAlt, imageTone 'plum' | 'marigold') and link { href, label }.
export const news = [
  {
    id: 'call-for-stalls-2026',
    title: 'Call for Stalls: Jashn-e-Diwali 2026',
    date: '2026-10-27',
    category: 'Stalls',
    excerpt: 'Set up your own stall at Jashn-e-Diwali 2026 on 15 November! NTU students, non-NTU participants and business owners are all welcome, whether it is Indian food, snacks, mehndi, handicrafts, traditional accessories, cultural items or any other creative idea. Stall registration is free for NTU students. Slots are first come, first served, and we have room for only 4 to 5 stalls, so register early.',
    image: '/images/news/call-for-stalls-2026.webp',
    imageAlt: 'NTU India Association, Jashn-e-Diwali 2026: Call for Stalls banner with five students holding food, crafts and gifts',
    imageTone: 'banner',
    link: { href: diwaliForms.stalls, label: 'Register a stall' },
  },
  {
    id: 'call-for-performers-2026',
    title: 'Call for Performers: Jashn-e-Diwali 2026',
    date: '2026-10-24',
    category: 'Performers',
    excerpt: 'Share your talent and be a part of Jashn-e-Diwali 2026! We welcome classical dance, fusion performances, singing, music and open cultural acts. Performances inspired by Indian and/or Taiwanese culture are highly welcome.',
    image: '/images/news/call-for-performers-2026.webp',
    imageAlt: 'NTU India Association, Jashn-e-Diwali 2026: Call for Performers banner with dancing and singing students',
    imageTone: 'banner',
    link: { href: diwaliForms.performers, label: 'Register to perform' },
  },
  {
    id: 'volunteers-for-diwali-2026',
    title: `Volunteers for Diwali: Registration ${volunteersOpen ? 'Open' : 'Closed'}`,
    date: '2026-10-22',
    category: 'Volunteers',
    excerpt: 'Be the spark behind NTU’s Diwali celebration. Join the Jashn-e-Diwali 2026 team and bring the energy, colour and joy. ' + (volunteersOpen ? 'Volunteer registration is now open.' : 'Volunteer registration is now closed. Thank you to everyone who signed up!'),
    image: '/images/news/call-for-volunteers-2026.webp',
    imageAlt: 'NTU India Association, Jashn-e-Diwali 2026: Call for Volunteers banner with six cheering students',
    imageTone: 'banner',
    link: volunteersOpen ? { href: diwaliForms.volunteers, label: 'Volunteer sign-up' } : undefined,
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
