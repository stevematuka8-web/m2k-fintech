import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LegalSection as Section } from "@/components/LegalSection";

export const metadata = {
  title: "Politique de confidentialité — M2K Fintech",
};

// Reflète les traitements réellement en place sur ce site (formulaire de
// contact, hébergement Vercel, stockage applicatif Supabase). Si de
// nouveaux traitements sont ajoutés (compte utilisateur, newsletter,
// mesure d'audience...), cette page doit être mise à jour en conséquence.
// La section "Activité réglementée" des mentions légales peut imposer des
// obligations RGPD additionnelles selon les produits concernés — à
// valider avec un conseil juridique avant publication.

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h1 className="font-display text-4xl font-bold text-offwhite">
            Politique de confidentialité
          </h1>
          <p className="mt-4 text-sm text-offwhite-dim">
            Dernière mise à jour : 30 octobre 2026
          </p>

          <div className="mt-12 flex flex-col gap-10">
            <Section title="1. Responsable du traitement">
              <p>
                Le responsable du traitement des données personnelles
                collectées sur ce site est Steve Matuka Matsanza, exerçant
                sous le nom commercial M2K Fintech (entreprise individuelle,
                SIRET 132 185 406 00015), domicilié 21 avenue Pierre Point,
                77127 Lieusaint, France.
              </p>
              <p>
                Pour toute question relative à vos données personnelles :{" "}
                <a href="mailto:service.commercial@m2k-fintech.fr" className="text-electric-2 underline">
                  service.commercial@m2k-fintech.fr
                </a>
                . Aucun délégué à la protection des données (DPO) n&apos;a
                été désigné, cette désignation n&apos;étant pas obligatoire
                à ce stade de l&apos;activité.
              </p>
            </Section>

            <Section title="2. Données collectées">
              <p>
                Ce site collecte des données personnelles uniquement via le
                formulaire de contact, lorsque vous choisissez de nous
                écrire :
              </p>
              <ul>
                <li>Nom complet (obligatoire)</li>
                <li>Adresse e-mail (obligatoire)</li>
                <li>Nom de votre entreprise (facultatif)</li>
                <li>Contenu de votre message (obligatoire)</li>
              </ul>
              <p>
                Ce site ne crée pas de compte utilisateur. Il utilise des
                outils de mesure d&apos;audience — voir le détail et vos
                options en section 7 (Cookies et traceurs).
              </p>
            </Section>

            <Section title="3. Finalités et base légale">
              <p>
                Les données du formulaire de contact sont utilisées dans le
                seul but de répondre à votre demande (question produit,
                presse, partenariat, recrutement). La base légale de ce
                traitement est l&apos;intérêt légitime de M2K Fintech à
                répondre aux sollicitations qui lui sont adressées
                (article 6.1.f du RGPD), ou l&apos;exécution de mesures
                précontractuelles lorsque votre demande porte sur un futur
                contrat (article 6.1.b du RGPD).
              </p>
            </Section>

            <Section title="4. Destinataires des données">
              <p>
                Vos données sont accessibles uniquement par le responsable
                du traitement. Elles transitent et sont techniquement
                stockées par nos sous-traitants d&apos;hébergement et
                d&apos;infrastructure :
              </p>
              <ul>
                <li>Vercel Inc. (hébergement du site, traitement des requêtes du formulaire, mesure d&apos;audience sans cookie)</li>
                <li>Supabase Inc. (stockage applicatif, le cas échéant)</li>
                <li>Google Ireland Ltd. (Google Analytics, uniquement si vous avez accepté les cookies)</li>
              </ul>
              <p>
                Vos données ne sont ni vendues, ni louées, ni communiquées à
                des tiers à des fins commerciales.
              </p>
            </Section>

            <Section title="5. Durée de conservation">
              <p>
                Les messages envoyés via le formulaire de contact sont
                conservés le temps nécessaire au traitement de votre
                demande, puis archivés pendant une durée maximale de 3 ans
                à compter de notre dernier échange, conformément aux
                recommandations de la CNIL, sauf obligation légale de
                conservation plus longue.
              </p>
            </Section>

            <Section title="6. Transferts hors Union européenne">
              <p>
                Nos sous-traitants d&apos;hébergement (Vercel, États-Unis) et
                de stockage applicatif (Supabase, Singapour) peuvent
                traiter des données en dehors de l&apos;Union européenne.
                Ces transferts sont encadrés par les clauses contractuelles
                types de la Commission européenne ou un mécanisme
                équivalent reconnu comme assurant un niveau de protection
                adéquat — [à vérifier et documenter précisément avec les
                contrats de sous-traitance Vercel et Supabase avant
                publication].
              </p>
            </Section>

            <Section title="7. Cookies et traceurs">
              <p>Ce site utilise deux outils de mesure d&apos;audience :</p>
              <ul>
                <li>
                  <strong>Vercel Analytics</strong> — ne dépose aucun
                  cookie et n&apos;utilise aucun identifiant persistant ;
                  il est actif en permanence et ne nécessite pas de
                  consentement.
                </li>
                <li>
                  <strong>Google Analytics</strong> — dépose des cookies de
                  mesure d&apos;audience (ex. <code>_ga</code>). Il
                  n&apos;est chargé qu&apos;après votre consentement
                  explicite, recueilli via le bandeau affiché lors de votre
                  première visite. Vous pouvez refuser ou changer d&apos;avis
                  à tout moment en effaçant les données de ce site dans
                  votre navigateur, ce qui réaffichera le bandeau.
                </li>
              </ul>
            </Section>

            <Section title="8. Vos droits">
              <p>
                Conformément au Règlement général sur la protection des
                données (RGPD) et à la loi Informatique et Libertés, vous
                disposez des droits suivants sur vos données personnelles :
              </p>
              <ul>
                <li>Droit d&apos;accès et de rectification</li>
                <li>Droit à l&apos;effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d&apos;opposition</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              <p>
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:service.commercial@m2k-fintech.fr" className="text-electric-2 underline">
                  service.commercial@m2k-fintech.fr
                </a>
                . Nous nous engageons à répondre dans un délai maximal d&apos;un
                mois.
              </p>
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous
                pouvez introduire une réclamation auprès de la Commission
                nationale de l&apos;informatique et des libertés (CNIL) —{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-2 underline"
                >
                  www.cnil.fr
                </a>
                .
              </p>
            </Section>

            <Section title="9. Sécurité">
              <p>
                Nous mettons en œuvre les mesures techniques et
                organisationnelles raisonnables (connexion chiffrée HTTPS,
                hébergement par des fournisseurs reconnus) pour protéger vos
                données contre la perte, l&apos;accès non autorisé ou la
                divulgation.
              </p>
            </Section>

            <Section title="10. Modification de cette politique">
              <p>
                Cette politique de confidentialité peut être mise à jour à
                tout moment, notamment pour refléter l&apos;évolution des
                fonctionnalités du site ou de la réglementation applicable.
                La date de dernière mise à jour est indiquée en haut de
                cette page.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
