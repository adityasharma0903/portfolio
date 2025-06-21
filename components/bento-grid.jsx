"use client"

import { HeroCard } from "./cards/hero-card"
import { SkillsCard } from "./cards/skills-card"
import { ProjectsCard } from "./cards/projects-card"
import { ExperienceCard } from "./cards/experience-card"
import { ContactCard } from "./cards/contact-card"
import { MusicCard } from "./cards/music-card"
import { StatsCard } from "./cards/stats-card"
import { QuoteCard } from "./cards/quote-card"
import { ServicesCard } from "./cards/services-card"

export function BentoGrid({ isLoaded, onCardClick }) {
  return (
    <div className="min-h-screen p-3 md:p-6 lg:p-8">
      <div
        className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 md:gap-4 lg:gap-6 max-w-7xl mx-auto transition-all duration-1000 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Hero Card with Photo - Large */}
        <div className="col-span-4 md:col-span-8 lg:col-span-7 row-span-2 md:row-span-3">
          <HeroCard onCardClick={onCardClick} />
        </div>

        {/* Stats Card */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2 row-span-1">
          <StatsCard onCardClick={onCardClick} />
        </div>

        {/* Music Card */}
        <div className="col-span-2 md:col-span-4 lg:col-span-3 row-span-1">
          <MusicCard onCardClick={onCardClick} />
        </div>

        {/* Skills Card */}
        <div className="col-span-4 md:col-span-4 lg:col-span-3 row-span-2">
          <SkillsCard onCardClick={onCardClick} />
        </div>

        {/* Projects Card */}
        <div className="col-span-4 md:col-span-4 lg:col-span-4 row-span-2">
          <ProjectsCard onCardClick={onCardClick} />
        </div>

        {/* Services Card */}
        <div className="col-span-2 md:col-span-4 lg:col-span-2 row-span-1">
          <ServicesCard onCardClick={onCardClick} />
        </div>

        {/* Experience Card */}
        <div className="col-span-4 md:col-span-4 lg:col-span-5 row-span-1">
          <ExperienceCard onCardClick={onCardClick} />
        </div>

        {/* Quote Card */}
        <div className="col-span-4 md:col-span-4 lg:col-span-4 row-span-1">
          <QuoteCard onCardClick={onCardClick} />
        </div>

        {/* Contact Card */}
        <div className="col-span-4 md:col-span-4 lg:col-span-3 row-span-1">
          <ContactCard onCardClick={onCardClick} />
        </div>
      </div>
    </div>
  )
}
