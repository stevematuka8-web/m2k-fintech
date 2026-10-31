"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/logo.webp"
              alt="M2K Fintech"
              width={1254}
              height={1254}
              priority
              className="h-14 w-14 object-contain"
            />
          </motion.div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-1 text-sm text-offwhite-dim transition-colors hover:text-offwhite"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-electric-2 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-electric px-5 py-2 text-sm font-medium text-offwhite transition-all duration-300 hover:scale-105 hover:bg-electric-2 active:scale-95"
          >
            Nous contacter
          </a>
        </nav>

        <button
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="text-offwhite md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-navy px-6 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm text-offwhite-dim hover:bg-white/5 hover:text-offwhite"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
