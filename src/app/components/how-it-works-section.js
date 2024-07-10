import home from "../styles/css/home.module.css";

export default function HowItWorksSection() {
  return (
    <section className={home.howItWorksSection}>
      <h2>How it works</h2>
      <div className={home.howItWorksSectionTitle}>
        <h3>1. Choose an automation</h3>
        <p>
          Browse through our gallery of automations and choose the one that
          suits your needs.
        </p>
      </div>
      <div className={home.howItWorksSectionTitle}>
        <h3>2. Connect your accounts</h3>
        <p>
          Connect your Notion account with the services you want to automate.
        </p>
      </div>
      <div className={home.howItWorksSectionTitle}>
        <h3>3. Customize your automation</h3>
        <p>Customize your automation to fit your workflow and preferences.</p>
      </div>
      <div className={home.howItWorksSectionTitle}>
        <h3>4. Enjoy your automated workflow</h3>
        <p>Sit back and relax while Braincells.io takes care of the rest.</p>
      </div>
    </section>
  );
}
