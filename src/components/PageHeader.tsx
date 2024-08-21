import React from "react"
import { ReactNode } from "react"

interface PageProps {
  title: string
  subTitle?: string
  center?: ReactNode
  children: ReactNode
  actions?: ReactNode
}
function Page({ title, subTitle, center, children, actions }: PageProps) {
  return (
    // <div className="hidden h-full flex-1 flex-col space-y-3 py-3 px-8 md:flex">
    <div className="h-full flex-1 flex-col space-y-3 py-3  flex">
      <div className="flex items-center justify-between space-y-2">
        <div className="px-4">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground">{subTitle}</p>
        </div>
        {center}
        <div className="flex items-center space-x-2 px-4">{actions}</div>
      </div>
      <div className="border-t" />
      <div className="py-4 px-2">{children}</div>
    </div>
  )
}
export default Page
