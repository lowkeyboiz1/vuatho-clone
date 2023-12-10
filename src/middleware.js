import createMiddleware from 'next-intl/middleware'
import { locales, langMiddleWare } from './constants'

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  // pathnames,
  // Used when no locale matches
  defaultLocale: 'vi',
  localePrefix: 'always',
})

// console.log(locales.splice(''))

export const config = {
  // Match only internationalized pathnames

  matcher: [
    '/',
    `/(en|vi|zh|fr|fr-AF|fil|it|pl|pt-BR|pt-PT|ro|sv|sk|sl|tr|lv|cs|el|ru|ru-UA|uk|bg|ar|ur|ar-BH|bn|zh-CN|zh-TW|ja|kr)/:path*`,
  ],
}
