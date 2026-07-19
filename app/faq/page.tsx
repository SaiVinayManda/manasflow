import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Manasflow",
  description: "Get answers to common questions about Manasflow's AI automation services, security practices, and supported integrations.",
};

export default function FAQPage() {
  return (
    <main>
      <FAQ />
      <Footer />
    </main>
  );
}
