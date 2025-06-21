"use client"

import { useEffect, useState } from "react"

export function CursorTrail({ mousePosition }) {
  const [trail, setTrail] = useState([])

  useEffect(() => {
    const newTrail = [...trail, mousePosition].slice(-8)
    setTrail(newTrail)
  }, [mousePosition])

  return (
    <div className="fixed inset-0 pointer-events-none z-30 hidden md:block">
      {trail.map((position, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
          style={{
            left: position.x - 4,
            top: position.y - 4,
            opacity: ((index + 1) / trail.length) * 0.4,
            transform: `scale(${(index + 1) / trail.length})`,
          }}
        />
      ))}
    </div>
  )
}
