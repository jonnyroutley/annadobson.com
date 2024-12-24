"use client";

import { useState, useRef } from "react";

export function TiltCard({ children }: { children?: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Convert position to rotation degrees
    // Adjust the division values to control sensitivity
    const rotateX = -y / 100;
    const rotateY = x / 100;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    // biome-ignore lint/a11y/useKeyWithMouseEvents: <explanation>
    <div
      ref={cardRef}
      onMouseOver={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col gap-12 items-center rounded-sm justify-center md:max-w-lg border-2 border-neutral-50 px-12 py-24 sm:py-8 shadow-xl transition-transform duration-300 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

const styles = `
  /* Custom styles for 3D transforms */
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

export const FlipCard = ({
  front,
  back,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <style>{styles}</style>
      <div className="perspective-1000 h-[32rem] w-[20rem] md:w-[32rem] md:h-[24rem]">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div
          className={`transform-style-preserve-3d relative h-full w-full cursor-pointer transition-transform duration-500 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front of card */}
          <div className="z-10 backface-hidden absolute h-full w-full transition-transform duration-300 ease-out">
            {front}
          </div>
          {/* Back of card */}
          <div className="z-10 backface-hidden rotate-y-180 absolute h-full w-full transition-transform duration-300 ease-out ">
            {back}
          </div>
        </div>
      </div>
    </>
  );
};
