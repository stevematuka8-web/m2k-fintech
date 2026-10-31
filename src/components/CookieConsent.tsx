"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CONSENT_STORAGE_KEY = "m2k-cookie-consent";
export const CONSENT_EVENT = "m2k-cookie-consent-change";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Lu après le montage (pas pendant le rendu) pour que le HTML du
    // serveur et le premier rendu client correspondent (pas de bannière
    // dans les deux cas) avant que l'état réel ne soit connu.
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (!stored) setVisible(true);
    } catch {
      // localStorage indisponible (navigation privée, etc.) — pas de bannière
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value);
      window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
    } catch {
      // ignore
    }
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-navy/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-10">
            <p className="text-sm text-offwhite-dim">
              Nous utilisons des cookies de mesure d&apos;audience (Google
              Analytics) pour comprendre comment le site est utilisé. Vous
              pouvez les accepter ou les refuser —{" "}
              <a href="/confidentialite" className="text-electric-2 underline">
                en savoir plus
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={() => choose("declined")}
                className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-offwhite transition-all duration-300 hover:scale-105 hover:border-white/30 active:scale-95"
              >
                Refuser
              </button>
              <button
                onClick={() => choose("accepted")}
                className="rounded-full bg-electric px-5 py-2 text-sm font-medium text-offwhite transition-all duration-300 hover:scale-105 hover:bg-electric-2 active:scale-95"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
