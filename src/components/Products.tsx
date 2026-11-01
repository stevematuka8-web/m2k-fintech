import Image from "next/image";
import { products } from "@/lib/content";
import { ProductMark } from "./ProductMark";
import { Reveal } from "./Reveal";

export function Products() {
  return (
    <section id="produits" className="relative border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
            Quatre univers, une exigence commune
          </p>
          <h2 className="text-balance font-display text-4xl font-bold leading-tight text-offwhite sm:text-5xl">
            Les produits M2K
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-navy-2 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.6)] ${p.url ? "cursor-pointer" : ""}`}
              >
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ouvrir ${p.name}`}
                    className="absolute inset-0 z-20"
                  />
                )}
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-30"
                  style={{ background: p.accent }}
                />
                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      {p.logo ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white p-1.5">
                          <Image
                            src={p.logo}
                            alt={p.name}
                            width={160}
                            height={160}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : (
                        <ProductMark mark={p.mark} accent={p.accent} />
                      )}
                    </div>
                    <span
                      className="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                      style={{ borderColor: `${p.accent}66`, color: p.accent }}
                    >
                      {p.status === "En production" && (
                        <span
                          aria-hidden
                          className="animate-status-dot h-1.5 w-1.5 rounded-full"
                          style={{ background: p.accent }}
                        />
                      )}
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-offwhite">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium" style={{ color: p.accent }}>
                    {p.tagline}
                  </p>
                  {!p.description.startsWith("[PLACEHOLDER") && (
                    <p className="mt-4 text-sm leading-relaxed text-offwhite-dim">
                      {p.description}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
