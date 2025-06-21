"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles, MapPin, Coffee, Code } from "lucide-react"

export function HeroCard({ onCardClick }) {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Full Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Innovator"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleClick = () => {
    onCardClick({
      id: "hero",
      title: "About Me",
      type: "about",
    })
  }

  return (
    <div
      className="relative h-full min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 lg:p-8 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 opacity-60">
        <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-pulse" />
      </div>

      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        {/* Photo Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-3xl overflow-hidden border-4 border-white/20 group-hover:border-white/30 transition-all duration-500">
              <img
                src="/aditya2.jpg?height=200&width=200"
                alt="Aditya Sharma"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            {/* Floating Badge */}
            {/* <div className="absolute -top-3 -left-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl px-3 py-1 text-xs font-bold text-white">
              Available
            </div> */}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-full text-xs md:text-sm font-medium text-purple-300 mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="block text-white">Hey, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Aditya Sharma
            </span>
          </h1>

          <div className="h-12 md:h-16 mb-4 md:mb-6">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
              <span className="text-white font-medium">{roles[currentRole]}</span>
              <span className="animate-pulse text-cyan-400">|</span>
            </p>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed mb-6 md:mb-8">
            I craft exceptional digital experiences using cutting-edge technologies. Passionate about clean code,
            innovative solutions, and bringing ideas to life.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 md:mb-8">
            <div className="flex items-center text-xs md:text-sm text-gray-400">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-cyan-400" />
              Chandigarh, India
            </div>
            {/* <div className="flex items-center text-xs md:text-sm text-gray-400">
              <Coffee className="w-3 h-3 md:w-4 md:h-4 mr-1 text-cyan-400" />
              Coffee Enthusiast
            </div> */}
            <div className="flex items-center text-xs md:text-sm text-gray-400">
              <Code className="w-3 h-3 md:w-4 md:h-4 mr-1 text-cyan-400" />
              1+ Experience
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-2xl font-medium transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 w-4 h-4" />
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-20 -right-20 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  )
}
