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
    healthTracker: {
      icon: "https://www.notion.so/icons/heart_gray.svg?mode=light",
      title: "Health tracker automation",
      description: "Track your health metrics in Notion",
      tags: ["Health"],
    },
    languageLearning: {
      icon: "https://www.notion.so/icons/translate_gray.svg?mode=light",
      title: "Language learning automation",
      description: "Automate your language learning routine",
      tags: ["Education"],
    },
    dailyJournal: {
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Daily journal automation",
      description: "Automate your daily journaling routine",
      tags: ["Productivity"],
    },
    workoutTracker: {
      icon: "https://www.notion.so/icons/dumbbell_gray.svg?mode=light",
      title: "Workout tracker automation",
      description: "Track your workouts in Notion",
      tags: ["Health"],
    },
    stockMarket: {
      icon: "https://www.notion.so/icons/chart-line_gray.svg?mode=light",
      title: "Stock market automation",
      description: "Get real-time stock market data",
      tags: ["Finance"],
    },
    readingList: {
      icon: "https://www.notion.so/icons/bookmark_gray.svg?mode=light",
      title: "Reading list automation",
      description: "Automate your reading list",
      tags: ["Productivity"],
    },
    habitTracker: {
      icon: "https://www.notion.so/icons/check-circle_gray.svg?mode=light",
      title: "Habit tracker automation",
      description: "Track your habits in Notion",
      tags: ["Productivity"],
    },
    budgetTracker: {
      icon: "https://www.notion.so/icons/credit-card_gray.svg?mode=light",
      title: "Budget tracker automation",
      description: "Track your budget in Notion",
      tags: ["Finance"],
    },
    recipeBook: {
      icon: "https://www.notion.so/icons/utensils_gray.svg?mode=light",
      title: "Recipe book automation",
      description: "Automate your recipe book",
      tags: ["Productivity"],
    },
    languageFlashcards: {
      icon: "https://www.notion.so/icons/translate_gray.svg?mode=light",
      title: "Language flashcards automation",
      description: "Automate your language flashcards",
      tags: ["Education"],
    },
    sleepTracker: {
      icon: "https://www.notion.so/icons/moon_gray.svg?mode=light",
      title: "Sleep tracker automation",
      description: "Track your sleep in Notion",
      tags: ["Health"],
    },
    bookTracker: {
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Book tracker automation",
      description: "Track your books in Notion",
      tags: ["Productivity"],
    },
    stockTracker: {
      icon: "https://www.notion.so/icons/chart-line_gray.svg?mode=light",
      title: "Stock tracker automation",
      description: "Track your stocks in Notion",
      tags: ["Finance"],
    },
    workoutRoutine: {
      icon: "https://www.notion.so/icons/dumbbell_gray.svg?mode=light",
      title: "Workout routine automation",
      description: "Automate your workout routine",
      tags: ["Health"],
    },
    languageProgress: {
      icon: "https://www.notion.so/icons/translate_gray.svg?mode=light",
      title: "Language progress automation",
      description: "Track your language learning progress",
      tags: ["Education"],
    },
    dailyPlanner: {
      icon: "https://www.notion.so/icons/calendar-day_gray.svg?mode=light",
      title: "Daily planner automation",
      description: "Automate your daily planning routine",
      tags: ["Productivity"],
    },
    habitBuilder: {
      icon: "https://www.notion.so/icons/check-circle_gray.svg?mode=light",
      title: "Habit builder automation",
      description: "Build new habits with automation",
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
        <img
          src={investmentsThumbnail.src}
          alt={automation.title}
          loading="lazy"
        />
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
