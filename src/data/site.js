// Central site content. Replace placeholder values with real NTUIA details.
export const site = {
  name: 'NTUIA',
  fullName: 'NTU India Association',
  tagline: 'The student association for Indian students, researchers and friends at National Taiwan University.',
  mission: 'We help Indian students settle into life in Taipei, share India’s culture with the NTU community, and build a network that lasts beyond graduation.',
  // FormSubmit form ID (the random string FormSubmit gives after activation).
  // Messages are delivered to the inbox linked to this ID; the address itself
  // never appears on the site.
  contactFormId: '',
  phone: '+886 (placeholder)',
  address: 'National Taiwan University, No. 1, Sec. 4, Roosevelt Rd., Taipei, Taiwan',
  social: [
    { label: 'Facebook', url: 'https://facebook.com/' },
    { label: 'LinkedIn', url: 'https://linkedin.com/' },
    { label: 'Instagram', url: 'https://instagram.com/' },
  ],
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/news', label: 'News' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]
