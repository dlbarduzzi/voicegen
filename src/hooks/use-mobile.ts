import { useState, useEffect } from "react"

// mobileBreakpoint default = 768
export function useIsMobile(mobileBreakpoint = 1024) {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    return window.innerWidth < mobileBreakpoint
  })

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`)

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }

    mql.addEventListener("change", onChange)

    return () => mql.removeEventListener("change", onChange)
  }, [mobileBreakpoint])

  return isMobile
}
