"use client";

import { useState } from "react";
import home from "../styles/css/home.module.css";

export default function WaitlistPopup(props) {
  const [isVisible, setIsVisible] = useState(props.visible);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <dialog
      // open={isVisible}
      className={home.waitlistPopup + " " + (isVisible ? home.waitlistPopupVisible : home.waitlistPopupHidden)} 
    >
      <div className={home.waitlistPopupContent}>
        <span id="closeBtn" onClick={handleClose}>
          X
        </span>
        <h2>Join the waitlist 👋</h2>
        <p>
          Be the first to know when Braincells.io launches. Sign up for the
          waitlist and get early access to our platform.
        </p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Join the waitlist</button>
        </form>
      </div>
    </dialog>
  );
}
