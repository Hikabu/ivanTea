import Link from "next/link";
import { Locale, localizedHref } from "@/lib/i18n";

export function Logo({ light = false, locale = "en" }: { light?: boolean; locale?: Locale }) {
  return <Link className={`logo ${light ? "logo--light" : ""}`} href={localizedHref(locale, "/")} aria-label="GAROF home"><span className="logo-mark logo-mark--garof" aria-hidden="true"><i /><i /><i /></span><span><b>GAROF</b><small>{locale === "ru" ? "ЧАЙ · МАРИЙ ЭЛ" : "TEA · MARI EL"}</small></span></Link>;
}
