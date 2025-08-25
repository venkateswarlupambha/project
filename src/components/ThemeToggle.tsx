
import { useEffect } from "react"

export const ThemeToggle = () => {
  useEffect(() => {
    // Force dark theme on app load
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add("dark")
    window.localStorage.setItem("theme", "dark")
  }, [])

  // Return null to hide the toggle button completely
  return null
}
