// Update committeeYear when a new committee is elected.
export const committeeYear = 2026

// Executive committee. Photos live in public/images/team as 480 x 600 portraits (4:5).
export const team = [
  { name: 'Aditya Naman Soni', role: 'President', degree: 'PhD Scholar', photo: '/images/team/aditya.webp' },
  { name: 'Vinay Vilas Shinde', role: 'Vice President', degree: "Master's Scholar", photo: '/images/team/vinay.webp' },
  { name: 'Simran Maurya', role: 'Activity Coordinator', degree: 'PhD Scholar', photo: '/images/team/simran.webp' },
  { name: 'Akshaya Ganesh Murthy', role: 'Secretary', degree: "Master's Scholar", photo: '/images/team/akshaya.webp' },
  { name: 'Aman Verma', role: 'Treasurer', degree: "Master's Scholar", photo: '/images/team/aman.webp' },
]

// Previous committees, newest first. To fill one in:
//   1. Put the photo in public/images/team/past/<year>/ (square; it is shown as a circle).
//   2. Fill in name, role and photo below. Leave photo as '' to show a person icon instead.
// Add or remove rows freely; a member with no name shows as "Name to be added".

export const pastCommittees = [
  {
    year: 2025,
    members: [
      { name: 'Bharani', role: 'President', photo: '/images/team/past/2025/bharani.webp' },
      { name: 'Subhash Magapu', role: 'Vice President', photo: '/images/team/past/2025/subhash.webp' },
      { name: 'Selva Brindha', role: 'Secretariat', photo: '/images/team/past/2025/selva.webp' },
      { name: 'Akarsth (AK)', role: 'Event Coordinator', photo: '/images/team/past/2025/akarsth.webp' },
      { name: 'Maharshi', role: 'Treasurer', photo: '/images/team/past/2025/maharshi.webp' },
    ],
  },
  {
    year: 2024,
    members: [
      { name: 'Ranvijay Singh', role: 'President', photo: '/images/team/past/2024/ranvijay.webp' },
      { name: 'Ankit Saraswat', role: 'Vice President', photo: '/images/team/past/2024/ankit.webp' },
      { name: 'Logeshwaran Venkatesapandian', role: 'Secretariat', photo: '/images/team/past/2024/logeshwaran.webp' },
      { name: 'Papiya Bhattacharya', role: 'Event Coordinator', photo: '/images/team/past/2024/papiya.webp' },
      { name: 'Sumangaladevi K.', role: 'Treasurer', photo: '/images/team/past/2024/sumangaladevi.webp' },
    ],
  },
  {
    year: 2023,
    members: [
      { name: 'Varad Modak', role: 'President', photo: '/images/team/past/2023/varad.webp' },
      { name: 'Deep Shubhra Biswas', role: 'Vice President', photo: '' },
      { name: 'Avijeet Balabantray', role: 'Social Media Coordinator', photo: '' },
      { name: 'Bharanitharan J', role: 'Event Coordinator', photo: '' },
      { name: 'Nilabh Basu', role: 'Treasurer', photo: '' },
    ],
  },
  {
    year: 2022,
    members: [
      { name: 'Siddhartha Panigrahi', role: 'President', photo: '' },
      { name: 'Dalip Kumar', role: 'Vice President', photo: '' },
      { name: 'Kavya J', role: 'Cultural Coordinator', photo: '' },
      { name: 'Subhashree Shivani', role: 'Activity Coordinator', photo: '' },
      { name: 'Varad Modak', role: 'Activity Coordinator', photo: '/images/team/past/2023/varad.webp' },
      { name: 'Amali Gitanjali', role: 'Social Media Coordinator', photo: '' },
      { name: 'Suyash Wagh', role: 'Treasurer', photo: '' },
    ],
  },
]
