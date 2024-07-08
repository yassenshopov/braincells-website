"use client";
import home from "../styles/css/home.module.css";
import Image from "next/image";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdCheckBox,
} from "react-icons/md";
import { FaCircle, FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import FlashingSquares from "./flashing-squares";

export default function HeroSection() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);
  const kanbanCardTypes = {
    notStarted: {
      title: "Not started",
      img: "https://cdn.midjourney.com/2ceb907f-d408-45fa-8397-c791c24493f0/0_3.png",
    },
    inProgress: {
      title: "In progress",
      img: "https://cdn.midjourney.com/7397bf82-2748-4947-917b-043873d2ce91/0_1.png",
    },
    done: {
      title: "Done",
      img: "https://cdn.midjourney.com/17b5523d-6f89-4a45-8205-f289e75f556a/0_3.png",
    },
  };

  const kanbanCard = (index, type) => {
    return (
      <div
        className={home.kanbanCard}
        key={index}
        data-index={index}
        onClick={() => {
          let select = document.querySelector(
            `.${home.kanbanCard}[data-index="${index}"] select`
          );
          select.focus();
        }}
      >
        <img
          src={kanbanCardTypes[type].img}
          alt="Hero image"
          className={home.kanbanCardAvatar}
        />
        <div className={home.kanbanCardTitle}>
          {type === "done" ? <MdCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
          <h3>Task {index + 1}</h3>
        </div>
        <div className={home.kanbanCardStatusContainer}>
          <FaCircle
            className={home.kanbanCardStatusIcon + " " + home[`${type}`]}
          />
          <select
            className={home.kanbanCardStatus + " " + home[`${type}`]}
            value={type}
            onChange={(e) => {
              let newType = e.target.value;
              setKanbanCards((prev) => {
                let newCards = [...prev];
                newCards[index] = kanbanCard(index, newType);
                return newCards;
              });
            }}
          >
            {Object.keys(kanbanCardTypes).map((key) => {
              return (
                <option key={key} value={key}>
                  {kanbanCardTypes[key].title}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    );
  };

  const [kanbanCards, setKanbanCards] = useState([]);

  useEffect(() => {
    let cards = [];
    for (let i = 0; i < 4; i++) {
      cards.push(kanbanCard(i, "done"));
      setKanbanCards([...cards]);
    }
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        if (i === 0) {
          cards.push(kanbanCard(i + 4, "inProgress"));
        } else {
          cards.push(kanbanCard(i + 4, "notStarted"));
        }
        setKanbanCards([...cards]);
      }, 500 * (i + 1));
    }
  }, []);


  return (
    <section className={home.hero + " " + home.darkBg}>
      <FlashingSquares
        top="0"
        left="0"
        widthSquares={Math.ceil(windowWidth / 40)}
        heightSquares={Math.ceil(windowHeight / 40)}
      />
      <div className={home.heroLeft}>
        <h1>Make Notion work for you - with automation</h1>
        <ul>
          <li>Enhance your productivity with smart workflows</li>
          <li>Less manual work, more time for creative tasks</li>
          <li>Create a workspace that works while you sleep</li>
          <li>Real-time changes to your Notion database</li>
        </ul>
        <form>
          <input type="email" placeholder="Enter your email..." />
          <button>Join the waitlist</button>
        </form>
        <h4>Join 1,300+ people who are already on the email list!</h4>
      </div>
      <div className={home.heroRight}>
        <div className={home.kanban}>
          {kanbanCards}
          <div className={home.kanbanCard + " " + home.kanbanCardAdd}>
            <h3>
              <FaPlus />
              New
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
