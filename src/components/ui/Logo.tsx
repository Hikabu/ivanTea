import Link from "next/link";
import { Locale, localizedHref } from "@/lib/i18n";

export function Logo({ locale = "en" }: { locale?: Locale }) {
  return <Link className="quiet-logo" href={localizedHref(locale, "/")} aria-label="Fedorov Tea home"><b>FEDOROV</b><small>IVAN TEA · MARI EL</small></Link>;
}
