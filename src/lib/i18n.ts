export const locales = ["en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const localizedHref = (locale: Locale, href: string) => {
  if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  const normalized = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
};

export const ui = {
  en: {
    language: "Language",
    home: "Home",
    shop: "Shop Ivan Tea",
    gifts: "Gifts",
    journal: "Research & recipes",
    story: "Mari El story",
    wholesale: "Wholesale",
    search: "Search",
    account: "Account",
    cart: "Cart",
    addToCart: "Add to cart",
    quickAdd: "Quick add",
    from: "From",
    reviews: "reviews",
    worldwide: "Worldwide delivery",
    retail: "Retail orders",
    partners: "Shops & distributors",
    bulk: "Bulk tea available",
    handCollected: "Hand collected",
    mariEl: "From Mari El",
  },
  ru: {
    language: "Язык",
    home: "Главная",
    shop: "Иван-чай",
    gifts: "Подарки",
    journal: "Статьи и рецепты",
    story: "История Марий Эл",
    wholesale: "Оптовым партнёрам",
    search: "Поиск",
    account: "Аккаунт",
    cart: "Корзина",
    addToCart: "В корзину",
    quickAdd: "Быстро добавить",
    from: "От",
    reviews: "отзывов",
    worldwide: "Доставка по всему миру",
    retail: "Розничные заказы",
    partners: "Магазинам и дистрибьюторам",
    bulk: "Чай без розничной упаковки",
    handCollected: "Собран вручную",
    mariEl: "Из Марий Эл",
  },
} as const;
