import createMiddleware from 'next-intl/middleware'
import { locales } from './constants'

export default createMiddleware({
  locales: locales,
  localePrefix: 'always',
  localeDetection: true,
})

export const config = {
  // Match only internationalized pathnames

  matcher: [
    '/',
    `/(en|vi|zh|fr|fr-AF|fil|it|pl|pt-BR|pt-PT|ro|sv|sk|sl|tr|lv|cs|el|ru|ru-UA|uk|bg|ar|ur|ar-BH|bn|zh-CN|zh-TW|ja|kr)/:path*`,
  ],
}
