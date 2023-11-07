import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['vi', 'en'] ;
   
  // The `pathnames` object holds pairs of internal
  // and external paths, separated by locale.
  export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',
    '/blog': '/blog',
    '/about-us': '/about-us'

  
    // Also (optional) catch-all segments are supported
    // '/categories/[...slug]': {
    //   vi: '/categories/[...slug]',
    //   en: '/kategorien/[...slug]'
    // }
  } 
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, pathnames});