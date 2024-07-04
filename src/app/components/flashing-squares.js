"use client";
import home from "../styles/css/home.module.css";
import { useState, useEffect } from "react";

export default function FlashingSquares(props) {
  const [activeSquare, setActiveSquare] = useState(-1);
  const widthSquares = props.widthSquares;
  const heightSquares = props.heightSquares;

  // make it so every 200ms a random square is selected, without the function speeding up over time, and without the squares flashing too quickly, and make sure no square is selected twice in a row
  useEffect(() => {
    const interval = setInterval(() => {
      let randomSquare = Math.floor(
        Math.random() * widthSquares * heightSquares
      );
      while (randomSquare === activeSquare) {
        // we want the next square to be at max 2 squares away from the current square
        randomSquare = activeSquare + Math.floor(Math.random() * 3) - 1;
      }
      setActiveSquare(randomSquare);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const square = (index) => {
    return (
      <div
        className={`${home.square} ${
          activeSquare === index ? home.active : ""
        }`}
        key={index}
      ></div>
    );
  };

  return (
    <div
      className={home.flashingSquares}
      style={{ top: props.top * 40 + "px", left: props.left * 40 + "px" }}
    >
      {[...Array(widthSquares * heightSquares).keys()].map((index) =>
        square(index)
      )}
    </div>
  );
}
