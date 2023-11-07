'use client'

import Image from 'next/image'

import { CheckIcon1, CheckIcon2 } from '../../../../components/Icons'
import { useLocale, useTranslations } from 'next-intl'

import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const SectionBenefit = () => {
  const t = useTranslations('Benefit')
  const router = useRouter()
  const locale = useLocale()

  const benefit = [
    {
      title: t('customer.title'),
      img: 'benefit_1.webp',
      button: (
        <Button
          onClick={() => router.push(`/${locale}/find-worker`)}
          size='sm'
          className='transition-[all_0.4s_ease-in-out] bg-[length:200%_100%] hover:bg-[100%_0%] bg-gradient-to-r from-[#FCAE10] via-[#FF7E00] to-[#FCAE10] text-white px-16 text-[2.4rem] w-1/2 h-[50px] md:w-[220px] md:h-[40px] 3xl:w-[300px] 3xl:h-[65px]'
          radius='full'
        >
          {t('customer.button')}
        </Button>
      ),
      list: [
        {
          title: t('customer.list.text1'),
          icon: <CheckIcon2 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('customer.list.text2'),
          icon: <CheckIcon2 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('customer.list.text3'),
          icon: <CheckIcon2 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('customer.list.text4'),
          icon: <CheckIcon2 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('customer.list.text5'),
          icon: <CheckIcon2 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
      ],
    },
    {
      title: t('employee.title'),
      img: 'benefit_2.webp',
      button: (
        <Button
          onClick={() => router.push(`/${locale}/become-woker`)}
          size='sm'
          className='transition-[all_0.4s_ease-in-out] bg-[length:200%_100%] hover:bg-[100%_0%] bg-white text-[#405AB7] px-12 text-[2.4rem] w-1/2 h-[50px] md:w-[220px] md:h-[40px] 3xl:w-[300px] 3xl:h-[65px]'
          radius='full'
        >
          {t('employee.button')}
        </Button>
      ),
      list: [
        {
          title: t('employee.list.text1'),
          icon: <CheckIcon1 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('employee.list.text2'),
          icon: <CheckIcon1 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('employee.list.text3'),
          icon: <CheckIcon1 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('employee.list.text4'),
          icon: <CheckIcon1 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('employee.list.text5'),
          icon: <CheckIcon1 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
        {
          title: t('employee.list.text6'),
          icon: <CheckIcon1 className={'h-[16px] w-[16px] md:h-[20px] md:w-[20px]'} />,
        },
      ],
    },
  ]

  return (
    <div className='w-full py-16'>
      <div className='flex flex-col py-16'>
        {benefit.map((item, index) => (
          <div key={item.title} className={`${index % 2 == 0 ? '' : ' bg-gradient-to-bl from-[#798EFB] to-[#182FAA]'} w-full`}>
            <div className={`ct-container-70 py-20 ${index % 2 == 0 ? 'text-black' : 'text-white'}`}>
              <h3 className='block md:hidden text-center text-[4.2rem] md:text-[6rem] font-semibold md:mt-0 '>
                {item.title}
              </h3>
              <div className={`flex items-center w-full justify-between my-20 xl:my-0 flex-col  ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full flex justify-center items-center h-full mt-5 `}>
                  <div className={`w-full `}>
                    <Image
                      src={`/home/${item.img}`}
                      alt={item.img}
                      height={702}
                      width={740}
                      quality={100}
                      className='object-contain'
                    />
                  </div>
                </div>
                <div className={`w-full flex items-center mt-4 md:mt-0`}>
                  <div className='w-full 2xl:w-[600px] flex flex-col gap-10 xl:gap-0'>
                    <p className='hidden md:block text-[3rem] 13inch:text-[5rem] 3xl:text-[5rem] font-semibold'>
                      {item.title}
                    </p>
                    <div className='flex flex-col gap-4 3xl:gap-5 xl:my-6 2xl:my-10'>
                      {item.list.map((item) => (
                        <div key={item.title} className={`flex gap-3 3xl:gap-4`}>
                          <span className=''>{item.icon}</span>
                          <p className='text-[2rem]'>{item.title}</p>
                        </div>
                      ))}
                    </div>
                    <div className='mt-4'>{item.button}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionBenefit
