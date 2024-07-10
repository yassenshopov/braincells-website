import React from "react"; // Ensure React is imported if using JSX
import home from "../styles/css/home.module.css";

export default function IncentivesSection() {
  return (
    <section className={home.incentivesSection}>
      <h2>Join the waitlist and get exclusive incentives</h2>
      <div className={home.incentivesSectionTitle}>
        <h3>Early access</h3>
        <p>Be the first to access the platform when it launches.</p>
      </div>
      <div className={home.incentivesSectionTitle}>
        <h3>Exclusive discounts</h3>
        <p>Get exclusive discounts on our premium plans.</p>
      </div>
      <div className={home.incentivesSectionTitle}>
        <h3>Priority support</h3>
        <p>Get priority support and assistance from our team.</p>
      </div>
    </section>
  );
}
