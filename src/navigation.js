import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation'

export const locales = ['vi', 'en']
export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/about-us': '/about-us',
}

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames })
