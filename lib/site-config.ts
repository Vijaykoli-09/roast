// Café Rowan is a fictional portfolio concept. The location, prices and reviews
// are demo content; contact and attribution details were provided by Vijay Koli.

export const siteConfig = {
  name: 'Café Rowan',
  tagline: 'A little pause in a busy world.',
  established: 'Since 2024',
  url: 'https://caferowan.example',
  address: {
    line1: '24 Garden Lane',
    line2: 'Old Town',
    full: '24 Garden Lane, Old Town',
  },
  hours: [
    { days: 'Every day', time: '8:00 AM – 9:00 PM' },
    { days: 'Kitchen closes', time: '8:30 PM' },
  ],
  phone: {
    display: '+91 93594 01903',
    href: 'tel:+919359401903',
  },
  email: 'vijaysunilkoli@gmail.com',
  credit: 'Vijay Koli',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=24+Garden+Lane+Old+Town',
  social: {
    instagram: {
      handle: '@caferowan',
      url: 'https://www.instagram.com/',
    },
  },
  hasDemoLocation: true,
} as const

export const navLinks = [
  { label: 'Home', href: '/#top' },
  { label: 'Our Story', href: '/#story' },
  { label: 'Menu', href: '/#menu' },
  { label: 'The Space', href: '/#space' },
  { label: 'Contact', href: '/#visit' },
] as const

export type SignatureItem = {
  name: string
  description: string
  price: number
  note: string
  image: string
  alt: string
  tone: 'rose' | 'beige' | 'olive'
}

export const signatureItems: SignatureItem[] = [
  {
    name: 'The Classic Cappuccino',
    description:
      'Rich espresso, silky steamed milk, and a delicate layer of foam.',
    price: 140,
    note: 'the house favourite',
    image: '/images/menu-cappuccino.png',
    alt: 'A cappuccino with rosetta latte art in a speckled ceramic cup on a dusty rose backdrop',
    tone: 'rose',
  },
  {
    name: 'The Chocolate Dream',
    description:
      'A soft, indulgent chocolate pastry finished with rich ganache.',
    price: 180,
    note: 'baked at dawn',
    image: '/images/menu-chocolate.png',
    alt: 'A chocolate pastry glazed with glossy dark ganache on a cream ceramic plate',
    tone: 'beige',
  },
  {
    name: 'The Berry Cheesecake',
    description:
      'Creamy cheesecake with a gentle sweetness and fresh berry notes.',
    price: 210,
    note: 'a little treat',
    image: '/images/menu-cheesecake.png',
    alt: 'A slice of baked cheesecake topped with berry compote and fresh raspberries',
    tone: 'olive',
  },
]

export type MenuItem = {
  name: string
  description: string
  price: number
  note?: string
}

export type MenuCategory = {
  id: string
  label: string
  intro: string
  items: MenuItem[]
}

export const fullMenu: MenuCategory[] = [
  {
    id: 'coffee',
    label: 'Coffee',
    intro: 'Pulled slowly, poured with care.',
    items: [
      { name: 'Espresso', description: 'A short, bright shot with a honeyed finish.', price: 110 },
      { name: 'Classic Cappuccino', description: 'Espresso, silky steamed milk, a soft cap of foam.', price: 140, note: 'house favourite' },
      { name: 'Flat White', description: 'A double ristretto with velvety microfoam.', price: 160 },
      { name: 'Café Latte', description: 'Mellow and milky, for unhurried mornings.', price: 150 },
      { name: 'Cortado', description: 'Equal parts espresso and warm milk.', price: 140 },
      { name: 'Pour Over', description: 'Single-origin beans, brewed by hand. Ask what we are pouring today.', price: 190 },
      { name: 'Iced Honey Latte', description: 'Espresso, cold milk and a little wildflower honey.', price: 180 },
    ],
  },
  {
    id: 'tea',
    label: 'Tea & Others',
    intro: 'For the slow sippers.',
    items: [
      { name: 'Masala Chai', description: 'Brewed with whole spices and a splash of milk.', price: 120 },
      { name: 'Earl Grey', description: 'Bergamot black tea, served in a pot for one.', price: 130 },
      { name: 'Chamomile & Honey', description: 'Gentle, floral, and calming.', price: 130 },
      { name: 'Rowan Hot Chocolate', description: 'Dark chocolate melted into warm milk.', price: 170, note: 'rainy-day pick' },
      { name: 'Fresh Lemonade', description: 'Squeezed to order, lightly sweetened.', price: 120 },
    ],
  },
  {
    id: 'bakery',
    label: 'Bakery',
    intro: 'Out of the oven every morning.',
    items: [
      { name: 'Butter Croissant', description: 'Flaky, golden, and still a little warm.', price: 120 },
      { name: 'The Chocolate Dream', description: 'A soft chocolate pastry finished with rich ganache.', price: 180 },
      { name: 'Almond & Pear Tart', description: 'Frangipane, poached pear, powdered sugar.', price: 190 },
      { name: 'The Berry Cheesecake', description: 'Creamy, gently sweet, fresh berry notes.', price: 210 },
      { name: 'Cinnamon Knot', description: 'Brown butter, cinnamon sugar, a sticky glaze.', price: 140 },
      { name: 'Banana Walnut Loaf', description: 'A thick, toasted slice with salted butter.', price: 130, note: 'grandma approved' },
    ],
  },
  {
    id: 'brunch',
    label: 'Brunch',
    intro: 'Served until 3 PM.',
    items: [
      { name: 'Rowan Toast', description: 'Sourdough, whipped ricotta, honey and thyme.', price: 260 },
      { name: 'Garden Eggs', description: 'Soft scrambled eggs, herbs, toasted brioche.', price: 280 },
      { name: 'Mushroom on Sourdough', description: 'Garlic mushrooms, parmesan, a soft egg.', price: 310 },
      { name: 'Granola Bowl', description: 'House granola, yoghurt, seasonal fruit.', price: 240 },
    ],
  },
]

export const testimonials = [
  {
    quote:
      'The kind of place where you lose track of time, in the best possible way.',
    name: 'A Sunday regular',
  },
  {
    quote:
      'Beautiful coffee, lovely atmosphere, and the most comforting little corner.',
    name: 'A window-seat reader',
  },
  {
    quote: 'A perfect spot for slow mornings and good conversations.',
    name: 'A morning walker',
  },
]

export function formatPrice(value: number) {
  return `₹${value}`
}
