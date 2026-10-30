// Copie du site — centralisée pour faciliter les relectures et les futures
// traductions EN. Les champs marqués [PLACEHOLDER] attendent une validation
// (statuts produits, chiffres clés, logos, partenaires réels).

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "En production" | "Bêta" | "En développement";
  accent: string; // couleur d'identité propre au produit
  mark: "orbit" | "growth" | "shield" | "grid"; // forme du monogramme de repli (si pas de vrai logo)
  logo?: string; // chemin public vers le vrai logo du produit, une fois reçu
};

export const products: Product[] = [
  {
    slug: "cash-authentic",
    name: "Cash Authentic",
    tagline: "Photographiez. Vérifiez. Soyez sûr.",
    description: "[PLACEHOLDER — description à confirmer]",
    status: "En production",
    accent: "#3D6BFF",
    mark: "orbit",
    logo: "/products/cash-authentic.png",
  },
  {
    slug: "ecobudgetplus",
    name: "EcoBudgetPlus",
    tagline: "L'IA qui optimise vos dépenses au quotidien.",
    description: "[PLACEHOLDER — description à confirmer]",
    status: "Bêta",
    accent: "#3DB88B",
    mark: "growth",
    logo: "/products/ecobudgetplus.png",
  },
  {
    slug: "moriahpay",
    name: "MoriahPay",
    tagline: "Simple, rapide et sécurisé.",
    description: "[PLACEHOLDER — description à confirmer]",
    status: "En production",
    accent: "#E0485A",
    mark: "shield",
    logo: "/products/moriahpay.png",
  },
  {
    slug: "entre-nous",
    name: "Entre-Nous",
    tagline: "Le futur, c'est maintenant.",
    description: "[PLACEHOLDER — description à confirmer]",
    status: "En développement",
    accent: "#B06BFF",
    mark: "grid",
    logo: "/products/entre-nous.png",
  },
];

export const nav = [
  { label: "Entreprise", href: "#entreprise" },
  { label: "Produits", href: "#produits" },
  { label: "Technologie", href: "#technologie" },
  { label: "Innovation", href: "#innovation" },
  { label: "Partenaires", href: "#partenaires" },
  { label: "Contact", href: "#contact" },
];
