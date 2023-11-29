'use client'

import Image from 'next/image'
import localFont from 'next/font/local'
import { Agree, CheckIcon, GigEconomy, Support } from '@/components/Icons'
import SectionToTheMoon from './(sections)/toTheMoon'
import SectionDownload from './(sections)/downloadApp'
import SectionWithVuaTho from './(sections)/withVuaTho'
import { useSearchParams } from 'next/navigation'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swipper.scss'
import Article from '@/components/article'
import Link from 'next/link'
import Map from '@/components/map'
//@ts-ignore
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'iconsax-react'

const myFont = localFont({
  src: '../../fonts/SVN.otf',
})

const HeroSection = () => {
  const searchParams = useSearchParams()
  const hiddenHeaderAndFooter = searchParams.get('hideHeaderAndFooter')
  return (
    <div
      className={`${
        hiddenHeaderAndFooter
          ? 'overflow-hidden'
          : 'overflow-hidden pt-[64px] 3xl:pt-[80px]'
      }`}
    >
      <MainSection />
      <WorkerBenefitSection />
      <CustomerBenefitSection />
      <AISection />
      <MinhBach />
      <HinhThucKetNoi />
      <SectionToTheMoon />
      <SectionDownload />
      <PressHome />
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
        <h4 className='mb-[60px] w-full text-center text-[2.4rem] font-semibold text-primaryBlue1 md:text-[3.2rem] 2xl:mb-[100px]'>
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
        <h2 className='mb-[40px] text-[2.4rem] font-semibold text-primary-blue md:text-[3.2rem]'>
          {t('heading')}
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
        <h2 className='mb-[40px] text-[2.4rem] font-semibold text-primary-blue md:text-[3.2rem]'>
          {t('heading')}
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
    <div className='bg-gradient-to-br from-[#2559BD] to-[#3773E6] md:pb-[60px]'>
      <div className='ct-container-70 grid grid-cols-1 items-center xl:grid-cols-5'>
        <div className='col-span-1 xl:col-span-3'>
          <div className='mx-auto flex max-w-max flex-col justify-between gap-[40px] pt-10 xl:mx-0 xl:w-full xl:pt-20'>
            <div className='mx-auto flex max-w-max flex-col gap-[20px] xl:mx-0 xl:w-full'>
              <h3 className='text-left text-[2.4rem] font-bold text-white xl:text-[3.2rem]'>
                {t('heading1')} <span className='text-white'>{t('heading1-1')}</span>
                <br />
                {t('heading2')}
              </h3>
              <div className='flex flex-col gap-[20px]'>
                <div className='flex items-center gap-[8px]'>
                  <CheckIcon className='h-[14px] w-[14px]' />
                  <p className='text-[1.6rem] text-white xl:text-[1.8rem]'>
                    {t('text1')}
                  </p>
                </div>
                <div className='flex items-center gap-[8px]'>
                  <CheckIcon className='h-[14px] w-[14px]' />
                  <p className='text-[1.6rem] text-white xl:text-[1.8rem]'>
                    {t('text2')}
                  </p>
                </div>
              </div>
            </div>
            <div className=''>
              <Image
                src={'/home/dualPhone.png'}
                alt=''
                width={446}
                height={400}
                className=' object-contain'
              />
            </div>
          </div>
          <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-3'>
            {listCard.map((i: any, index: any) => (
              <a
                href={`${i.id}`}
                key={index}
                className='group z-[2] flex cursor-pointer gap-[10px] rounded-[10px] bg-white p-[20px] shadow-[0px_16px_60px_-16px_rgba(35,35,35,0.06)] duration-300 hover:border-transparent hover:bg-white md:flex-col xl:p-[10px] xl:hover:-translate-y-[6px] 13inch:p-[20px]'
              >
                <i.icon size={40} className='text-primaryBlue' variant='Bold' />
                <div className='w-full pl-5 md:pl-0'>
                  <p className='mt-2 text-[1.6rem] text-primaryText'>{i.desc}</p>
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
        <div className='col-span-1 my-[80px] w-full xl:col-span-2 xl:my-[40px]'>
          <Map />
        </div>
      </div>
    </div>
  )
}

const CustomerBenefitSection = () => {
  const t = useTranslations('CustomerBenefitSection')

  interface TlistBenefit {
    title: string
    id: number
    img: string
  }
  const listBenefit: TlistBenefit[] = [
    { title: t('listBenefit.title1'), id: 1, img: 'location.png' },
    { title: t('listBenefit.title2'), id: 2, img: 'rating.png' },
    { title: t('listBenefit.title3'), id: 3, img: 'onlinereviews.png' },
    { title: t('listBenefit.title4'), id: 4, img: 'deliveryontime.png' },
  ]

  return (
    <div className=' flex flex-col gap-[20px] py-20'>
      <div className='ct-container-70 flex items-center justify-center'>
        <div className=''>
          <div className='mx-auto pl-8'>
            <h3
              className={`${myFont.className} text-center text-[4.8rem] text-[#FCB713] md:text-[9.6rem]`}
            >
              {t('benefit')}
            </h3>
            <p className='mt-[-10px] whitespace-nowrap text-[2.4rem] font-semibold text-primary-blue md:text-[3.2rem]'>
              {t('text')}
            </p>
          </div>
        </div>
        <div className='w-[40%] md:w-auto'>
          <Image src={'/mascot/customerBenefit.png'} alt='' width={250} height={200} />
        </div>
      </div>
      <div className='ct-container-70 mt-[-10px] grid grid-cols-2 gap-[20px] lg:grid-cols-4 13inch:gap-[40px]'>
        {listBenefit.map((i, index) => (
          <div
            className=' rounded-2xl bg-white p-[16px] text-center shadow-[0px_4px_16px_0px_#A4A4A429] xl:text-left
          '
            key={i.title}
          >
            <span className='absolute text-[3.6rem] font-semibold leading-none text-primaryYellow1'>
              0{index + 1}
            </span>
            <div className='mx-auto flex h-[94px] w-[124px] justify-center'>
              <Image
                src={`/home/${i.img}`}
                alt=''
                height={94}
                width={124}
                className='h-auto w-full object-contain'
              />
            </div>
            <p className='mt-[16px] text-center text-[1.6rem] font-semibold text-baseBlack md:text-left'>
              {i.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

const WorkerBenefitSection = () => {
  const t = useTranslations('WorkerBenefitSection')
  interface TlistBenefit {
    title: string
    desc: { text: string }[]
    img: string
  }
  const listBenefit: TlistBenefit[] = [
    {
      title: t('benefit1'),
      desc: [{ text: t('text1') }, { text: t('text2') }],
      img: 'benefit1.png',
    },
    {
      title: t('benefit2'),
      desc: [{ text: t('text3') }, { text: t('text4') }, { text: t('text5') }],
      img: 'benefit2.png',
    },
    {
      title: t('benefit3'),
      desc: [{ text: t('text6') }, { text: t('text7') }],
      img: 'benefit3.png',
    },
    {
      title: t('benefit4'),
      desc: [{ text: t('text8') }, { text: t('text9') }],
      img: 'benefit4.png',
    },

    {
      title: t('benefit5'),
      desc: [{ text: t('text10') }, { text: t('text11') }],
      img: 'benefit5.png',
    },
    {
      title: t('benefit6'),
      desc: [{ text: t('text12') }],
      img: 'benefit6.png',
    },
    {
      title: t('benefit7'),
      desc: [{ text: t('text14') }],
      img: 'benefit7.png',
    },
    {
      title: t('benefit8'),
      desc: [{ text: t('text15') }, { text: t('text16') }],
      img: 'benefit8.png',
    },
    {
      title: t('benefit9'),
      desc: [{ text: t('text17') }, { text: t('text18') }],
      img: 'benefit9.png',
    },
    {
      title: t('benefit10'),
      desc: [{ text: t('text19') }, { text: t('text20') }],
      img: 'benefit10.png',
    },
    {
      title: t('benefit11'),
      desc: [{ text: t('text21') }],
      img: 'benefit11.png',
    },
    {
      title: t('benefit12'),
      desc: [{ text: t('text22') }],
      img: 'benefit12.png',
    },
    {
      title: t('benefit12'),
      desc: [{ text: t('text23') }, { text: t('text24') }],
      img: 'benefit13.png',
    },
  ]

  return (
    <div className='my-[60px] flex flex-col gap-[20px]'>
      <div className='ct-container-70'>
        <div className='mb-[20px] flex items-end justify-center gap-[10px] md:gap-[40px]'>
          <div className=''>
            <h3
              className={`${myFont.className} text-[4.8rem] text-[#FCB713] md:text-[9.6rem]`}
            >
              13 {t('benefit')}
            </h3>
            <p className=' mt-[-20px] text-[2.4rem] font-semibold text-primaryBlue1 md:text-[3.2rem]'>
              {t('text')}
            </p>
          </div>
          <div className='h-full'>
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
          pagination={{
            type: 'fraction',
            clickable: true,
          }}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className='benefitSwipper h-full w-full'
        >
          {listBenefit.map((i, index) => (
            <SwiperSlide key={i.title}>
              <div className='overflow-hidden rounded-[16px]'>
                <div className='h-[180px] w-full md:h-[400px] xl:h-[528px]'>
                  <Image
                    src={`/benefitCustomer/${i.img}`}
                    alt=''
                    height={600}
                    width={3200}
                    className='h-full w-full object-cover'
                  />
                </div>
                <div className='flex h-[550px] flex-col gap-[8px] bg-primary-blue p-[40px] pb-[80px] md:h-[400px]'>
                  <div className='flex items-center gap-[16px]'>
                    <p className='text-[6.4rem] text-white/20'>
                      {index + 1 >= 10 ? index + 1 : `0${index + 1}`}
                    </p>
                    <p className='text-[1.8rem] font-bold text-[#FCB713] md:text-[2.4rem]'>
                      {i.title}
                    </p>
                  </div>
                  <ul className='list-inside list-disc'>
                    {i.desc.map((ii) => (
                      <li className='text-[1.6rem] font-light text-white' key={ii.text}>
                        {ii.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
const PressHome = () => {
  const t = useTranslations('PressHome')

  const listArticle = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.',
      tag: 'Sự kiện',
      time: '23/11/2023',
      title: 'Khai trương Vua Thợ',
      url: '#',
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.',
      tag: 'Khác',
      time: '21/11/2023',
      title: 'Triển khai mô hình',
      url: '#',
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.',
      tag: 'Sự kiện',
      time: '12/11/2023',
      title: 'Ra mắt tính năng mới',
      url: '#',
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo nostrum itaque voluptatem saepe temporibus consequuntur, mollitia quas sit amet, tempora ea minima accusantium. Totam rem nihil modi voluptatem iste.',
      tag: 'Khác',
      time: '23/11/2023',
      title: 'Theo dòng thời gian',
      url: '#',
    },
  ]
  return (
    <div className='ct-container-70 mt-[60px] flex flex-col gap-[20px]'>
      <div className='flex items-center justify-between'>
        <p className='text-[1.8rem] font-semibold text-primary-blue md:text-[3.2rem]'>
          {t('heading')}
        </p>
        <Link
          href={'/press'}
          className='text-[1.8rem] font-semibold text-[#FCB713] md:text-[1.8rem]'
        >
          {t('seeAll')}
        </Link>
      </div>
      <div className='flex flex-nowrap gap-[20px] overflow-x-scroll xl:grid xl:grid-cols-4 xl:overflow-x-auto'>
        {listArticle.map((i, index) => (
          <Article
            key={index}
            desc={i.desc}
            tag={i.tag}
            time={i.time}
            title={i.title}
            url={i.url}
            style='w-[80%] md:w-[40%] xl:w-full cursor-pointer'
          />
        ))}
      </div>
    </div>
  )
}
export default HeroSection
