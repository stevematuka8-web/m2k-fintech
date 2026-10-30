import type { Product } from "@/lib/content";

// Monogrammes géométriques provisoires — à remplacer par les vraies identités
// de marque de chaque produit une fois validées.
export function ProductMark({ mark, accent }: { mark: Product["mark"]; accent: string }) {
  const shapes: Record<Product["mark"], React.ReactNode> = {
    orbit: <circle cx="20" cy="20" r="12" stroke={accent} strokeWidth="2.5" />,
    growth: (
      <path
        d="M8 28 L16 12 L24 22 L32 10"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
    shield: (
      <path
        d="M20 7 L32 12 V21 C32 28 27 32 20 34 C13 32 8 28 8 21 V12 Z"
        stroke={accent}
        strokeWidth="2.5"
        fill="none"
      />
    ),
    grid: (
      <>
        <rect x="8" y="10" width="10" height="10" stroke={accent} strokeWidth="2.2" />
        <rect x="22" y="10" width="10" height="10" stroke={accent} strokeWidth="2.2" />
        <rect x="15" y="22" width="10" height="10" stroke={accent} strokeWidth="2.2" />
      </>
    ),
  };

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
      {shapes[mark]}
    </svg>
  );
}
