import Hero from "@/components/Hero";
import LeadChatbot from "@/components/LeadChatbot";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LeadChatbot />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
