"use client";

import Link from "next/link";
import { navigation, collections, collectionText } from "@/data/content";
import { productText, products } from "@/data/products";
import { useStore } from "./StoreProvider";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
import { Modal } from "../ui/Modal";
import { useMemo, useState } from "react";
import { money } from "@/lib/format";
import { Locale, localizedHref, ui } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export function Header({ locale }: { locale: Locale }) {
  const { count, setCartOpen, searchOpen, setSearchOpen, mobileOpen, setMobileOpen } = useStore();
  const [shopOpen, setShopOpen] = useState(false);
  const pathname = usePathname();
  const otherLocale: Locale = locale === "en" ? "ru" : "en";
  const switchHref = pathname.replace(/^\/(en|ru)(?=\/|$)/, `/${otherLocale}`) || `/${otherLocale}`;
  return <>
    <div className="announcement"><span>{locale === "ru" ? "Доставка Fedorov Tea по всему миру" : "Fedorov Tea delivers worldwide"}</span><span>{locale === "ru" ? "Собран вручную · Республика Марий Эл" : "Hand collected · Mari El Republic"}</span></div>
    <header className="site-header">
      <div className="utility container"><span>{locale === "ru" ? "Только иван-чай и натуральные добавки" : "Only Ivan Tea and natural additions"}</span><nav><Link href={localizedHref(locale, "/wholesale")}>{ui[locale].partners}</Link><Link href={localizedHref(locale, "/about")}>{ui[locale].story}</Link><a className="language-switch" href={switchHref} hrefLang={otherLocale}><span className={locale === "en" ? "is-active" : ""}>EN</span><i>/</i><span className={locale === "ru" ? "is-active" : ""}>RU</span></a></nav></div>
      <div className="header-main container">
        <button className="mobile-trigger icon-button" onClick={() => setMobileOpen(true)} aria-label={locale === "ru" ? "Открыть меню" : "Open navigation"}><Icon name="menu" /></button>
        <Logo locale={locale}/>
        <nav className="primary-nav" aria-label={locale === "ru" ? "Главная навигация" : "Main navigation"}>
          {navigation.map((item, index) => index === 0 ?
            <div className="nav-group" key={item.href} onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)}>
              <Link href={localizedHref(locale, item.href)} aria-expanded={shopOpen} onFocus={() => setShopOpen(true)}>{locale === "ru" ? item.labelRu : item.label}<Icon name="chevron" size={14}/></Link>
              {shopOpen && <MegaMenu locale={locale} onClose={() => setShopOpen(false)} />}
            </div> : <Link key={item.href} href={localizedHref(locale, item.href)}>{locale === "ru" ? item.labelRu : item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="mobile-language" href={switchHref} hrefLang={otherLocale}>{otherLocale.toUpperCase()}</a>
          <button className="icon-button" onClick={() => setSearchOpen(true)} aria-label={ui[locale].search}><Icon name="search" /></button>
          <Link className="icon-button account-icon" href={localizedHref(locale, "/account")} aria-label={ui[locale].account}><Icon name="user" /></Link>
          <button className="icon-button cart-icon" onClick={() => setCartOpen(true)} aria-label={`${ui[locale].cart}: ${count}`}><Icon name="bag" /><span>{count}</span></button>
        </div>
      </div>
    </header>
    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} locale={locale}/>
    <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} locale={locale} switchHref={switchHref}/>
  </>;
}

function MegaMenu({ onClose, locale }: { onClose: () => void; locale: Locale }) {
  return <div className="mega-menu" onMouseLeave={onClose}>
    <div className="mega-inner container mega-inner--fedorov">
      <div className="mega-column"><p>{locale === "ru" ? "ПО ВКУСУ" : "BY STYLE"}</p>{collections.map((item) => { const copy = collectionText(item, locale); return <Link href={localizedHref(locale, `/collections/${item.slug}`)} key={item.slug}>{copy.name}</Link>; })}</div>
      <div className="mega-column"><p>{locale === "ru" ? "ВЫБРАТЬ" : "SHOP"}</p><Link className="featured-link" href={localizedHref(locale, "/shop")}>{locale === "ru" ? "Все вкусы" : "All Ivan Tea"}</Link><Link className="featured-link" href={localizedHref(locale, "/gifts")}>{locale === "ru" ? "Подарки из Марий Эл" : "Gifts from Mari El"}</Link><Link href={localizedHref(locale, "/shop?format=loose%20leaf")}>{locale === "ru" ? "Розничная упаковка" : "Retail canisters"}</Link><Link href={localizedHref(locale, "/wholesale")}>{locale === "ru" ? "Чай на развес" : "Bulk without retail packaging"}</Link></div>
      <div className="mega-column"><p>{locale === "ru" ? "УЗНАТЬ" : "LEARN"}</p><Link href={localizedHref(locale, "/blog/what-is-ivan-tea")}>{locale === "ru" ? "Что такое иван-чай" : "What is Ivan Tea?"}</Link><Link href={localizedHref(locale, "/blog/brewing-ivan-tea")}>{locale === "ru" ? "Как заваривать" : "How to brew"}</Link><Link href={localizedHref(locale, "/blog/composition-and-research")}>{locale === "ru" ? "Состав и исследования" : "Composition & research"}</Link><Link href={localizedHref(locale, "/blog/cold-ivan-tea-apple-berries")}>{locale === "ru" ? "Холодный иван-чай" : "Cold Ivan Tea"}</Link></div>
      <Link className="mega-feature mega-feature--mari" href={localizedHref(locale, "/about")}><span>{locale === "ru" ? "ИЗ МАРИЙ ЭЛ" : "FROM MARI EL"}</span><strong>{locale === "ru" ? "Каждый лист собран вручную" : "Every leaf begins by hand"}</strong><u>{locale === "ru" ? "Наша история" : "Our story"}</u></Link>
    </div>
  </div>;
}

