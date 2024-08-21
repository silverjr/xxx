import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Icons } from "@/components/icons";
import {Link,useLocation} from "react-router-dom"
import { Dispatch, SetStateAction } from "react";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items }: DashboardNavProps) {
   const location = useLocation()
  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              to={item.disabled ? "/" : item.href}
              // onClick={() => {
              //   if (setOpen) setOpen(false);
              // }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-peru hover:text-white",
                  location.pathname === item.href ? "bg-peru" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}