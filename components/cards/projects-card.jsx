"use client"

import { Briefcase, ExternalLink, Star, TrendingUp } from "lucide-react"

export function ProjectsCard({ onCardClick }) {
  const projects = [
    { name: "Virtual Group Study Platform", status: "Live", users: "Live", color: "text-green-400" },
    { name: "PoolMate", status: "Live", users: "Live", color: "text-yellow-400" },
    { name: "UniBux", status: "Live", users: "Soon", color: "text-blue-400" },
  ]

  const handleClick = () => {
    onCardClick({
      id: "projects",
      title: "Featured Projects",
      type: "projects",
    })
  }

  return (
    <div
      className="h-full min-h-[200px] md:min-h-[250px] bg-gradient-to-br from-blue-900/20 via-indigo-900/20 to-purple-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-3 md:mr-4">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Projects</h3>
              <p className="text-xs text-gray-400">Recent Work</p>
            </div>
          </div>
          <div className="flex items-center text-xs text-blue-400">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </div>
        </div>

        <div className="flex-1 space-y-3 md:space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-3 md:p-4 hover:bg-white/10 transition-all duration-300 group/item"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-white text-sm">{project.name}</h4>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover/item:text-white transition-colors duration-200" />
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Live"
                      ? "bg-green-500/20 text-green-400"
                      : project.status === "Beta"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.status}
                </span>
                <span className="text-xs text-gray-400">{project.users} users</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center">
            <TrendingUp className="w-3 h-3 mr-1 text-blue-400" />
            Growing fast
          </div>
          <span className="text-blue-400 font-medium">5 Completed</span>
        </div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
    </div>
  )
}
