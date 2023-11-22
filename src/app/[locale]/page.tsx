'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Agree, CheckIcon, GigEconomy, Support } from '@/components/Icons'
import { ArrowRight } from 'iconsax-react'
import SectionToTheMoon from './(sections)/toTheMoon'
import SectionDownload from './(sections)/downloadApp'
import SectionWithVuaTho from './(sections)/withVuaTho'
import { useSearchParams } from 'next/navigation'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import AIAnimation from './AIAnimation'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swipper.scss'

const myFont = localFont({
  src: '../../fonts/SVN.otf',
})

const HeroSection = () => {
  const searchParams = useSearchParams()
  const hiddenHeaderAndFooter = searchParams.get('hideHeaderAndFooter')
  return (
    <div className={`${hiddenHeaderAndFooter ? '' : 'pt-[64px] 3xl:pt-[80px]'}`}>
      <MainSection />
      <WorkerBenefitSection />
      <CustomerBenefitSection />
      <AISection />
      <MinhBach />
      <HinhThucKetNoi />
      <SectionToTheMoon />
      <SectionDownload />
      <SectionWithVuaTho />
    </div>
  )
}

const AISection = () => {
  const t = useTranslations('AISection')

  const listAI = [
    { title: t('title1'), desc: t('desc1') },
    { title: t('title2'), desc: t('desc2') },
    { title: t('title3'), desc: t('desc3') },
    { title: t('title4'), desc: t('desc4') },
  ]

  return (
    <div
      id='AI'
      // className='bg-gradient-to-br from-[#FFF]/30 via-[#D2E7FF] to-[#66B9F5]  w-full py-[40px] md:py-[68px]'
      className='bg-white py-[40px] md:mt-[100px] md:py-[68px]'
    >
      <div className='ct-container-70 relative'>
        {/* <div className='absolute bg-[#0094FF] w-[166px] h-[166px] rounded-[40px] blur-[100px] bottom-[10%] left-[15%] hidden lg:block' /> */}
        <h4 className='mb-[60px] w-full text-center text-[3.2rem] font-semibold text-primaryBlue1 2xl:mb-[100px]'>
          {t('heading1')}
        </h4>
        <div className='flex flex-col'>
          <div className='flex h-full w-full items-center justify-center md:absolute md:justify-end 13inch:justify-center'>
            <div className='flex w-full items-center justify-center md:w-1/2 13inch:w-auto'>
              {/* <div className='w-[700px]'>
                <AIAnimation />
              </div> */}
              <Image
                src={'/mascot/AIRobot.png'}
                alt='AIRobot'
                width={338}
                height={400}
                className='pointer-events-none'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 items-center gap-[20px] py-12 lg:ml-[10%] 13inch:ml-0 13inch:grid-cols-2 13inch:gap-[40px]'>
            {listAI.map((i, index) => (
              <div
                key={index}
                className={`relative z-[10] flex w-full flex-col gap-[10px] p-[20px] text-baseBlack md:max-w-[400px] ${
                  index % 2 !== 0 && '13inch:ml-[36%]'
                }`}
              >
                <span className='absolute left-[-12%] top-[-46%] z-[1] hidden text-[6.4rem] font-semibold text-[#FCB713]/20 lg:block'>
                  0{index + 1}
                </span>
                <div
                  className={`absolute inset-0 z-[2] rounded-[20px] bg-white shadow-[0px_8px_16px_0px_#A2BAF366] ${
                    index === 0 && 'border-b-[2px] border-[#FCB713]'
                  }`}
                ></div>
                <h5 className='z-[4] text-[1.6rem] font-semibold text-primary-blue'>
                  {i.title}
                </h5>
                <p className='z-[4] text-[1.6rem]'>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const MinhBach = () => {
  const t = useTranslations('MinhBach')

  const listData = [
    {
      title: t('listData.title1'),
      desc: t('listData.desc1'),
    },
    {
      title: t('listData.title2'),
      desc: t('listData.desc2'),
    },
    {
      title: t('listData.title3'),
      desc: t('listData.desc3'),
    },
    {
      title: t('listData.title4'),
      desc: t('listData.desc4'),
    },
    {
      title: t('listData.title5'),
      desc: t('listData.desc5'),
    },
    {
      title: t('listData.title6'),
      desc: t('listData.desc6'),
    },
  ]

  return (
    <div className='mt-[60px] md:mt-[100px]' id='trade'>
      <section className='ct-container-70 mt-[60px] w-full'>
        <h2 className='mb-[40px] text-[3.2rem] font-semibold text-primary-blue'>
          Linh hoạt trong thỏa thuận và giao dịch
        </h2>
        <div className='grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[40px]'>
          {listData.map((i) => (
            <div
              key={i.title}
              className='flex flex-col gap-[8px] text-[1.6rem] text-baseBlack'
            >
              <div className='flex gap-[10px]'>
                <div className='h-full w-[4px] rounded-lg bg-[#FCB713]' />
                <h3 className=' text-[1.6rem] font-bold'>{i.title}</h3>
              </div>
              <p className='text-[1.6rem] font-light'>{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const HinhThucKetNoi = () => {
  const t = useTranslations('HinhThucKetNoi')

  const DataLabel: any = [
    {
      label: t('listData.label1'),
      description: t('listData.description1'),
    },
    {
      label: t('listData.label2'),
      description: t('listData.description2'),
    },
    {
      label: t('listData.label3'),
      description: t('listData.description3'),
    },
    {
      label: t('listData.label4'),
      description: t('listData.description4'),
    },
    {
      label: t('listData.label5'),
      description: t('listData.description5'),
    },
    {
      label: t('listData.label6'),
      description: t('listData.description6'),
    },
  ]

  return (
    <section id='multi' className='mt-[100px]'>
      <section className='ct-container-70 mt-[60px] w-full'>
        <h2 className='mb-[40px] text-[3.2rem] font-semibold text-primary-blue'>
          Hình thức hợp tác đa dạng và minh bạch
        </h2>
        <div className='grid grid-cols-1 gap-[20px] lg:grid-cols-2 lg:gap-[40px]'>
          {DataLabel.map((i: any) => (
            <div
              key={i.title}
              className='flex flex-col gap-[8px] text-[1.6rem] text-baseBlack'
            >
              <div className='flex gap-[10px]'>
                <div className='h-full w-[4px] rounded-lg bg-primary-blue' />
                <h3 className='text-[1.6rem] font-bold'>{i.label}</h3>
              </div>
              <p className=' text-[1.6rem] font-light'>{i.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

const MainSection = () => {
  const t = useTranslations('MainSection')

  const listCard = [
    {
      id: '#AI',
      icon: GigEconomy,
      title: t('listCard.title1'),
      desc: t('listCard.desc1'),
    },
    {
      id: '#trade',
      icon: Agree,
      title: t('listCard.title2'),
      desc: t('listCard.desc2'),
    },
    {
      id: '#multi',
      icon: Support,
      title: t('listCard.title3'),
      desc: t('listCard.desc3'),
    },
  ]
  return (
    <div className='w-full '>
      <div className='ct-container-70'>
        <div className=' flex flex-col-reverse items-center justify-between md:flex-row md:py-20'>
          <div className='flex w-full flex-col gap-[20px] xl:w-[60%]'>
            <h3 className='text-left text-[3.2rem] font-bold text-primaryBlue1'>
              {t('heading1')} <span className='text-primaryBlue1'>{t('heading1-1')}</span>
              <br />
              {t('heading2')}
            </h3>
            <div className='flex flex-col gap-[20px]'>
              <div className='flex items-center gap-[8px]'>
                <CheckIcon className='h-[14px] w-[14px]' />
                <p className='text-[1.8rem] text-baseBlack'>
                  Hỗ trợ đa ngôn ngữ - đa ngành nghề
                </p>
              </div>
              <div className='flex items-center gap-[8px]'>
                <CheckIcon className='h-[14px] w-[14px]' />
                <p className='text-[1.8rem] text-baseBlack'>
                  Nơi đâu cũng có Thợ - Thợ nào cũng có
                </p>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className='mt-[16px] hidden w-full grid-cols-1 gap-[16px] lg:grid lg:grid-cols-3 lg:gap-[20px]'>
                {listCard.map((i: any, index: any) => (
                  <a
                    href={`${i.id}`}
                    key={index}
                    className='group z-[2] flex cursor-pointer gap-[10px] rounded-[10px] bg-white p-[20px] shadow-[0px_8px_16px_0px_#A2BAF366] duration-300 hover:border-transparent hover:bg-white md:flex-col lg:p-[10px] lg:hover:-translate-y-[6px] xl:p-[20px]'
                  >
                    <i.icon size={40} className='text-primaryBlue' variant='Bold' />
                    <div className='w-full pl-5 md:pl-0'>
                      <p className='mt-2 whitespace-nowrap text-[1.6rem] font-light text-primaryText'>
                        {i.desc}
                      </p>
                      <div className='flex items-center justify-between'>
                        <p className='mt-2 text-[1.8rem] font-semibold text-primaryText'>
                          {i.title}
                        </p>
                        <span className='-translate-x-[10px] opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
                          <ArrowRight size={24} className='text-black' />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className='relative mb-[20px] flex aspect-square w-full max-w-[400px] shrink-0 justify-center rounded-full bg-[#405AB717] md:mb-0 md:w-[40%] md:justify-end'>
            <div className=''>
              <Image
                src={'/home/dualPhone.png'}
                alt=''
                width={446}
                height={400}
                className=' h-full w-full object-contain'
              />
            </div>
          </div>
        </div>
        <div className='mt-[16px] grid w-full grid-cols-1 gap-[16px] md:grid-cols-3 lg:hidden lg:gap-[20px]'>
          {listCard.map((i: any, index: any) => (
            <a
              href={`${i.id}`}
              key={index}
              className='group z-[2] flex cursor-pointer gap-[10px] rounded-[10px] bg-white p-[20px] shadow-[0px_8px_16px_0px_#A2BAF366] duration-300 hover:border-transparent hover:bg-white md:flex-col lg:p-[10px] lg:hover:-translate-y-[6px] xl:p-[20px]'
            >
              <i.icon size={40} className='text-primaryBlue' variant='Bold' />
              <div className='w-full pl-5 md:pl-0'>
                <p className='mt-2 whitespace-nowrap text-[1.6rem] font-light text-primaryText'>
                  {i.desc}
                </p>
                <div className='flex items-center justify-between'>
                  <p className='mt-2 text-[1.8rem] font-semibold text-primaryText'>
                    {i.title}
                  </p>
                  <span className='-translate-x-[10px] opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100'>
                    <ArrowRight size={24} className='text-black' />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const CustomerBenefitSection = () => {
  const t = useTranslations('CustomerBenefitSection')

  const listBenefit = [
    { title: t('listBenefit.title1'), id: 1 },
    { title: t('listBenefit.title2'), id: 2 },
    { title: t('listBenefit.title3'), id: 3 },
    { title: t('listBenefit.title4'), id: 4 },
  ]

  return (
    <div className='mt-[200px] bg-gradient-to-b from-white to-[#FFFAEE] py-20 md:mt-[100px]'>
      <div className='flex items-center justify-center'>
        <div className=''>
          <div className='mx-auto pl-8'>
            <h3 className={`${myFont.className} text-[9.6rem] text-[#FCB713]`}>
              Lợi ích
            </h3>
            <p className='mt-[-10px] whitespace-nowrap text-[3.2rem] font-semibold text-primary-blue'>
              Đối với Khách Hàng
            </p>
          </div>
        </div>
        <div className='w-[40%] md:w-auto'>
          <Image src={'/mascot/customerBenefit.png'} alt='' width={250} height={200} />
        </div>
      </div>
      <div className='ct-container-70 mt-[-10px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-4 13inch:gap-[40px]'>
        {listBenefit.map((i, index) => (
          <div className='rounded-2xl bg-white p-[20px] pt-0' key={i.title}>
            <span className='text-[6.4rem] font-semibold text-primaryYellow1/20'>
              0{index + 1}
            </span>
            <p className='text-[1.6rem] font-semibold text-baseBlack'>{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const WorkerBenefitSection = () => {
  const t = useTranslations('WorkerBenefitSection')

  const listBenefit = [
    {
      title: t('benefit1'),
      desc: [{ text: t('text1') }, { text: t('text2') }],
    },
    {
      title: t('benefit2'),
      desc: [{ text: t('text3') }],
    },
    {
      title: t('benefit3'),
      desc: [{ text: t('text4') }, { text: t('text5') }],
    },
    {
      title: t('benefit4'),
      desc: [{ text: t('text6') }, { text: t('text7') }],
    },

    {
      title: t('benefit5'),
      desc: [{ text: t('text8') }],
    },
    {
      title: t('benefit6'),
      desc: [{ text: t('text9') }, { text: t('text10') }, { text: t('text11') }],
    },
    {
      title: t('benefit7'),
      desc: [
        { text: t('text12') },
        { text: t('text14') },
        { text: t('text15') },
        { text: t('text16') },
      ],
    },
    {
      title: t('benefit8'),
      desc: [
        { text: t('text17') },
        { text: t('text18') },
        { text: t('text19') },
        { text: t('text20') },
      ],
    },
    {
      title: t('benefit9'),
      desc: [{ text: t('text21') }],
    },
    {
      title: t('benefit10'),
      desc: [{ text: t('text22') }],
    },
    {
      title: t('benefit11'),
      desc: [{ text: t('text23') }, { text: t('text24') }],
    },
    {
      title: t('benefit12'),
      desc: [{ text: t('text25') }],
    },
  ]

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return (
        '<span class="paginationBenefit ' +
        className +
        '">' +
        (index + 1 >= 10 ? index + 1 : '0' + (index + 1)) +
        '</span>'
      )
    },
  }
  return (
    <div className='my-[100px] flex flex-col gap-[20px]'>
      <div className='ct-container-70'>
        <div className='flex items-end gap-[10px] md:gap-[40px]'>
          <div className=''>
            <h3 className={`${myFont.className} text-[9.6rem] text-[#FCB713]`}>
              {t('benefit')}
            </h3>
            <p className=' mt-[-20px] text-[3.2rem] font-semibold text-primaryBlue1'>
              {t('text')}
            </p>
          </div>
          <div className=''>
            <Image
              src={'/mascot/tim.png'}
              alt=''
              height={123}
              width={96}
              className='object-contain'
            />
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          loop
          autoHeight
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          navigation
          pagination={pagination}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className='benefitSwipper h-full w-full'
        >
          {listBenefit.map((i, index) => (
            <SwiperSlide key={i.title}>
              <div className='grid grid-cols-1 gap-[20px] bg-white md:grid-cols-5'>
                <div className='mt-[40px] md:col-span-2'>
                  <span className='text-[6.4rem] font-semibold leading-none text-[#FCB713]/20'>
                    {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                  </span>
                  <h3 className='mt-[-6px] min-h-[60px] text-[1.6rem] font-bold'>
                    {i.title}
                  </h3>
                  <div className='mt-[16px] hidden text-[1.6rem] font-light md:block'>
                    {i.desc.map((ii) => (
                      <p className='' key={ii.text}>
                        {ii.text}
                      </p>
                    ))}
                  </div>
                </div>
                <div className=' md:col-span-3'>
                  <div className='h-full w-full '>
                    <Image
                      src={'/tuongtrung.png'}
                      alt=''
                      width={715}
                      height={411}
                      className={`h-full w-full object-cover ${
                        index % 2 === 0 && 'rotate-180'
                      }`}
                    />
                  </div>
                  <div className='mt-[16px] min-h-[140px] bg-white text-[1.6rem] font-light md:hidden'>
                    {i.desc.map((ii) => (
                      <p className='' key={ii.text}>
                        {ii.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HeroSection
