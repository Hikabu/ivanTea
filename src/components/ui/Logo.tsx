import Link from "next/link";
import { Locale, localizedHref } from "@/lib/i18n";

export function Logo({ locale = "en" }: { light?: boolean; locale?: Locale }) {
  return <Link className="quiet-logo" href={localizedHref(locale, "/")} aria-label="Ivan-tea home"><b>IVAN</b><i>—</i><b>TEA</b><small>MARI EL</small></Link>;
}
