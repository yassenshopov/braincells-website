"use client";
import home from "../styles/css/home.module.css";
import investmentsThumbnail from "../images/automations-gallery/investments.png";
import libraryThumbnail from "../images/automations-gallery/library.png";
import gcalThumbnail from "../images/automations-gallery/gcal.png";
import movieThumbnail from "../images/automations-gallery/movie.png";
import langThumbnail from "../images/automations-gallery/lang.png";
import healthThumbnail from "../images/automations-gallery/health.png";
import journalThumbnail from "../images/automations-gallery/journal.png";
import workoutThumbnail from "../images/automations-gallery/workout.png";
import sleepThumbnail from "../images/automations-gallery/sleep.png";
import { useState } from "react";

export default function AutomationsGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtersList = ["All", "Productivity", "Finance", "Health", "Education", "Entertainment"];

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
      thumbnail: investmentsThumbnail.src,
      icon: "https://www.notion.so/icons/chart-line_gray.svg?mode=light",
      title: "Investments automation",
      description: "Get current data for the price of your investments",
      tags: ["Finance"],
    },
    googleCalendar: {
      thumbnail: gcalThumbnail.src,
      icon: "https://www.notion.so/icons/calendar-day_gray.svg?mode=light",
      title: "Google Calendar automation",
      description:
        "Sync your Google Calendar with Notion in a database of your choice",
      tags: ["Productivity"],
    },
    library: {
      thumbnail: libraryThumbnail.src,
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Book thumbnails generator",
      description: "Get custom book thumbnails for your reading list",
      tags: ["Productivity", "Education", "Entertainment"],
    },
    videotheque: {
      thumbnail: movieThumbnail.src,
      icon: "https://www.notion.so/icons/movie_gray.svg?mode=light",
      title: "Movie/Series thumbnails generator",
      description: "Get custom video thumbnails for your watchlist",
      tags: ["Productivity", "Entertainment"],
    },
    healthTracker: {
      thumbnail: healthThumbnail.src,
      icon: "https://www.notion.so/icons/heart_gray.svg?mode=light",
      title: "Health tracker automation",
      description: "Track your health metrics in Notion",
      tags: ["Health"],
    },
    languageLearning: {
      thumbnail: langThumbnail.src,
      icon: "https://www.notion.so/icons/translate_gray.svg?mode=light",
      title: "Language learning automation",
      description: "Automate your language learning routine",
      tags: ["Education"],
    },
    dailyJournal: {
      thumbnail: journalThumbnail.src,
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Daily journal automation",
      description: "Automate your daily journaling routine",
      tags: ["Productivity"],
    },
    workoutTracker: {
      thumbnail: workoutThumbnail.src,
      icon: "https://www.notion.so/icons/gym_gray.svg?mode=light",
      title: "Workout tracker automation",
      description: "Track your workouts in Notion",
      tags: ["Health"],
    },
    sleepTracker: {
      thumbnail: sleepThumbnail.src,
      icon: "https://www.notion.so/icons/moon_gray.svg?mode=light",
      title: "Sleep tracker automation",
      description: "Track your sleep in Notion",
      tags: ["Health"],
    },
    weeklyReview: {
      thumbnail: journalThumbnail.src,
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Weekly review automation",
      description: "Automate your weekly review process",
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
          src={automation.thumbnail || investmentsThumbnail.src}
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
