import { Building2, Landmark, ShieldCheck, Globe2, Banknote, Network } from "lucide-react";
import { Reveal } from "./Reveal";

// Emplacements génériques en attendant les vrais logos partenaires — des
// icônes neutres (pas de marques, pas de noms inventés) pour garder
// l'animation sans faire croire à des partenariats réels.
const slots = [Building2, Landmark, ShieldCheck, Globe2, Banknote, Network];

export function Partnerships() {
  return (
    <section id="partenaires" className="relative border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
            Partenariats
          </p>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight text-offwhite sm:text-5xl">
            Ils accompagnent l&apos;entreprise
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-offwhite-dim">
            Emplacements réservés — logos réels à venir.
          </p>
        </Reveal>

        <div
          className="mt-16 overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max gap-6">
            {[...slots, ...slots].map((Icon, i) => (
              <div
                key={i}
                className="flex h-20 w-48 shrink-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 text-center transition-colors hover:border-white/25"
              >
                <Icon size={22} strokeWidth={1.5} className="text-offwhite-dim" aria-hidden />
                <span className="text-xs text-offwhite-dim">Partenaire</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
