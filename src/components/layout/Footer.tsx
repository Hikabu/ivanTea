"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";
import { Accordion } from "../ui/Accordion";
import { Locale, localizedHref } from "@/lib/i18n";

const groups = {
  en: [
    { title: "SHOP", links: [["All Ivan Tea", "/shop"], ["Pure", "/collections/pure"], ["With berries", "/collections/berries"], ["Gifts", "/gifts"]] },
    { title: "LEARN", links: [["What is Ivan Tea?", "/blog/what-is-ivan-tea"], ["Brewing", "/blog/brewing-ivan-tea"], ["Research", "/blog/composition-and-research"], ["Recipes", "/blog"]] },
    { title: "MARI EL", links: [["Our story", "/about"], ["Hand collection", "/blog/hand-collected-mari-el"], ["Wholesale", "/wholesale"], ["Contact", "/wholesale#contact"]] },
    { title: "CUSTOMER CARE", links: [["Worldwide delivery", "/legal#delivery"], ["Returns", "/legal#returns"], ["Product information", "/legal#product"], ["Account", "/account"]] },
  ],
  ru: [
    { title: "МАГАЗИН", links: [["Весь иван-чай", "/shop"], ["Классический", "/collections/pure"], ["С ягодами", "/collections/berries"], ["Подарки", "/gifts"]] },
    { title: "УЗНАТЬ", links: [["Что такое иван-чай", "/blog/what-is-ivan-tea"], ["Как заваривать", "/blog/brewing-ivan-tea"], ["Исследования", "/blog/composition-and-research"], ["Рецепты", "/blog"]] },
    { title: "МАРИЙ ЭЛ", links: [["Наша история", "/about"], ["Ручной сбор", "/blog/hand-collected-mari-el"], ["Оптовым партнёрам", "/wholesale"], ["Контакты", "/wholesale#contact"]] },
    { title: "ПОКУПАТЕЛЯМ", links: [["Доставка по миру", "/legal#delivery"], ["Возврат", "/legal#returns"], ["О продукте", "/legal#product"], ["Аккаунт", "/account"]] },
  ],
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };
  const copy = locale === "ru" ? {
    eyebrow: "ПИСЬМА ИЗ МАРИЙ ЭЛ", title: "Новости Fedorov Tea", text: "Новые вкусы, рецепты и заметки о сборе — изредка и по делу.", placeholder: "Электронная почта", sent: "Спасибо. Скоро напишем.", brand: "Современный иван-чай, собранный вручную в полях и лесах Марий Эл.", copyright: "© 2026 Fedorov Tea", place: "СОБРАНО ВРУЧНУЮ · МАРИЙ ЭЛ / ПО ВСЕМУ МИРУ",
  } : {
    eyebrow: "LETTERS FROM MARI EL", title: "News from Fedorov Tea", text: "New harvests, recipes and field notes—sent occasionally and with purpose.", placeholder: "Email address", sent: "Thank you. We will write soon.", brand: "Modern Ivan Tea, hand collected in the fields and forests of Mari El.", copyright: "© 2026 Fedorov Tea", place: "HAND COLLECTED · MARI EL / WORLDWIDE",
  };
  return <footer className="footer">
    <div className="newsletter container"><div><p>{copy.eyebrow}</p><h2>{copy.title}</h2><span>{copy.text}</span></div><form onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">{copy.placeholder}</label><input id="newsletter-email" type="email" required placeholder={copy.placeholder}/><button aria-label={locale === "ru" ? "Подписаться" : "Subscribe"}><Icon name="arrow" /></button>{sent && <small>{copy.sent}</small>}</form></div>
    <div className="footer-main container"><div className="footer-brand"><Logo light locale={locale}/><p>{copy.brand}</p><div className="socials"><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="Pinterest">PT</a><a href="#" aria-label="VK">VK</a></div></div><div className="footer-links desktop-footer-links">{groups[locale].map((group) => <div key={group.title}><p>{group.title}</p>{group.links.map(([label, href]) => <Link href={localizedHref(locale, href)} key={label}>{label}</Link>)}</div>)}</div><div className="mobile-footer-links">{groups[locale].map((group) => <Accordion title={group.title} key={group.title}>{group.links.map(([label, href]) => <Link href={localizedHref(locale, href)} key={label}>{label}</Link>)}</Accordion>)}</div></div>
    <div className="footer-bottom container"><span>{copy.copyright}</span><nav><Link href={localizedHref(locale, "/legal#privacy")}>{locale === "ru" ? "Конфиденциальность" : "Privacy"}</Link><Link href={localizedHref(locale, "/legal#terms")}>{locale === "ru" ? "Условия" : "Terms"}</Link><Link href={localizedHref(locale, "/legal#product")}>{locale === "ru" ? "Маркировка" : "Product labels"}</Link></nav><span>{copy.place}</span></div>
  </footer>;
}
