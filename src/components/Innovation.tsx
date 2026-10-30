import { Reveal } from "./Reveal";

const pillars = [
  {
    step: "01",
    title: "Recherche interne",
    description: "Une équipe R&D transverse explore les cas d'usage avant qu'ils n'atteignent un produit.",
  },
  {
    step: "02",
    title: "Incubation produit",
    description: "Chaque idée validée devient un périmètre autonome, avec ses propres objectifs.",
  },
  {
    step: "03",
    title: "Mise à l'échelle",
    description: "L'infrastructure de l'entreprise absorbe la croissance sans ralentir l'équipe produit.",
  },
];

export function Innovation() {
  return (
    <section id="innovation" className="relative border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
            Innovation & développement
          </p>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight text-offwhite sm:text-5xl">
            De l&apos;idée au produit indépendant
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <div className="border-t border-white/15 pt-6">
                <span className="font-mono text-sm text-electric-2">{p.step}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-offwhite">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite-dim">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
