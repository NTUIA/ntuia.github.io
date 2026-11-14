// The evening's rundown for Jashn-e-Diwali 2026, shown on its own page
// (/events/jashn-e-diwali-2026/rundown), linked from the Diwali event page.
// Items with perf (a key in performances) or dj open a details pop-up.
// Stage times after 6:49 PM are approximate (marked approx), since each act
// needs a short setup.

export const rundownDate = 'Sunday, 15 November 2026'

export const rundown = [
  {
    part: 'Arrival', note: 'Doors open',
    items: [
      { time: '5:45 – 6:30 PM', icon: '🎟️', what: 'Registration', who: 'Show your QR code at the desk' },
    ],
  },
  {
    part: 'Stage programme', note: 'Speeches, dance and music',
    items: [
      { time: '6:30 PM', icon: '🎤', what: 'Welcome and introduction to Diwali', who: 'Host' },
      { time: '6:32 PM', icon: '🪔', what: 'Welcoming our guests and lamp lighting', who: 'Host and guests' },
      { time: '6:40 PM', icon: '🎁', what: 'Gifts to our guests', who: 'NTUIA core team' },
      { time: '6:45 PM', icon: '🎙️', what: 'Address from the Office of International Affairs', who: 'Prof. Yuan, Vice President for International Affairs' },
      { time: '6:49 PM', icon: '💃', what: 'Bharatanatyam: Ganesh Samvada', perf: 'bharatanatyam', who: 'Sriranjani and Sherry Wang', act: true },
      { time: '6:54 PM', approx: true, icon: '🎶', what: 'Ukulele and vocals', perf: 'ukulele', who: 'Priscilla and NTU Ukulele', act: true },
      { time: '7:02 PM', approx: true, icon: '🌸', what: 'Indian Classical Fusion', perf: 'classical', who: 'Swagatika and Ammu', act: true },
      { time: '7:07 PM', approx: true, icon: '🥁', what: 'Tabla Ensemble', perf: 'tabla', who: "Prof. Abhiman Kaushal's students", act: true },
      { time: '7:10 PM', approx: true, icon: '🏆', what: 'Best Paper Award', who: 'Presented by Dr. Mukesh' },
      { time: '7:15 PM', approx: true, icon: '✨', what: 'Bollywood Fusion', perf: 'bollywood', who: 'Diya and Riya', act: true },
      { time: '7:19 PM', approx: true, icon: '🙏', what: 'Vote of thanks and announcements', who: 'Prof. Shiau Yo-Jin, Club Advisor, and Aditya' },
    ],
  },
  {
    part: 'Dinner and DJ night', note: 'Eat, dance, celebrate',
    items: [
      { time: '7:30 – 8:30 PM', icon: '🍛', what: 'Dinner boxes', who: 'Food area' },
      { time: '7:30 – 9:00 PM', icon: '🎧', what: 'DJ night', dj: true, act: true, who: 'DJ Nilesh' },
      { time: '9:00 PM', icon: '🌙', what: 'Event ends', who: 'Thank you for celebrating with us!' },
    ],
  },
]
