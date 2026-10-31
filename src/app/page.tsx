import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ParentCompany } from "@/components/ParentCompany";
import { Products } from "@/components/Products";
import { AiTech } from "@/components/AiTech";
import { Innovation } from "@/components/Innovation";
import { Partnerships } from "@/components/Partnerships";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "M2K Fintech",
  url: "https://www.m2k-fintech.com",
  logo: "https://www.m2k-fintech.com/logo.webp",
  description:
    "M2K Fintech conçoit quatre produits indépendants — Cash Authentic, EcoBudgetPlus, MoriahPay et Entre-Nous — portés par une infrastructure commune d'intelligence artificielle.",
  email: "service.commercial@m2k-fintech.fr",
  telephone: "+33699882087",
  address: {
    "@type": "PostalAddress",
    streetAddress: "21 avenue Pierre Point",
    postalCode: "77127",
    addressLocality: "Lieusaint",
    addressCountry: "FR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <ParentCompany />
        <Products />
        <AiTech />
        <Innovation />
        <Partnerships />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
