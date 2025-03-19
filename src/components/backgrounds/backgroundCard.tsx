import { Button } from "@/components/ui/button"
import { Check, Copy, Eye } from "lucide-react"
import { Background } from "@/types/types"
import { toast } from "sonner"
import { useState } from "react"

interface BackgroundCardProps {
  background: Background
  onSelect: (bg: Background) => void
}

export function BackgroundCard({ background, onSelect }: BackgroundCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(background.className)
    setCopied(true)
    toast.success("Copied to clipboard")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`relative overflow-hidden rounded-lg border-2 border-gray-200 transition-all ${background.className}`}
    >
      <div className="relative z-10 p-2 min-h-[180px] flex flex-col">
        <div className="mt-auto flex justify-between items-center gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/90 hover:bg-white/80 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              handleCopy()
            }}
          >
            {copied ? (
              <Check className="h-4 w-4 mr-2" />
            ) : (
              <Copy className="h-4 w-4 mr-2" />
            )}
            copy
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-white/90 hover:bg-white/80 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              onSelect(background)
            }}
          >
            <Eye className="h-4 w-4 mr-2" />
            preview
          </Button>
        </div>
      </div>
    </div>
  )
}
