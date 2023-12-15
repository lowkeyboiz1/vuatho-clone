import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Lexend } from 'next/font/google'
import { redirect } from 'next/navigation'
import Script from 'next/script'
import { ToastContainer } from 'react-toastify'

import { locales } from '@/constants'

import Footer from './(layout)/footer'
import Header from './(layout)/header'
import { Providers } from '../providers'

import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Trang chủ | Vua Thợ',
    template: '%s | Vua Thợ',
  },
  description: 'Ứng dụng số 1 Việt Nam',
}

export default async function RootLayout({ children, params }: any) {
  const { locale } = params

  const isValidLocale = locales.some((cur) => cur === locale)

  if (!isValidLocale) {
    return redirect(`/vi/${locale}`)
  }

  let messages

  // try {
  //   messages = (await import(`../../../messages/${locale}.json`)).default
  // } catch (error) {
  //   console.log(error)
  // }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
