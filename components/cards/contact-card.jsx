"use client"

import { Mail, MessageCircle, Send, Phone } from "lucide-react"

export function ContactCard({ onCardClick }) {
  const handleClick = () => {
    onCardClick({
      id: "contact",
      title: "Get In Touch",
      type: "contact",
    })
  }

  return (
    <div
      className="h-full min-h-[120px] bg-gradient-to-br from-pink-900/20 via-rose-900/20 to-red-900/20 backdrop-blur-xl border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
      onClick={handleClick}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mr-3 md:mr-4">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white">Contact</h3>
              <p className="text-xs text-gray-400">Let's connect</p>
            </div>
          </div>
          <div className="text-xs text-green-400 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
            Available
          </div>
        </div>

        <div className="flex-1 flex items-center justify-around">
          <div className="text-center">
            <MessageCircle className="w-6 h-6 text-pink-400 mx-auto mb-1" />
            <span className="text-xs text-gray-400">Chat</span>
          </div>
          <div className="text-center">
            <Phone className="w-6 h-6 text-pink-400 mx-auto mb-1" />
            <span className="text-xs text-gray-400">Call</span>
          </div>
          <div className="text-center">
            <Send className="w-6 h-6 text-pink-400 mx-auto mb-1" />
            <span className="text-xs text-gray-400">Email</span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-5 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-full blur-xl" />
    </div>
  )
}
