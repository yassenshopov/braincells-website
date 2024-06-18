"use client";
import home from "../styles/css/home.module.css";
import investmentsThumbnail from "../images/automations-gallery/investments.png";
import { useState } from "react";

export default function AutomationsGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtersList = ["All", "Productivity", "Finance", "Health", "Education"];

  const Filter = ({ name }) => (
    <button
      className={`${home.filterButton} ${
        activeFilter === name ? home.active : ""
      }`}
      onClick={() => setActiveFilter(name)}
    >
      {name}
    </button>
  );

  const automationsList = {
    investments: {
      icon: "https://www.notion.so/icons/chess-bishop_gray.svg?mode=light",
      title: "Investments automation",
      description: "Get current data for the price of your investments",
      tags: ["Finance"],
    },
    googleCalendar: {
      icon: "https://www.notion.so/icons/calendar-day_gray.svg?mode=light",
      title: "Google Calendar automation",
      description:
        "Sync your Google Calendar with Notion in a database of your choice",
      tags: ["Productivity"],
    },
  };

  const filteredAutomations = Object.keys(automationsList).filter(
    (key) =>
      activeFilter === "All" || automationsList[key].tags.includes(activeFilter)
  );

  const Automation = ({ name }) => {
    const automation = automationsList[name];
    return (
      <div className={home.automationItem}>
        <img src={investmentsThumbnail.src} alt={automation.title} loading="lazy" />
        <div className={home.automationsGalleryGridItemTitle}>
          <img src={automation.icon} alt={`${automation.title} icon`} />
          <h4>{automation.title}</h4>
        </div>
        <p>{automation.description}</p>
      </div>
    );
  };

  return (
    <section className={`${home.automationsGallery} ${home.darkBg}`}>
      <h2>Our most popular automations</h2>
      <h3>
        ... or as we call them, <em>braincells</em>
      </h3>
      <div className={home.automationsGalleryFilters}>
        {filtersList.map((filter) => (
          <Filter key={filter} name={filter} />
        ))}
      </div>
      <div className={home.automationsGalleryGrid}>
        {filteredAutomations.map((automation) => (
          <Automation key={automation} name={automation} />
        ))}
      </div>
    </section>
  );
}
