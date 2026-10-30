import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";

// Année mise à jour manuellement (le rendu statique interdit new Date() au
// moment du build sous Cache Components) — à ajuster à chaque nouvelle année.
const COPYRIGHT_YEAR = 2026;

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Image
              src="/logo.webp"
              alt="M2K Fintech"
              width={1254}
              height={1254}
              className="h-12 w-12 object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-offwhite-dim">
              Entreprise technologique financière internationale.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-offwhite">Produits</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {products.map((p) => (
                <li key={p.slug}>
                  <a href="#produits" className="text-sm text-offwhite-dim hover:text-offwhite">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-offwhite">Entreprise</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href="#entreprise" className="text-sm text-offwhite-dim hover:text-offwhite">
                  À propos
                </a>
              </li>
              <li>
                <a href="#technologie" className="text-sm text-offwhite-dim hover:text-offwhite">
                  Technologie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-offwhite-dim hover:text-offwhite">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-offwhite">Légal</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <Link href="/mentions-legales" className="text-sm text-offwhite-dim hover:text-offwhite">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/confidentialite" className="text-sm text-offwhite-dim hover:text-offwhite">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-offwhite-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {COPYRIGHT_YEAR} M2K Fintech. Tous droits réservés.</p>
          <p>
            M2K Fintech (Steve Matuka Matsanza), entreprise individuelle —
            21 avenue Pierre Point, 77127 Lieusaint, France — SIRET 132 185
            406 00015
          </p>
        </div>
      </div>
    </footer>
  );
}
