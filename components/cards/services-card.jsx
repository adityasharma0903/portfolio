"use client"

import { Palette, Code, Smartphone, Globe } from "lucide-react"

export function ServicesCard({ onCardClick }) {
  const services = [
    { icon: Code, name: "Web Dev", color: "text-blue-400" },
    { icon: Smartphone, name: "Mobile", color: "text-green-400" },
    { icon: Palette, name: "Design", color: "text-purple-400" },
    { icon: Globe, name: "SEO", color: "text-yellow-400" },
  ]

  const handleClick = () => {
    onCardClick({
      id: "services",
      title: "My Services",
      type: "services",
    })
  }

  return (
    <div
      className="h-full min-h-[120px] bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full">
        <h3 className="text-base md:text-lg font-bold text-white mb-4">Services</h3>

        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <service.icon className={`w-5 h-5 md:w-6 md:h-6 ${service.color} mx-auto mb-1`} />
              <span className="text-xs text-gray-400">{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -bottom-5 -left-5 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-xl" />
    </div>
  )
}
