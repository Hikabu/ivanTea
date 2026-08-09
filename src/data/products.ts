export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  type: string;
  flavor: string;
  benefit: string;
  caffeine: string;
  format: string;
  certification: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: "BESTSELLER" | "NEW" | "LIMITED" | "ORGANIC";
  color: string;
  accent: string;
  initials: string;
  imagery: string;
  ingredients: string;
  origin: string;
  variants: { id: string; label: string; detail: string; price: number }[];
};

export const products: Product[] = [
  {
    slug: "orchard-ginger-black-tea",
    name: "Orchard Ginger",
    subtitle: "Lush white peach and a bright ginger finish.",
    type: "Black Tea", flavor: "Fruit", benefit: "Energy", caffeine: "Moderate", format: "Tea Bags", certification: "Rainforest Grown",
    price: 14, rating: 4.9, reviews: 842, badge: "BESTSELLER", color: "#23472f", accent: "#e2aa72", initials: "OG",
    imagery: "peach · ginger · assam",
    ingredients: "Assam black tea, dried peach, ginger root and natural peach essence.", origin: "India · Sri Lanka",
    variants: [
      { id: "tin", label: "TIN", detail: "40 pyramid sachets", price: 14 },
      { id: "refill", label: "REFILL", detail: "40 pyramid sachets", price: 12.5 },
      { id: "bulk", label: "BULK", detail: "200 sachets", price: 54 },
      { id: "traveler", label: "TRAVELER", detail: "8 sachets", price: 7 },
    ],
  },
  {
    slug: "bergamot-noir",
    name: "Bergamot Noir",
    subtitle: "A stately Earl Grey with fragrant citrus peel.",
    type: "Black Tea", flavor: "Earl Grey", benefit: "Energy", caffeine: "Moderate", format: "Loose Leaf", certification: "Responsibly Sourced",
    price: 15, rating: 4.8, reviews: 516, badge: "BESTSELLER", color: "#263832", accent: "#d7ba79", initials: "BN",
    imagery: "bergamot · cornflower · ceylon", ingredients: "Ceylon black tea, bergamot oil, blue cornflower.", origin: "Sri Lanka",
    variants: [{ id: "tin", label: "TIN", detail: "3.5 oz · 45 cups", price: 15 }, { id: "refill", label: "REFILL", detail: "3.5 oz · 45 cups", price: 13.5 }, { id: "bulk", label: "BULK", detail: "1 lb · 200 cups", price: 49 }],
  },
  {
    slug: "meadow-mint-tisane",
    name: "Meadow Mint",
    subtitle: "Garden mint, lemon verbena and a cool finish.",
    type: "Herbal", flavor: "Mint", benefit: "Digestion", caffeine: "None", format: "Tea Bags", certification: "Organic",
    price: 13, rating: 4.9, reviews: 289, badge: "ORGANIC", color: "#66816a", accent: "#c9d2ac", initials: "MM",
    imagery: "peppermint · verbena · fennel", ingredients: "Organic peppermint, spearmint, lemon verbena and fennel.", origin: "Pacific Northwest",
    variants: [{ id: "tin", label: "TIN", detail: "36 tea bags", price: 13 }, { id: "refill", label: "REFILL", detail: "36 tea bags", price: 11.5 }, { id: "bulk", label: "BULK", detail: "180 tea bags", price: 46 }],
  },
  {
    slug: "golden-chamomile",
    name: "Golden Chamomile",
    subtitle: "Whole blossoms softened with honeyed linden.",
    type: "Herbal", flavor: "Floral", benefit: "Sleep", caffeine: "None", format: "Loose Leaf", certification: "Organic",
    price: 16, rating: 4.7, reviews: 194, badge: "NEW", color: "#ad713d", accent: "#eed997", initials: "GC",
    imagery: "chamomile · linden · vanilla", ingredients: "Organic Egyptian chamomile, linden flower and vanilla bean.", origin: "Egypt",
    variants: [{ id: "tin", label: "TIN", detail: "2.5 oz · 35 cups", price: 16 }, { id: "refill", label: "REFILL", detail: "2.5 oz · 35 cups", price: 14 }, { id: "traveler", label: "TRAVELER", detail: "8 sachets", price: 7 }],
  },
  {
    slug: "ceremonial-matcha",
    name: "Ceremonial Matcha",
    subtitle: "Shade-grown, stone-ground and quietly sweet.",
    type: "Matcha", flavor: "Green", benefit: "Focus", caffeine: "High", format: "Powder", certification: "Organic",
    price: 28, rating: 4.8, reviews: 161, badge: "ORGANIC", color: "#6c783e", accent: "#c4cd75", initials: "CM",
    imagery: "tencha · spring harvest · uji", ingredients: "100% organic stone-ground Japanese tencha.", origin: "Uji · Japan",
    variants: [{ id: "tin", label: "TIN", detail: "1.4 oz · 20 bowls", price: 28 }, { id: "refill", label: "REFILL", detail: "1.4 oz · 20 bowls", price: 25 }],
  },
  {
    slug: "smoked-plum-oolong",
    name: "Smoked Plum Oolong",
    subtitle: "Roasted oolong, dark plum and cedar smoke.",
    type: "Oolong", flavor: "Fruit", benefit: "Focus", caffeine: "Low", format: "Loose Leaf", certification: "Small Batch",
    price: 19, rating: 4.6, reviews: 98, badge: "LIMITED", color: "#6d3f45", accent: "#cb8b82", initials: "SP",
    imagery: "plum · cedar · wuyi oolong", ingredients: "Wuyi oolong, dried plum, cedar-smoked black tea.", origin: "Fujian · China",
    variants: [{ id: "tin", label: "TIN", detail: "3 oz · 40 cups", price: 19 }, { id: "refill", label: "REFILL", detail: "3 oz · 40 cups", price: 17 }],
  },
  {
    slug: "jasmine-cloud-green",
    name: "Jasmine Cloud",
    subtitle: "Spring green tea scented over jasmine blossoms.",
    type: "Green Tea", flavor: "Floral", benefit: "Focus", caffeine: "Low", format: "Tea Bags", certification: "Organic",
    price: 15, rating: 4.9, reviews: 337, badge: "BESTSELLER", color: "#587155", accent: "#f0e4b8", initials: "JC",
    imagery: "jasmine · mao feng · spring air", ingredients: "Organic green tea scented with fresh jasmine blossoms.", origin: "Guangxi · China",
    variants: [{ id: "tin", label: "TIN", detail: "36 tea bags", price: 15 }, { id: "refill", label: "REFILL", detail: "36 tea bags", price: 13.5 }, { id: "bulk", label: "BULK", detail: "180 tea bags", price: 52 }],
  },
  {
    slug: "spiced-hearth-chai",
    name: "Spiced Hearth Chai",
    subtitle: "Assam tea, toasted cardamom and true cinnamon.",
    type: "Chai", flavor: "Cinnamon", benefit: "Energy", caffeine: "Moderate", format: "Tea Bags", certification: "Responsibly Sourced",
    price: 14, rating: 4.8, reviews: 476, badge: "BESTSELLER", color: "#874b36", accent: "#d2a167", initials: "SH",
    imagery: "cardamom · cinnamon · assam", ingredients: "Assam black tea, cardamom, cinnamon, ginger, clove and black pepper.", origin: "India",
    variants: [{ id: "tin", label: "TIN", detail: "40 tea bags", price: 14 }, { id: "refill", label: "REFILL", detail: "40 tea bags", price: 12.5 }, { id: "bulk", label: "BULK", detail: "200 tea bags", price: 52 }],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug) ?? products[0];
