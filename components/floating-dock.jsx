"use client"

import { Home, User, Code, Briefcase, Mail, Github, Linkedin, Twitter } from "lucide-react"

export function FloatingDock({ onCardClick }) {
  const dockItems = [
    {
      icon: Home,
      label: "Home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: User,
      label: "About",
      action: () => onCardClick({ id: "about", title: "About Me", type: "about" }),
    },
    {
      icon: Code,
      label: "Skills",
      action: () => onCardClick({ id: "skills", title: "Technical Skills", type: "skills" }),
    },
    {
      icon: Briefcase,
      label: "Projects",
      action: () => onCardClick({ id: "projects", title: "Featured Projects", type: "projects" }),
    },
    {
      icon: Mail,
      label: "Contact",
      action: () => onCardClick({ id: "contact", title: "Get In Touch", type: "contact" }),
    },
    {
      icon: Github,
      label: "GitHub",
      action: () => window.open("https://github.com/adityasharma0903", "_blank"),
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/aditya-sharma-b54a70325/", "_blank"),
    },
    {
      icon: Twitter,
      label: "Twitter",
      action: () => window.open("https://x.com/AdityaShar79297", "_blank"),
    },
  ]

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
        <div className="flex items-center space-x-1 md:space-x-2">
          {dockItems.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative"
            >
              <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">{item.label}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
