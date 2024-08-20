import AIFeatures from "../../components/home/AIFeatures";
import EarningsPotential from "../../components/home/EarningsPotential";
import Features from "../../components/home/Features";
import HeroSection from "../../components/home/HeroSection";
import WhyMakeWell from "../../components/home/WhyMakeWell";
import AIReportAnalysis from "../../components/home/AIReportAnalysis";
import ContactForm from "../../components/home/ContactForm";
import CTASection from "../../components/home/CTA";
import JoinWaitlistModal from "../../components/modals/JoinWaitlistModal";
import LoginWaitlistModal from "../../components/modals/LoginWaitlistModal";
import FAQPage from "./FAQPage";
import ComingSoonModal from "../../components/modals/ComingSoonModal";
import SubHero from "../../components/home/SubHero";
const Homepage = () => {
  return (
    <div className=" py-4">
      <HeroSection />
      {/* <AIFeatures /> */}
      <SubHero />
      <Features />
      <EarningsPotential />
      <WhyMakeWell />
      <AIReportAnalysis />
      <CTASection />
      <FAQPage />
      <ContactForm />
      <JoinWaitlistModal />
      <LoginWaitlistModal />
      <ComingSoonModal />
    </div>
  );
};

export default Homepage;
