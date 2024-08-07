"use client";

import styles from "./page.module.css";
import home from "./styles/css/home.module.css";
import Nav from "./components/nav";
import NavCTA from "./components/nav-cta";
import HeroSection from "./components/hero-section";
import BenefitsSection from "./components/benefits-section";
import HowItWorksSection from "./components/how-it-works-section";
import AutomationsGallery from "./components/automations-gallery";
import SocialProofSection from "./components/social-proof-section";
import CTASection from "./components/cta-section";
import FAQSection from "./components/faq-section";
import IncentivesSection from "./components/incentives-section";
import Footer from "./components/footer";
import WaitlistPopup from "./components/waitlist-popup";

export const metadata = {
  title: "Braincells.io | Automate your life in Notion",
  description:
    "Automate your life in Notion with Braincells.io. Enhance your productivity with smart workflows, less manual work, and more time for creative tasks.",
};

const [isDialogVisible, setIsDialogVisible] = useState(false);

const handleOpenDialog = () => {
  setIsDialogVisible(true);
};

const handleCloseDialog = () => {
  setIsDialogVisible(false);
};

export default function Home() {
  return (
    <main className={home.main}>
      {/* <Nav preLaunch={true} /> */}
      <WaitlistPopup visible={false} />
      <NavCTA onOpenDialog={handleOpenDialog} />
      <HeroSection />
      <SocialProofSection />
      <BenefitsSection />
      <HowItWorksSection />
      <AutomationsGallery />
      <CTASection />
      <FAQSection />
      <IncentivesSection />
      <Footer />
    </main>
  );
}
