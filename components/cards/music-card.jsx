"use client"

import { Award } from "lucide-react"
import { useState } from "react"

export function MusicCard({ onCardClick }) {
  const handleClick = () => {
    onCardClick({
      id: "music", // keep ID unchanged
      title: "Certificates",
      type: "music", // keep type unchanged
    })
  }

  return (
    <div
      className="h-full min-h-[120px] bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm md:text-base font-bold text-white">Certificates</h3>
            <p className="text-xs text-gray-400">View my certificates</p>
            <div className="w-16 md:w-20 bg-white/10 rounded-full h-1 mt-2">
              <div className="w-1/4 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1 rounded-full" />
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-400">🚧</div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-3xl" />
    </div>
  )
}
