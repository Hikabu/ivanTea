import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StoreProvider } from "@/components/layout/StoreProvider";
import { CartDrawer } from "@/components/layout/CartDrawer";

export const metadata: Metadata = {
  title: { default: "Alder & Hearth | Botanical Tea Merchants", template: "%s | Alder & Hearth" },
  description: "Exceptional tea leaves and botanicals, selected with patience and blended for the daily ritual.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><StoreProvider><Header />{children}<Footer/><CartDrawer/></StoreProvider></body></html>;
}
