import styles from "./page.module.css";
import home from "./styles/css/home.module.css";
import Nav from "./components/nav";
import HeroSection from "./components/hero-section";
import BenefitsSection from "./components/benefits-section";
import HowItWorksSection from "./components/how-it-works-section";
import SocialProofSection from "./components/social-proof-section";
import CTASection from "./components/cta-section";
import IncentivesSection from "./components/incentives-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className={home.main}>
      <Nav />
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <CTASection />
      <IncentivesSection />
      <Footer />
    </main>
  );
}
