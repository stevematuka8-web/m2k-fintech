import { BrainCircuit, Lock, Gauge, Network } from "lucide-react";
import { Reveal } from "./Reveal";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Scoring & détection de fraude",
    description: "Modèles propriétaires entraînés sur l'ensemble des flux de l'entreprise.",
  },
  {
    icon: Lock,
    title: "Conformité automatisée",
    description: "Surveillance réglementaire continue, partagée entre les quatre produits.",
  },
  {
    icon: Gauge,
    title: "Infrastructure temps réel",
    description: "Traitement et décision en millisecondes, à l'échelle de l'entreprise.",
  },
  {
    icon: Network,
    title: "Plateforme de données unifiée",
    description: "Un socle commun, quatre produits qui en tirent des usages distincts.",
  },
];

export function AiTech() {
  return (
    <section id="technologie" className="relative border-t border-white/10 bg-navy-2 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="col-span-1 md:col-span-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
              Intelligence artificielle
            </p>
            <h2 className="text-balance font-display text-4xl font-bold leading-tight text-offwhite sm:text-5xl">
              La technologie qui fait tourner les quatre produits.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-offwhite-dim">
              Nos équipes IA et infrastructure conçoivent les fondations
              partagées — sécurité, données, calcul — que chaque produit M2K
              adapte à son marché.
            </p>
          </Reveal>

          <div className="col-span-1 grid gap-6 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.02]">
                  <c.icon
                    className="mb-4 text-electric-2 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                    size={28}
                    strokeWidth={1.6}
                  />
                  <h3 className="font-display text-lg font-semibold text-offwhite">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-offwhite-dim">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
