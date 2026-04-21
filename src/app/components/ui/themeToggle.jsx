'use client'

import { useTheme } from 'next-themes'
import { IconButton } from '@radix-ui/themes'
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <IconButton
      variant="ghost"
      size="2"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  )
}
