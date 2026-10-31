"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_STORAGE_KEY, CONSENT_EVENT } from "./CookieConsent";

// Mesure d'audience chargée uniquement après consentement — tant que
// NEXT_PUBLIC_GA_MEASUREMENT_ID n'est pas renseigné (ID Google Analytics,
// format G-XXXXXXX), rien n'est chargé.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setConsented(localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted");
    } catch {
      // ignore
    }

    function onChange(e: Event) {
      const value = (e as CustomEvent<string>).detail;
      setConsented(value === "accepted");
    }
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (!GA_ID || !consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
