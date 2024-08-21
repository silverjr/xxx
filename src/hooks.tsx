import { RefObject, useEffect, useRef } from "react"

export const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>()
    useEffect(() => {
      const handleClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          callback()
        }
      }
  
      document.addEventListener("click", handleClick, true)
  
      return () => {
        document.removeEventListener("click", handleClick, true)
      }
    }, [ref])
    return ref as RefObject<HTMLDivElement>
  }