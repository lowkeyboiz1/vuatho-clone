'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

import {
  FacebookIcon,
  InstaIcon,
  LinkedinIcon,
  TiktokIcon,
  YoutubeIcon,
} from '@/components/Icons'

import {
  Call as PhoneIcon,
  Sms as MailIcon,
  Location as LocationIcon,
} from 'iconsax-react'
import { AndroidBtn, IosBtn } from '@/components/DownloadApps'

function Footer() {
  const t = useTranslations('Footer')
  const td = useTranslations('Download')
  const locale = useLocale()
  const [isWebview, sIsWebview] = useState(false)

  useEffect(() => {
    var is_uiwebview = navigator.userAgent.includes('WebView')
    sIsWebview(is_uiwebview)
  }, [])
  const listSubFooter = {
    info: [
      { title: t('about_us'), url: `/${locale}/about-us` },
      { title: t('faq'), url: `/${locale}/faq` },
      { title: t('become_worker'), url: `/${locale}/become-woker` },
    ],
    policy: [
      { title: t('guides'), url: `/${locale}/terms-and-condition` },
      { title: t('private_infomation'), url: `/${locale}/privacy-policy` },
      { title: t('contact_us'), url: `/${locale}/contact-us` },
    ],
  }

  const partnerList = [
    { id: 1, url: '/partner/sieuthimaylanh.png' },
    { id: 2, url: '/partner/dienmaygiagoc.png' },
    { id: 3, url: '/partner/maylanhmitsu.png' },
    { id: 4, url: '/partner/vuamaylanh.png' },
  ]

  const socialNetworkList = [
    {
      id: 'Facebook',
      icon: <FacebookIcon size={20} />,
      link: 'https://www.facebook.com/vuathovietnam',
    },
    // {
    //   id: 'Tiktok',
    //   icon: <TiktokIcon size={20} />,
    //   link: '	https://www.tiktok.com/@vuatho.com',
    // },
    {
      id: 'Youtube',
      icon: <YoutubeIcon size={24} />,
      link: 'https://www.youtube.com/@Vuatho.official/',
    },
    {
      id: 'Instagram',
      icon: <InstaIcon size={24} />,
      link: 'https://www.instagram.com/vuatho.official/',
    },
    {
      id: 'Linkedin',
      icon: <LinkedinIcon size={20} />,
      link: 'https://www.linkedin.com/company/vuatho-vn/',
    },
  ]

  if (isWebview) {
    return null
  }

  return (
    <footer className='bg-[#fff]/20 divide-y-2 divide-base-gray'>
      <div className='ct-container-70 space-y-10 pt-10 pb-20'>
        <div className='flex justify-between items-center'>
          <Image
            src='/logo/textLogo.webp'
            alt='Logo footer'
            width={256}
            height={176}
            quality={100}
            className='h-[60px] 3xl:h-[80px] w-auto object-contain pointer-events-none'
          />
          <div className='flex gap-4 items-center'>
            {socialNetworkList.map((e) => (
              <Link
                key={e.id}
                href={e.link}
                target='blank'
                title={e.id}
                className='h-20 aspect-square w-fit bg-primary-blue-2 flex-center rounded-full'
              >
                {e.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-8 md:gap-6 gap-10 '>
          <div className='xl:col-span-3 md:col-span-4 col-span-8 space-y-4'>
            <h5 className='text-[2.2rem] font-semibold'>Liên hệ</h5>
            <div className='space-y-1.5'>
              <p className='flex gap-4 items-center'>
                <PhoneIcon className='text-primary-blue' variant='Bold' />
                <span className='text-[2rem] font-light'>
                  <span className='text-gray-500'>(+84)</span> 3878 6688
                </span>
              </p>
              <p className='flex gap-4 items-center'>
                <MailIcon className='text-primary-blue' variant='Bold' />
                <span className='text-[2rem] font-light'>info@vuatho.com</span>
              </p>
              <p className='flex gap-4 items-center'>
                <LocationIcon className='text-primary-blue' variant='Bold' />
                <span className='text-[2rem] font-light'>
                  {t('address')}
                  <br />
                  {t('location')}
                </span>
              </p>
              <p className='text-[2rem] font-light'>
                <span className='font-semibold'>MST: </span>
                <span className=''>0318063280</span>
              </p>
            </div>
          </div>
          <div className='md:col-span-2 col-span-4 space-y-4'>
            <h5 className='text-[2rem] font-semibold'>{t('about_vuatho')}</h5>
            <div className='flex flex-col gap-2'>
              {listSubFooter.info.map((i) => (
                <Link href={i.url} key={i.title} title={i.title}>
                  <p className='text-[2rem] font-light hover:text-primary-blue'>
                    {i.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className='md:col-span-2 col-span-4 space-y-4'>
            <h5 className='text-[2rem] font-semibold'>{t('contact_with_vuatho')}</h5>
            <div className='flex flex-col gap-2'>
              {listSubFooter.policy.map((i) => (
                <Link href={i.url} key={i.title} title={i.title}>
                  <p className='text-[2rem] font-light hover:text-primary-blue'>
                    {i.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className='xl:col-span-1 md:col-span-3 col-span-8 space-y-4 w-full md:w-auto mt-10 md:mt-0'>
            <h5 className='text-[2rem] font-semibold whitespace-nowrap'>
              {td('download')}
            </h5>
            <div className='gap-2 flex md:flex-col flex-row'>
              <AndroidBtn />
              <IosBtn />
            </div>
          </div>
          <div className='xl:col-span-8 md:col-span-5 col-span-8 flex xl:flex-row flex-col xl:justify-between xl:items-center xl:mt-20 xl:gap-0 gap-4'>
            <h5 className='text-[2rem] font-semibold min-w-fit text-left'>
              {t('our_partner')}
            </h5>
            <div className='xl:flex grid grid-cols-2 xl:justify-end items-center w-full xl:gap-20 gap-10'>
              {partnerList.map((item) => (
                <Image
                  key={`partner-${item.id}`}
                  alt={`partner-${item.id}`}
                  width={194}
                  height={64}
                  src={item.url}
                  className='xl:h-16 h-20 w-auto object-contain pointer-events-none'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SubFooter />
    </footer>
  )
}

const SubFooter = () => {
  return (
    <div className='ct-container-70 md:flex grid grid-cols-2 justify-between items-center text-[1.4rem] flex-col md:flex-row gap-[10px] md:gap-2 py-10'>
      <div>
        <h1 className='text-slate-500'>
          Đang gửi thông báo đến <br /> <span className='uppercase'>bộ công thương</span>
        </h1>
      </div>
      {/* <Image
        alt='bo cong thuong'
        src='/daThongBao1.png'
        width={188}
        height={71}
        className='md:h-auto h-32 w-auto object-contain'
      /> */}
      <p className='text-[1.8rem] text-baseBlack whitespace-nowrap'>
        Công ty TNHH CN Vua Thợ
      </p>
      <p className='text-[1.8rem] text-baseBlack col-span-2 md:text-left text-center'>
        © 2023. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
