'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='light'>
        <ProgressBar
          height='4px'
          color='#3748A0'
          options={{ showSpinner: true }}
          shallowRouting
        />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
