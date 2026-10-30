# M2K Fintech

Site vitrine du groupe M2K Fintech — direction artistique "éditorial moderne"
(mélange Stripe / Revolut / NVIDIA), un groupe technologique présentant quatre
produits indépendants (paiements, investissement, cybersécurité, actifs
numériques).

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components activé)
- **TypeScript**, **React 19**
- **Tailwind CSS v4** (thème défini via `@theme` dans `src/app/globals.css`, pas de `tailwind.config.js`)
- **Framer Motion** — révélations au scroll (`src/components/Reveal.tsx`) et parallaxe légère du hero
- **lucide-react** — icônes
- Fonts : **Geist Sans/Mono** (corps) + **Manrope** (titres éditoriaux), via `next/font/google`
- Pas de base de données pour l'instant (formulaire de contact journalise côté serveur, voir ci-dessous)

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

`npm run build` lance un build de production (le projet compile et type-check sans erreur).

## Structure

```
src/
  app/
    layout.tsx            racine, fonts, métadonnées SEO
    page.tsx               assemble les sections de la home
    api/contact/route.ts  validation serveur du formulaire de contact
    mentions-legales/      page légale (placeholder)
    confidentialite/       page légale (placeholder)
  components/               Header, Hero, ParentCompany, Products, AiTech,
                             Innovation, Partnerships, ContactSection, Footer
  lib/
    content.ts              copie du site (produits, nav, partenaires)
    utils.ts                helper cn()
```

## Direction artistique retenue

- Typographie : grands titres éditoriaux en Manrope, UI en Geist.
- Couleurs : bleu nuit (`--m2k-navy`), blanc cassé (`--m2k-offwhite`), bleu électrique (`--m2k-electric`) — définies dans `src/app/globals.css`.
- Mise en page asymétrique en grille 12 colonnes (desktop), empilée sur mobile.
- Animations : révélations au scroll + parallaxe légère du hero (Framer Motion).
- Chaque produit a sa propre couleur d'accent et son propre monogramme (`ProductMark.tsx`), tout en gardant la même qualité de carte.

## À faire avant mise en ligne publique

Ces éléments sont volontairement marqués `[PLACEHOLDER]` dans le code
(`src/lib/content.ts`, `Footer.tsx`, pages légales) :

1. **Logo du groupe** — intégré (`public/logo.webp`, header/footer/favicon).
   Une bannière alternative avec icônes de fonctionnalités est disponible
   dans `public/logo-banner.webp` (non utilisée pour l'instant).
   **Logos produits** : les 4 (Cash Authentic, EcoBudgetPlus, MoriahPay,
   Entre-Nous) sont intégrés dans `public/products/`, recadrés sur l'icône
   seule. Le composant `ProductMark.tsx` (monogramme géométrique généré)
   n'est plus utilisé mais reste en code comme repli si un futur produit
   n'a pas encore de logo.
2. **Fiches des 4 produits** — les noms et taglines réels des 4 produits
   sont renseignés dans `src/lib/content.ts` (Cash Authentic, EcoBudgetPlus,
   MoriahPay, Entre-Nous). Il reste à confirmer pour chacun : description
   complète et statut (`En production` / `Bêta` / `En développement`).
3. **Chiffres clés** du groupe (pays, collaborateurs, volume traité) —
   actuellement affichés en `—` dans `ParentCompany.tsx`.
4. **Partenaires réels** — logos à intégrer dans `Partnerships.tsx` (actuellement des placeholders texte).
5. **Mentions légales / confidentialité** — rédigées avec les vraies
   informations (SIRET 132 185 406 00015, entreprise individuelle,
   Steve Matuka Matsanza, siège à Lieusaint, contact, hébergeurs Vercel +
   Supabase). Reste à trancher : numéro de TVA intracommunautaire, et la
   section "Activité réglementée" (ACPR/AMF/ORIAS) selon ce que font
   réellement les produits côté paiement/investissement — à faire valider
   par un professionnel du droit avant mise en ligne publique.
6. **Formulaire de contact** — la validation serveur et l'anti-spam
   (honeypot) sont en place (`src/app/api/contact/route.ts`), mais l'envoi
   d'e-mail réel n'est pas encore branché : il faut connecter un fournisseur
   transactionnel (ex. Resend, Postmark) avec une clé API en variable
   d'environnement.
7. **Traduction anglaise** — le site est pour l'instant 100 % français ; une
   version EN est à prévoir (ex. via `next-intl`) une fois le contenu FR validé.
8. **Déploiement** — projet prêt pour Vercel (`npm run build` fonctionne).
   Connexion Vercel en cours (`vercel login`) — reste à lancer `vercel --prod`
   une fois connecté.

## SEO

- **Domaine de référence** : `https://m2k-fintech.com` (`SITE_URL` dans
  `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts` et le
  JSON-LD de `src/app/page.tsx`) — à mettre à jour partout si le domaine
  final diffère.
- **Métadonnées** : title template, description, Open Graph, Twitter Card,
  URL canonique, `robots: index, follow` (`src/app/layout.tsx`).
- **Image de partage** générée dynamiquement (`src/app/opengraph-image.tsx`,
  1200×630, à partir du vrai logo).
- **`robots.txt`** et **`sitemap.xml`** générés via les conventions Next.js
  (`src/app/robots.ts`, `src/app/sitemap.ts`).
- **Données structurées** : schéma `Organization` (JSON-LD) sur la home
  (`src/app/page.tsx`), avec nom, adresse, contact.

## Notes techniques

- Next.js 16 avec Cache Components active une vérification stricte : toute
  valeur non déterministe (ex. `new Date()`) doit être explicitement rendue
  dynamique, mise en cache, ou déportée côté client. L'année du copyright
  dans `Footer.tsx` est donc une constante à mettre à jour manuellement
  chaque année plutôt que calculée au build.
- Les grilles 12 colonnes utilisent des classes `col-span-1 md:col-span-X`
  (jamais `col-span-12` seul) pour éviter que Tailwind ne génère des colonnes
  implicites et ne casse la mise en page mobile.
