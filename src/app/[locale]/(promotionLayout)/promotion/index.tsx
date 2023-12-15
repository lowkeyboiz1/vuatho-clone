'use client'

import { useEffect, useState } from 'react'
import { HeaderWrapper, Logo } from '../../(mainLayout)/(layout)/header'
import { useLocale, useTranslations } from 'next-intl'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Select,
  SelectItem,
} from '@nextui-org/react'
import LangsComp from '@/components/LangsComp'
import { Call } from 'iconsax-react'
import { animals } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'
import ImageFallback from '@/components/ImageFallback'

function PromotionPage() {
  return (
    <>
      {' '}
      <div className='ct-container-70 pt-[70px] 3xl:pt-[80px]'>
        {/* start section hero */}
        <div className='grid grid-cols-5 py-[6%]'>
          <div className='col-span-2 flex flex-col gap-2'>
            <h1 className='text-4xl font-semibold text-base-black-1'>
              Dãy số may mắn <br /> Trúng xe máy điện
            </h1>
            <p className=' font-light text-base-black-1'>
              Thợ sẽ có một dãy số may mắn và không giới hạn nhiều dãy số sở hữu được tham
              gia mở thưởng định kì vào mỗi tháng
            </p>
            <div className='mt-8 flex items-center gap-2'>
              <Button className='bg-primary-blue px-6 py-3 text-white' radius='full'>
                Tham gia ngay
              </Button>
              <p className='text-sm text-[#969696]'>856 Người đã tham gia</p>
            </div>
          </div>
          <div className='col-span-3'>
            <div className=''>
              <ImageFallback
                src={'/promotion/hero1.png'}
                alt=''
                width={773}
                height={491}
                className='object-contain'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-center text-4xl font-bold text-primary-blue'>
            Thể lệ chương trình
          </h2>
          <div className='grid grid-cols-4 gap-5'>
            {Array(4)
              .fill(null)
              .map((_, index: number) => (
                <div key={index} className='rounded-[20px] border-2 border-[#FCB713] p-5'>
                  <div className='rounded-[10px] bg-white p-5 shadow-[0px_10px_20px_0px_#E2B41333]'>
                    <div className='flex flex-col gap-2'>
                      <h4 className='text-base font-bold text-primary-blue'>
                        Thời gian khuyến mại:
                      </h4>
                      <p className='text-base font-light text-base-black-1'>
                        Từ ngày 01/12/2023 đến khi có thông báo mới từ Vua Thợ.
                      </p>
                    </div>
                    <div className='flex w-full justify-end'>
                      <div className=''>
                        <ImageFallback
                          src={'/'}
                          width={106}
                          height={107}
                          alt='promotion-image'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const PromotionsHeader = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <RightHeader />
    </HeaderWrapper>
  )
}

const RightHeader = () => {
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
  const promotions = [
    { id: 1, title: 'Dãy số may mắn trúng xe máy điện' },
    { id: 2, title: 'Nhập hội Vua Thợ cơ hội rinh Wave RSX' },
  ]

  return (
    <>
      <div className='hidden w-full items-center justify-end gap-5 lg:flex 3xl:gap-8'>
        <div className='flex items-center gap-5 text-base 3xl:gap-8'>
          <div className='flex h-11 items-center'>
            <Select
              radius='full'
              className='w-full'
              placeholder='Chương trình khuyến mãi'
              classNames={{
                base: 'min-w-[400px]',
                description: 'khang1',
                errorMessage: 'khang2',
                helperWrapper: 'khang3',
                innerWrapper: 'khang4',
                label: 'khang5',
                listbox: 'khang6',
                listboxWrapper: 'khang7',
                mainWrapper: 'khang8',
                popoverContent: 'khang9 max-w-max p-0',
                selectorIcon: 'khang123',
                spinner: 'khang11',
                trigger: 'bg-[#FFF9ED] h-12 min-h-12 min-w-[400px]',
                value: 'khang222 text-base font-semibold',
              }}
            >
              {promotions.map((promotion) => (
                <SelectItem
                  classNames={{
                    base: 'zxc1 p-5 text-base text-base-black-1 font-light',
                    description: 'zxc2',
                    selectedIcon: 'zxc3',
                    shortcut: 'zxc5',
                    title: 'zxc351',
                    wrapper: 'zxc5132',
                  }}
                  key={promotion.title}
                  value={promotion.title}
                >
                  {promotion.title}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Button
            onClick={() =>
              window.open('https://vuatho.com/vi/qrcode-download-app', '_blank')
            }
            className='hidden h-12 w-auto rounded-full bg-primaryYellow px-6 text-base font-semibold text-base-black-1 lg:block'
          >
            Tải ứng dụng
          </Button>
          <a href='tel:+0938786688'>
            <Button
              className='aspect-square h-12 w-12 flex-shrink-0 bg-primaryYellow'
              isIconOnly
              radius='full'
            >
              <Call variant='Bold' />
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default PromotionPage
