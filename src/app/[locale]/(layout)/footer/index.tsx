import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

import { InstaIcon } from '@/components/Icons'

import { Facebook, Youtube } from 'iconsax-react'
import { AndroidBtn, IosBtn } from '@/components/DownloadApps'

function Footer() {
  const t = useTranslations('Footer')
  const td = useTranslations('Download')
  const locale = useLocale()

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

  const listLogo = [
    { id: 1, url: 'logo-stml1.png' },
    { id: 2, url: 'logo-dmgg1.png' },
    { id: 3, url: 'logo-nt571.png' },
    { id: 4, url: 'vuamaylanh1.png' },
  ]

  return (
    <footer className='bg-[#F4F4F4] py-10'>
      <div className='bg-[#F4F4F4]'>
        <div className='ct-container-70 overflow-hidden flex justify-between items-start py-6 2xl:py-12'>
          <div className='w-full'>
            <Image
              src='/logo/textLogo.webp'
              alt='Logo footer'
              width={256}
              height={176}
              quality={100}
              className='h-[60px] xl:h-[46px] 3xl:h-[80px] w-auto object-contain'
            />
            <div className='flex flex-col md:flex-row items-start justify-between w-full mt-6 gap-[20px]'>
              <div className='space-y-7'>
                <h2 className='text-[2.4rem] font-semibold'>{t('company')}</h2>
                <div className='space-y-2'>
                  <h6 className='text-[1.6rem]'>
                    Hotline: <span className='text-[2rem]'>38 786 688</span>
                  </h6>
                  <h6 className='text-[1.7rem]'>Email: info@vuatho.com</h6>
                  <h6 className='text-[1.7rem]'>
                    {t('address')}
                    <br />
                    {t('location')}
                  </h6>
                </div>
              </div>
              <div className='space-y-4'>
                <h4 className='text-[2rem] pb-2 font-semibold'>{t('about_vuatho')}</h4>
                <div className='flex flex-col gap-2'>
                  {listSubFooter.info.map((i) => (
                    <Link href={i.url} key={i.title}>
                      <p className='text-[1.8rem] font-normal hover:text-primary-blue'>
                        {i.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='space-y-4'>
                <h4 className='text-[2rem] font-semibold'>{t('contact_with_vuatho')}</h4>
                <div className='flex flex-col gap-2'>
                  {listSubFooter.policy.map((i) => (
                    <Link href={i.url} key={i.title}>
                      <p className='text-[1.8rem] font-normal hover:text-primary-blue'>
                        {i.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
              <div className='space-y-4 w-full md:w-auto mt-10 md:mt-0'>
                <h4 className='text-[2rem] pb-2 font-semibold'>{td('download')}</h4>
                <div className='gap-2 flex md:flex-col flex-row'>
                  <AndroidBtn />
                  <IosBtn />
                </div>
              </div>
            </div>

            <div className='mt-40 w-full'>
              <span className='block xl:hidden text-[3rem] font-semibold mb-10 xl:mb-5 text-center'>
                {t('our_partner')}
              </span>
              <div className='flex items-center justify-between gap-10 w-full'>
                <span className='text-[2.4rem] hidden xl:flex font-semibold w-[24%] flex-shrink-0'>
                  {t('our_partner')}
                </span>
                <div className='flex items-center justify-center md:justify-between w-full gap-10 xl:gap-0 flex-wrap md:flex-nowrap'>
                  {listLogo.map((item) => (
                    <div
                      key={item.id}
                      className='relative w-[44%] md:w-[160px] h-auto flex items-center justify-center md:block'
                    >
                      <Image width={194} height={64} src={`/images/${item.url}`} alt='' />
                    </div>
                  ))}
                </div>
              </div>
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
    <div className='border-t-[1px] border-[#CFCDCD] w-full overflow-hidden py-6 bg-[#F4F4F4]'>
      <div className='ct-container-70 flex justify-between items-center text-[1.4rem] flex-col md:flex-row gap-[10px] md:gap-2'>
        {/* <Image src={'/daThongBao1.png'} alt='' width={138} height={50} /> */}
        <div className='flex gap-10 items-center'>
          <a href='https://www.facebook.com/vuathovietnam' target='_blank' className=''>
            <Facebook
              size={32}
              variant='Bold'
              className='text-[#0866ff] duration-200 cursor-pointer  hover:scale-125'
            />
          </a>
          <a
            href='https://www.youtube.com/@Vuatho.official/'
            target='_blank'
            className=''
          >
            <Youtube
              size={38}
              variant='Bold'
              className='text-[#ff0000] duration-200 cursor-pointer hover:scale-125'
            />
          </a>
          <a
            href='https://www.instagram.com/vuatho.official/'
            target='_blank'
            className=''
          >
            <InstaIcon className={' duration-200 cursor-pointer hover:scale-125'} />
          </a>
        </div>
        <p className='text-[1.8rem]'>© 2023. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
