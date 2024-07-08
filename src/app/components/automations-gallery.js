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
  const filtersList = ["All", "Productivity", "Finance", "Health", "Education", "Fun"];

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
      title: "Investments dashboard",
      description: "Track your investments in Notion - get current data on companies and track your portfolio performance and net worth",
      tags: ["Finance"],
    },
    googleCalendar: {
      thumbnail: gcalThumbnail.src,
      icon: "https://www.notion.so/icons/calendar-day_gray.svg?mode=light",
      title: "Google Calendar automation",
      description:
        "Sync your Google Calendar events with your Notion workspace - works both ways, and expands on the Notion Calendar functionality",
      tags: ["Productivity"],
    },
    library: {
      thumbnail: libraryThumbnail.src,
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Digital Library dashboard",
      description: "Organise your books, get custom thumbnails, classify, get extended synopsis",
      tags: ["Productivity", "Education", "Fun"],
    },
    videotheque: {
      thumbnail: movieThumbnail.src,
      icon: "https://www.notion.so/icons/movie_gray.svg?mode=light",
      title: "Movie and TV Series dashboard",
      description: "Organise your movies and TV series, get custom thumbnails, classify, get extended synopsis, data directly from IMDb",
      tags: ["Productivity", "Fun"],
    },
    healthTracker: {
      thumbnail: healthThumbnail.src,
      icon: "https://www.notion.so/icons/heart_gray.svg?mode=light",
      title: "Health Tracking dashboard",
      description: "Track your health stats in Notion - collect and visualise your body metrics, workouts, sleep, and more",
      tags: ["Health"],
    },
    languageLearning: {
      thumbnail: langThumbnail.src,
      icon: "https://www.notion.so/icons/translate_gray.svg?mode=light",
      title: "Language Learning dashboard",
      description: "Track your language learning progress in Notion - get custom roadmaps, track your progress, and stay motivated",
      tags: ["Education"],
    },
    dailyJournal: {
      thumbnail: journalThumbnail.src,
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Daily Journal dashboard",
      description: "Track your daily thoughts and activities in Notion - get custom prompts, track your mood, and stay motivated",
      tags: ["Productivity"],
    },
    workoutTracker: {
      thumbnail: workoutThumbnail.src,
      icon: "https://www.notion.so/icons/gym_gray.svg?mode=light",
      title: "Workout Tracker automation",
      description: "Log your workouts in Notion, track your progress and receive valuable insights, schedule your workouts and get reminders",
      tags: ["Health"],
    },
    sleepTracker: {
      thumbnail: sleepThumbnail.src,
      icon: "https://www.notion.so/icons/moon_gray.svg?mode=light",
      title: "Sleep Tracker dashboard",
      description: "Track your sleep data in Notion - collect and visualise your sleep data, get insights and improve your sleep quality",
      tags: ["Health"],
    },
    weeklyReview: {
      thumbnail: journalThumbnail.src,
      icon: "https://www.notion.so/icons/book_gray.svg?mode=light",
      title: "Weekly Review dashboard",
      description: "Connect your daily journal entries and get a weekly review dashboard - get insights on your productivity, mood, and habits",
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
