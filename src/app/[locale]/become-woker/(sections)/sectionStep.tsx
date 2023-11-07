'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { AndroidBtn, IosBtn, QrCode } from '@/components/DownloadApps'

const SectionStep = () => {
  const listAccordion: any = [
    {
      title: 'Bước 1: Chuẩn bị đủ giấy tờ',
      content: <Step1 />,
    },
    {
      title: 'Bước 2: Tải ứng dụng Vua Thợ ',
      content: <Step2 />,
    },
    {
      title: 'Bước 3: Đăng ký tài khoản',
      content: <Step3 />,
    },
    {
      title: 'Bước 4: Định danh online eKYC',
      content: <Step4 />,
    },
    {
      title: 'Bước 5: Xét duyệt hồ sơ và kích hoạt tài khoản',
      content: <Step5 />,
    },
  ]

  const [activeSelect, setActiveSelect] = useState<string>(listAccordion[0].title)

  const [contentNumber, setContentNumber] = useState<number>(0)

  const handleActiveSelect = (title: any, index: number) => {
    setActiveSelect(title)
    setContentNumber(index)
  }

  const highlightRef = useRef(null)
  const handleSelect = () => {
    const activeButton = document.querySelector(`button.menuActive`) as HTMLElement
    const highlight = highlightRef.current

    if (activeButton && highlight) {
      const { offsetTop: top, offsetHeight: height } = activeButton
      ;(highlight as HTMLElement).style.transform = `translateY(${top}px)`
      ;(highlight as HTMLElement).style.height = `${height}px`
    }
  }
  useEffect(() => {
    handleSelect()
  }, [activeSelect])

  useEffect(() => {
    const handleResize = () => {
      handleSelect()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeSelect])

  return (
    <div className='rounded-t-[20px] 13inch:rounded-t-[40px] 3xl:rounded-t-[100px] bg-white relative -top-[40px] 3xl:-top-[80px] py-[20px] 13inch:py-[40px] 3xl:py-[80px]'>
      <div className='ct-container-70 lg:gap-20 gap-10 md:flex hidden w-full'>
        <div className='2xl:min-w-[28%] lg:min-w-[31%] min-w-[28%] relative '>
          <div
            className='absolute w-full rounded-[60px] bg-gradient-to-r from-[#FFB500] to-[#FED32C] transition'
            ref={highlightRef}
          />
          <div className='flex flex-col gap-2'>
            {listAccordion.map((i: any, index: number) => (
              <button
                onClick={() => handleActiveSelect(i.title, index)}
                className={`w-full rounded-[60px] py-6 px-10 text-[1.6rem] 13inch:text-[1.8rem] 3xl:text-[2rem] flex items-center justify-start ${
                  activeSelect === i.title
                    ? 'menuActive text-black'
                    : 'bg-transparent hover:bg-gradient-to-r hover:from-[#FFB500]/5 hover:to-[#FED32C]/5'
                }`}
                key={i.title}
              >
                <span className='z-[1] relative text-start'>{i.title}</span>
              </button>
            ))}
          </div>
        </div>
        <div className='w-full border-l-1 border-[#E1E1E1] lg:pl-20 pl-10'>
          {listAccordion[contentNumber].content}
        </div>
      </div>

      <div className='ct-container-70 block md:hidden'>
        <div className='w-full'>
          <Accordion
            className='gap-5'
            itemClasses={{
              base: 'group-[.is-splitted]:shadow-[0px_0px_12px_2px_rgba(0,0,0,0.20)]',
            }}
          >
            {listAccordion.map((i: any, index: any) => (
              <AccordionItem
                key={i.title}
                aria-label={i.title}
                title={
                  <p
                    onClick={() =>
                      window.scrollTo({
                        top: 30 * (index + 1),
                      })
                    }
                  >
                    {i.title}
                  </p>
                }
                classNames={{
                  content: 'flex flex-col gap-2',
                  title:
                    'text-[1.8rem] 13inch:text-[2rem] 3xl:text-[2.2rem] font-bold data-[open=true]:text-[#0B27B6]',
                  indicator: 'text-[2rem]',
                  base: 'group-[.is-splitted]:pl-12',
                }}
              >
                {i.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

const Step1: React.FC = () => {
  const DocRequirements = [
    'Thông tin không mờ, không nhòe, không rách, không tẩy xóa',
    'Thông tin đầy đủ trên giấy tờ',
    'Hình chụp không bị nhòe, mất 1 phần ảnh hoặc xô lệch ảnh',
    'Còn thời hạn',
    'Các loại dấu mộc rõ ràng',
  ]
  const DocType = ['Căn cước công dân', 'Hộ chiếu']

  return (
    <>
      <h3 className='text-[#0B27B6] font-bold 3xl:text-[2.6rem] 2xl:text-[2.4rem] text-[2rem]'>
        Yêu cầu chung về giấy tờ
      </h3>
      <ul className='list-disc list-inside mt-4'>
        {DocRequirements.map((item) => (
          <li key={item} className='3xl:text-[1.9rem] text-[1.7rem] text-[#555]'>
            {item}
          </li>
        ))}
      </ul>
      <h4 className='font-medium 3xl:text-[2.1rem] 2xl:text-[1.9rem] text-[1.8rem] mt-14'>
        Chuẩn bị đủ 1 trong 2 loại giấy tờ
      </h4>
      <ul className='list-disc list-inside mt-4'>
        {DocType.map((item) => (
          <li key={item} className='3xl:text-[1.9rem] text-[1.7rem] text-[#555]'>
            {item}
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-6 flex-col 13inch:flex-row mt-6'>
        <Image src={'/images/cmnd1.png'} alt='' width={324} height={191} />
        <Image src={'/images/cmnd2.png'} alt='' width={324} height={191} />
      </div>
    </>
  )
}

const Step2: React.FC = () => {
  return (
    <>
      <h3 className='text-[#0B27B6] font-bold 3xl:text-[2.6rem] 2xl:text-[2.4rem] text-[2rem]'>
        Tải ứng dụng Vua Thợ
      </h3>
      <div className='flex lg:flex-row flex-col lg:gap-40 md:gap-20 gap-10 items-start'>
        <div className='flex items-center gap-10'>
          <div className='mt-8 space-y-10'>
            <div>
              <h4 className='3xl:text-[1.9rem] text-[1.7rem] mb-2'>Hệ điều hành Android</h4>
              <AndroidBtn />
            </div>
            <div>
              <h4 className='3xl:text-[1.9rem] text-[1.7rem] mb-2'>Hệ điều hành IOS</h4>
              <IosBtn />
            </div>
          </div>
          <span className='3xl:text-[1.8rem] text-[1.6rem] text-black/50'>hoặc</span>
          <QrCode />
        </div>
      </div>
    </>
  )
}

const Step3: React.FC = () => {
  return (
    <>
      <h3 className='text-[#0B27B6] font-bold 3xl:text-[2.6rem] 2xl:text-[2.4rem] text-[2rem]'>
        Đăng ký tài khoản
      </h3>
      <h4 className='font-bold text-[2.2rem] mt-8'>Bước 1</h4>
      <p className='3xl:text-[1.9rem] text-[1.7rem] mt-5'>
        Sau khi tải thành công người dùng mở ứng dụng và chọn vai trò:
      </p>
      <div className='flex xl:flex-row flex-col gap-10 mt-3'>
        <div className='xl:w-2/3 lg:w-3/4 md:w-[85%] w-full mt-5 space-y-5'>
          <div className='flex justify-end'>
            <div className='bg-primary-yellow/10 2xl:h-[200px] xl:h-[150px] h-[130px] p-8 rounded-2xl relative flex flex-col justify-center w-full 3xl:ml-28 ml-20'>
              <p className='3xl:text-[1.8rem] text-[1.6rem] w-1/2'>
                <span className='font-bold'>Khách hàng</span>
                <br /> Nếu bạn muốn tìm kiếm <br />
                dịch vụ/thợ.
              </p>
              <Image
                alt='select customer'
                src='/become-employee/step3/khach.png'
                width={519}
                height={615}
                className='absolute -top-3 md:-right-3 right-0 3xl:h-[300px] h-[200px] w-auto object-contain z-[1]'
              />
            </div>
          </div>
          <div className='flex justify-start'>
            <div className='bg-primary-blue/10 2xl:h-[200px] xl:h-[150px] h-[130px] p-8 rounded-2xl relative flex flex-col justify-center w-full 3xl:mr-28 mr-20'>
              <div className='flex justify-end'>
                <p className='3xl:text-[1.8rem] text-[1.6rem] w-1/2 text-right'>
                  <span className='font-bold'>Thợ</span>
                  <br /> Nếu bạn muốn cung cấp dịch vụ và tìm kiếm công việc.
                </p>
              </div>
              <Image
                alt='select customer'
                src='/become-employee/step3/tho.png'
                width={519}
                height={615}
                className='absolute -bottom-3 md:-left-3 left-0 3xl:h-[300px] h-[200px] w-auto object-contain'
              />
            </div>
          </div>
          <p className='3xl:text-[1.7rem] text-[1.5rem] text-black/30 text-center pt-5'>
            Hai vai trò này sẽ được tích hợp và sử dụng trong ứng dụng Vua Thợ.
          </p>
        </div>
        <div className='xl:w-1/3 w-full'>
          <Image
            alt='login screen'
            src='/become-employee/step3/login.png'
            width={432}
            height={599}
            quality={100}
            className='w-auto'
          />
          <p className='3xl:text-[1.8rem] text-[1.6rem]'>
            Là người dùng mới, người dùng chọn nút{' '}
            <span className='font-bold'>&quot;Đăng ký&quot;</span> trên ứng dụng.
          </p>
        </div>
      </div>
      <h4 className='font-bold text-[2.2rem] mt-8'>Bước 2</h4>
      <p className='text-[1.6rem]'>
        Hệ thống yêu cầu nhập số điện thoại và mã quốc gia số điện thoại.
      </p>
      <p className='text-[1.6rem]'>Người dùng có thể nhập Mã giới thiệu (nếu có).</p>
      <div className='flex flex-col gap-6 mt-6'>
        <Image src={'/become-woker/step2-1.webp'} alt='' width={200} height={400} />
        <Image src={'/become-woker/step2-2.webp'} alt='' width={405} height={407} />
        <Image src={'/become-woker/step2-3.webp'} alt='' width={378} height={407} />
      </div>
      <h4 className='font-bold text-[2.2rem] mt-8'>Bước 3</h4>
      <p className='text-[1.6rem]'>
        Sau khi nhập số điện thoại và bấm Tiếp theo, OTP sẽ được hệ thống gửi dưới dạng
        SMS.
      </p>
      <p className='text-[1.6rem]'>Nhập mã OTP nhận được qua SMS.</p>
      <Image
        src={'/become-woker/step3-1.webp'}
        alt=''
        width={200}
        height={400}
        className='my-8'
      />
      <strong className='text-[1.6rem]'>Trường hợp nhập sai mã</strong>
      <p className='text-[1.6rem]'>
        Người dùng có thể nhận lại mã OTP bằng cách nhấn “Gửi lại”.
      </p>
      <p className='text-[1.6rem] mb-8'>Người dùng được đăng nhập vào tài khoản khách.</p>
      <div className='flex flex-col gap-8'>
        <Image src={'/become-woker/step3-2.webp'} alt='' width={430} height={400} />
        <Image src={'/become-woker/step3-3.webp'} alt='' width={410} height={400} />
      </div>
      <p className='my-8'>
        <strong className='text-[1.6rem]'>
          Hệ thống kiểm tra mã OTP, và nếu mã đúng hiển thị như hình.
        </strong>
      </p>
      <Image src={'/become-woker/step3-4.webp'} alt='' width={410} height={400} />
    </>
  )
}

const Step4: React.FC = () => {
  return (
    <>
      <h3 className='text-[#0B27B6] font-bold 3xl:text-[2.6rem] 2xl:text-[2.4rem] text-[2rem]'>
        Định danh online eKYC
      </h3>
      <p className='mt-8 3xl:text-[1.8rem] text-[1.6rem]'>
        Để có thể sử dụng các dịch vụ, tính năng của ứng dụng Vua Thợ, người dùng được yêu cầu
        thực hiện eKYC.
      </p>
      <p className='mt-5 3xl:text-[1.8rem] text-[1.6rem]'>
        Ứng dụng Vua Thợ hợp tác với SumSub để thực hiện việc định danh tài khoản online. Việc
        định danh yêu cầu người dùng cung cấp các thông tin sau:
      </p>
      <div className='flex justify-center mt-5'>
        <div className='border-2 border-base-gray p-4 w-fit rounded-xl relative'>
          <p className='3xl:text-[1.7rem] text-[1.5rem] text-center font-medium rounded-r-full bg-base-gray shadow-md p-5 pr-10 absolute top-3 -left-1'>
            Quốc gia sinh sống
          </p>
          <Image
            alt='noti-kyc'
            src='/become-employee/step4/nation.png'
            width={640}
            height={518}
            quality={100}
            className='2xl:w-[450px] w-[350px] h-auto object-contain'
          />
        </div>
      </div>
      <div className='flex justify-center mt-5'>
        <div className='border-2 border-base-gray p-4 pt-32 w-fit rounded-xl relative'>
          <p className='3xl:text-[1.7rem] text-[1.5rem] text-center font-medium rounded-r-full bg-base-gray shadow-md p-5 pr-10 absolute top-3 -left-1'>
            Giấy tờ cá nhân
          </p>
          <Image
            alt='noti-kyc'
            src='/become-employee/step4/docs.png'
            width={640}
            height={439}
            quality={100}
            className='2xl:w-[450px] w-[350px] h-auto object-contain'
          />
          <p className='text-center text-[1.6rem] text-black/30 mt-2'>
            Chỉ cần chọn 1 loại giấy tờ để xác thực
            <br />
            (Khuyến khích sử dụng Thẻ căn cước - CCCD)
          </p>
        </div>
      </div>
      <p className='3xl:text-[1.8rem] text-[1.6rem] mt-8'>
        Sau khi chọn quốc gia và loại giấy tờ cá nhân liên quan, hệ thống yêu cầu người
        dùng thực hiện chụp hình 2 mặt loại giấy tờ đã chọn và chụp hình selfie theo hướng
        dẫn của bên thứ 3 SumSub.
      </p>
      <div className='flex justify-center mt-8'>
        <div className='border-2 border-base-gray p-4 pt-32 w-fit rounded-xl relative'>
          <p className='3xl:text-[1.7rem] text-[1.5rem] text-center font-medium rounded-r-full bg-base-gray shadow-md p-5 pr-10 absolute top-3 -left-1'>
            Xác minh danh tính
          </p>
          <Image
            alt='noti-kyc'
            src='/become-employee/step4/kyc.png'
            width={640}
            height={439}
            quality={100}
            className='2xl:w-[450px] w-[350px] h-auto object-contain'
          />
        </div>
      </div>
    </>
  )
}

const Step5: React.FC = () => {
  return (
    <>
      <h3 className='text-[#0B27B6] font-bold 3xl:text-[2.6rem] 2xl:text-[2.4rem] text-[2rem]'>
        Xét duyệt hồ sơ và kích hoạt tài khoản
      </h3>
      <p className='mt-8 3xl:text-[1.8rem] text-[1.6rem]'>
        Sau khi hoàn tất các bước trên thì đợi hệ thống xét duyệt tài khoản và thông báo
        trong thời gian sớm nhất.
      </p>
      <div className='bg-black/[0.02] mt-8 w-fit p-8 rounded-xl flex md:flex-row flex-col gap-10 items-center'>
        <Image
          alt='noti-kyc'
          src='/become-employee/step5/noti.png'
          width={640}
          height={492}
          quality={100}
          className='lg:h-[250px] h-[200px] w-auto object-contain'
        />
        <p className='text-[1.7rem] md:w-[400px] md:text-left text-center'>
          Sau khi hoàn tất việc định danh, hệ thống sẽ trả kết quả dự tính trong vòng 5
          phút.
        </p>
      </div>
      <p className='text-[1.7rem] mt-8'>Kết quả hệ thống sẽ bao gồm:</p>
      <div className='flex xl:flex-row flex-col gap-10 mt-8 items-center'>
        <div className='2xl:w-[400px] xl:w-[300px] lg:w-[350px] w-[300px] space-y-6 flex flex-col items-center'>
          <Image
            alt='noti-kyc'
            src='/become-employee/step5/success.png'
            width={640}
            height={492}
            quality={100}
            className='2xl:w-[400px] w-[300px] h-auto object-contain'
          />
          <p className='text-[1.6rem] text-black/30 text-center'>
            Người dùng có thể sử dụng tất cả dịch vụ và các tính năng của ứng dụng
          </p>
        </div>
        <span className='text-[1.7rem] text-black/50'>Hoặc</span>
        <div className='2xl:w-[400px] xl:w-[300px] lg:w-[350px] w-[300px] space-y-6 flex flex-col items-center'>
          <Image
            alt='noti-kyc'
            src='/become-employee/step5/error.png'
            width={640}
            height={492}
            quality={100}
            className='2xl:w-[400px] w-[300px] h-auto object-contain'
          />
          <p className='text-[1.6rem] text-black/30 text-center'>
            Người dùng phải thực hiện việc xác minh lần nữa để có thể sử dụng tất cả dịch
            vụ và các tính năng của ứng dụng
          </p>
        </div>
      </div>
    </>
  )
}

export default SectionStep
