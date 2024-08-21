import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";
export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboards",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Operations",
    href: "/operations",
    icon: "ellipsis",
    label: "Label2",
  },
  {
    title: "Setup",
    href: "/addendums",
    icon: "pizza",
    label: "Label3",
  },
  {
    title: "Reports",
    href: "/evaluations-lines",
    icon: "page",
    label: "Label4",
  },

  {
    title: "Help",
    href: "/dashboard/user",
    icon: "help",
    label: "Help",
  },
  {
    title: "Logout",
    href: "/",
    icon: "login",
    label: "Logout",
  },
];
