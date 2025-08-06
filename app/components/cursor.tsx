"use client";
import React, { useEffect, useState } from "react";

const CursorBrush = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300); // effect duration
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${position.x - 100}px, ${position.y - 100}px)`,
      }}
    >
      <div
        className={`w-62 h-62 rounded-full bg-white blur-3xl opacity-10 transition-all duration-300 ${
          clicked ? "scale-125 opacity-20" : ""
        }`}
      />
    </div>
  );
};

export default CursorBrush;
