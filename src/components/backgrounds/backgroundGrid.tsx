import { Background } from "@/types/types"
import { BackgroundCard } from "./backgroundCard"

interface BackgroundGridProps {
  backgrounds: Background[]
  onSelectBackground: (bg: Background) => void
}

export function BackgroundGrid({
  backgrounds,
  onSelectBackground,
}: BackgroundGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {backgrounds.map((bg) => (
        <BackgroundCard
          key={bg.id}
          background={bg}
          onSelect={onSelectBackground}
        />
      ))}
    </div>
  )
}
