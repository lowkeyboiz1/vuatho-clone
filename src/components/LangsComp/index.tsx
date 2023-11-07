'use client'

import { useEffect, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'

import { EngIcon, VietnamIcon } from '../Icons'
import { langs } from '@/constants'

import { Button, Select, SelectItem } from '@nextui-org/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Accordion,
  AccordionItem,
} from '@nextui-org/react'

import { Add as AddIcon, ArrowDown2 as DownIcon } from 'iconsax-react'

function LangsComp() {
  const t = useTranslations('Navbar')

  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathName = usePathname()
  const locale = useLocale()

  const [lang, setLang] = useState<any>(langs.find((e) => e.code == locale))
  const [langData, setLangData] = useState<any>(langs)

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
    // <Select
    //   size='sm'
    //   items={langs}
    //   className='w-[120px]'
    //   selectionMode='single'
    //   variant='bordered'
    //   disallowEmptySelection
    //   isOpen={isOpen}
    //   onClick={() => setIsOpen(!isOpen)}
    //   defaultSelectedKeys={[locale]}
    //   renderValue={(items) => {
    //     return items.map((item) => (
    //       <div key={item.key} className='flex items-center gap-2'>
    //         <div className='flex-center'>
    //           <span className=''>{langs.find((e) => e.id === item.data?.id)?.icon}</span>
    //           <span className='text-text text-[2.2rem] md:text-[1.6rem] ml-2 md:ml-4'>
    //             {item.data?.title}
    //           </span>
    //         </div>
    //       </div>
    //     ))
    //   }}
    //   classNames={{
    //     innerWrapper: 'pt-0',
    //     mainWrapper: 'h-full items-center',
    //     trigger:
    //       'data-[hover=true]:border-[#e4e4e7] data-[open=true]:border-[#e4e4e7] data-[focus=true]:border-[#e4e4e7] border-[#e4e4e7] border-[1px] h-[40px] px-6',
    //   }}
    // >
    //   {(lang) => (
    //     <SelectItem
    //       classNames={{
    //         wrapper: 'rounded-none',
    //         base: 'px-4',
    //         description: 'px-2',
    //         selectedIcon: 'w-[12px] h-[12px]',
    //         shortcut: 'px-4',
    //         title: 'ml-2 text-[2.2rem] md:text-[1.6rem] h-[20px] flex items-center',
    //       }}
    //       key={lang.locale}
    //       startContent={lang.icon}
    //       onClick={() => {
    //         console.log(pathName?.split('/'))
    //         setIsOpen(!isOpen)
    //         router.replace(`/${lang.locale}/${pathName?.split('/')?.[2] || ''}`, {
    //           scroll: false,
    //         })
    //       }}
    //       className='text-[2.2rem] md:text-[1.6rem]'
    //     >
    //       {lang.title}
    //     </SelectItem>
    //   )}
    // </Select>
    <>
      <div className='md:block hidden'>
        <Popover
          placement='bottom-end'
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
          className='shadow-[0_0_10px_-6px_black]'
        >
          <PopoverTrigger>
            <Button className='text-[1.5rem] bg-base-gray h-20 flex justify-between gap-3'>
              <div className='flex items-center gap-2 w-48 truncate'>
                <span className='min-w-fit'>{lang.symbol}</span>
                {lang.label}
              </div>
              <DownIcon
                size={15}
                className={`${isOpen ? 'rotate-180' : ''} transition`}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className='divide-y divide-base-gray min-w-[50vw]'>
              <div className='flex justify-between items-center py-2'>
                <h5 className='text-[2rem] text-primary-blue font-bold'>
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
                    } flex items-center gap-2 text-[1.6rem] px-4 py-6 rounded-lg`}
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
      <div className='md:hidden block w-full mb:pb-0 pb-80'>
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
              <div className='flex justify-between items-center -ml-2 '>
                <p className='text-[2.3rem] w-full'>{t('language')}</p>
                <div className='flex items-center gap-2 text-[2rem] pb-2 min-w-fit self-center'>
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
                  } flex items-center gap-2 text-[1.6rem] px-4 py-6 rounded-lg`}
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
