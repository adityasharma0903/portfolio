"use client"

import { Code, Zap, TrendingUp } from "lucide-react"

export function SkillsCard({ onCardClick }) {
  const skills = [
    { name: "React",  color: "from-violet-300 to-purple-400" },
    { name: "Node.js",  color: "from-green-500 to-emerald-500" },
    { name: "Socket\n.io",color: "from-green-400 to-blue-500" },
    { name: "git",  color: "from-yellow-500 to-orange-500" },
    { name: "Mongo\nDB", color: "from-green-600 to-green-800" },
    { name: "Firebase",color: "from-blue-600 to-indigo-700" },


  ]

  const handleClick = () => {
    onCardClick({
      id: "skills",
      title: "Technical Skills",
      type: "skills",
    })
  }

  return (
    <div
      className="h-full min-h-[200px] md:min-h-[250px] bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-3 md:mr-4">
              <Code className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Skills</h3>
              <p className="text-xs text-gray-400">Technical Expertise</p>
            </div>
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {skills.map((skill, index) => (
    <div
      key={index}
      className={`p-4 rounded-xl shadow-md bg-gradient-to-tr ${skill.color} text-white flex items-center justify-center text-lg font-semibold hover:scale-105 transition-transform duration-300`}
    >
      {skill.name}
    </div>
  ))}
</div>


        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center">
            <Zap className="w-3 h-3 mr-1 text-green-400" />
            Always learning
          </div>
          <span className="text-green-400 font-medium">15+ Technologies</span>
        </div>
      </div>

      <div className="absolute -top-10 -left-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-2xl" />
    </div>
  )
}
