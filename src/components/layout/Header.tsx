"use client";

import Link from "next/link";
import { navigation } from "@/data/content";
import { products } from "@/data/products";
import { useStore } from "./StoreProvider";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";
import { Modal } from "../ui/Modal";
import { useMemo, useState } from "react";
import { money } from "@/lib/format";

const menuColumns = [
  { title: "FEATURED", links: ["Best Sellers", "New Arrivals", "Seasonal Blends", "Small Batch"] },
  { title: "SHOP BY TYPE", links: ["Black", "Green", "Matcha", "Herbal", "Oolong", "White", "Chai", "Iced Tea"] },
  { title: "SHOP BY FLAVOR", links: ["Fruit", "Floral", "Ginger", "Vanilla", "Mint", "Cinnamon", "Earl Grey"] },
  { title: "SHOP BY BENEFIT", links: ["Sleep", "Energy", "Digestion", "Focus", "Relaxation", "Caffeine Free", "Organic"] },
  { title: "SHOP BY FORMAT", links: ["Tea Bags", "Loose Leaf", "Tins", "Refills", "Samplers", "Iced Tea"] },
];

export function Header() {
  const { count, setCartOpen, searchOpen, setSearchOpen, mobileOpen, setMobileOpen } = useStore();
  const [shopOpen, setShopOpen] = useState(false);
  return <>
    <div className="announcement"><span>Complimentary shipping on orders $65+</span><span>Summer steeping: save 15% on iced tea</span></div>
    <header className="site-header">
      <div className="utility container"><span>Small-batch tea, packed by hand</span><nav><Link href="/shop">Subscriptions</Link><Link href="/account">Rewards</Link><Link href="/about">Our Story</Link></nav></div>
      <div className="header-main container">
        <button className="mobile-trigger icon-button" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Icon name="menu" /></button>
        <Logo />
        <nav className="primary-nav" aria-label="Main navigation">
          {navigation.map((item, index) => index === 0 ?
            <div className="nav-group" key={item.label} onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)}>
              <Link href={item.href} aria-expanded={shopOpen} onFocus={() => setShopOpen(true)}>{item.label}<Icon name="chevron" size={14}/></Link>
              {shopOpen && <MegaMenu onClose={() => setShopOpen(false)} />}
            </div> : <Link key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setSearchOpen(true)} aria-label="Search"><Icon name="search" /></button>
          <Link className="icon-button account-icon" href="/account" aria-label="Account"><Icon name="user" /></Link>
          <button className="icon-button cart-icon" onClick={() => setCartOpen(true)} aria-label={`Cart with ${count} items`}><Icon name="bag" /><span>{count}</span></button>
        </div>
      </div>
    </header>
    <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
  </>;
}

function MegaMenu({ onClose }: { onClose: () => void }) {
  return <div className="mega-menu" onMouseLeave={onClose}>
    <div className="mega-inner container">
      {menuColumns.map((column) => <div className="mega-column" key={column.title}><p>{column.title}</p>{column.links.map((link, i) => <Link className={i < 2 && column.title === "FEATURED" ? "featured-link" : ""} href={`/shop?${column.title.toLowerCase().replaceAll(" ", "-")}=${link.toLowerCase().replaceAll(" ", "-")}`} key={link}>{link}</Link>)}</div>)}
      <Link className="mega-feature" href="/gifts"><span>THE HOST&apos;S EDIT</span><strong>Tea worth gathering around</strong><u>Explore Gifts</u></Link>
    </div>
  </div>;
}

function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => products.filter((p) => `${p.name} ${p.type} ${p.flavor}`.toLowerCase().includes(query.toLowerCase())).slice(0, 4), [query]);
  return <Modal open={open} onClose={onClose} title="Search Alder & Hearth">
    <div className="search-box"><Icon name="search"/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tea, ingredients and guides" aria-label="Search" autoComplete="off"/></div>
    {!query && <div className="popular-searches"><span>POPULAR</span>{["caffeine free", "ginger", "gifts", "how to brew"].map((term) => <button key={term} onClick={() => setQuery(term)}>{term}</button>)}</div>}
    <div className="search-results">
      <p>{query ? `PRODUCTS · ${matches.length}` : "DISCOVER"}</p>
      {matches.map((product) => <Link href={`/products/${product.slug}`} className="search-result" key={product.slug} onClick={onClose}><span className="mini-tin" style={{ "--tin": product.color, "--accent": product.accent } as React.CSSProperties}>{product.initials}</span><span><b>{product.name}</b><small>{product.type} · {money(product.price)}</small></span><Icon name="arrow" /></Link>)}
      {query && <><p>COLLECTIONS &amp; ARTICLES</p><Link href="/collections/black-tea" className="text-result" onClick={onClose}>Black Tea Collection <Icon name="arrow"/></Link><Link href="/blog/a-practical-guide-to-brewing" className="text-result" onClick={onClose}>A Better Cup, by Degrees <Icon name="arrow"/></Link></>}
    </div>
  </Modal>;
}

function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>("SHOP");
  return <Modal open={open} onClose={onClose} title="Menu" side="left">
    <nav className="mobile-nav">
      {navigation.map((item) => <div key={item.label}>
        <div className="mobile-nav-row"><Link href={item.href} onClick={onClose}>{item.label}</Link>{item.label === "SHOP" && <button onClick={() => setExpanded(expanded ? null : "SHOP")} aria-expanded={expanded === "SHOP"}><Icon name="chevron" /></button>}</div>
        {item.label === "SHOP" && expanded === "SHOP" && <div className="mobile-submenu">{menuColumns.slice(0, 4).map((column) => <div key={column.title}><span>{column.title}</span>{column.links.slice(0, 5).map((link) => <Link onClick={onClose} href={`/shop?q=${link}`} key={link}>{link}</Link>)}</div>)}</div>}
      </div>)}
      <div className="mobile-utilities"><Link href="/account">Account</Link><Link href="/shop">Subscriptions</Link><Link href="/account">Rewards</Link></div>
    </nav>
  </Modal>;
}
