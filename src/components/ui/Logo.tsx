import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`logo ${light ? "logo--light" : ""}`} href="/" aria-label="Alder and Hearth home">
      <span className="logo-mark" aria-hidden="true"><i/><i/><i/></span>
      <span><b>ALDER <em>&amp;</em> HEARTH</b><small>BOTANICAL TEA MERCHANTS</small></span>
    </Link>
  );
}
