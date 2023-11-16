'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { AndroidBtn, IosBtn, QrCode } from '@/components/DownloadApps'

import {
  Agree,
  Binoculars,
  GigEconomy,
  Mission,
  Pylogon,
  Support,
} from '@/components/Icons'
import { Screen } from '@/components/animateScreen'
import { ArrowRight } from 'iconsax-react'
import SectionToTheMoon from './(sections)/toTheMoon'
import SectionDownload from './(sections)/downloadApp'
import SectionWithVuaTho from './(sections)/withVuaTho'
import { useSearchParams } from 'next/navigation'

const HeroSection = () => {
  const searchParams = useSearchParams()
  const hiddenHeaderAndFooter = searchParams.get('hideHeaderAndFooter')
  return (
    <div className={`${hiddenHeaderAndFooter ? '' : 'pt-[64px] 3xl:pt-[80px]'}`}>
      <MainSection />
      <RuleSection />
      <AISection />
      <MinhBach />
      <HinhThucKetNoi />
      <WorkerBenefitSection />
      {/* done */}
      <CustomerBenefitSection />
      <SectionToTheMoon />
      <SectionDownload />
      <SectionWithVuaTho />
    </div>
  )
}
const AISection = () => {
  const t = useTranslations('AISection')

  return (
    <div
      id='AI'
      className='bg-gradient-to-br from-[#FFF]/30 via-[#D2E7FF] to-[#66B9F5]  w-full py-[40px] md:py-[68px]'
    >
      <div className='ct-container-70 relative'>
        <div className='absolute bg-[#0094FF] w-[166px] h-[166px] rounded-[40px] blur-[100px] bottom-[10%] left-[15%] hidden lg:block' />
        <h4 className='text-center text-baseBlack text-[3.6rem] font-semibold w-full'>
          <span className='text-primaryBlue1 '>{t('heading1')}</span>
          {t('heading2')}
        </h4>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center md:justify-end 13inch:justify-center h-full w-full md:absolute'>
            <div className='flex items-center justify-center w-full md:w-1/2 13inch:w-auto'>
              <Image
                src={'/mascot/AIRobot.png'}
                alt='AIRobot'
                width={338}
                height={400}
                className='pointer-events-none'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 13inch:grid-cols-2 gap-6 13inch:gap-32 py-12 items-center'>
            <div className='bg-gradient-to-r from-[#3177FF] to-[#6ADBFE]/60 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-white w-full md:max-w-[50%] 13inch:ml-[30%] 13inch:mt-[7%] z-[10]'>
              <h5 className='md:text-[2rem] text-[2.4rem] font-semibold'>
                {t('title1')}
              </h5>
              <p className='text-[2.2rem]'>{t('desc1')}</p>
            </div>

            <div className='bg-white/40 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-baseBlack w-full md:max-w-[50%] 13inch:ml-[28%] z-[10]'>
              <h5 className='md:text-[2rem] text-[2.4rem] font-semibold'>
                {t('title2')}
              </h5>
              <p className='text-[2rem]'>{t('desc2')}</p>
            </div>
            <div className='bg-white/40 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-baseBlack w-full md:max-w-[50%] 13inch:ml-[42%] 13inch:mt-[14%] z-[10]'>
              <h5 className='md:text-[2rem] text-[2.4rem] font-semibold'>
                {t('title3')}
              </h5>
              <p className='text-[2rem]'>{t('desc3')}</p>
            </div>
            <div className='bg-white/40 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-baseBlack w-full md:max-w-[50%] 13inch:ml-[18%] z-[10]'>
              <h5 className='md:text-[2rem] text-[2.4rem] font-semibold'>
                {t('title4')}
              </h5>
              <p className='text-[2rem]'>{t('desc4')}</p>
            </div>
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
  const [content, setContent] = useState(listData[0])

  const [selectedKeys, setSelectedKeys] = useState([listData[0].title.toString()])

  return (
    <div className='' id='trade'>
      <section className=' ct-container-70 w-full space-y-12 md:!px-[100px] h-[600px]'>
        <div>
          <h3 className='text-center text-[3.5rem] font-semibold'>
            <span className='text-primaryBlue'>{t('heading1')}</span>
            {t('heading2')}
          </h3>
        </div>
        <div className='grid-cols-6 hidden md:grid'>
          <div className='col-span-2 flex flex-col gap-[40px]'>
            {listData.map((i: any, index: any) => (
              <div
                className='flex items-center gap-6 group cursor-pointer'
                key={i.title}
                onClick={() => {
                  setContent(listData[index])
                }}
              >
                <p
                  className={`text-[2rem] font-semibold duration-300 ${
                    content.title == i.title ? 'text-primaryBlue1' : 'text-baseBlack'
                  }`}
                >
                  {i.title}
                </p>
                <span
                  className={`duration-300 ${
                    content.title == i.title
                      ? 'text-primaryBlue1 opacity-100'
                      : 'text-baseBlack opacity-0 y group-hover:opacity-50 -translate-x-[10px] group-hover:translate-x-0'
                  }`}
                >
                  <Pylogon />
                </span>
              </div>
            ))}
          </div>
          <div className='col-span-4 h-full w-full bg-gradient-to-br from-[#D0EBFF] via-[#E2EFFF] to-white rounded-[20px] p-4 flex items-center justify-center'>
            <div className='max-w-[400px]'>
              <p className='text-baseBlack text-[2rem]'>{content.desc}</p>
            </div>
          </div>
        </div>
        <div className='block md:hidden relative'>
          <div className='absolute top-0 h-full w-full right-0 bg-[#84CCFF]/30 blur-[100px] z-[-2] hidden lg:block' />
          <Accordion
            showDivider={false}
            selectedKeys={selectedKeys}
            onSelectionChange={(i: any) => setSelectedKeys(new Set(Array.from(i)) as any)}
            variant='light'
            itemClasses={{
              title: 'text-[1.8rem]',
              indicator: 'text-[1.8rem] text-white',
              trigger: 'px-3 py-5',
              content: 'px-3 pb-5 pt-0 text-[2rem] text-baseBlack',
            }}
            className='gap-[6px] md:gap-[10px] flex flex-col'
          >
            {listData.map((i: any) => (
              <AccordionItem
                key={i.title}
                aria-label='Accordion 1'
                title={i.title}
                classNames={{
                  indicator:
                    Array.from(selectedKeys)[0] == i.title
                      ? 'text-white text-[2rem]'
                      : 'text-black text-[2rem]',
                  trigger: ` ${
                    Array.from(selectedKeys)[0] == i.title
                      ? 'bg-gradient-to-r from-[#4A6FF0] to-[#7C99FF]'
                      : 'bg-white lg:backdrop-blur-2xl'
                  }  px-[20px] rounded-[12px] font-semibold py-6 13inch:py-4`,
                  content: `p-[20px] text-[2.2rem] text-baseBlack`,
                  title:
                    Array.from(selectedKeys)[0] == i.title
                      ? 'text-white text-[2.4rem]'
                      : 'text-baseBlack text-[2.4rem]',
                }}
              >
                {i.desc}
              </AccordionItem>
            ))}
          </Accordion>
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
      color: 'bg-[#d9f99d]',
    },
    {
      label: t('listData.label2'),
      description: t('listData.description2'),
      color: 'bg-[#d9f99d]',
    },
    {
      label: t('listData.label3'),
      description: t('listData.description3'),
      color: 'bg-[#d9f99d]',
    },
    {
      label: t('listData.label4'),
      description: t('listData.description4'),
      color: 'bg-[#d9f99d]',
    },
    {
      label: t('listData.label5'),
      description: t('listData.description5'),
      color: 'bg-[#d9f99d]',
    },
    {
      label: t('listData.label6'),
      description: t('listData.description6'),
      color: 'bg-[#d9f99d]',
    },
  ]

  const [selectedKeys, setSelectedKeys] = useState([DataLabel[0].label.toString()])

  return (
    <section
      id='multi'
      className='py-[64px] 3xl:pt-[80px] ct-container-70 w-full space-y-12'
    >
      <h3 className='text-[3.5rem] font-semibold'>
        {t('heading1')}
        <span className='text-primaryBlue'>{t('heading2')}</span>
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='flex-center md:h-[400px]'>
          <Image
            src={'/mascot/ghichu.png'}
            alt=''
            width={375}
            height={300}
            className='pointer-events-none'
          />
        </div>
        <div className='relative h-[400px]'>
          <div className='absolute top-0 h-full w-full right-0 bg-[#84CCFF]/30 blur-[100px] z-[-2] hidden lg:block' />
          <div className='absolute top-0 h-full w-full right-0 z-[-2]' />
          <Accordion
            showDivider={false}
            selectedKeys={selectedKeys}
            onSelectionChange={(i: any) => setSelectedKeys(new Set(Array.from(i)) as any)}
            variant='light'
            itemClasses={{
              title: 'text-[1.8rem]',
              indicator: 'text-[2.4rem] text-white',
              trigger: 'px-3 py-5',
              content: 'px-3 pb-5 pt-0 text-[2rem] text-baseBlack',
            }}
            className='gap-[6px] md:gap-[10px] flex flex-col'
          >
            {DataLabel.map((i: any) => (
              <AccordionItem
                key={i.label}
                aria-label={`Accordion ${i.label}`}
                title={i.label}
                classNames={{
                  indicator:
                    Array.from(selectedKeys)[0] == i.label
                      ? 'text-white text-[2rem]'
                      : 'text-black text-[2rem]',
                  trigger: ` ${
                    Array.from(selectedKeys)[0] == i.label
                      ? 'bg-gradient-to-r from-[#4A6FF0] to-[#7C99FF]'
                      : 'bg-white lg:backdrop-blur-2xl'
                  }  px-[20px] rounded-[12px] font-semibold py-6 13inch:py-4`,
                  content: `p-[20px] text-[2rem] text-baseBlack`,
                  title:
                    Array.from(selectedKeys)[0] == i.label
                      ? 'text-white text-[2.4rem]'
                      : 'text-baseBlack text-[2.4rem]',
                }}
              >
                {i.description}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
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
    <div className='w-full relative'>
      <div className='blur-3xl rounded-[50%] bg-blue-400/20 top-[-10%] absolute left-[-20%] h-1/2 w-1/2 aspect-square z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-blue-400/20 absolute top-[20%] left-[8%] h-full w-full aspect-square z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-violet-400/20 absolute-left-[10%] top-0 h-1/2 aspect-square w-fit z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-yellow-400/20 absolute right-0 bottom-[20%] h-1/2 aspect-square w-fit z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-orange-300/20 absolute right-[12%] -bottom-[15%] h-1/2 aspect-square w-fit z-[-2] hidden lg:block' />

      <div className=' ct-container-70'>
        <div className='py-20 flex items-center justify-between flex-col lg:flex-row'>
          <div className='flex flex-col gap-4 w-full'>
            <h3 className='text-[2.8rem] md:text-[2.8rem] 13inch:text-[3rem] 2xl:text-[3.6rem] font-bold text-primaryText text-left'>
              {t('heading1')} <span className='text-primaryBlue1'>{t('heading1-1')}</span>
              <br />
              {t('heading2')}
              <span className='text-primaryBlue1'>{t('heading2-1')}</span>
            </h3>
            <p className='text-[2.2rem] 2xl:text-[2rem] text-primaryText text-left'>
              {t('subHeading')}
            </p>
            <div className='flex justify-between'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[20px] lg:mt-[40px] lg:w-full md:w-[45%] w-full'>
                {listCard.map((i: any, index: any) => (
                  <a
                    href={`${i.id}`}
                    key={index}
                    className='group cursor-pointer rounded-[10px] z-[2] bg-white xl:p-[20px] lg:p-[10px] p-[20px] shadow-[0px_16px_60px_-16px_rgba(35,35,35,0.06)] hover:border-transparent lg:hover:-translate-y-[6px] hover:bg-white duration-300 flex md:flex-col gap-[10px]'
                  >
                    <i.icon size={40} className='text-primaryBlue' variant='Bold' />
                    <div className='w-full md:pl-0 pl-5'>
                      <p className='text-primaryText text-[1.6rem] mt-2'>{i.desc}</p>
                      <div className='flex items-center justify-between'>
                        <p className='text-primaryText text-[2.4rem] font-semibold mt-2'>
                          {i.title}
                        </p>
                        <span className='opacity-0 group-hover:opacity-100 duration-300 -translate-x-[10px] group-hover:translate-x-0'>
                          <ArrowRight size={24} className='text-black' />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className='lg:hidden md:block hidden relative h-fit w-full'>
                <Screen style='min-w-[260px] h-[500px] 13inch:min-w-[400px] 13inch:h-[700px]' />
                <div className='absolute top-0 right-[17%] rounded-xl shadow-[-6px_0_20px_-10px_#000000d1]'>
                  <div className='absolute top-0 left-[30%]'>
                    <Image
                      src={'/mascot/khach.png'}
                      alt='khang'
                      width={140}
                      height={154}
                      className='pointer-events-none'
                    />
                  </div>
                  <QrCode height='2xl:h-[140px] h-[100px] rounded-lg overflow-hidden' />
                </div>
                <div className='absolute space-y-2 bottom-[10%] left-[12%]'>
                  <AndroidBtn
                    style={
                      '3xl:min-w-[220px] 2xl:min-w-[180px] min-w-[150px] shadow-[6px_0_20px_-10px_#000000d1]'
                    }
                  />
                  <IosBtn
                    style={
                      '3xl:min-w-[220px] 2xl:min-w-[180px] min-w-[150px] shadow-[6px_0_20px_-10px_#000000d1]'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full lg:flex hidden relative justify-center 13inch:justify-end 2xl:pr-[7%] 2xl:mr-0 -mr-20'>
            <div className='relative h-fit w-fit'>
              <Screen style='min-w-[260px] h-[500px] 13inch:min-w-[400px] 13inch:h-[700px]' />
              <div className='absolute -right-[32%] 13inch:-right-[24%] top-[10%] rounded-xl shadow-[-6px_0_20px_-10px_#000000d1]'>
                <div className='absolute top-0 left-[30%]'>
                  <Image
                    src={'/mascot/khach.png'}
                    alt='khang'
                    width={140}
                    height={154}
                    className='pointer-events-none'
                  />
                </div>
                <QrCode height='2xl:h-[140px] h-[100px] rounded-lg overflow-hidden' />
              </div>
              <div className='absolute space-y-2 bottom-[10%] -left-[48%] 13inch:-left-[40%]'>
                <AndroidBtn
                  style={
                    '3xl:min-w-[220px] 2xl:min-w-[180px] min-w-[150px] shadow-[6px_0_20px_-10px_#000000d1]'
                  }
                />
                <IosBtn
                  style={
                    '3xl:min-w-[220px] 2xl:min-w-[180px] min-w-[150px] shadow-[6px_0_20px_-10px_#000000d1]'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const RuleSection = () => {
  const t = useTranslations('RuleSection')

  return (
    <div className='relative my-[100px]'>
      <div className='absolute top-[30%] hidden lg:block'>
        <Image
          src={'/logo/logo.png'}
          width={300}
          height={196}
          alt=''
          className='lg:blur-2xl pointer-events-none'
        />
      </div>
      <div className='bg-white/40 rounded-[20px] ct-container-70 p-[10px] md:!p-[20px] -mt-[2%] relative lg:backdrop-blur-lg'>
        <div className='flex gap-10 justify-between items-center flex-col md:flex-row'>
          <div className='flex flex-col gap-10 w-full'>
            <h4 className='text-baseBlack text-[3.6rem] font-semibold'>
              <span className='text-primaryBlue1'>{t('text1')}</span>
              {t('text2')}
            </h4>
            <div className='space-y-6'>
              <div className='text-baseBlack bg-white p-8 md:p-5 rounded-[12px] md:rounded-[24px] shadow-sm hover:bg-white/80 duration-300 select-none'>
                <div className='flex items-start space-x-5'>
                  <div className='w-[48px]'>
                    <Binoculars />
                  </div>
                  <div className='space-y-3 md:space-y-[10px]'>
                    <h3 className='text-[2.8rem] md:text-[2.4rem] text-baseBlack'>
                      {t('text3')}
                    </h3>
                    <p className='text-[2.2rem]'>{t('text4')}</p>
                  </div>
                </div>
              </div>
              <div className='text-baseBlack bg-white p-5 rounded-[12px] md:rounded-[24px] shadow-sm hover:bg-white/80 duration-300 select-none'>
                <div className='flex items-start space-x-5'>
                  <div className='w-[48px]'>
                    <Mission />
                  </div>
                  <div className='space-y-3 md:space-y-[10px]'>
                    <h1 className='text-[2.8rem] text-baseBlack'>{t('text5')}</h1>
                    <p className='text-[2.2rem]'>{t('text6')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[20px] md:mr-[10%]'>
            <Image
              src={'/mascot/family.webp'}
              alt=''
              width={540}
              height={400}
              className='lg:h-auto md:h-[400px] h-[300px] w-auto object-contain pointer-events-none'
            />
          </div>
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
    { title: '', id: 0 },
    { title: t('listBenefit.title4'), id: 4 },
    { title: t('listBenefit.title5'), id: 5 },
  ]
  return (
    <div className=''>
      <div className='text-center my-[40px]'>
        <h5 className='text-[3.6rem] font-bold '>
          <span className='text-primaryBlue1'>{t('benefit')}</span>
          <span> {t('fromVuaTho')}</span>
        </h5>
        <div className='flex-center gap-3'>
          <p className='text-baseBlack font-semibold text-[2.2rem]'>{t('text1')}</p>
          <div className='text-[#FCB813] text-[2rem] font-bold'>{t('text2')}</div>
        </div>
      </div>
      <div className='relative ct-container-70'>
        <div className='absolute hidden md:block md:bottom-[-10%] xl:bottom-[-30%] 2xl:bottom-[-60%] left-0 w-[27%] 3xl:w-full'>
          <Image
            src={'/mascot/image_loi_ich_khach.png'}
            width={448}
            height={380}
            alt=''
            className='pointer-events-none'
          />
        </div>
        <div className='md:ct-container-70 grid md:grid-cols-2 xl:grid-cols-3 gap-[6px] md:gap-6'>
          {listBenefit.map((item) => (
            <div
              key={item.id}
              className={`flex gap-5 items-center bg-[#FFF5D3]/40 px-[20px] py-[30px] rounded-[20px] ${
                item.id === 4 ? 'xl:order-2' : ''
              } ${item.id === 5 ? 'md:order-3' : ''} md:backdrop-blur-lg ${
                item.id === 0 ? 'opacity-0 order-1' : ''
              }`}
            >
              <span
                className={`bg-primary-yellow/30 h-[40px] aspect-square w-fit rounded-full text-[2.8rem] flex-center flex-shrink-0 ${
                  item.id === 0 && 'opacity-0'
                }`}
              >
                {item.id}
              </span>
              <p className='text-[2.2rem]'>{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const WorkerBenefitSection = () => {
  const t = useTranslations('WorkerBenefitSection')

  const listBenefit = [
    {
      title: t('listBenefit.title1'),
    },
    {
      title: t('listBenefit.title2'),
    },
    {
      title: t('listBenefit.title3'),
    },
    {
      title: t('listBenefit.title4'),
    },
    {
      title: t('listBenefit.title5'),
    },
    {
      title: t('listBenefit.title6'),
    },
    {
      title: t('listBenefit.title7'),
    },
    {
      title: t('listBenefit.title8'),
    },
    {
      title: t('listBenefit.title9'),
    },
    {
      title: t('listBenefit.title10'),
    },
    {
      title: t('listBenefit.title11'),
    },
    {
      title: t('listBenefit.title12'),
    },
    {
      title: t('listBenefit.title13'),
    },
  ]
  return (
    <div className='relative'>
      <div className='text-center mb-[40px] mt-[80px]'>
        <h5 className='text-[3.6rem] font-bold'>
          <span className='text-primaryBlue1'>{t('benefit')} </span>
          {t('fromVuaTho')}
        </h5>
        <div className='flex-center gap-3'>
          <p className='text-baseBlack font-semibold text-[2.2rem]'>{t('text1')}</p>
          <div className='text-primaryBlue1 font-bold text-[2rem]'>{t('text2')}</div>
        </div>
      </div>
      <div className='13inch:max-w-[80%] mx-auto relative'>
        <div className='relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[6px] md:gap-[12px] xl:gap-[20px] ct-container-70 relative'>
            <div className='absolute opacity-0 md:opacity-100 md:top-[-18%] 2xl:top-[-17%] 3xl:top-[-18%] left-0'>
              <Image
                src={'/mascot/like.png'}
                alt=''
                width={128}
                height={140}
                className='pointer-events-none'
              />
            </div>
            {listBenefit.map((i: any, index: any) => (
              <div
                className={`p-[20px] rounded-[20px] flex items-center gap-[20px] last:xl:col-span-3 last:md:col-span-2 last:col-span-1 bg-[#86D3FF]/20 group ${
                  index == 0 && 'lg:backdrop-blur-lg relative'
                }`}
                key={i.title}
              >
                <span className='h-[40px] w-[40px] text-[2.8rem] flex-center bg-white/60 rounded-[10px] text-primaryBlue flex-shrink-0'>
                  {index + 1}
                </span>
                <p className='text-baseBlack text-[2.2rem]'>{i.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
