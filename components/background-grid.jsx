"use client"

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 md:opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
    </div>
  )
}
