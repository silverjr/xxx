import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface PageHeaderProps {
  left: ReactNode
  title: string
  linkTo?: string
  subtitle?: ReactNode
  children: ReactNode
  actions?: ReactNode
}
export default function PageDetail({
  left,
  title,
  linkTo,
  subtitle,
  children,
  actions,
}: PageHeaderProps) {
  return (
    <div className="">
      <div className="flex px-4 py-4  w-full justify-between">
        <div className="flex space-x-2 items-center">
          {left}
          <div>
            {linkTo ? (
              <Link to={linkTo} className="text-sm font-bold">
                {title}
              </Link>
            ) : (
              <>{title}</>
            )}

            <div className="text-sm">{subtitle}</div>
          </div>
        </div>
        <div>
          <div className="flex space-x-1 items-center">{actions}</div>
        </div>
      </div>
      <div className="border-b" />
      <div className="px-2 mt-2">{children}</div>
    </div>
  )
}
