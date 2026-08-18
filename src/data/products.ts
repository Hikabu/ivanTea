import { Locale } from "@/lib/i18n";

export type ProductVariant = { id: string; label: string; labelRu: string; detail: string; detailRu: string; price: number };
export type Product = {
  slug: string; name: string; nameRu: string; subtitle: string; subtitleRu: string;
  type: string; typeRu: string; flavor: string; flavorRu: string; benefit: string; benefitRu: string;
  caffeine: string; caffeineRu: string; format: string; formatRu: string; certification: string; certificationRu: string;
  price: number; rating: number; reviews: number;
  color: string; accent: string; initials: string; image: string; imagery: string; imageryRu: string;
  ingredients: string; ingredientsRu: string; origin: string; originRu: string; variants: ProductVariant[];
};

const formats = (price: number): ProductVariant[] => [
  { id: "box", label: "BOX", labelRu: "КОРОБКА", detail: "50 g · loose leaf", detailRu: "50 г · листовой", price },
  { id: "refill", label: "REFILL", labelRu: "РЕФИЛ", detail: "100 g · paper pouch", detailRu: "100 г · бумажный пакет", price: Math.round(price * 1.72) },
];

const common = {
  caffeine: "Naturally caffeine-free", caffeineRu: "Без кофеина от природы",
  format: "Loose leaf", formatRu: "Листовой",
  certification: "Gathered by hand", certificationRu: "Собран вручную",
  origin: "Republic of Mari El", originRu: "Республика Марий Эл",
};

export const products: Product[] = [
  {
    ...common, slug: "pure-ivan-tea", name: "Ivan-tea", nameRu: "Иван-чай", initials: "01", price: 18,
    subtitle: "The field in its clearest form: soft, amber and quietly floral.", subtitleRu: "Поле в чистом виде: мягкий янтарный настой с тонким цветочным ароматом.",
    type: "Original", typeRu: "Классический", flavor: "Pure", flavorRu: "Чистый", benefit: "Everyday", benefitRu: "На каждый день",
    ingredients: "Fermented fireweed leaf.", ingredientsRu: "Ферментированный лист кипрея.",
    imagery: "fireweed leaf · fireweed flower", imageryRu: "лист кипрея · цветок кипрея",
    color: "#d9829a", accent: "#f0d1d8", image: "/images/fedorov/ivanTea-transparent.png", rating: 4.9, reviews: 214, variants: formats(18),
  },
  {
    ...common, slug: "meadow", name: "Meadow", nameRu: "Луг", initials: "02", price: 20,
    subtitle: "Light and aromatic, with the cool edge of a meadow after rain.", subtitleRu: "Лёгкий ароматный сбор с прохладой луга после дождя.",
    type: "Botanical blend", typeRu: "Ботанический сбор", flavor: "Herbal", flavorRu: "Травяной", benefit: "Fresh", benefitRu: "Свежий",
    ingredients: "Fireweed, mint, chamomile and lavender.", ingredientsRu: "Кипрей, мята, ромашка и лаванда.",
    imagery: "mint · chamomile · lavender", imageryRu: "мята · ромашка · лаванда",
    color: "#a9ad87", accent: "#e5e1c8", image: "/images/fedorov/ivanChamamel-transparent.png", rating: 4.8, reviews: 96, variants: formats(20),
  },
  {
    ...common, slug: "evening", name: "Evening", nameRu: "Вечер", initials: "03", price: 20,
    subtitle: "A soft cup for the hour when the light leaves the field.", subtitleRu: "Мягкий настой для часа, когда свет уходит с поля.",
    type: "Botanical blend", typeRu: "Ботанический сбор", flavor: "Floral", flavorRu: "Цветочный", benefit: "Quiet", benefitRu: "Спокойный",
    ingredients: "Fireweed, lemon balm, chamomile and lavender.", ingredientsRu: "Кипрей, мелисса, ромашка и лаванда.",
    imagery: "lemon balm · chamomile · lavender", imageryRu: "мелисса · ромашка · лаванда",
    color: "#b7a77f", accent: "#e8dec2", image: "/images/fedorov/ivanLavander.png", rating: 4.9, reviews: 118, variants: formats(20),
  },
  {
    ...common, slug: "forest-berries", name: "Forest Berries", nameRu: "Лесные ягоды", initials: "04", price: 22,
    subtitle: "Deeper, brighter and tart at the edges; the forest after the meadow.", subtitleRu: "Глубокий, яркий, с тонкой кислинкой — лес после луга.",
    type: "Berry blend", typeRu: "Ягодный сбор", flavor: "Berry", flavorRu: "Ягодный", benefit: "Rich", benefitRu: "Насыщенный",
    ingredients: "Fireweed, rose hips, sea buckthorn, cranberry and raspberry.", ingredientsRu: "Кипрей, шиповник, облепиха, клюква и малина.",
    imagery: "rose hip · sea buckthorn · cranberry · raspberry", imageryRu: "шиповник · облепиха · клюква · малина",
    color: "#80354e", accent: "#dbc0c8", image: "/images/fedorov/apples.png", rating: 4.8, reviews: 129, variants: formats(22),
  },
];

export const giftProduct: Product = { ...products[0], slug: "mari-el-gift-set", name: "The Four Fields", nameRu: "Четыре поля", initials: "04", price: 68, subtitle: "All four teas, gathered into one quiet gift.", subtitleRu: "Все четыре чая в одном спокойном подарке.", ingredients: "Four 50 g boxes: Original, Meadow, Evening and Forest Berries.", ingredientsRu: "Четыре коробки по 50 г: Классический, Луг, Вечер и Лесные ягоды.", variants: [{ id: "gift", label: "GIFT SET", labelRu: "НАБОР", detail: "4 × 50 g", detailRu: "4 × 50 г", price: 68 }] };

export const getProduct = (slug: string) => products.find((product) => product.slug === slug) ?? products[0];
export const productText = (product: Product, locale: Locale) => ({
  ...product,
  name: locale === "ru" ? product.nameRu : product.name,
  subtitle: locale === "ru" ? product.subtitleRu : product.subtitle,
  type: locale === "ru" ? product.typeRu : product.type,
  flavor: locale === "ru" ? product.flavorRu : product.flavor,
  caffeine: locale === "ru" ? product.caffeineRu : product.caffeine,
  imagery: locale === "ru" ? product.imageryRu : product.imagery,
  ingredients: locale === "ru" ? product.ingredientsRu : product.ingredients,
  origin: locale === "ru" ? product.originRu : product.origin,
  variants: product.variants.map((variant) => ({ ...variant, label: locale === "ru" ? variant.labelRu : variant.label, detail: locale === "ru" ? variant.detailRu : variant.detail })),
});
