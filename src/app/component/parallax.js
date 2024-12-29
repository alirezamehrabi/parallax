"use client";
import { useState, useEffect } from "react";

export function ParallaxLayer({ speed, style, children }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        transform: `translateY(${offsetY * speed}px)`,
        ...style, // add custom styles
      }}
    >
      {children}
    </div>
  );
}
