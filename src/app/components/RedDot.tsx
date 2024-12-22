"use client";

import { useState } from "react";

export function RedDot() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      onClick={() => {
        setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 300);
      }}
      className={`rounded-full w-4 h-4 bg-red-600 shrink-0 transition-opacity duration-300 ease-in-out cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