function SearchModal({ open, onClose, locale }: { open: boolean; onClose: () => void; locale: Locale }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => products.filter((product) => { const copy = productText(product, locale); return `${copy.name} ${copy.type} ${copy.flavor} ${copy.ingredients}`.toLowerCase().includes(query.toLowerCase()); }).slice(0, 5), [query, locale]);
  return <Modal open={open} onClose={onClose} title={locale === "ru" ? "Поиск Fedorov Tea" : "Search Fedorov Tea"}>
    <div className="search-box"><Icon name="search"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={locale === "ru" ? "Вкус, добавка или статья" : "Search flavor, addition or guide"} aria-label={ui[locale].search} autoComplete="off"/></div>
    {!query && <div className="popular-searches"><span>{locale === "ru" ? "ПОПУЛЯРНОЕ" : "POPULAR"}</span>{(locale === "ru" ? ["классический", "ягоды", "подарки", "как заваривать"] : ["pure", "berries", "gifts", "how to brew"]).map((term) => <button key={term} onClick={() => setQuery(term)}>{term}</button>)}</div>}
    <div className="search-results"><p>{query ? `${locale === "ru" ? "ТОВАРЫ" : "PRODUCTS"} · ${matches.length}` : (locale === "ru" ? "ПОПРОБУЙТЕ" : "DISCOVER")}</p>{matches.map((product) => { const copy = productText(product, locale); return <Link href={localizedHref(locale, `/products/${product.slug}`)} className="search-result" key={product.slug} onClick={onClose}><span className="mini-tin" style={{ "--tin": product.color, "--accent": product.accent } as React.CSSProperties}>{product.initials}</span><span><b>{copy.name}</b><small>{copy.type} · {money(product.price, locale)}</small></span><Icon name="arrow" /></Link>; })}{query && <><p>{locale === "ru" ? "СТАТЬИ" : "ARTICLES"}</p><Link href={localizedHref(locale, "/blog/what-is-ivan-tea")} className="text-result" onClick={onClose}>{locale === "ru" ? "Что такое иван-чай" : "What is Ivan Tea?"} <Icon name="arrow"/></Link></>}</div>
  </Modal>;
}

function MobileNavigation({ open, onClose, locale, switchHref }: { open: boolean; onClose: () => void; locale: Locale; switchHref: string }) {
  const [expanded, setExpanded] = useState<string | null>("SHOP");
  return <Modal open={open} onClose={onClose} title={locale === "ru" ? "Меню" : "Menu"} side="left"><nav className="mobile-nav">{navigation.map((item, index) => <div key={item.href}><div className="mobile-nav-row"><Link href={localizedHref(locale, item.href)} onClick={onClose}>{locale === "ru" ? item.labelRu : item.label}</Link>{index === 0 && <button onClick={() => setExpanded(expanded ? null : "SHOP")} aria-expanded={expanded === "SHOP"}><Icon name="chevron" /></button>}</div>{index === 0 && expanded === "SHOP" && <div className="mobile-submenu"><div><span>{locale === "ru" ? "КОЛЛЕКЦИИ" : "COLLECTIONS"}</span>{collections.map((item) => { const copy = collectionText(item, locale); return <Link onClick={onClose} href={localizedHref(locale, `/collections/${item.slug}`)} key={item.slug}>{copy.name}</Link>; })}</div></div>}</div>)}<div className="mobile-utilities"><a href={switchHref}>{locale === "ru" ? "English version" : "Русская версия"}</a><Link href={localizedHref(locale, "/account")}>{ui[locale].account}</Link><Link href={localizedHref(locale, "/legal")}>{locale === "ru" ? "Доставка и документы" : "Delivery & legal"}</Link></div></nav></Modal>;
}
