"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

// "4" est un chiffre réel (nombre de produits). Les 3 autres sont des
// objectifs de croissance, explicitement présentés comme tels (section
// "Nos objectifs à horizon 2028") plutôt que comme un état actuel —
// l'entreprise individuelle vient d'être créée (SIRET du 1er nov. 2026)
// et n'a pas encore ces effectifs/volumes réels.
const stats = [
  { value: 4, suffix: "", label: "Univers produits indépendants" },
  { value: 5, suffix: "", label: "Pays d'implantation" },
  { value: 20, suffix: "+", label: "Collaborateurs" },
  { value: 10, suffix: "M€", label: "Volume traité / an" },
];

export function ParentCompany() {
  const [countersStarted, setCountersStarted] = useState(false);

  return (
    <section id="entreprise" className="relative border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="col-span-1 md:col-span-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
              La maison mère
            </p>
            <h2 className="text-balance font-display text-4xl font-bold leading-tight text-offwhite sm:text-5xl">
              Un seul standard d&apos;exigence, quatre entreprises indépendantes.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="col-span-1 flex flex-col gap-6 md:col-span-6 md:col-start-7">
            <p className="text-lg leading-relaxed text-offwhite-dim">
              M2K Fintech est l&apos;entreprise technologique qui conçoit, finance
              et fait grandir chacun de ses produits comme une structure à part entière.
              Chaque équipe garde son identité, ses décisions et sa feuille de
              route — en s&apos;appuyant sur une infrastructure commune de
              sécurité, de conformité et d&apos;intelligence artificielle.
            </p>
            <p className="text-lg leading-relaxed text-offwhite-dim">
              Cette organisation nous permet d&apos;aller vite sur chaque marché
              sans jamais transiger sur la rigueur attendue d&apos;un acteur
              financier.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 border-t border-white/10 pt-12">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
            Nos objectifs à horizon 2028
          </p>
          <motion.div
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
            viewport={{ once: true, margin: "-80px" }}
            onViewportEnter={() => setCountersStarted(true)}
          >
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="font-display text-3xl font-bold text-offwhite sm:text-4xl">
                  <CountUp value={s.value} suffix={s.suffix} start={countersStarted} />
                </div>
                <div className="mt-2 text-sm text-offwhite-dim">{s.label}</div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
