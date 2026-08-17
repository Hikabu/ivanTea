"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, localizedHref } from "@/lib/i18n";
import { useStore } from "./StoreProvider";
import { Logo } from "../ui/Logo";

const links = {
  en: [["Teas", "/shop"], ["Our land", "/about"], ["Our craft", "/craft"], ["About", "/about#people"]],
  ru: [["Чаи", "/shop"], ["Наша земля", "/about"], ["Наше ремесло", "/craft"], ["О нас", "/about#people"]],
};

export function Header({ locale }: { locale: Locale }) {
  const { count, setCartOpen, mobileOpen, setMobileOpen } = useStore();
  const pathname = usePathname();
  const other = locale === "en" ? "ru" : "en";
  const switchHref = pathname.replace(/^\/(en|ru)(?=\/|$)/, `/${other}`) || `/${other}`;
  return <header className="quiet-header">
    <button className="quiet-header__menu" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen}>{mobileOpen ? "Close" : "Menu"}</button>
    <Logo locale={locale}/>
    <nav>{links[locale].map(([label, href]) => <Link key={href} href={localizedHref(locale, href)}>{label}</Link>)}</nav>
    <div className="quiet-header__actions"><a href={switchHref}>{other.toUpperCase()}</a><button onClick={() => setCartOpen(true)}>{locale === "ru" ? "Корзина" : "Bag"} <span>({String(count).padStart(2, "0")})</span></button></div>
    {mobileOpen && <div className="quiet-mobile-nav">{links[locale].map(([label, href], index) => <Link key={href} onClick={() => setMobileOpen(false)} href={localizedHref(locale, href)}><span>0{index + 1}</span>{label}</Link>)}<div><a href={switchHref}>{other === "ru" ? "Русский" : "English"}</a><span>{locale === "ru" ? "Республика Марий Эл" : "Republic of Mari El"}</span></div></div>}
  </header>;
}
