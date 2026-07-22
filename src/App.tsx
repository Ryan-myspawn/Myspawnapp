import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Science from "@/components/Science";
import Generations from "@/components/Generations";
import Pricing from "@/components/Pricing";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <div className="relative min-h-screen bg-navy-deeper">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <HowItWorks />
        <Science />
        <Generations />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
