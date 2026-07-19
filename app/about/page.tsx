import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Manasflow",
  description: "Learn more about the team behind Manasflow and our engineering-first approach to AI workflow automation.",
};

export default function AboutPage() {
  return (
    <main>
      <Team />
      <Footer />
    </main>
  );
}
