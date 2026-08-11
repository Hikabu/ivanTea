import Link from "next/link";
import { Locale, localizedHref } from "@/lib/i18n";

export function Logo({ light = false, locale = "en" }: { light?: boolean; locale?: Locale }) {
  return (
    <Link className={`logo ${light ? "logo--light" : ""}`} href={localizedHref(locale, "/")} aria-label="Fedorov Tea home">
      <span className="logo-mark logo-mark--fireweed" aria-hidden="true"><i/><i/><i/></span>
      <span><b>FEDOROV TEA</b><small>{locale === "ru" ? "ИВАН-ЧАЙ · МАРИЙ ЭЛ" : "IVAN TEA · MARI EL"}</small></span>
    </Link>
  );
}
