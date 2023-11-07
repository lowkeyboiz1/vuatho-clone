'use client'

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
import Image from 'next/image'
import SectionToTheMoon from '../(sections)/toTheMoon'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import SectionDownload from '../(sections)/downloadApp'
import SectionWithVuaTho from '../(sections)/withVuaTho'

const HeroSection = () => {
  return (
    <>
      <MainSection />
      <RuleSection />
      <CachThucHoatDong />
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

const CachThucHoatDong = () => {
  const listData = {
    listLeft: [
      {
        title: 'Tìm Người Xử Lí Vấn Đề',
        desc: 'Khách hàng sử dụng tính năng booking trên ứng dụng Vua Thợ để mô tả vấn đề qua văn bản, giọng nói, hình ảnh và thông tin cần thiết.',
        bg: 'text-[#3DB0E5] bg-[#3DB0E5]/5',
      },
      {
        title: 'Minh Bạch Và Rõ Ràng',
        desc: 'Booking chỉ được xác nhận khi cả hai bên đạt thỏa thuận về giải pháp và chi phí, đảm bảo sự minh bạch trong quá trình này.',
        bg: 'text-[#FC5230] bg-[#FC5230]/5',
      },
      {
        title: 'Phản Hồi Đa Dạng',
        desc: 'Khách hàng nhận báo giá từ nhiều đối tác thợ, có thêm sự lựa chọn và cơ hội thảo luận về giải pháp và chi phí.',
        bg: 'text-[#3A984A] bg-[#3A984A]/5',
      },
    ],
    listRight: [
      {
        title: 'Trí Tuệ Nhân Tạo',
        desc: 'Ứng dụng sử dụng trí tuệ nhân tạo để phân tích chính xác yêu cầu của khách hàng và xác định vấn đề hoặc nhu cầu của họ.',
        bg: 'text-[#1663F9] bg-[#1663F9]/5',
      },
      {
        title: 'Kết Nối Đột Phá',
        desc: 'Hệ thống sử dụng vị trí của khách hàng để tìm và kết nối với dịch vụ từ thợ ở gần nhất một cách dễ dàng.',
        bg: 'text-[#F961D8] bg-[#F961D8]/5',
      },
      {
        title: 'Hiệu Quả Địa Phương',
        desc: 'Dựa trên mô hình GIG Economy, yêu cầu sẽ được tự động chuyển tiếp đến các đối tác Thợ trong khu vực, giúp họ nhanh chóng xem xét và đưa ra báo giá dịch vụ phù hợp.',
        bg: 'text-[#F5953A] bg-[#3DB0E5]/5',
      },
    ],
  }

  return (
    <section className='py-[64px] 3xl:pt-[80px] ct-container-70 w-full space-y-12'>
      <div>
        <h3 className='text-center text-[3.5rem] font-semibold'>
          Cách Thức Hoạt Động
          <span className='text-primaryBlue'> Đột Phá</span>
        </h3>
        {/* <div className='w-full'>
          <p className='mx-auto w-[50%] text-[1.8rem] font-normal text-center text-[#81879D]'>
            Ứng dụng Vua Thợ sử dụng AI để kết nối nhu cầu của Bên Khách với dịch vụ phù
            hợp của Bên Thợ một cách nhanh chóng và minh bạch
          </p>
        </div> */}
      </div>
      <div className='grid grid-cols-3 gap-3 items-center'>
        <div className='w-full flex flex-col gap-6'>
          {listData.listLeft.map((i: any) => (
            <div
              key={i.title}
              className={` pl-6 pr-8 py-5 w-full flex flex-col gap-4 rounded-[10px] ${i.bg}`}
            >
              <p className='text-[2rem] font-semibold'>{i.title}</p>
              <p className='text-[#81879D] text-[1.6rem]'>{i.desc}</p>
            </div>
          ))}
        </div>
        <div className='h-[500px] w-full bg-red-300'></div>
        <div className='w-full flex flex-col gap-6'>
          {listData.listRight.map((i: any) => (
            <div
              key={i.title}
              className={`pl-6 pr-8 py-5 w-full flex flex-col gap-4 rounded-[10px] ${i.bg}`}
            >
              <p className='text-[2rem] font-semibold'>{i.title}</p>
              <p className='text-[#81879D] text-[1.6rem]'>{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
  return (
    <section className='py-[64px] 3xl:pt-[80px] ct-container-70 w-full space-y-12 !px-[100px]'>
      <div>
        <h3 className='text-center text-[3.5rem] font-semibold'>
          <span className='text-primaryBlue'>Linh Hoạt </span>
          Trong Thỏa Thuận Và Giao Dịch
        </h3>
      </div>
      <div className='grid grid-cols-6'>
        <div className='col-span-2 flex flex-col gap-[40px]'>
          {listData.map((i) => (
            <div className='flex items-center gap-6 group cursor-pointer' key={i.title}>
              <p className='text-[1.8rem] font-semibold group-hover:opacity-80 duration-300'>
                {i.title}
              </p>
              <span className='opacity-0 group-hover:opacity-50 -translate-x-[10px] group-hover:translate-x-0 duration-300'>
                <Pylogon />
              </span>
            </div>
          ))}
        </div>
        <div className='col-span-4 h-full w-full bg-red-500 rounded-[20px]'>
          Quá trình thỏa thuận và sửa đổi luôn dựa trên tinh thần hợp tác và tìm kiếm lợi
          ích chung
        </div>
      </div>
    </section>
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

  return (
    <section className='py-[64px] 3xl:pt-[80px] ct-container-70 w-full space-y-12'>
      <h3 className='text-[3.5rem] font-semibold'>
        Hình Thức Hợp Tác<span className='text-primaryBlue'> Đa dạng Và Minh Bạch </span>
      </h3>

      <div className='grid grid-cols-2 gap-12'>
        <div className='bg-slate-300 h-[400px] '></div>
        <Accordion
          defaultExpandedKeys={[DataLabel[0].label.toString()]}
          variant='splitted'
          itemClasses={{
            title: 'text-[1.8rem]',
            indicator: 'text-[2.4rem]',
            trigger: 'px-3 py-5',
            content: 'px-3 pb-5 pt-0 text-[1.6rem] text-baseBlack',
          }}
          className='gap-[10px]'
        >
          {DataLabel.map((i: any) => (
            <AccordionItem key={i.label} aria-label='Accordion 1' title={i.label}>
              {i.description}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const MainSection = () => {
  const listCard = [
    {
      id: '#',
      icon: GigEconomy,
      title: 'Đột phá',
      desc: 'Cách thức hoạt động',
    },
    {
      id: '#',
      icon: Agree,
      title: 'Minh bạch',
      desc: 'Giao dịch và thỏa thuận',
    },
    {
      id: '#',
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
            <h3 className='text-[2.4rem] md:text-[2.8rem] 13inch:text-[3rem] 2xl:text-[3.6rem] font-bold text-primaryText text-center lg:text-left'>
              Ứng dụng tìm thợ, tìm việc
              <br />
              Sử dụng công nghệ trí tuệ nhân tạo AI
            </h3>
            <p className='text-[1.8rem] 2xl:text-[2rem] text-primaryText text-center lg:text-left'>
              Vua thợ hỗ trợ đa ngôn ngữ, đa ngành nghề, cần là có
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-[20px] lg:mt-[40px]'>
              {listCard.map((i: any, index: any) => (
                <a
                  href={i.id}
                  key={index}
                  className='group rounded-[10px] z-[2] bg-white p-[20px] shadow-[0px_16px_60px_-16px_rgba(35,35,35,0.06)] hover:border-transparent hover:-translate-y-[6px] hover:bg-white duration-300 flex flex-col gap-[10px]'
                >
                  <i.icon size={40} className='text-primaryBlue' variant='Bold' />
                  <p className='text-primaryText text-[1.6rem] mt-2'>{i.desc}</p>
                  <div className='flex items-center justify-between'>
                    <p className='text-primaryText text-[2.4rem] font-semibold mt-2'>
                      {i.title}
                    </p>
                    <span className='opacity-0 group-hover:opacity-100 duration-300 -translate-x-[10px] group-hover:translate-x-0'>
                      <ArrowRight size={24} className='text-black' />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className='flex w-full relative justify-center 13inch:justify-end xl:pr-[7%]'>
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

const RuleSection = () => {
  return (
    <div className='relative'>
      <div className='absolute top-[30%]'>
        <Image src={'/logo/logo.png'} width={300} height={196} alt='' />
      </div>
      <div className='bg-white/40 rounded-[20px] ct-container-70 !p-12 -mt-[2%] relative backdrop-blur-lg'>
        <div className='flex gap-10'>
          <div className='flex flex-col gap-10'>
            <h4 className='text-baseBlack text-[3.6rem] font-semibold'>
              Vai trò của Vua Thợ
            </h4>
            <div className='space-y-6'>
              <div className='text-baseBlack bg-white p-5 rounded-[24px] shadow-sm hover:bg-white/80 duration-300 cursor-pointer select-none'>
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
          <div className='bg-gray-600 h-[400px] w-full rounded-[20px]'></div>
        </div>
      </div>
    </div>
  )
}

const CustomerBenefitSection = () => {
  const listBenefit = [
    'Tìm được thợ gần nhất để xử lí sự cố nhanh nhất',
    'Chọn được người thợ giỏi nhất, ưng ý nhất',
    'Giá thành hợp lí nhất (Không bị lừa)',
    'Được bảo hành chất lượng , xử lí sự cố lâu nhất',
    'Qui trình và giá thành hợp nhất',
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
          <div className='bg-primaryYellow1 text-black text-[1.6rem] px-[20px] py-[10px] rounded-[10px]'>
            KHÁCH HÀNG
          </div>
        </div>
      </div>
      <div className='ct-container-70 grid grid-cols-3 gap-6'>
        {listBenefit.map((item, index) => (
          <div key={item} className={`flex gap-5 items-center`}>
            <span className='bg-primary-yellow/30 h-[40px] aspect-square w-fit rounded-lg text-[1.8rem] flex-center flex-shrink-0'>
              {index + 1}
            </span>
            <p className='text-[1.6rem]'>{item}</p>
          </div>
        ))}
        <div className='bg-red-400 h-40 aspect-square w-fit'>Hii</div>
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
      <div className='text-center mb-[40px]'>
        <h5 className='text-[3.6rem] font-bold'>
          <span className='text-primaryBlue1'>Lợi Ích </span>
          Từ Vua Thợ
        </h5>
        <div className='flex-center gap-3'>
          <p className='text-baseBlack font-semibold text-[1.6rem]'>Đối với </p>
          <div className='bg-primaryBlue1 text-white text-[1.6rem] px-[20px] py-[10px] rounded-[10px]'>
            Thợ
          </div>
        </div>
      </div>
      <div className='py-[100px] bg-gradient-to-r from-[#3E80FF] via-[#3B7EFF] to-[#56A4FF]'>
        <div className='grid grid-cols-3 gap-[20px] ct-container-70'>
          {listBenefit.map((i: any, index: any) => (
            <div
              className='p-[20px] rounded-[20px] flex items-center gap-[20px] last:col-span-3 bg-white/20'
              key={i}
            >
              <span className='h-[40px] w-[40px] text-[1.8rem] flex-center bg-white/30 rounded-[10px] text-white flex-shrink-0'>
                {index + 1}
              </span>
              <p className='text-white text-[1.6rem]'>{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HeroSection
