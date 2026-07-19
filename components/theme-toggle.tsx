"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-9 transition-colors"
      aria-label="Toggle theme"
    >
      <span
        className={
          mounted
            ? "sr-only"
            : "absolute inset-0 flex items-center justify-center text-muted-foreground"
        }
      >
        {mounted ? "Toggle theme" : "◐"}
      </span>
      <Sun
        className="h-4 w-4 transition-all duration-300 ease-out dark:-rotate-90 dark:scale-0 dark:opacity-0"
        aria-hidden={!mounted}
      />
      <Moon
        className="absolute h-4 w-4 rotate-90 scale-0 opacity-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100 dark:opacity-100"
        aria-hidden={!mounted}
      />
    </Button>
  )
}
