"use client"

import { Building, Calendar, Award } from "lucide-react"

export function ExperienceCard({ onCardClick }) {
  const handleClick = () => {
    onCardClick({
      id: "experience",
      title: "Acheivements",
      type: "experience",
    })
  }

  return (
    <div
      className="h-full min-h-[120px] bg-gradient-to-br from-yellow-900/20 via-orange-900/20 to-red-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-3 md:mr-4">
            <Building className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-white">Achievements</h3>
            <p className="text-sm text-gray-400">Aditya Sharma</p>
            <div className="flex items-center text-xs text-gray-400 mt-1">
              <Calendar className="w-3 h-3 mr-1 text-yellow-400" />
              student
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-center mb-2">
            <Award className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-xs text-yellow-400">2025</span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-white mb-1">5+</div>
          <div className="text-xs text-gray-400">Certificates</div>
        </div>
      </div>

      <div className="absolute -top-5 -left-5 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl" />
    </div>
  )
}
