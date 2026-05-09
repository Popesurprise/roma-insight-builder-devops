import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import PositioningSection from "@/components/PositioningSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <MissionSection />
    <ValuesSection />
    <ServicesSection />
    <PositioningSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
