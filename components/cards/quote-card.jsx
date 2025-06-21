"use client"

import { Quote, Heart } from "lucide-react"

export function QuoteCard({ onCardClick }) {
  const handleClick = () => {
    onCardClick({
      id: "quote",
      title: "My Philosophy",
      type: "quote",
    })
  }

  return (
    <div
      className="h-full min-h-[120px] bg-gradient-to-br from-slate-900/20 via-gray-900/20 to-zinc-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full flex items-center">
        <div className="flex items-start w-full">
          <Quote className="w-5 h-5 md:w-6 md:h-6 text-gray-400 mr-3 md:mr-4 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-white font-medium text-sm md:text-base leading-relaxed">
              "Code is poetry written in the language of logic."
            </p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-gray-400 text-xs">- My coding philosophy</p>
              <Heart className="w-4 h-4 text-red-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
