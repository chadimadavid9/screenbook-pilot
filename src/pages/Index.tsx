import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NudgeSection from "@/components/NudgeSection";
import EngineSection from "@/components/EngineSection";
import PilotSection from "@/components/PilotSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <NudgeSection />
      <EngineSection />
      <PilotSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
