"use client"

import { Music, Play, Pause, SkipForward } from "lucide-react"
import { useState } from "react"

export function MusicCard({ onCardClick }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = () => {
    onCardClick({
      id: "music",
      title: "Currently Playing",
      type: "music",
    })
  }

  const handlePlayPause = (e) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }

  return (
    <div
      className="h-full min-h-[120px] bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300">
            <Music className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-sm md:text-base font-bold text-white">Lo-fi Beats</h3>
            <p className="text-xs text-gray-400">Coding Playlist</p>
            <div className="w-16 md:w-20 bg-white/10 rounded-full h-1 mt-2">
              <div className="w-1/3 bg-gradient-to-r from-violet-500 to-fuchsia-500 h-1 rounded-full" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePlayPause}
            className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
          >
            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
          </button>
          <SkipForward className="w-4 h-4 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-3xl" />
    </div>
  )
}
