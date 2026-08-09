export const collections = [
  { slug: "black-tea", name: "Black Tea", description: "Deep, aromatic leaves for brisk mornings and long afternoons.", image: "/images/category-black.jpg" },
  { slug: "green-tea", name: "Green Tea", description: "Fresh, grassy and beautifully clear in the cup.", image: "/images/category-green.jpg" },
  { slug: "herbal", name: "Herbal Infusions", description: "Caffeine-free botanicals for every hour.", image: "/images/category-herbal.jpg" },
  { slug: "matcha", name: "Matcha", description: "Vivid stone-ground green tea from Japan.", image: "/images/category-matcha.jpg" },
];

export const articles = [
  { slug: "a-practical-guide-to-brewing", category: "BREWING GUIDE", title: "A Better Cup, by Degrees", excerpt: "Water, temperature and time—the small choices that transform a daily steep.", image: "/images/category-herbal.jpg", readTime: "6 min read" },
  { slug: "stone-fruit-iced-tea", category: "RECIPES", title: "Stone Fruit Iced Tea for Long Afternoons", excerpt: "A bright pitcher of black tea, ripe peach and garden herbs.", image: "/images/journal-iced-tea.jpg", readTime: "4 min read" },
  { slug: "the-story-of-bergamot", category: "INGREDIENT STORIES", title: "Bergamot: The Fragrant Rind", excerpt: "Inside the distinctive citrus that gives Earl Grey its enduring character.", image: "/images/journal-bergamot.jpg", readTime: "7 min read" },
  { slug: "understanding-tea-families", category: "TEA LIBRARY", title: "One Leaf, Many Expressions", excerpt: "Black, green, white and oolong tea all begin with the very same plant.", image: "/images/journal-leaves.jpg", readTime: "8 min read" },
];

export const navigation = [
  { label: "SHOP", href: "/shop" },
  { label: "TEA TYPES", href: "/collections/black-tea" },
  { label: "FLAVORS", href: "/shop?filter=flavor" },
  { label: "WELLNESS", href: "/shop?filter=benefit" },
  { label: "GIFTS", href: "/gifts" },
  { label: "LEARN", href: "/blog" },
];

export const testimonials = [
  { quote: "The Orchard Ginger has become the quiet punctuation at the end of every workday.", name: "Marian L.", product: "Orchard Ginger" },
  { quote: "Thoughtful packaging, unusually fresh leaves, and a cup that tastes exactly as described.", name: "Theo R.", product: "Jasmine Cloud" },
  { quote: "I sent the tasting library as a gift, then ordered one for myself before the week was out.", name: "Elena P.", product: "The Tasting Library" },
];
