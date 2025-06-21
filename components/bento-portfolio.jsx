"use client"

import { useState, useEffect } from "react"
import { BentoGrid } from "./bento-grid"
import { FloatingDock } from "./floating-dock"
import { CursorTrail } from "./cursor-trail"
import { BackgroundGrid } from "./background-grid"
import { CardModal } from "./card-modal"

export function BentoPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e) => {
      // setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen">
      <BackgroundGrid />
      <CursorTrail mousePosition={mousePosition} />

      <div className="relative z-10">
        <BentoGrid isLoaded={isLoaded} onCardClick={setSelectedCard} />
        <FloatingDock onCardClick={setSelectedCard} />
      </div>

      {selectedCard && <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </div>
  )
}
