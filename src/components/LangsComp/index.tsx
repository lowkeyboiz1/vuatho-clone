'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

import { langs } from '@/constants'

import { Button } from '@nextui-org/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Accordion,
  AccordionItem,
} from '@nextui-org/react'

import { Add as AddIcon, Global } from 'iconsax-react'

function LangsComp() {
  const t = useTranslations('Navbar')

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathName = usePathname()
  const locale = useLocale()

  const [lang, setLang] = useState<any>(langs.find((e) => e.code == locale))

  const handleScroll = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const _HandleChangeLang = (value?: any) => {
    setLang(value)
    setIsOpen(false)
    router.replace(`/${value.code}/${pathName?.split('/')?.[2] || ''}`, {
      scroll: false,
    })
  }

  return (
    <>
      <div className='hidden md:block'>
        <Popover
          placement='bottom-end'
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
          className='px-8 shadow-[0_0_10px_-6px_black]'
        >
          <PopoverTrigger>
            <Button className='h-[44px] cursor-pointer rounded-[44px] bg-[#F8F8F8] p-[10px]'>
              <div className='flex items-center gap-2 text-[#646464]'>
                <Global size={24} className='' />
                <span className='text-[1.6rem] uppercase'>{lang.code}</span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='min-w-[50vw] divide-y divide-base-gray'>
              <div className='flex items-center justify-between py-2'>
                <h5 className='text-[2.2rem] font-bold text-primary-blue'>
                  {t('language')}
                </h5>
                <Button
                  variant='light'
                  isIconOnly
                  className='rounded-full'
                  onClick={() => setIsOpen(false)}
                >
                  <AddIcon className='rotate-45' />
                </Button>
              </div>
              <div className='grid grid-cols-4 gap-1 py-2'>
                {langs.map((e) => (
                  <button
                    onClick={() => _HandleChangeLang(e)}
                    disabled={!e.active}
                    key={e.code}
                    className={`${
                      lang === e
                        ? 'bg-primary-blue-2 text-primary-blue'
                        : 'hover:bg-base-gray disabled:hover:bg-transparent'
                    } flex items-center gap-2 rounded-lg px-4 py-6 text-[1.6rem]`}
                  >
                    <span>{e.symbol}</span>
                    <span className={`${e.active ? '' : 'text-black/30'}`}>
                      {e.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className='mb:pb-0 block w-full pb-80 md:hidden'>
        <Accordion
          className='w-full'
          itemClasses={{
            trigger: 'p-0',
            indicator: 'text-[2rem]',
          }}
        >
          <AccordionItem
            key='lang'
            aria-label='lang'
            title={
              <div className='-ml-2 flex items-center justify-between '>
                <p className='w-full text-[2.3rem]'>{t('language')}</p>
                <div className='flex min-w-fit items-center gap-2 self-center pb-2 text-[2rem]'>
                  <span className='min-w-fit'>{lang.symbol}</span>
                  {lang.label}
                </div>
              </div>
            }
          >
            <div className='grid grid-cols-2 gap-1 py-2'>
              {langs.map((e) => (
                <button
                  onClick={() => _HandleChangeLang(e)}
                  disabled={!e.active}
                  key={e.code}
                  className={`${
                    lang === e
                      ? 'bg-primary-blue-2 text-primary-blue'
                      : 'hover:bg-base-gray disabled:hover:bg-transparent'
                  } flex items-center gap-2 rounded-lg px-4 py-6 text-[1.6rem]`}
                >
                  <span>{e.symbol}</span>
                  <span className={`${e.active ? '' : 'text-black/30'}`}>{e.label}</span>
                </button>
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default LangsComp
