import { Icons } from "@/components/";

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type Pageable = {
  pageNumber: number
  pageSize: number
}
export type Result<T> = {
  content: T[]
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  pageable: Pageable
  sort: {
    empty: boolean
    sorted: boolean
    unsorted: boolean
  }
  first: boolean
  numberOfElements: boolean
  empty: boolean
}
export type SearchFilter = {
  name: string
  value: string
  label: string
}

export interface StatusToBadgeMap {
  [key: string]: "outline" | "default" | "success"
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;


export type Summary = {
  name: string;
  total: number;
};
