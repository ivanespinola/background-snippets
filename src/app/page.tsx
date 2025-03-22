"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RotateCcw } from "lucide-react"
import { BackgroundGrid } from "@/components/backgrounds/backgroundGrid"
import { backgrounds, defaultBackground } from "@/constants/backgrounds"
import { Background } from "@/types/types"
import HeroSection from "@/components/hero-section"

export default function Home() {
  const [activeBackground, setActiveBackground] =
    useState<Background>(defaultBackground)

  const handleReset = () => {
    setActiveBackground(defaultBackground)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative pb-32 ${activeBackground.className}`}
      role="main"
    >
      <HeroSection />
      <div className="max-w-7xl mx-auto relative z-10 px-6 mt-4">
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
