'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import LangsComp from '@/components/LangsComp'

import { AnimatePresence, motion } from 'framer-motion'
import { Add as AddIcon, HambergerMenu as MenuIcon } from 'iconsax-react'
import { Button } from '@nextui-org/react'
const Header = () => {
  const [isWebview, sIsWebview] = useState(false)
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const hiddenHeaderAndFooter = searchParams.get('hideHeaderAndFooter')

  const [isHeaderVisible, setHeaderVisible] = useState(true)
  const [transparent, setTransparent] = useState(false)

  const t = useTranslations('Navbar')

  useEffect(() => {
    var is_uiwebview = navigator.userAgent.includes('WebView')
    sIsWebview(is_uiwebview)
  }, [])

  useEffect(() => {
    let prevScrollPos = window.scrollY
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      if (currentScrollPos > prevScrollPos && currentScrollPos > 60) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }
      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    let prevScrollPos = window.scrollY

    setTransparent(!pathName?.split('/')?.[2]?.length && window.scrollY === 0)

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const check = 2
      if (!pathName?.split('/')?.[2]?.length && currentScrollPos < check) {
        setTransparent(true)
      } else {
        setTransparent(false)
      }

      prevScrollPos = currentScrollPos
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathName])

  if (isWebview) {
    return null
  }

  if (hiddenHeaderAndFooter) return null

  return (
    <header
      id='header'
      className={`${
        transparent ? 'bg-transparent' : 'bg-white'
      } header transition fixed left-0 right-0 w-full z-[99999] ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-[100%]'
      }`}
    >
      <div className='flex ct-container-70 px-6 justify-between h-[64px] 3xl:h-[80px] items-center'>
        <Logo />
        <RightNav />
        <Button
          onClick={() =>
            window.open('https://vuatho.com/vi/qrcode-download-app', '_blank')
          }
          className='bg-primaryYellow text-baseBlack h-[40px] xl:h-[44px] 13inch:h-[50px] w-auto text-[2rem] px-[30px] xl:px-[40px] 13inch:px-[50px] font-semibold hidden md:block'
        >
          {t('download')}
        </Button>
      </div>
    </header>
  )
}

const Logo = () => {
  const router = useRouter()
  const locale = useLocale()
  return (
    <button
      onClick={() => {
        router.push(`/${locale}`)
        window.scrollTo({
          top: 0,
        })
      }}
      className='block h-[64px] 3xl:h-[80px]'
    >
      <Image
        src='/logo/textLogo.webp'
        alt='Logo nav'
        width={256}
        height={176}
        quality={100}
        className='h-[50px] 3xl:h-[80px] w-auto object-contain pointer-events-none'
      />
    </button>
  )
}

const RightNav = () => {
  const t = useTranslations('Navbar')

  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggleMenu = () => setToggleMenu(!toggleMenu)

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transiton: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transiton: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  useEffect(() => {
    toggleMenu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [toggleMenu])

  return (
    <>
      <div className='hidden md:flex gap-[20px] 3xl:gap-8 items-center'>
        <div className='flex gap-[20px] 3xl:gap-8 items-center'>
          <LinkList />
        </div>
        <div className='flex gap-2 items-center'>
          <LangsComp />
        </div>
      </div>
      <div className='menu-mobile block md:hidden transition' onClick={handleToggleMenu}>
        {toggleMenu ? (
          <AddIcon size={32} className='text-text cursor-pointer rotate-45 transition' />
        ) : (
          <div className='flex items-center gap-[20px]'>
            <Button
              onClick={() =>
                window.open('https://vuatho.com/vi/qrcode-download-app', '_blank')
              }
              className='bg-primaryYellow text-baseBlack h-[40px] xl:h-[50px] w-auto text-[2rem] px-[30px] md:px-[50px] font-semibold md:hidden'
            >
              {t('download')}
            </Button>
            <MenuIcon size={32} className='text-text cursor-pointer transition' />
          </div>
        )}
      </div>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={menuVariants}
            className='fixed z-10 top-[60px] left-0 right-0 bottom-0 bg-bg h-[calc(100vh-60px)] overflow-auto flex flex-col items-start gap-6 origin-top p-6'
          >
            <LinkList handleToggleMenu={handleToggleMenu} />
            {/* <ThemeSwitcher /> */}
            <LangsComp />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const LinkList = ({ handleToggleMenu }: { handleToggleMenu?: any }) => {
  const pathname = usePathname()
  const t = useTranslations('Navbar')
  const locale = useLocale()

  const navLink = [
    {
      id: 2,
      title: t('become_employee'),
      url: `/${locale}/become-woker`,
    },
    {
      id: 3,
      title: t('find_employee'),
      url: `/${locale}/find-worker`,
    },
  ]

  const menuVariantsLinks = {
    initial: {
      opacity: 0,
      y: '30vh',
      transiton: {
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transiton: {
        duration: 0.7,
      },
    },
  }
  const router = useRouter()
  const handleClick = (url: any) => {
    router.replace(url)
    handleToggleMenu ? handleToggleMenu() : () => {}
  }
  return (
    <>
      {navLink.map((link) => {
        const isActive = pathname.includes(link.url)
        return (
          <div key={link.id} className='w-full whitespace-nowrap'>
            <motion.div
              variants={menuVariantsLinks}
              initial='initial'
              animate='open'
              viewport={{
                once: true,
              }}
              className='text-[2.3rem] xl:text-[2rem]'
            >
              <button
                onClick={() => handleClick(link.url)}
                className={`${
                  isActive ? 'text-[#0B27B6] ' : 'hover:text-[#0B27B6]/60'
                } duration-300 block md:hidden`}
              >
                {link.title}
              </button>
              <Link
                href={link.url}
                className={`md:block hidden ${
                  isActive ? 'text-[#0B27B6]' : 'hover:text-[#0B27B6]/60'
                }`}
              >
                {link.title}
              </Link>
            </motion.div>
          </div>
        )
      })}
    </>
  )
}

export default Header
