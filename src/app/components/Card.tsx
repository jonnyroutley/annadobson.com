'use client'

import { useState, useRef } from 'react'
import { BigLetter } from './Letter'
import { ExternalLink, InternalLink } from './Links'

export function Card() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const card = cardRef.current
    const rect = card.getBoundingClientRect()

    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Convert position to rotation degrees
    // Adjust the division values to control sensitivity
    const rotateX = -y / 100
    const rotateY = x / 100

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseOver={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col gap-8 items-center rounded-sm justify-center md:max-w-lg border-2 px-12 py-24 sm:py-8 shadow-xl transition-transform duration-300 ease-out "
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="flex flex-col items-center">
        <div
          className={`flex flex-col gap-2 items-baseline justify-center text-center w-fit`}
        >
          <div className="flex flex-row gap-2">
            <BigLetter letter="A" />
            <BigLetter letter="N" />
          </div>
          <div className="flex flex-row gap-2">
            <BigLetter letter="N" />
            <BigLetter letter="A" />
          </div>
        </div>
      </div>
      <ul className="flex flex-col gap-2 text-center items-center max-w-md z-10 opacity-0 animate-fade-in">
        <li>
          Literary scout for{' '}
          <ExternalLink href="https://ecclesfisher.com/#team">
            Eccles Fisher Associates
          </ExternalLink>
        </li>
        <li>
          Alumna of the University of Oxford and University College London
        </li>
        <li>
          <InternalLink href={'mailto:annadobson@outlook.com'}>
            Contact
          </InternalLink>
        </li>
      </ul>
    </div>
  )
}
