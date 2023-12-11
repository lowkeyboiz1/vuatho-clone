'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { langs } from '@/constants'

import {
  Accordion,
  AccordionItem,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react'
import { Add as AddIcon, Global } from 'iconsax-react'

import { useGetAllQueryParams } from '@/hook/useGetAllQueryParams'

function LangsComp() {
  const t = useTranslations('Navbar')
  const locale = useLocale()

  const router = useRouter()
  const pathName = usePathname()
  const allQueryParams: any = useGetAllQueryParams()

  const [isOpen, setIsOpen] = useState(false)
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

    const arrayUrl = pathName?.split('/')
    const urlReplace = arrayUrl
      .map((item) => (item === arrayUrl[1] ? value.code : item))
      .join('/')

    const queryString = Object.keys(allQueryParams)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(allQueryParams[key])}`,
      )
      .join('&')

    router.replace(urlReplace + (queryString !== null ? `?${queryString}` : ''), {
      scroll: false,
    })
  }

  return (
    <>
      <div className='hidden md:block'>
        <Popover
          placement='bottom-end'
          isOpen={isOpen}
          onOpenChange={(open: any) => setIsOpen(open)}
          className=''
        >
          <PopoverTrigger>
            <button className='h-[44px] cursor-pointer rounded-[44px] bg-[#F8F8F8] p-[10px]'>
              <div className='flex items-center gap-2 text-[#646464]'>
                <Global size={24} className='' />
                <span className='text-[1.8rem] uppercase'>{lang?.code}</span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='min-w-[50vw] divide-y divide-base-gray'>
              <div className='flex items-center justify-between px-[10px] py-4'>
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
                    } flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-6 text-left text-[1.8rem]`}
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
                <p className='w-full text-[1.8rem] text-base-black-1'>{t('language')}</p>
                <div className='flex min-w-fit items-center gap-2 self-center pb-2 text-[1.8rem]'>
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
                  } flex items-center gap-2 whitespace-nowrap rounded-lg px-4 py-6 text-left text-[1.8rem]`}
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
