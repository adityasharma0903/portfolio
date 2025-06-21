"use client"

import { TrendingUp, Users, Award, Target } from "lucide-react"

export function StatsCard({ onCardClick }) {
  const stats = [
    { icon: TrendingUp, label: "Projects", value: "5+", color: "text-green-400" },
    { icon: Users, label: "Clients", value: "2", color: "text-blue-400" },
    { icon: Award, label: "Awards", value: "5", color: "text-yellow-400" },
  ]

  const handleClick = () => {
    onCardClick({
      id: "stats",
      title: "My Statistics",
      type: "stats",
    })
  }

  return (
    <div
      className="h-full min-h-[120px] bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base md:text-lg font-bold text-white">Stats</h3>
          <Target className="w-4 h-4 text-cyan-400" />
        </div>

        <div className="grid grid-cols-1 gap-3">
          {stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <stat.icon className={`w-4 h-4 ${stat.color} mr-2`} />
                <span className="text-sm text-gray-300">{stat.label}</span>
              </div>
              <span className="text-lg font-bold text-white">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -top-5 -right-5 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
    </div>
  )
}
