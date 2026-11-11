// What happens at Jashn-e-Diwali 2026: the stage, the menu and the carnival.
// Shown on the Diwali event page. Chinese lines are for our Taiwanese guests.

export const highlights = ['Dance and live music', 'Indian food', 'Henna and tarot', 'DJ night', 'Photo booth', 'Festive stalls']

// More acts are coming but not announced yet. While true, a "more performers on
// the way" card shows after the line-up (it never says how many). Add each act
// to performances below once announced (with its own type, such as
// 'Music Performance'), and set this to false when the line-up is complete.
export const moreActsComing = false

// The stage line-up, taken from the performer posters in Canva. Each act shows
// the poster photo and the English and Chinese write-up.
export const performances = [
  {
    key: 'bharatanatyam',
    title: 'Bharatanatyam',
    performers: ['Sriranjani', 'Sherry Wang'],
    image: '/images/events/perf-bharatanatyam.webp',
    text: "Experience the beauty of Bharatanatyam, one of India's oldest classical dance forms, where graceful movements, expressive gestures, and rhythmic footwork come together to tell beautiful stories. Get ready for a mesmerizing performance filled with tradition, elegance, and cultural richness!",
    zh: '一起感受印度古典舞蹈「婆羅多舞」的優雅魅力！透過優美的舞姿、細膩的手勢與富有節奏感的腳步，展現印度傳統文化與藝術之美，帶來一場充滿韻律、情感與文化氣息的精彩演出。',
  },
  {
    key: 'classical',
    title: 'Indian Classical Fusion',
    performers: ['Swagatika', 'Ammu'],
    image: '/images/events/perf-classical-fusion.webp',
    text: 'Experience the magic of Semi-Classical Fusion, where the grace of Indian classical dance meets modern rhythms and expressions! With elegant movements, powerful beats, and heartfelt emotions, this beautiful duet brings together tradition, creativity, and romance in a mesmerizing performance.',
    zh: '一起感受印度半古典融合舞蹈的獨特魅力！結合印度傳統舞蹈的優雅、現代音樂的活力與浪漫情感，透過柔美的舞姿、充滿力量的節奏與細膩的情感表達，呈現一場融合傳統與現代的精彩雙人演出！',
  },
  {
    key: 'bollywood',
    title: 'Bollywood Fusion',
    performers: ['Riya', 'Diya'],
    image: '/images/events/perf-bollywood-fusion.webp',
    text: 'Experience the magic of Bollywood Fusion, where traditional elegance meets modern beats! Get ready for a vibrant performance filled with energy, rhythm, and festive vibes.',
    zh: '融合印度傳統舞蹈的優雅與現代舞蹈的活力，帶來一場充滿節奏、熱情與歡樂的精彩演出，一起感受寶萊塢的魅力與排燈節的歡樂氣氛！',
  },
  {
    key: 'ukulele',
    title: 'Ukulele & Vocals',
    type: 'Singing & Music Performance',
    performers: ['Priscilla', 'NTU Ukulele'],
    alt: 'Priscilla singing into a microphone with the NTU Ukulele players holding ukuleles and a guitar',
    image: '/images/events/perf-ukulele-vocals.webp',
    text: 'Enjoy heartfelt singing by Priscilla, accompanied by the warm melodies of NTU Ukulele! With expressive vocals and lively acoustic rhythms, this performance brings music, joy, and togetherness to our Diwali celebration.',
    zh: '一起欣賞 Priscilla 真摯動人的歌聲，以及 NTU Ukulele 溫暖悠揚的樂器伴奏！透過充滿情感的演唱與輕快的旋律，為排燈節增添歡樂與溫馨，與大家共享美好的音樂時光！',
  },
  {
    key: 'tabla',
    title: 'Tabla Ensemble',
    type: 'Music Performance',
    // The poster names no one, so the card credits the group instead.
    performers: ['NTU Taiwanese tabla musicians'],
    alt: 'Four NTU musicians in kurtas playing tabla',
    image: '/images/events/perf-tabla-ensemble.webp',
    text: 'Experience the vibrant rhythms of Indian tabla, brought to life by talented NTU Taiwanese musicians! With intricate beats, lively rhythms, and seamless teamwork, this performance celebrates the beauty of Indian percussion and the joy of connecting cultures through music.',
    zh: '一起感受由台灣樂手帶來的印度塔布拉鼓演出！透過細膩多變的鼓點、充滿活力的節奏與默契十足的合奏，展現印度打擊樂的獨特魅力，讓音樂串起台灣與印度的文化交流！',
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

// Henna and tarot have their own feature cards (CarnivalFeatures.jsx); these are the rest.
export const carnival = [
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
