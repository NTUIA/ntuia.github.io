// What happens at Jashn-e-Diwali 2026: the stage, the menu and the carnival.
// Shown on the Diwali event page. Chinese lines are for our Taiwanese guests.

export const highlights = ['Dance and live music', 'Indian food', 'Henna and tarot', 'DJ night', 'Photo booth', 'Festive stalls']

export const stage = [
  {
    key: 'dance',
    kicker: 'Movement and tradition',
    title: 'Dance in full colour',
    text: 'Graceful classical movements, folk rhythms and the joyful energy of Bollywood.',
    tag: 'Performances to be announced',
  },
  {
    key: 'music',
    kicker: 'Strings, beats and soul',
    title: 'Music that moves you',
    text: 'Live performances bringing timeless Indian melodies to the stage.',
    tag: 'Artist reveal coming soon',
  },
]

// The DJ night feature under the stage cards, styled after the DJ poster.
export const dj = {
  name: 'DJ Nilesh',
  kicker: 'When the lights go down',
  text: 'Bollywood favourites, crowd anthems and a dance floor that keeps the celebration going.',
  handle: '@pvrplebreeze',
  link: 'https://www.instagram.com/pvrplebreeze/',
  image: '/images/events/dj-nilesh.webp',
}

export const sharedDishes = [
  { name: 'Biryani rice', image: '/images/food/biryani.webp', zh: '印度香料飯', note: 'Fragrant and flavourful' },
  { name: 'Lachha paratha', image: '/images/food/lachha-paratha.webp', zh: '千層烤餅', note: 'Flaky layered bread' },
  { name: 'Dal makhani', image: '/images/food/dal-makhani.webp', zh: '奶油扁豆咖哩', note: 'Rich, comforting lentils' },
  { name: 'Motichur ladoo', image: '/images/food/motichur-ladoo.webp', zh: '印度甜球', note: 'A sweet festive finish' },
]

export const mains = {
  veg: [
    {
      name: 'Chana masala',
      image: '/images/food/chana-masala.webp',
      sub: 'Chickpea curry',
      zhName: '鷹嘴豆咖哩',
      text: 'Tender chickpeas simmered in a thick, savoury sauce with tomato, onion and fragrant Indian spices. Enjoy it with biryani rice or scoop it up with lachha paratha.',
      zh: '以鷹嘴豆、番茄、洋蔥與印度香料燉煮的濃郁咖哩，適合搭配香料飯或千層烤餅。',
    },
    {
      name: 'Kadhai paneer',
      image: '/images/food/kadhai-paneer.webp',
      sub: 'Indian fresh cheese curry',
      zhName: '印度起司咖哩',
      text: 'Paneer is a mild, firm fresh cheese made from milk. It is cooked with bell peppers and onions in a fragrant tomato sauce. Kadhai is the Indian wok-style pan used for this dish.',
      zh: 'Paneer 是以牛奶製成、口感紮實溫和的印度起司，不是豆腐；搭配甜椒、洋蔥與番茄香料醬汁。',
    },
  ],
  nonveg: [
    {
      name: 'Murgh kadhai',
      image: '/images/food/murgh-kadhai.webp',
      sub: 'Chicken and bell pepper curry',
      zhName: '印度甜椒雞肉咖哩',
      text: 'Murgh means chicken. Chicken, bell peppers and onions in a savoury tomato sauce with Indian spices. Pair it with rice or use paratha to scoop up the sauce.',
      zh: 'Murgh 是雞肉的意思。雞肉搭配甜椒、洋蔥與番茄香料醬汁，適合佐飯或搭配千層烤餅。',
    },
    {
      name: 'Murgh rahara',
      image: '/images/food/murgh-rahara.webp',
      sub: 'Rich chicken curry',
      zhName: '濃郁印度雞肉咖哩',
      text: 'A hearty chicken curry with a thick, deeply flavoured sauce that coats each piece. Enjoy it with biryani rice, or tear off some paratha to soak up the gravy.',
      zh: '醬汁濃厚、香料風味豐富的印度雞肉咖哩，適合搭配香料飯，或用千層烤餅沾醬汁。',
    },
  ],
}

