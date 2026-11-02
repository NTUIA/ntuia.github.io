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
  {
    key: 'dj',
    kicker: 'When the lights go down',
    title: 'Your DJ night awaits',
    text: 'Bollywood favourites, crowd anthems and a dance floor that keeps the celebration going.',
    tag: 'Meet the DJ: @pvrplebreeze',
    link: 'https://www.instagram.com/pvrplebreeze/',
  },
]

export const sharedDishes = [
  { name: 'Biryani rice', zh: '印度香料飯', note: 'Fragrant and flavourful' },
  { name: 'Lachha paratha', zh: '千層烤餅', note: 'Flaky layered bread' },
  { name: 'Dal makhani', zh: '奶油扁豆咖哩', note: 'Rich, comforting lentils' },
  { name: 'Motichur ladoo', zh: '印度甜球', note: 'A sweet festive finish' },
]

export const mains = {
  veg: [
    {
      name: 'Chana masala',
      sub: 'Chickpea curry',
      zhName: '鷹嘴豆咖哩',
      text: 'Tender chickpeas simmered in a thick, savoury sauce with tomato, onion and fragrant Indian spices. Enjoy it with biryani rice or scoop it up with lachha paratha.',
      zh: '以鷹嘴豆、番茄、洋蔥與印度香料燉煮的濃郁咖哩，適合搭配香料飯或千層烤餅。',
    },
    {
      name: 'Kadhai paneer',
      sub: 'Indian fresh cheese curry',
      zhName: '印度鮮乳酪咖哩',
      text: 'Paneer is a mild, firm fresh cheese made from milk. It is cooked with bell peppers and onions in a fragrant tomato sauce. Kadhai is the Indian wok-style pan used for this dish.',
      zh: 'Paneer 是以牛奶製成、口感紮實溫和的印度鮮乳酪，並非豆腐；搭配甜椒、洋蔥與番茄香料醬汁。',
    },
  ],
  nonveg: [
    {
      name: 'Murgh kadhai',
      sub: 'Chicken and bell pepper curry',
      zhName: '印度甜椒雞肉咖哩',
      text: 'Murgh means chicken. Chicken, bell peppers and onions in a savoury tomato sauce with Indian spices. Pair it with rice or use paratha to scoop up the sauce.',
      zh: 'Murgh 是雞肉的意思。雞肉搭配甜椒、洋蔥與番茄香料醬汁，適合佐飯或搭配千層烤餅。',
    },
    {
      name: 'Murgh rahara',
      sub: 'Rich chicken curry',
      zhName: '濃郁印度雞肉咖哩',
      text: 'A hearty chicken curry with a thick, deeply flavoured sauce that coats each piece. Enjoy it with biryani rice, or tear off some paratha to soak up the gravy.',
      zh: '醬汁濃厚、香料風味豐富的印度雞肉咖哩，適合搭配香料飯，或用千層烤餅沾取醬汁。',
    },
  ],
}

export const welcome = {
  snack: {
    name: 'Samosa',
    zhName: '印度咖哩角',
    text: 'A golden, triangular pastry with a crisp shell and a savoury filling of potatoes, peas and Indian spices.',
    zh: '酥脆的三角形炸點心，內餡通常有馬鈴薯、豌豆與印度香料。',
  },
  drinks: [
    { name: 'Lemon tea', zh: '檸檬茶' },
    { name: 'Fruit juice', zh: '果汁' },
  ],
}

export const carnival = [
  { key: 'henna', kicker: 'Tradition in every detail', title: 'Henna and mehndi', text: 'Celebrate with beautiful henna designs and a touch of festive artistry.' },
  { key: 'tarot', kicker: 'A moment of mystery', title: 'Tarot card reading', text: 'Take a seat, pick a card and enjoy a light-hearted reading.' },
  { key: 'paint', kicker: 'Wear your festive spirit', title: 'Face painting', text: 'Add a splash of colour with playful designs that bring your celebration to life.' },
  { key: 'booth', kicker: 'Strike a pose', title: 'Diwali photo booth', text: 'Festive backdrops, playful props and your favourite people. Take a little of the glow home.' },
]
