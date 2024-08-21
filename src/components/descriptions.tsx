import { ReactNode } from "react"

import { formatDateTime } from "@/lib/utils"
import { Label } from "./ui/label"


type DescriptionItemProps = {
  label: string
  children: ReactNode
}

type DescriptionsProps = {
  children: ReactNode
}
export function DescriptionItem({ label, children }: DescriptionItemProps) {
  return (
    <div className="flex flex-col items-center  my-4  md:flex-row md:my-0">
      <div className="w-72 text-sm font-medium md:py-2 bg-gray-50 pl-4 border">
        {label}
      </div>
      <div className="py-2 text-sm w-full border px-4">{children}</div>
    </div>
  )
}

export function Descriptions({ children }: DescriptionsProps) {
  return <div className="w-full">{children}</div>
}

interface DescriptionTextProps {
  label: string
  value?: string | ReactNode
}
export function DescriptionText({ label, value }: DescriptionTextProps) {
  if (!value) return
  return (
    <div className="gap-2 my-4">
      <div className="flex items-center">
        <Label className="w-36">{label}</Label>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  )
}
interface DescriptionDateProps {
  label: string
  value?: Date
}
export function DescriptionDate({ label, value }: DescriptionDateProps) {
  if (!value) return
  return (
    <div className="gap-2 my-4">
      <div className="flex items-center">
        <Label className="w-36">{label}</Label>
        <div className="text-sm">
          {value && formatDateTime(new Date(value))}
        </div>
      </div>
    </div>
  )
}
