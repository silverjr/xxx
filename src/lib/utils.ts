import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as dateFns from "date-fns"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const formatDate = (date: Date) => {
  return dateFns.format(new Date(date), "dd MMMM yyyy")
}
export const formatDateTime = (date: Date) => {
  return dateFns.format(new Date(date), "dd MMMM yyyy HH:mm:ss")
}

export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en", {
    style: "currency",

    currency: currency,
  }).format(amount)
}