export const welcome = {
  snack: {
    name: 'Samosa',
    image: '/images/food/samosa.webp',
    zhName: '印度咖哩角',
    text: 'A golden, triangular pastry with a crisp shell and a savoury filling of potatoes, peas and Indian spices.',
    zh: '酥脆的三角形炸點心，內餡通常有馬鈴薯、豌豆與印度香料。',
  },
  drinks: [
    { name: 'Lemon tea', zh: '檸檬茶', image: '/images/food/lemon-tea.webp' },
    { name: 'Fruit juice', zh: '果汁', image: '/images/food/fruit-juice.webp' },
  ],
}

export const carnival = [
  { key: 'henna', kicker: 'Tradition in every detail', title: 'Henna and mehndi', text: 'Celebrate with beautiful henna designs and a touch of festive artistry.' },
  { key: 'tarot', kicker: 'A moment of mystery', title: 'Tarot card reading', text: 'Take a seat, pick a card and enjoy a light-hearted reading.' },
  { key: 'paint', kicker: 'Wear your festive spirit', title: 'Face painting', text: 'Add a splash of colour with playful designs that bring your celebration to life.' },
  { key: 'booth', kicker: 'Strike a pose', title: 'Diwali photo booth', text: 'Festive backdrops, playful props and your favourite people. Take a little of the glow home.' },
]

// "Happy Diwali" in the 22 scheduled languages of India, English, Bhojpuri,
// Rajasthani and Chinese for our Taiwanese guests. Just the two words, not longer
// wishes. They float behind the Diwali banner. Bodo, Dogri, Manipuri, Santali,
// Bhojpuri and Rajasthani are worth checking with native speakers.
export const greetings = [
  { lang: 'en', name: 'English', text: 'Happy Diwali' },
  { lang: 'sa', name: 'Sanskrit', text: 'शुभ दीपावलिः' },
  { lang: 'hi', name: 'Hindi', text: 'शुभ दीपावली' },
  { lang: 'bn', name: 'Bengali', text: 'শুভ দীপাবলি' },
  { lang: 'ta', name: 'Tamil', text: 'இனிய தீபாவளி' },
  { lang: 'te', name: 'Telugu', text: 'శుభ దీపావళి' },
  { lang: 'ml', name: 'Malayalam', text: 'ശുഭ ദീപാവലി' },
  { lang: 'kn', name: 'Kannada', text: 'ಶುಭ ದೀಪಾವಳಿ' },
  { lang: 'mr', name: 'Marathi', text: 'शुभ दिवाळी' },
  { lang: 'gu', name: 'Gujarati', text: 'શુભ દિવાળી' },
  { lang: 'pa', name: 'Punjabi', text: 'ਦੀਵਾਲੀ ਮੁਬਾਰਕ' },
  { lang: 'or', name: 'Odia', text: 'ଶୁଭ ଦୀପାବଳି' },
  { lang: 'as', name: 'Assamese', text: 'শুভ দীপাৱলী' },
  { lang: 'ur', name: 'Urdu', text: 'دیوالی مبارک' },
  { lang: 'ne', name: 'Nepali', text: 'शुभ दीपावली' },
  { lang: 'ks', name: 'Kashmiri', text: 'دیوالی مُبارک' },
  { lang: 'kok', name: 'Konkani', text: 'शुभ दिवाळी' },
  { lang: 'sd', name: 'Sindhi', text: 'ڏياري مبارڪ' },
  { lang: 'mai', name: 'Maithili', text: 'शुभ दीपावली' },
  { lang: 'doi', name: 'Dogri', text: 'दिवाली मुबारक' },
  { lang: 'brx', name: 'Bodo', text: 'दीपावलीनि गोजोन' },
  { lang: 'mni', name: 'Manipuri', text: 'ꯅꯨꯡꯉꯥꯏꯕ ꯗꯤꯋꯥꯂꯤ' },
  { lang: 'sat', name: 'Santali', text: 'ᱫᱤᱭᱟᱹᱞᱤ ᱡᱚᱦᱟᱨ' },
  { lang: 'bho', name: 'Bhojpuri', text: 'शुभ दीवाली' },
  { lang: 'raj', name: 'Rajasthani', text: 'शुभ दिवाळी' },
  { lang: 'zh-Hant', name: 'Chinese', text: '排燈節快樂' },
]
