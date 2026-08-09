import Link from "next/link";
import { ReactNode } from "react";

export function Button({ children, href, variant = "primary", className = "", type = "button", onClick }: { children: ReactNode; href?: string; variant?: "primary" | "outline" | "text"; className?: string; type?: "button" | "submit"; onClick?: () => void }) {
  const classes = `button button--${variant} ${className}`;
  if (href) return <Link className={classes} href={href}>{children}</Link>;
  return <button className={classes} type={type} onClick={onClick}>{children}</button>;
}
