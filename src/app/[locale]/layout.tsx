import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import NextTopLoader from 'nextjs-toploader'

import { Providers } from './providers'
import Header from './(layout)/header'
import Footer from './(layout)/footer'
import './globals.css'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: {
    default: 'Trang chủ | Vua Thợ',
    template: '%s | Vua Thợ',
  },
  description: 'Ứng dụng số 1 Việt Nam',
}

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({ children, params }: any) {
  
  const { locale } = params

  const locales = ['en', 'vi']

  const isValidLocale = locales.some((cur) => cur === locale)

  if (!isValidLocale) {
    return redirect(`/vi/${locale}`)
  }

  let messages;

  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    console.log(error)
  }

  return (
    <html lang={locale} className={lexend.className}>
      <body className='!overflow-x-hidden'>
        <NextTopLoader height={3} zIndex={9999999} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
