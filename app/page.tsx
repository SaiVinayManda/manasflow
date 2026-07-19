import Hero from "@/components/Hero";
import IntegrationBanner from "@/components/IntegrationBanner";
import LeadChatbot from "@/components/LeadChatbot";
import CaseStudies from "@/components/CaseStudies";
import ProcessTimeline from "@/components/ProcessTimeline";
import Services from "@/components/Services";
import IndustrySolutions from "@/components/IndustrySolutions";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Agency for SME Operations Managers | Manasflow",
  description: "Manasflow creates custom AI agents, workflow automations, and RAG systems for SME operations managers. Based in Milan, serving global clients.",
};

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
      <Testimonials />
      <LeadMagnet />
      <FAQ />
      <Footer />
    </main>
  );
}
