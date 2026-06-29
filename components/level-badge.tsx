import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Criticality, RiskLevel } from "@/lib/repo-data"

const styles: Record<string, string> = {
  low: "border-border bg-muted text-muted-foreground",
  medium: "border-amber-200 bg-amber-50 text-amber-700",
  high: "border-orange-200 bg-orange-50 text-orange-700",
  critical: "border-red-200 bg-red-50 text-red-700",
}

export function RiskBadge({ level }: { level: RiskLevel }) {
  return (
    <Badge variant="outline" className={cn("capitalize", styles[level])}>
      {level} risk
    </Badge>
  )
}

export function CriticalityBadge({ level }: { level: Criticality }) {
  return (
    <Badge variant="outline" className={cn("capitalize", styles[level])}>
      {level}
    </Badge>
  )
}
