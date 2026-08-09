"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Logo } from "../ui/Logo";
import { Icon } from "../ui/Icon";
import { Accordion } from "../ui/Accordion";

const groups = [
  { title: "SHOP", links: ["Best Sellers", "New Arrivals", "Tea Types", "Gifts"] },
  { title: "LEARN", links: ["Brewing", "Ingredients", "Recipes", "Journal"] },
  { title: "ABOUT", links: ["Our Story", "Sourcing", "Careers", "Contact"] },
  { title: "CUSTOMER CARE", links: ["Shipping", "Returns", "FAQ", "Order Status", "Account"] },
];

export function Footer() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSent(true); };
  return <footer className="footer">
    <div className="newsletter container"><div><p>LETTERS FROM THE TEA TABLE</p><h2>Join our newsletter</h2><span>Seasonal blends, thoughtful guides and first tastes—sent occasionally.</span></div><form onSubmit={submit}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required placeholder="Email address"/><button aria-label="Subscribe"><Icon name="arrow" /></button>{sent && <small>Welcome to the table. Check your inbox soon.</small>}</form></div>
    <div className="footer-main container">
      <div className="footer-brand"><Logo light/><p>Tea selected with patience, packed with care, and made for the daily ritual.</p><div className="socials"><a href="#">IG</a><a href="#">PT</a><a href="#">FB</a></div></div>
      <div className="footer-links desktop-footer-links">{groups.map((group) => <div key={group.title}><p>{group.title}</p>{group.links.map((link) => <Link href={link === "Our Story" ? "/about" : link === "Journal" ? "/blog" : "/shop"} key={link}>{link}</Link>)}</div>)}</div>
      <div className="mobile-footer-links">{groups.map((group) => <Accordion title={group.title} key={group.title}>{group.links.map((link) => <Link href="/shop" key={link}>{link}</Link>)}</Accordion>)}</div>
    </div>
    <div className="footer-bottom container"><span>© 2026 Alder &amp; Hearth Tea Merchants</span><nav><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a><a href="#">Cookie Preferences</a></nav><span>PACKED BY HAND · BANGKOK / WORLDWIDE</span></div>
  </footer>;
}
