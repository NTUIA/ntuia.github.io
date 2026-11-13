// Update committeeYear when a new committee is elected.
export const committeeYear = 2026

// Executive committee. Photos live in public/images/team as 480 x 600 portraits (4:5).
export const team = [
  { name: 'Aditya Naman Soni', role: 'President', degree: 'PhD Scholar', photo: '/images/team/aditya.webp' },
  { name: 'Vinay Vilas Shinde', role: 'Vice President', degree: "Master's Scholar", photo: '/images/team/vinay.webp' },
  { name: 'Simran Maurya', role: 'Activity Coordinator', degree: 'PhD Scholar', photo: '/images/team/simran.webp' },
  { name: 'Akshaya Ganesh Murthy', role: 'Secretary', degree: "Master's Scholar", photo: '/images/team/akshaya.webp' },
  { name: 'Rehman Sabir', role: 'Treasurer', degree: 'PhD Scholar', photo: '/images/team/rehman.webp' },
]

// Previous committees, newest first. To fill one in:
//   1. Put the photo in public/images/team/past/<year>/ (square; it is shown as a circle).
//   2. Fill in name, role and photo below. Leave photo as '' to show a person icon instead.
// Add or remove rows freely; a member with no name shows as "Name to be added".

export const pastCommittees = [
  {
    year: 2025,
    members: [
      { name: 'Bharanitharan J', role: 'President', photo: '/images/team/past/2025/bharani.webp' },
      { name: 'Subhash Magapu', role: 'Vice President', photo: '/images/team/past/2025/subhash.webp' },
      { name: 'Selva Brindha', role: 'Secretary', photo: '/images/team/past/2025/selva.webp' },
      { name: 'Akarsth (AK)', role: 'Event Coordinator', photo: '/images/team/past/2025/akarsth.webp' },
      { name: 'Maharshi', role: 'Treasurer', photo: '/images/team/past/2025/maharshi.webp' },
    ],
  },
  {
    year: 2024,
    members: [
      { name: 'Ranvijay Singh', role: 'President', photo: '/images/team/past/2024/ranvijay.webp' },
      { name: 'Ankit Saraswat', role: 'Vice President', photo: '/images/team/past/2024/ankit.webp' },
      { name: 'Logeshwaran Venkatesapandian', role: 'Secretary', photo: '/images/team/past/2024/logeshwaran.webp' },
      { name: 'Papiya Bhattacharya', role: 'Event Coordinator', photo: '/images/team/past/2024/papiya.webp' },
      { name: 'Sumangaladevi K.', role: 'Treasurer', photo: '/images/team/past/2024/sumangaladevi.webp' },
    ],
  },
  {
    year: 2023,
    members: [
      { name: 'Varad Modak', role: 'President', photo: '/images/team/past/2023/varad.webp' },
      { name: 'Deep Shubhra Biswas', role: 'Vice President', photo: '/images/team/past/2023/deep.webp' },
      { name: 'Avijeet Balabantray', role: 'Social Media Coordinator', photo: '/images/team/past/2023/avijeet.webp' },
      { name: 'Bharanitharan J', role: 'Event Coordinator', photo: '/images/team/past/2025/bharani.webp' },
      { name: 'Nilabh Basu', role: 'Treasurer', photo: '/images/team/past/2023/nilabh.webp' },
    ],
  },
  {
    year: 2022,
    members: [
      { name: 'Dr. Siddhartha Panigrahi', role: 'President', photo: '/images/team/founding/siddhartha.webp' },
      { name: 'Dalip Kumar', role: 'Vice President', photo: '/images/team/past/2022/dalip.webp' },
      { name: 'Kavya Nair Jayakumaran', role: 'Cultural Coordinator', photo: '/images/team/past/2022/kavya.webp' },
      { name: 'Subhashree Shivani', role: 'Activity Coordinator', photo: '/images/team/past/2022/subhashree.webp' },
      { name: 'Varad Modak', role: 'Activity Coordinator', photo: '/images/team/past/2023/varad.webp' },
      { name: 'Amali Gitanjali', role: 'Social Media Coordinator', photo: '/images/team/past/2022/amali.webp' },
      { name: 'Suyash Wagh', role: 'Treasurer', photo: '/images/team/past/2022/suyash.webp' },
    ],
  },
]

// The people who helped start NTUIA. Photos go in public/images/team/founding/
// (square; shown as a circle). Leave photo as '' to show a person icon instead.
export const foundingContributors = [
  { name: 'Dr. Dipali Bagal-Kestwal', photo: '/images/team/founding/dipali.webp' },
  { name: 'Dr. Siddhartha Panigrahi', photo: '/images/team/founding/siddhartha.webp' },
  { name: 'Dr. Mukesh Kumar Pandey', photo: '/images/team/founding/mukesh.webp' },
  { name: 'Dr. Sudipta Som', photo: '/images/team/founding/sudipta.webp' },
]
