import { StatusToBadgeMap } from "@/types"
import { Badge } from "./ui/badge"

const statusToColorMap: StatusToBadgeMap = {
  DRAFT: "outline",
  PENDING_REVIEW: "default",
  PENDING_APPROVAL: "default",
  REGISTERED: "success",
}

interface StatusBadgeProps {
  code: string
  name: string
  className?: string
}
export function StatusBadge({ code, name, className }: StatusBadgeProps) {
  return (
    <Badge className={className} variant={statusToColorMap?.[code]}>
      {name}
    </Badge>
  )
}
