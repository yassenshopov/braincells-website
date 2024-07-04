'use client';

import home from "../styles/css/home.module.css";
import { useState } from "react";

export default function FAQSection() {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section className={home.priceSection + " " + home.darkBg}>
      <h1>Pricing</h1>
      <p className={home.priceSectionDescription}>
        Choose the plan that fits your needs. Cancel or change plan at any time.<br></br> We got you.
      </p>
      <div className={home.priceSectionMonthlyOrYearly}>
        <button
          className={home.priceSectionMonthlyOrYearlyButton + " " + (isMonthly ? home.active : "")}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={home.priceSectionMonthlyOrYearlyButton + " " + (!isMonthly ? home.active : "")}
          onClick={() => setIsMonthly(false)}
        >
          Yearly
          <span>Save 20%</span>
        </button>
      </div>
      <div className={home.priceSectionCards}>
        <div className={home.priceSectionCard}>
          <h2>Free</h2>
          <h3><span>${isMonthly ? "2" : "1"}</span> /month</h3>
          <p>Give it a test drive 👋</p>
          <ul>
            <li>1 active Tier-1 automation</li>
            <li>Access to free Notion template gallery</li>
            <li>Basic support</li>
          </ul>
          <a href="/sign-up" className={home.priceSectionCardButton}>
            Get started
          </a>
        </div>
        <div className={home.priceSectionCard + " " + home.priceSectionCardHighlighted}>
          <h2>Pro</h2>
          <h3><span>${isMonthly ? "12" : "10"}</span> /month</h3>
          <p>For individuals and small teams 🚀</p>
          <ul>
            <li>5 active automations of ANY tier</li>
            <li>Full access to the whole Notion template gallery</li>
            <li>Priority support</li>
            <li>Create your own automations and share them</li>
            <li>Early access to new features</li>
          </ul>
          <a href="/sign-up" className={home.priceSectionCardButton}>
            Get started
          </a>
        </div>
        <div className={home.priceSectionCard}>
          <h2>Team</h2>
          <h3><span>${isMonthly ? "50" : "40"}</span> /month</h3>
          <p>For large teams and enterprises 🏢</p>
          <ul>
            <li>50 active braincells</li>
            <li>Full access to the whole Notion template gallery</li>
            <li>Personalised Slack support channel</li>
            <li>Custom automations from expert Notioneers</li>
            <li>Onboarding assistance</li>
          </ul>
          <a href="/contact-us" className={home.priceSectionCardButton}>
            Contact us
          </a>
        </div>
      </div>
      <div className={home.faqSectionContact}>
        <h2>More questions?</h2>
        <p>
          For any other questions, feel free to contact our team, and we'll get
          back to you as soon as possible.
        </p>
        <a href="/contact-us" className={home.faqSectionContactButton}>
          Contact us
        </a>
      </div>
    </section>
  );
}
