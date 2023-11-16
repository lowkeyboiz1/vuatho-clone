'use client'

import { AndroidBtn, IosBtn, QrCode } from '@/components/DownloadApps'
import { motion } from 'framer-motion'
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
import Image from 'next/image'
import SectionToTheMoon from '../(sections)/toTheMoon'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import SectionDownload from '../(sections)/downloadApp'
import SectionWithVuaTho from '../(sections)/withVuaTho'
import { useState } from 'react'

const scrollToElement = (id: string) => {
  const homeElement: any = document.getElementById(`${id}`)
  if (homeElement) {
    homeElement.scrollIntoView({ behavior: 'smooth' })
  }
}
const HeroSection = () => {
  return (
    <>
      <MainSection />
      <RuleSection />
      <AISection />
      {/* <CachThucHoatDong /> */}
      <MinhBach />
      <HinhThucKetNoi />
      <WorkerBenefitSection />
      <CustomerBenefitSection />
      <SectionToTheMoon />
      <SectionDownload />
      <SectionWithVuaTho />
    </>
  )
}
const AISection = () => {
  return (
    <div
      id='AI'
      className='bg-gradient-to-br from-[#FFF]/30 via-[#D2E7FF] to-[#66B9F5] w-full py-[40px] md:py-[68px] backdrop-blur-sm mt-[40px]'
    >
      <div className='ct-container-70 relative'>
        <div className='absolute bg-[#0094FF] w-[166px] h-[166px] rounded-[40px] blur-[100px] bottom-[10%] left-[15%]' />
        <h4 className='text-center text-baseBlack text-[3.6rem] font-semibold w-full'>
          <span className='text-primaryBlue1 '>Công Nghệ AI Đột Phá </span>
          Trong Hệ Thống Của Chúng Tôi
        </h4>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center md:justify-end 13inch:justify-center h-full w-full md:absolute'>
            <div className='flex items-center justify-center w-full md:w-1/2 13inch:w-auto'>
              {/* <Image
                src={'/robot_animation_test.gif'}
                alt='AIRobot'
                width={338}
                height={400}
              /> */}
            </div>
          </div>
          <div className='grid grid-cols-1 13inch:grid-cols-2 gap-6 13inch:gap-32 py-12 items-center'>
            <div className='bg-gradient-to-r from-[#3177FF] to-[#6ADBFE]/60 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-white w-full md:max-w-[50%] 13inch:ml-[30%] 13inch:mt-[7%] backdrop-blur-[10px] z-[10]'>
              <h5 className='text-[1.8rem] font-semibold'>Trợ lý AI thông minh</h5>
              <p className='text-[1.6rem]'>
                Giúp xác định rõ vấn đề của khách hàng, từ đó tìm đúng thợ phù hợp cho
                khách hàng
              </p>
            </div>

            <div className='bg-white/40 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-baseBlack w-full md:max-w-[50%] 13inch:ml-[28%] backdrop-blur-[10px] z-[10]'>
              <h5 className='text-[1.8rem] font-semibold'>
                AI hỗ trợ kiểm tra kỹ năng thợ
              </h5>
              <p className='text-[1.6rem]'>
                Nâng cao chất lượng thợ và đảm bảo dịch vụ hoàn hảo tốt nhất cho khách
                hàng
              </p>
            </div>
            <div className='bg-white/40 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-baseBlack w-full md:max-w-[50%] 13inch:ml-[42%] 13inch:mt-[14%] backdrop-blur-[10px] z-[10]'>
              <h5 className='text-[1.8rem] font-semibold'>Sự đa dạng ngôn ngữ với AI</h5>
              <p className='text-[1.6rem]'>
                Không bao giờ bị rào cản ngôn ngữ ngăn cách bạn và giải pháp mà bạn cần
              </p>
            </div>
            <div className='bg-white/40 flex flex-col gap-[10px] p-[20px] rounded-[20px] text-baseBlack w-full md:max-w-[50%] 13inch:ml-[18%] backdrop-blur-[10px] z-[10]'>
              <h5 className='text-[1.8rem] font-semibold'>
                Tốc độ và hiệu suất vượt trội
              </h5>
              <p className='text-[1.6rem]'>
                AI giúp bạn tiết kiệm thời gian và tìm ra giải pháp một cách nhanh nhất
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MinhBach = () => {
  const listData = [
    {
      title: 'Rõ ràng chi tiết',
      desc: 'Bên Thợ cung cấp một cách chi tiết và toàn diện về hạng mục công việc, nguyên vật liệu cần thiết, và bảng giá. Điều này giúp Bên Khách hiểu rõ về dịch vụ sẽ được cung cấp.',
    },
    {
      title: 'Xác nhận thay đổi',
      desc: 'Để đảm bảo rằng mọi thay đổi đều hợp lệ, Bên Khách phải xác nhận bất kỳ sửa đổi nào được thực hiện trên Phiếu Công Tác.',
    },
    {
      title: 'Đồng thuận',
      desc: 'Thay đổi chỉ được chấp nhận khi có sự đồng thuận từ cả hai bên.',
    },
    {
      title: 'Thảo luận linh hoạt',
      desc: 'Cả hai bên đều có khả năng tham gia vào việc điều chỉnh và thảo luận về nội dung Phiếu Công Tác, giúp tối ưu hóa các yêu cầu và mong muốn.',
    },
    {
      title: 'Trung thực',
      desc: 'Mọi sử đổi trên Phiếu Công Tác phải phản ảnh đúng nhu cầu và mong muốn của cả hai bên, không làm ảnh hưởng đến chất lượng dịch vụ.',
    },
    {
      title: 'Thỏa thuận công bằng',
      desc: 'Quá trình thỏa thuận và sửa đổi luôn dựa trên tinh thần hợp tác và tìm kiếm lợi ích chung',
    },
  ]
  const [content, setContent] = useState(listData[0])

  const [selectedKeys, setSelectedKeys] = useState([listData[0].title.toString()])

  return (
    <div id='trade' className='h-[500px] md:h-auto'>
      <section className='py-[64px] 3xl:pt-[80px] ct-container-70 w-full space-y-12 md:!px-[100px]'>
        <div>
          <h3 className='text-center text-[3.5rem] font-semibold'>
            <span className='text-primaryBlue'>Linh Hoạt </span>
            Trong Thỏa Thuận Và Giao Dịch
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
                  className={`text-[1.8rem] font-semibold duration-300 ${
                    content.title == i.title ? 'text-primaryBlue1' : 'text-baseBlack'
                  }`}
                >
                  {i.title}
                </p>
                <span
                  className={`duration-300 ${
                    content.title == i.title
                      ? 'text-primaryBlue1 opacity-100'
                      : 'text-baseBlack opacity-0  group-hover:opacity-50 -translate-x-[10px] group-hover:translate-x-0'
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
        <div className='block md:hidden'>
          <Accordion
            showDivider={false}
            selectedKeys={selectedKeys}
            onSelectionChange={(i: any) => setSelectedKeys(new Set(Array.from(i)) as any)}
            variant='light'
            itemClasses={{
              title: 'text-[1.8rem]',
              indicator: 'text-[2.4rem] text-white',
              trigger: 'px-3 py-5',
              content: 'px-3 pb-5 pt-0 text-[1.6rem] text-baseBlack',
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
                      : 'bg-white backdrop-blur-2xl'
                  }  px-[20px] rounded-[12px] font-semibold py-6 13inch:py-4`,
                  content: `p-[20px] text-[1.6rem] text-baseBlack`,
                  title:
                    Array.from(selectedKeys)[0] == i.title
                      ? 'text-white text-[1.8rem]'
                      : 'text-baseBlack text-[1.8rem]',
                }}
              >
                {console.log(Array.from(selectedKeys)[0] == i.title)}
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
  const DataLabel: any = [
    {
      label: 'Lựa Chọn Đa Dạng',
      description:
        'Ứng dụng Vua Thợ sử dụng AI để kết nối nhu cầu của Bên Khách với dịch vụ phù hợp của Bên Thợ một cách nhanh chóng và minh bạch',
      image: null,
      color: 'bg-[#d9f99d]',
    },
    {
      label: 'Đáp Ứng Nhanh Chóng',
      description:
        'Với sự hỗ trợ của công nghệ Al, Vua Thợ tự động chuyển tiếp yêu cầu đến đối tác Thợ phù hợp, giúp tối ưu hoá quá trình kết nối.',
      image: null,
      color: 'bg-[#d9f99d]',
    },
    {
      label: 'Minh Bạch Giải Pháp & Chi Phí',
      description:
        '"Booking" chỉ được xác nhận sau khi cả hai bên đồng tình về giải pháp và chi phí, giúp tạo ra sự rõ ràng và tránh hiểu lầm.',
      image: null,
      color: 'bg-[#d9f99d]',
    },
    {
      label: 'Tự Do Phát Triển',
      description:
        'Tạo điều kiện cho các chuyên gia tự do phát triển và khai thác tiềm năng của mình dựa trên mô hình GIG Economy.',
      image: null,
      color: 'bg-[#d9f99d]',
    },
    {
      label: 'Hợp Đồng Thông Minh',
      description:
        'Mỗi giao dịch được đảm bảo bằng hợp đồng thông minh, đảm bảo sự chính xác và minh bạch.',
      image: null,
      color: 'bg-[#d9f99d]',
    },
    {
      label: 'Bảo Vệ Quyền Lợi',
      description:
        'Vua Thợ luôn đặt lợi ích của cộng đồng lên hàng đầu, từ việc bảo vệ quyền lợi đến việc hỗ trợ cộng đồng trong tình huống khó khăn.',
      image: null,
      color: 'bg-[#d9f99d]',
    },
  ]

  const [selectedKeys, setSelectedKeys] = useState([DataLabel[0].label.toString()])

  return (
    <section
      id='multi'
      className='py-[64px] 3xl:pt-[80px] ct-container-70 w-full space-y-12 min-h-[80vh]'
    >
      <h3 className='text-[3.5rem] font-semibold'>
        Hình Thức Hợp Tác<span className='text-primaryBlue'> Đa dạng Và Minh Bạch </span>
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='flex-center md:h-[400px]'>
          <Image src={'/mascot/ghichu.png'} alt='' width={375} height={300} />
        </div>
        <div className='relative'>
          <div className='absolute top-0 h-full w-full right-0 bg-[#84CCFF]/30 blur-[100px]' />
          <Accordion
            showDivider={false}
            selectedKeys={selectedKeys}
            onSelectionChange={(i: any) => setSelectedKeys(new Set(Array.from(i)) as any)}
            variant='light'
            itemClasses={{
              title: 'text-[1.8rem]',
              indicator: 'text-[2.4rem] text-white',
              trigger: 'px-3 py-5',
              content: 'px-3 pb-5 pt-0 text-[1.6rem] text-baseBlack',
            }}
            className='gap-[6px] md:gap-[10px] flex flex-col'
          >
            {DataLabel.map((i: any) => (
              <AccordionItem
                key={i.label}
                aria-label='Accordion 1'
                title={i.label}
                classNames={{
                  indicator:
                    Array.from(selectedKeys)[0] == i.label
                      ? 'text-white text-[2rem]'
                      : 'text-black text-[2rem]',
                  trigger: ` ${
                    Array.from(selectedKeys)[0] == i.label
                      ? 'bg-gradient-to-r from-[#4A6FF0] to-[#7C99FF]'
                      : 'bg-white backdrop-blur-2xl'
                  }  px-[20px] rounded-[12px] font-semibold py-6 13inch:py-4`,
                  content: `p-[20px] text-[1.6rem] text-baseBlack`,
                  title:
                    Array.from(selectedKeys)[0] == i.label
                      ? 'text-white text-[1.8rem]'
                      : 'text-baseBlack text-[1.8rem]',
                }}
              >
                {console.log(Array.from(selectedKeys)[0] == i.label)}
                {i.description}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

//done
const MainSection = () => {
  const listCard = [
    {
      id: 'AI',
      icon: GigEconomy,
      title: 'Đột phá',
      desc: 'Cách thức hoạt động',
    },
    {
      id: 'trade',
      icon: Agree,
      title: 'Minh bạch',
      desc: 'Giao dịch và thỏa thuận',
    },
    {
      id: 'multi',
      icon: Support,
      title: 'Đa dạng',
      desc: 'Hình thức hợp tác',
    },
  ]
  return (
    <div className='w-full relative'>
      <div className='blur-3xl rounded-[50%] bg-blue-400/20 absolute top-[20%] left-[8%] h-full w-fit aspect-square z-[-2]' />
      <div className='blur-3xl rounded-[50%] bg-violet-400/20 absolute -left-[10%] top-0 h-1/2 aspect-square w-fit z-[-2]' />
      <div className='blur-3xl rounded-[50%] bg-yellow-400/20 absolute right-0 bottom-[20%] h-1/2 aspect-square w-fit z-[-2]' />
      <div className='blur-3xl rounded-[50%] bg-orange-300/20 absolute right-[12%] -bottom-[15%] h-1/2 aspect-square w-fit z-[-2]' />

      <div className='pt-[64px] 3xl:pt-[80px] ct-container-70'>
        <div className='py-20 flex items-center justify-between flex-col lg:flex-row'>
          <div className='flex flex-col gap-4 w-full'>
            <h3 className='text-[2.4rem] md:text-[2.8rem] 13inch:text-[3rem] 2xl:text-[3.6rem] font-bold text-primaryText text-left'>
              Ứng dụng <span className='text-primaryBlue1'> tìm thợ, tìm việc</span>
              <br />
              Sử dụng công nghệ{' '}
              <span className='text-primaryBlue1'> trí tuệ nhân tạo AI</span>
            </h3>
            <p className='text-[1.8rem] 2xl:text-[2rem] text-primaryText text-left'>
              Vua thợ hỗ trợ đa ngôn ngữ, đa ngành nghề, cần là có
            </p>
            <div className='flex justify-between'>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[20px] lg:mt-[40px] lg:w-full md:w-[45%] w-full'>
                {listCard.map((i: any, index: any) => (
                  <div
                    onClick={() => scrollToElement(i.id)}
                    key={index}
                    className='group rounded-[10px] cursor-pointer z-[2] bg-white xl:p-[20px] lg:p-[10px] p-[20px] shadow-[0px_16px_60px_-16px_rgba(35,35,35,0.06)] hover:border-transparent lg:hover:-translate-y-[6px] hover:bg-white duration-300 flex md:flex-col gap-[10px]'
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
                  </div>
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
                  <Image src={'/mascot/khach.png'} alt='khang' width={140} height={154} />
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
//done
const RuleSection = () => {
  return (
    <div className='relative mt-[40px]'>
      <div className='absolute top-[30%]'>
        <Image src={'/logo/logo.png'} width={300} height={196} alt='' />
      </div>
      <div className='bg-white/40 rounded-[20px] ct-container-70 p-[10px] md:!p-[20px] -mt-[2%] relative backdrop-blur-lg'>
        <div className='flex gap-10 justify-between items-center flex-col md:flex-row'>
          <div className='flex flex-col gap-10 w-full'>
            <h4 className='text-baseBlack text-[3.6rem] font-semibold'>
              <span className='text-primaryBlue1'>Vai trò </span> của Vua Thợ
            </h4>
            <div className='space-y-6'>
              <div className='text-baseBlack bg-white p-8 md:p-5 rounded-[24px] shadow-sm hover:bg-white/80 duration-300 cursor-pointer select-none'>
                <div className='flex items-start space-x-5'>
                  <Binoculars className={'w-[48px]'} />
                  <div className='space-y-[10px]'>
                    <h1 className='text-[2.4rem] text-baseBlack'>Đối với thợ</h1>
                    <p className='text-[1.6rem]'>
                      Kết nối mọi người trên toàn thế giới và tạo nhiều cơ hội.
                    </p>
                  </div>
                </div>
              </div>
              <div className='text-baseBlack bg-white p-5 rounded-[24px] shadow-sm hover:bg-white/80 duration-300 cursor-pointer select-none'>
                <div className='flex items-start space-x-5'>
                  <Mission className={'w-[48px]'} />
                  <div className='space-y-[10px]'>
                    <h1 className='text-[2.4rem] text-baseBlack'>Đối với khách hàng</h1>
                    <p className='text-[1.6rem]'>
                      Tạo không gian làm việc tự do và tiện lợi, sử dụng công nghệ tiên
                      tiến.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-[20px] md:mr-[10%]'>
            <Image
              src={'/mascot/family.png'}
              alt=''
              width={540}
              height={400}
              className='lg:h-auto md:h-[400px] h-[300px] w-auto object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const CustomerBenefitSection = () => {
  const listBenefit = [
    { title: 'Tìm được thợ gần nhất để xử lí sự cố nhanh nhất', id: 1 },
    { title: 'Chọn được người thợ giỏi nhất, ưng ý nhất', id: 2 },
    { title: 'Giá thành hợp lí nhất (Không bị lừa)', id: 3 },
    { title: '', id: 0 },
    { title: 'Được bảo hành chất lượng , xử lí sự cố lâu nhất', id: 4 },
    { title: 'Qui trình và giá thành hợp nhất', id: 5 },
  ]
  return (
    <>
      <div className='text-center my-[40px]'>
        <h5 className='text-[3.6rem] font-bold'>
          <span className='text-primaryBlue1'>Lợi Ích </span>
          Từ Vua Thợ
        </h5>
        <div className='flex-center gap-3'>
          <p className='text-baseBlack font-semibold text-[1.6rem]'>Đối với </p>
          <div className='text-[#FCB813] text-[1.6rem] py-[10px] rounded-[10px]'>
            KHÁCH HÀNG
          </div>
        </div>
      </div>
      <div className='relative'>
        <div className='absolute hidden md:block bottom-[-60%] xl:bottom-[-100%] left-0 w-[50%] xl:w-full'>
          <Image
            src={'/mascot/image_loi_ich_khach.png'}
            width={448}
            height={380}
            alt=''
          />
        </div>
        <div className='ct-container-70 grid md:grid-cols-2 xl:grid-cols-3 gap-[6px] md:gap-6'>
          {listBenefit.map((item, index) => (
            <div
              key={item.id}
              className={`flex gap-5 items-center bg-[#FFF5D3]/40 px-[20px] py-[30px] rounded-[20px]
              ${item.id === 4 ? 'xl:order-2' : ''} ${
                item.id === 5 ? 'md:order-3' : ''
              } backdrop-blur-lg ${item.id === 0 ? 'opacity-0 order-1' : ''}`}
            >
              <span
                className={`bg-primary-yellow/30 h-[40px] aspect-square w-fit rounded-full text-[1.8rem] flex-center flex-shrink-0 ${
                  item.id === 0 && 'opacity-0'
                }`}
              >
                {item.id}
              </span>
              <p className='text-[1.6rem]'>{item?.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const WorkerBenefitSection = () => {
  const listBenefit = [
    {
      title: 'Việc làm gần nhà nhất',
    },
    {
      title: 'Thu nhập cao luôn ổn định',
    },
    {
      title: 'Thời gian làm việc tự do',
    },
    {
      title: 'Cùng Vua Thợ xây dựng Cộng đồng nhân ái hỗ trợ các hoàn cảnh khó khăn',
    },
    {
      title: 'Cùng Vua Thợ chia sẻ lợi nhuận (50-50% Vật tư , nguyên liệu)',
    },
    {
      title: 'Cùng Vua Thợ xây dựng Cộng đồng thợ chia sẻ giúp đỡ nâng cao tay nghề',
    },
    {
      title: 'Công nhận tài năng và cấp bằng từ Vua Thợ thông qua trung tâm nghề',
    },
    {
      title: 'Phúc lợi hỗ trợ khi gặp tai nạn lao động',
    },
    {
      title: 'Khi về hưu lớn tuổi sẽ được bảo hiểm',
    },
    {
      title: 'Tham gia các khóa đào tạo chuyên nghiệp từ Vua Thợ',
    },
    {
      title: 'Được tham gia thi thợ giỏi hàng quí - hàng năm từ Vua Thợ',
    },
    {
      title: 'Được tham gia vĩnh viễn chương trình mỗi 1000 thợ nhận 1 xe WaveRSX',
    },
    {
      title:
        'Được nhận vé may mắn vĩnh viễn tham gia chương trình trúng thưởng hàng tháng từ Vua Thợ',
    },
  ]
  return (
    <>
      <div className='text-center mb-[40px] '>
        <h5 className='text-[3.6rem] font-bold'>
          <span className='text-primaryBlue1'>Lợi Ích </span>
          Từ Vua Thợ
        </h5>
        <div className='flex-center gap-3'>
          <p className='text-baseBlack font-semibold text-[1.6rem]'>Đối với </p>
          <div className='text-[#FCB813] text-[1.6rem]'>THỢ</div>
        </div>
      </div>
      <div className='pb-[40px] md:pb-[100px] 13inch:max-w-[80%] mx-auto relative'>
        <motion.div
          className='absolute left-0 bottom-0 z-[10]'
          initial={{ x: -800 }}
          animate={{
            x: 3000,
            y: [0, 0, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            rotate: [0, 0, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={{ duration: 2, delay: 2 }}
        >
          <Image src='/mascot/xe.png' width={400} height={200} alt='' />
        </motion.div>
        <motion.div
          className='absolute left-0 bottom-0 z-[10]'
          initial={{ x: -800 }}
          animate={{
            x: 3000,
            // y: [0, 0, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          <img
            src='https://o.remove.bg/downloads/8bc5b239-141b-4ca4-894f-5cb38673e78a/png-transparent-police-motorcycle-removebg-preview.png'
            width={400}
            height={200}
            alt=''
          />
        </motion.div>
        <motion.div
          className='absolute right-0 bottom-0 z-[-3]'
          initial={{ x: 800 }}
          animate={{
            x: -3000,
            y: [0, 0, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            rotate: [0, 0, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          }}
          transition={{ duration: 2, delay: 4 }}
        >
          <Image
            src='/mascot/xe.png'
            width={400}
            height={200}
            alt=''
            className='scale-x-[-1]'
          />
        </motion.div>
        <motion.div
          className='absolute right-0 bottom-0 z-[-3]'
          initial={{ x: 800 }}
          animate={{ x: -3000 }}
          transition={{ duration: 1.2, delay: 4.5 }}
        >
          <img
            src='https://o.remove.bg/downloads/8bc5b239-141b-4ca4-894f-5cb38673e78a/png-transparent-police-motorcycle-removebg-preview.png'
            width={400}
            height={200}
            alt=''
            className='scale-x-[-1]'
          />
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[6px] md:gap-[12px] xl:gap-[20px] ct-container-70 relative'>
          <div className='absolute opacity-0 md:opacity-100 md:top-[-20%] xl:top-[-23%] left-0'>
            <Image src={'/mascot/like.png'} alt='' width={128} height={140} />
          </div>
          {listBenefit.map((i: any, index: any) => (
            <div
              className={`p-[20px] rounded-[20px] flex items-center gap-[20px] last:xl:col-span-3 last:md:col-span-2 last:col-span-1 bg-[#86D3FF]/20 group cursor-pointer ${
                index == 0 && 'backdrop-blur-lg'
              }`}
              key={i}
            >
              <span className='h-[40px] w-[40px] text-[1.8rem] flex-center bg-white/60 rounded-[10px] text-primaryBlue flex-shrink-0'>
                {index + 1}
              </span>
              <p className='text-baseBlack text-[1.6rem]'>{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection
