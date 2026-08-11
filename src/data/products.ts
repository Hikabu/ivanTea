import { Locale } from "@/lib/i18n";

export type ProductVariant = {
  id: string;
  label: string;
  labelRu: string;
  detail: string;
  detailRu: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  nameRu: string;
  subtitle: string;
  subtitleRu: string;
  type: string;
  typeRu: string;
  flavor: string;
  flavorRu: string;
  benefit: string;
  benefitRu: string;
  caffeine: string;
  caffeineRu: string;
  format: string;
  formatRu: string;
  certification: string;
  certificationRu: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: "BESTSELLER" | "NEW" | "LIMITED" | "GIFT";
  badgeRu?: string;
  color: string;
  accent: string;
  initials: string;
  imagery: string;
  imageryRu: string;
  ingredients: string;
  ingredientsRu: string;
  origin: string;
  originRu: string;
  storage: string;
  storageRu: string;
  shelfLife: string;
  shelfLifeRu: string;
  variants: ProductVariant[];
};

const pouch = (price: number): ProductVariant[] => [
  { id: "canister", label: "CANISTER", labelRu: "ТУБУС", detail: "50 g · approx. 25 cups", detailRu: "50 г · около 25 чашек", price },
  { id: "refill", label: "REFILL", labelRu: "РЕФИЛ", detail: "100 g · home pouch", detailRu: "100 г · пакет для дома", price: price * 1.7 },
  { id: "bulk", label: "BULK", labelRu: "НА РАЗВЕС", detail: "1 kg · no retail pack", detailRu: "1 кг · без розничной упаковки", price: price * 10 },
];

export const products: Product[] = [
  {
    slug: "pure-ivan-tea",
    name: "Pure Ivan Tea",
    nameRu: "Иван-чай классический",
    subtitle: "Deep amber, softly floral, with a clean dried-fruit finish.",
    subtitleRu: "Глубокий янтарный настой, мягкие цветочные ноты и чистое сухофруктовое послевкусие.",
    type: "Fermented Ivan Tea",
    typeRu: "Ферментированный иван-чай",
    flavor: "Pure",
    flavorRu: "Классический",
    benefit: "Everyday ritual",
    benefitRu: "На каждый день",
    caffeine: "Naturally caffeine-free",
    caffeineRu: "Без кофеина от природы",
    format: "Loose leaf",
    formatRu: "Листовой",
    certification: "Wild hand collection",
    certificationRu: "Ручной сбор дикорастущих растений",
    price: 18,
    rating: 4.9,
    reviews: 214,
    badge: "BESTSELLER",
    badgeRu: "ХИТ",
    color: "#173e2c",
    accent: "#d34d9b",
    initials: "01",
    imagery: "fireweed leaf · honey · dried fruit",
    imageryRu: "лист кипрея · мёд · сухофрукты",
    ingredients: "100% fermented fireweed leaves (Chamaenerion angustifolium).",
    ingredientsRu: "100% ферментированные листья кипрея узколистного (Chamaenerion angustifolium).",
    origin: "Mari El Republic",
    originRu: "Республика Марий Эл",
    storage: "Store sealed, dry and away from sunlight at up to 25°C.",
    storageRu: "Хранить герметично, в сухом месте без прямого света при температуре до 25°C.",
    shelfLife: "24 months from packing",
    shelfLifeRu: "24 месяца с даты упаковки",
    variants: pouch(18),
  },
  {
    slug: "ivan-tea-apple-lingonberry",
    name: "Apple & Lingonberry",
    nameRu: "Яблоко и брусника",
    subtitle: "Tart forest berry, mellow apple and rounded fireweed leaf.",
    subtitleRu: "Лесная кислинка брусники, мягкое яблоко и округлый вкус кипрея.",
    type: "Ivan Tea with fruit",
    typeRu: "Иван-чай с фруктами",
    flavor: "Fruit",
    flavorRu: "Фруктовый",
    benefit: "Bright & warming",
    benefitRu: "Яркий и согревающий",
    caffeine: "Naturally caffeine-free",
    caffeineRu: "Без кофеина от природы",
    format: "Loose leaf",
    formatRu: "Листовой",
    certification: "Wild hand collection",
    certificationRu: "Ручной сбор дикорастущих растений",
    price: 20,
    rating: 4.9,
    reviews: 167,
    badge: "BESTSELLER",
    badgeRu: "ХИТ",
    color: "#4b263a",
    accent: "#ec87b8",
    initials: "02",
    imagery: "apple · lingonberry · fireweed",
    imageryRu: "яблоко · брусника · кипрей",
    ingredients: "Fermented fireweed leaves, dried apple and lingonberry.",
    ingredientsRu: "Ферментированные листья кипрея, сушёное яблоко и брусника.",
    origin: "Mari El Republic",
    originRu: "Республика Марий Эл",
    storage: "Store sealed, dry and away from sunlight at up to 25°C.",
    storageRu: "Хранить герметично, в сухом месте без прямого света при температуре до 25°C.",
    shelfLife: "18 months from packing",
    shelfLifeRu: "18 месяцев с даты упаковки",
    variants: pouch(20),
  },
  {
    slug: "ivan-tea-wild-berry",
    name: "Wild Berry",
    nameRu: "Лесные ягоды",
    subtitle: "Blackcurrant, raspberry and fireweed in a vivid ruby cup.",
    subtitleRu: "Смородина, малина и кипрей в ярком рубиновом настое.",
    type: "Ivan Tea with berries",
    typeRu: "Иван-чай с ягодами",
    flavor: "Berry",
    flavorRu: "Ягодный",
    benefit: "Juicy & aromatic",
    benefitRu: "Сочный и ароматный",
    caffeine: "Naturally caffeine-free",
    caffeineRu: "Без кофеина от природы",
    format: "Loose leaf",
    formatRu: "Листовой",
    certification: "Wild hand collection",
    certificationRu: "Ручной сбор дикорастущих растений",
    price: 21,
    rating: 4.8,
    reviews: 129,
    badge: "NEW",
    badgeRu: "НОВИНКА",
    color: "#6d1f43",
    accent: "#f0a0c2",
    initials: "03",
    imagery: "blackcurrant · raspberry · fireweed",
    imageryRu: "смородина · малина · кипрей",
    ingredients: "Fermented fireweed leaves, dried blackcurrant and raspberry.",
    ingredientsRu: "Ферментированные листья кипрея, сушёная чёрная смородина и малина.",
    origin: "Mari El Republic",
    originRu: "Республика Марий Эл",
    storage: "Store sealed, dry and away from sunlight at up to 25°C.",
    storageRu: "Хранить герметично, в сухом месте без прямого света при температуре до 25°C.",
    shelfLife: "18 months from packing",
    shelfLifeRu: "18 месяцев с даты упаковки",
    variants: pouch(21),
  },
  {
    slug: "ivan-tea-mari-meadow",
    name: "Mari Meadow",
    nameRu: "Марийский луг",
    subtitle: "Fireweed, mint and oregano with a lifted woodland aroma.",
    subtitleRu: "Кипрей, мята и душица с лёгким ароматом лесного луга.",
    type: "Ivan Tea with herbs",
    typeRu: "Иван-чай с травами",
    flavor: "Herbal",
    flavorRu: "Травяной",
    benefit: "Fresh & calm",
    benefitRu: "Свежий и мягкий",
    caffeine: "Naturally caffeine-free",
    caffeineRu: "Без кофеина от природы",
    format: "Loose leaf",
    formatRu: "Листовой",
    certification: "Wild hand collection",
    certificationRu: "Ручной сбор дикорастущих растений",
    price: 20,
    rating: 4.8,
    reviews: 96,
    color: "#31513a",
    accent: "#b4cf8e",
    initials: "04",
    imagery: "mint · oregano · fireweed",
    imageryRu: "мята · душица · кипрей",
    ingredients: "Fermented fireweed leaves, peppermint and oregano.",
    ingredientsRu: "Ферментированные листья кипрея, перечная мята и душица.",
    origin: "Mari El Republic",
    originRu: "Республика Марий Эл",
    storage: "Store sealed, dry and away from sunlight at up to 25°C.",
    storageRu: "Хранить герметично, в сухом месте без прямого света при температуре до 25°C.",
    shelfLife: "18 months from packing",
    shelfLifeRu: "18 месяцев с даты упаковки",
    variants: pouch(20),
  },
  {
    slug: "ivan-tea-sea-buckthorn-rowan",
    name: "Sea Buckthorn & Rowan",
    nameRu: "Облепиха и рябина",
    subtitle: "Golden berry brightness with a gently tart forest finish.",
    subtitleRu: "Золотистая ягодная яркость и деликатное терпкое послевкусие.",
    type: "Ivan Tea with berries",
    typeRu: "Иван-чай с ягодами",
    flavor: "Berry",
    flavorRu: "Ягодный",
    benefit: "Vibrant & tart",
    benefitRu: "Яркий и терпкий",
    caffeine: "Naturally caffeine-free",
    caffeineRu: "Без кофеина от природы",
    format: "Loose leaf",
    formatRu: "Листовой",
    certification: "Wild hand collection",
    certificationRu: "Ручной сбор дикорастущих растений",
    price: 22,
    rating: 4.7,
    reviews: 83,
    badge: "LIMITED",
    badgeRu: "СЕЗОННЫЙ",
    color: "#79512b",
    accent: "#ed9c3d",
    initials: "05",
    imagery: "sea buckthorn · rowan · fireweed",
    imageryRu: "облепиха · рябина · кипрей",
    ingredients: "Fermented fireweed leaves, dried sea buckthorn and rowan berries.",
    ingredientsRu: "Ферментированные листья кипрея, сушёные ягоды облепихи и рябины.",
    origin: "Mari El Republic",
    originRu: "Республика Марий Эл",
    storage: "Store sealed, dry and away from sunlight at up to 25°C.",
    storageRu: "Хранить герметично, в сухом месте без прямого света при температуре до 25°C.",
    shelfLife: "18 months from packing",
    shelfLifeRu: "18 месяцев с даты упаковки",
    variants: pouch(22),
  },
  {
    slug: "ivan-tea-fireweed-blossom",
    name: "Fireweed Blossom",
    nameRu: "Цветущий кипрей",
    subtitle: "A lighter pure Ivan Tea finished with fragrant fireweed flowers.",
    subtitleRu: "Более лёгкий иван-чай с ароматными цветками кипрея.",
    type: "Pure Ivan Tea",
    typeRu: "Чистый иван-чай",
    flavor: "Floral",
    flavorRu: "Цветочный",
    benefit: "Light & fragrant",
    benefitRu: "Лёгкий и ароматный",
    caffeine: "Naturally caffeine-free",
    caffeineRu: "Без кофеина от природы",
    format: "Loose leaf",
    formatRu: "Листовой",
    certification: "Wild hand collection",
    certificationRu: "Ручной сбор дикорастущих растений",
    price: 21,
    rating: 4.9,
    reviews: 71,
    color: "#55324c",
    accent: "#d85baf",
    initials: "06",
    imagery: "fireweed flower · leaf · honey",
    imageryRu: "цветок кипрея · лист · мёд",
    ingredients: "Fermented fireweed leaves and dried fireweed flowers.",
    ingredientsRu: "Ферментированные листья и сушёные цветки кипрея.",
    origin: "Mari El Republic",
    originRu: "Республика Марий Эл",
    storage: "Store sealed, dry and away from sunlight at up to 25°C.",
    storageRu: "Хранить герметично, в сухом месте без прямого света при температуре до 25°C.",
    shelfLife: "18 months from packing",
    shelfLifeRu: "18 месяцев с даты упаковки",
    variants: pouch(21),
  },
];

