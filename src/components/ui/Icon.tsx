type IconProps = { name: "search" | "user" | "bag" | "menu" | "close" | "heart" | "chevron" | "arrow" | "minus" | "plus"; size?: number };

export function Icon({ name, size = 20 }: IconProps) {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></>,
    bag: <><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></>,
    menu: <><path d="M3 7h18M3 12h18M3 17h18"/></>,
    close: <><path d="m5 5 14 14M19 5 5 19"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
    chevron: <path d="m8 10 4 4 4-4"/>,
    arrow: <path d="M4 12h16m-5-5 5 5-5 5"/>,
    minus: <path d="M5 12h14"/>,
    plus: <path d="M5 12h14M12 5v14"/>,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
