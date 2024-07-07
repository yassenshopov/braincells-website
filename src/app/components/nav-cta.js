'use client';

import home from "../styles/css/home.module.css";
import { useState, useEffect } from "react";

export default function NavCTA() {

  // when the user scrolls down 100px from the top of the document, add class navCTAVisible to the nav element
  useEffect(() => {
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("nav").classList.add(home.navCTAVisible);
        document.querySelector("nav").classList.remove(home.navCTAHidden);
      } else {
        document.querySelector("nav").classList.remove(home.navCTAVisible);
        document.querySelector("nav").classList.add(home.navCTAHidden);
      }
    };
  }, []);

  return (
    <nav className={home.navCTA}>
      <a href="#waitlist" className={home.navCTAButton}>
        Join the waitlist
      </a>
    </nav>
  );
}
