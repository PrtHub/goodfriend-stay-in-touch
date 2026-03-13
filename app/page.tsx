import Navbar from "@/components/sections/Navbar";
import { FloatingSupport } from "@/components/FloatingSupport";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import Screenshots from "@/components/sections/Screenshots";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Highlights from "@/components/sections/Highlights";
import ForWho from "@/components/sections/ForWho";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FDFAF4", color: "#1C2D0E" }}>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Screenshots />
        <Features />
        <HowItWorks />
        <Highlights />
        <ForWho />
        <Pricing />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
      <FloatingSupport />
    </div>
  );
}
