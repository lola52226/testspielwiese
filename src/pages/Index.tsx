import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import JourneySection from "@/components/landing/JourneySection";
import AboutSection from "@/components/landing/AboutSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import FooterCTA from "@/components/landing/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <div id="journey">
          <JourneySection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <TestimonialsSection />
        <div id="faq">
          <FAQSection />
        </div>
        <FooterCTA />
      </main>
    </div>
  );
};

export default Index;
