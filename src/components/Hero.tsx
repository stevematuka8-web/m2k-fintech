"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <motion.div aria-hidden style={{ y }} className="absolute -right-40 top-20 h-[32rem] w-[32rem]">
        <div className="animate-pulse-glow h-full w-full rounded-full bg-electric/20 blur-[120px]" />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="absolute -left-20 bottom-0 h-[24rem] w-[24rem]"
      >
        <div
          className="animate-pulse-glow h-full w-full rounded-full bg-electric-2/10 blur-[100px]"
          style={{ animationDelay: "-3.5s" }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-12 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-9"
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
            Entreprise technologique financière
          </p>
          <h1 className="text-balance break-words font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-offwhite sm:text-6xl md:text-7xl">
            L&apos;infrastructure financière de la prochaine décennie,
            <span className="text-electric-2"> construite par quatre équipes indépendantes.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 flex flex-col justify-end gap-6 md:col-span-3"
        >
          <p className="max-w-sm text-base text-offwhite-dim">
            M2K Fintech réunit paiements, investissement, cybersécurité et actifs
            numériques sous une même exigence : la rigueur.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#produits"
              className="rounded-full bg-electric px-6 py-3 text-sm font-medium text-offwhite transition-all duration-300 hover:scale-105 hover:bg-electric-2 active:scale-95"
            >
              Découvrir les produits
            </a>
            <a
              href="#entreprise"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-offwhite transition-all duration-300 hover:scale-105 hover:border-white/30 active:scale-95"
            >
              À propos de l&apos;entreprise
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
