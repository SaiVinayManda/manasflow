import Hero from "@/components/Hero";
import IntegrationBanner from "@/components/IntegrationBanner";
import LeadChatbot from "@/components/LeadChatbot";
import CaseStudies from "@/components/CaseStudies";
import ProcessTimeline from "@/components/ProcessTimeline";
import Services from "@/components/Services";
import IndustrySolutions from "@/components/IndustrySolutions";
import ROICalculator from "@/components/ROICalculator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manasflow",
    description: "AI automation agency specializing in custom AI agents and workflow automation.",
    location: {
      "@type": "Place",
      name: "Milan, Italy",
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Hero />
      <IntegrationBanner />
      <LeadChatbot />
      <CaseStudies />
      <ProcessTimeline />
      <Services />
      <IndustrySolutions />
      <ROICalculator />
      <FAQ />
      <Footer />
    </main>
  );
}