export const giftProduct: Product = {
  slug: "mari-el-gift-set", name: "Mari El Gift Set", nameRu: "Подарочный набор Марий Эл",
  subtitle: "Two Ivan Teas, a leaf infuser and the story of their origin.", subtitleRu: "Два вида иван-чая, инфузер-лист и история происхождения.",
  type: "Ivan Tea gift set", typeRu: "Подарочный набор иван-чая", flavor: "Gift", flavorRu: "Подарочный",
  benefit: "Distinctive giving", benefitRu: "Особенный подарок", caffeine: "Naturally caffeine-free", caffeineRu: "Без кофеина от природы",
  format: "Gift set", formatRu: "Подарочный набор", certification: "Wild hand collection", certificationRu: "Ручной сбор дикорастущих растений",
  price: 68, rating: 5, reviews: 24, badge: "GIFT", badgeRu: "ПОДАРОК", color: "#173e2c", accent: "#d34d9b", initials: "02",
  imagery: "pure Ivan Tea · apple & lingonberry · infuser", imageryRu: "классический иван-чай · яблоко и брусника · инфузер",
  ingredients: "Pure Ivan Tea 50 g; Apple & Lingonberry Ivan Tea 50 g; metal infuser; story card.", ingredientsRu: "Классический иван-чай 50 г; иван-чай с яблоком и брусникой 50 г; металлический инфузер; карточка истории.",
  origin: "Mari El Republic", originRu: "Республика Марий Эл", storage: "Store tea sealed, dry and away from sunlight at up to 25°C.", storageRu: "Хранить чай герметично, в сухом месте без прямого света при температуре до 25°C.",
  shelfLife: "18 months from packing", shelfLifeRu: "18 месяцев с даты упаковки",
  variants: [{ id: "gift", label: "GIFT SET", labelRu: "НАБОР", detail: "2 × 50 g · infuser · card", detailRu: "2 × 50 г · инфузер · карточка", price: 68 }],
};

export const getProduct = (slug: string) => products.find((product) => product.slug === slug) ?? products[0];

export const productText = (product: Product, locale: Locale) => ({
  ...product,
  name: locale === "ru" ? product.nameRu : product.name,
  subtitle: locale === "ru" ? product.subtitleRu : product.subtitle,
  type: locale === "ru" ? product.typeRu : product.type,
  flavor: locale === "ru" ? product.flavorRu : product.flavor,
  benefit: locale === "ru" ? product.benefitRu : product.benefit,
  caffeine: locale === "ru" ? product.caffeineRu : product.caffeine,
  format: locale === "ru" ? product.formatRu : product.format,
  certification: locale === "ru" ? product.certificationRu : product.certification,
  badge: locale === "ru" ? product.badgeRu : product.badge,
  imagery: locale === "ru" ? product.imageryRu : product.imagery,
  ingredients: locale === "ru" ? product.ingredientsRu : product.ingredients,
  origin: locale === "ru" ? product.originRu : product.origin,
  storage: locale === "ru" ? product.storageRu : product.storage,
  shelfLife: locale === "ru" ? product.shelfLifeRu : product.shelfLife,
  variants: product.variants.map((variant) => ({
    ...variant,
    label: locale === "ru" ? variant.labelRu : variant.label,
    detail: locale === "ru" ? variant.detailRu : variant.detail,
  })),
});
