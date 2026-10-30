"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Une erreur est survenue.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  return (
    <section id="contact" className="relative border-t border-white/10 py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <Reveal className="col-span-1 md:col-span-5">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-electric-2">
              Contact
            </p>
            <h2 className="text-balance font-display text-4xl font-bold leading-tight text-offwhite sm:text-5xl">
              Parlons de votre projet
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-offwhite-dim">
              Presse, partenariats, recrutement ou question produit : écrivez-nous,
              une équipe de l&apos;entreprise vous répond.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="col-span-1 md:col-span-6 md:col-start-7">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="hidden">
                <label htmlFor="website">Ne pas remplir</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Nom complet"
                  className="rounded-lg border border-white/15 bg-navy-2 px-4 py-3 text-sm text-offwhite placeholder:text-offwhite-dim focus:border-electric focus:outline-none"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Adresse e-mail"
                  className="rounded-lg border border-white/15 bg-navy-2 px-4 py-3 text-sm text-offwhite placeholder:text-offwhite-dim focus:border-electric focus:outline-none"
                />
              </div>
              <input
                name="company"
                placeholder="Entreprise (optionnel)"
                className="rounded-lg border border-white/15 bg-navy-2 px-4 py-3 text-sm text-offwhite placeholder:text-offwhite-dim focus:border-electric focus:outline-none"
              />
              <textarea
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Votre message"
                className="resize-none rounded-lg border border-white/15 bg-navy-2 px-4 py-3 text-sm text-offwhite placeholder:text-offwhite-dim focus:border-electric focus:outline-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 rounded-full bg-electric px-6 py-3 text-sm font-medium text-offwhite transition-all duration-300 hover:scale-105 hover:bg-electric-2 active:scale-95 disabled:pointer-events-none disabled:opacity-60"
              >
                {status === "sending" ? "Envoi..." : "Envoyer le message"}
              </button>

              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p
                    key="sent"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-electric-2"
                  >
                    Merci, votre message a bien été envoyé.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-400"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
