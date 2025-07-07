"use client";
import { useEffect } from "react";

const MouseParallax = () => {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      const video = document.querySelector("video");
      if (video) {
        video.animate(
          { transform: `translate(${x}px, ${y}px)` },
          { duration: 400, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return null;
};

export default MouseParallax;
