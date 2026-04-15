import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilotSection from "@/components/PilotSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <HeroSection />
      <PilotSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
