import { ReactNode } from "react"

interface SectionProps {
  title: string
  children: ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <>
      <h3 className="mt-5 scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight transition-colors first:mt-0">
        {title}
      </h3>
      {children}
    </>
  )
}
