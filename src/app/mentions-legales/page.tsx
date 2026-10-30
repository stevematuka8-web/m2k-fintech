import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalSection as Section } from "@/components/LegalSection";

export const metadata = {
  title: "Mentions légales — M2K Fintech",
};

// Champs marqués [À COMPLÉTER] : informations propres à l'entreprise, à
// renseigner avec les données réelles (extrait Kbis, statuts, contrat
// d'hébergement...) avant toute mise en ligne publique. Le reste est du
// texte juridique standard, à faire valider par un professionnel du droit
// avant publication, en particulier les mentions réglementaires (ACPR/AMF/
// ORIAS) propres à une activité financière.

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h1 className="font-display text-4xl font-bold text-offwhite">Mentions légales</h1>
          <p className="mt-4 text-sm text-offwhite-dim">
            Dernière mise à jour : 30 octobre 2026
          </p>

          <div className="mt-12 flex flex-col gap-10">
            <Section title="1. Éditeur du site">
              <p>Le présent site est édité par :</p>
              <ul>
                <li>
                  Nom commercial : M2K Fintech — Nom et prénom de
                  l&apos;exploitant : Steve Matuka Matsanza
                </li>
                <li>Forme juridique : Entreprise individuelle (entrepreneur individuel)</li>
                <li>
                  SIRET : 132 185 406 00015 — SIREN : 132 185 406 (immatriculé
                  au Registre National des Entreprises)
                </li>
                <li>
                  Activité principale déclarée : Conseil en systèmes et
                  logiciels informatiques (NAF 62.20G)
                </li>
                <li>Siège social : 21 avenue Pierre Point, 77127 Lieusaint, France</li>
                <li>Numéro de TVA intracommunautaire : [À COMPLÉTER, le cas échéant]</li>
                <li>
                  Adresse e-mail de contact :{" "}
                  <a href="mailto:service.commercial@m2k-fintech.fr" className="text-electric-2 underline">
                    service.commercial@m2k-fintech.fr
                  </a>
                </li>
                <li>
                  Téléphone :{" "}
                  <a href="tel:+33699882087" className="text-electric-2 underline">
                    +33 6 99 88 20 87
                  </a>
                </li>
              </ul>
            </Section>

            <Section title="2. Directeur de la publication">
              <p>
                S&apos;agissant d&apos;une entreprise individuelle, le
                directeur de la publication est l&apos;exploitant lui-même :
                Steve Matuka Matsanza.
              </p>
            </Section>

            <Section title="3. Hébergement">
              <p>Le site est hébergé par :</p>
              <ul>
                <li>
                  Raison sociale : Vercel Inc. — Adresse : 440 N Barranca
                  Avenue #4133, Covina, CA 91723, États-Unis — [adresse à
                  reconfirmer sur vercel.com/legal avant publication]
                </li>
                <li>Site : vercel.com</li>
              </ul>
              <p className="mt-3">
                Les données applicatives (le cas échéant : comptes, données
                produits) sont stockées via Supabase Inc., 970 Toa Payoh
                North #07-04, Singapour — [adresse à reconfirmer sur
                supabase.com/legal avant publication]. Le détail des données
                traitées par ce sous-traitant doit être précisé dans la{" "}
                <a href="/confidentialite" className="text-electric-2 underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </Section>

            <Section title="4. Activité réglementée">
              <p>
                À la date de publication de ce site, M2K Fintech n&apos;est
                titulaire d&apos;aucun agrément délivré par l&apos;Autorité
                de contrôle prudentiel et de résolution (ACPR) ou
                l&apos;Autorité des marchés financiers (AMF), et n&apos;est
                enregistrée auprès d&apos;aucun registre réglementaire
                (ORIAS, REGAFI). Cette mention sera mise à jour avec les informations
                réglementaires applicables (autorité de supervision, numéro
                d&apos;agrément) dès lors que l&apos;un de ces produits
                fournira effectivement un service financier soumis à
                agrément.
              </p>
            </Section>

            <Section title="5. Propriété intellectuelle">
              <p>
                L&apos;ensemble des contenus présents sur ce site (textes,
                images, logos, marques, graphismes, structure du site) sont,
                sauf mention contraire, la propriété exclusive de M2K
                Fintech (Steve Matuka Matsanza, entreprise individuelle) ou
                de ses partenaires, et sont
                protégés par le droit de la propriété intellectuelle. Toute
                reproduction, représentation, modification ou exploitation,
                totale ou partielle, de ces éléments, sans autorisation
                écrite préalable, est interdite et susceptible de
                constituer une contrefaçon.
              </p>
            </Section>

            <Section title="6. Données personnelles">
              <p>
                Le traitement des données personnelles collectées sur ce
                site (notamment via le formulaire de contact) est détaillé
                dans notre{" "}
                <a href="/confidentialite" className="text-electric-2 underline">
                  politique de confidentialité
                </a>
                .
              </p>
            </Section>

            <Section title="7. Cookies">
              <p>
                [À COMPLÉTER] — Si le site utilise des cookies (mesure
                d&apos;audience, préférences, etc.), cette section doit
                décrire leur finalité et renvoyer vers un outil de gestion
                du consentement conforme à la réglementation applicable
                (CNIL en France). En l&apos;état actuel, ce site ne dépose
                aucun cookie non essentiel.
              </p>
            </Section>

            <Section title="8. Limitation de responsabilité">
              <p>
                M2K Fintech (Steve Matuka Matsanza) s&apos;efforce d&apos;assurer
                l&apos;exactitude et la mise à jour des informations
                diffusées sur ce site, mais ne saurait être tenue
                responsable des erreurs, omissions ou de l&apos;absence de
                disponibilité des informations. L&apos;utilisateur est seul
                responsable de l&apos;usage qu&apos;il fait des informations
                et contenus de ce site.
              </p>
            </Section>

            <Section title="9. Droit applicable">
              <p>
                Les présentes mentions légales sont soumises au droit
                français. En cas de litige, et à défaut de résolution
                amiable, les tribunaux compétents seront ceux déterminés par
                les règles de droit commun applicables.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
