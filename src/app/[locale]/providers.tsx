'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextNProgress color='#405AB7' startPosition={0.3} stopDelayMs={200} height={3} />
      <NextThemesProvider attribute='class' defaultTheme='light'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
