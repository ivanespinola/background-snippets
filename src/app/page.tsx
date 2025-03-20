"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RotateCcw } from "lucide-react"
import { BackgroundGrid } from "@/components/backgrounds/backgroundGrid"
import { backgrounds, defaultBackground } from "@/constants/backgrounds"
import { Background } from "@/types/types"
import Header from "@/components/header"

export default function Home() {
  const [activeBackground, setActiveBackground] =
    useState<Background>(defaultBackground)

  const handleReset = () => {
    setActiveBackground(defaultBackground)
  }

  return (
    <div
      className={`min-h-screen p-8 transition-all duration-500 relative ${activeBackground.className}`}
      role="main"
    >
      <Header />
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="mb-12 text-center"
          role="region"
          aria-label="Main content"
        >
          <div
            className="backdrop-blur-lg bg-black/40 p-6 rounded-xl shadow-lg border border-white/30 inline-block"
            role="article"
          >
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
              aria-label="Project title"
            >
              Background Snippets
            </h1>
            <p
              className="text-lg font-bold text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] mt-4 max-w-2xl mx-auto"
              aria-describedby="project-description"
            >
              Ready to use, simply copy and paste into your next project. All
              snippets crafted with Tailwind CSS
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <Button
            onClick={handleReset}
            variant="secondary"
            className="bg-white/90 hover:bg-white/80 cursor-pointer"
            aria-label="Reset background to default"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset background
          </Button>
        </div>
        <BackgroundGrid
          backgrounds={backgrounds}
          onSelectBackground={setActiveBackground}
        />
      </div>
    </div>
  )
}
