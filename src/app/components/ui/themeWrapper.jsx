'use client'

import { Theme } from '@radix-ui/themes'
import { useTheme } from 'next-themes'

export default function ThemeWrapper({ children }) {
  const { resolvedTheme } = useTheme()
  return (
    <Theme
      accentColor="violet"
      grayColor="gray"
      panelBackground="solid"
      scaling="110%"
      radius="small"
      appearance={resolvedTheme === 'light' ? 'light' : 'dark'}
    >
      {children}
    </Theme>
  )
}
