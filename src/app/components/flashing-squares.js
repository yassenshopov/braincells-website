"use client";
import home from "../styles/css/home.module.css";
import { useState, useEffect } from "react";

export default function FlashingSquares(props) {
  const [activeSquare, setActiveSquare] = useState(100);
  const widthSquares = props.widthSquares;
  const heightSquares = props.heightSquares;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSquare((prev) => prev <= widthSquares * heightSquares - 1 ? 100 : prev + 6);
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
