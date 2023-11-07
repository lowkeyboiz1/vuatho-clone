'use client'

import React from 'react'

import { AndroidBtn, IosBtn, QrCode } from '@/components/DownloadApps'

import { Tabs, Tab, Image, Accordion, AccordionItem } from '@nextui-org/react'

const SectionTest = () => {
  const tabs = [
    {
      id: '1',
      label: 'Bước 1: Tải ứng dụng',
      content: <Step1 />,
    },
    {
      id: '2',
      label: 'Bước 2: Đăng ký/Đăng nhập',
      content: <Step2 />,
    },
    {
      id: '3',
      label: 'Bước 3: Tìm thợ',
      content: <Step3 />,
    },
  ]
  return (
    <div className='flex w-full flex-col'>
      <div className='md:block hidden'>
        <Tabs
          aria-label='Dynamic tabs'
          items={tabs}
          variant='light'
          classNames={{
            tabList: 'gap-6 w-full relative rounded-none py-2',
            cursor: 'w-full bg-[#405AB7]',
            tab: 'max-w-fit px-[20px] py-[30px] flex items-center justify-center bg-[#F8F8F8]',
            tabContent:
              'text-black group-data-[selected=true]:text-[#fff] text-[1.8rem] font-semibold',
          }}
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <div className='border-[1px] border-[#E1E1E1] p-[20px] rounded-2xl'>
                {item.content}
              </div>
            </Tab>
          )}
        </Tabs>
      </div>
      <div className='md:hidden block'>
        <Accordion
          className='gap-5'
          itemClasses={{
            base: 'group-[.is-splitted]:shadow-[0px_0px_12px_2px_rgba(0,0,0,0.20)]',
          }}
        >
          {tabs.map((i: any, index: any) => (
            <AccordionItem
              key={`tab-find-worker-${i.id}`}
              aria-label={i.label}
              title={
                <p
                  onClick={() =>
                    window.scrollTo({
                      top: 30 * (index + 1),
                    })
                  }
                >
                  {i.label}
                </p>
              }
              classNames={{
                content: 'flex flex-col gap-2',
                title:
                  'text-[1.8rem] 13inch:text-[2rem] 3xl:text-[2.2rem] font-bold data-[open=true]:text-[#0B27B6]',
                indicator: 'text-[2rem]',
                base: 'group-[.is-splitted]:pl-12 pb-5',
              }}
            >
              {i.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

const Step1 = () => {
  return (
    <div className='md:flex flex-col gap-[20px] border-2 md:border-none border-base-gray rounded-lg md:p-0 p-6'>
      <h3 className='text-[#405AB7] font-semibold text-[2.4rem]'>Tải ứng dụng Vua Thợ</h3>
      <div className='flex items-center gap-10 mt-8'>
        <div className='space-y-10'>
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
  )
}

const Step2 = () => {
  const tabs = [
    {
      id: '4',
      label: 'Đăng ký',
      content: <Register />,
    },
    {
      id: '5',
      label: 'Đăng nhập',
      content: <Login />,
    },
  ]
  return (
    <div className='flex flex-col gap-[20px] border-2 md:border-none border-base-gray rounded-lg md:p-0 p-6'>
      <h3 className='text-[#405AB7] font-semibold text-[2.4rem]'>
        Đăng ký/Đăng nhập tài khoản
      </h3>
      <div className='lg:flex hidden w-full gap-[20px]'>
        <Tabs
          aria-label='Dynamic tabs'
          items={tabs}
          variant='light'
          classNames={{
            tabList: 'gap-6 w-full relative rounded-none py-2 flex-col',
            cursor: 'w-full bg-[#405AB7]',
            tab: 'xl:min-w-[300px] min-w-[100px] p-[24px] flex items-center justify-start border-[1px] border-[#E1E1E1]',
            tabContent:
              'text-black group-data-[selected=true]:text-[#fff] text-[1.8rem] font-semibold',
          }}
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <div className='w-full'>{item.content}</div>
            </Tab>
          )}
        </Tabs>
      </div>
      {/* <div className='w-full gap-[20px] flex flex-col'>
        {tabs.map((item) => (
          <div key={item.id} title={item.label}>
            <div className='w-full'>{item.content}</div>
          </div>
        ))}
      </div> */}
      <div className='lg:hidden block'>
        <Register />
        <Login />
      </div>
    </div>
  )
}

const Step3 = () => {
  const listRegisterItem = [
    {
      url: 'findWorker1.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 1</p>
          <p className='text-[1.8rem]'>
            Nhấn vào biểu tượng “tìm thợ” ở bên dưới thanh điều hướng để mở trang tìm thợ
          </p>
        </>
      ),
    },
    {
      url: 'findWorker2.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 2</p>
          <p className='text-[1.8rem]'>
            Người dùng khách thêm các chi tiết cho đơn tìm thợ
          </p>
          <ul className='list-inside list-disc text-[1.6rem]'>
            <li>Dịch vụ</li>
            <li>Mô tả chi tiết đơn</li>
            <li>Thời gian</li>
            <li>Hình ảnh - video - mô tả (nếu có)</li>
          </ul>
        </>
      ),
    },
    {
      url: 'findWorker3.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 3</p>
          <p className='text-[1.8rem]'>
            Bấm &quot;Tìm thợ&quot; và xác nhận lại thông tin
          </p>
          <p className='text-[1.8rem]'>
            Sau khi đã kiểm tra kĩ lại thông tin một lần nữa thì bạn hãy nhấn nút
            &quot;Xác nhận&quot; để bắt đầu tìm thợ
          </p>
        </>
      ),
    },
    {
      url: 'findWorker4.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 4</p>
          <p className='text-[1.8rem]'>
            Sau khi đã xác nhận ở bước 3, màn hình sẽ chuyển sang bản đồ để bắt đầu quét
            tìm thợ
          </p>
          <p className='text-[1.8rem]'>
            Khi có thợ báo giá hệ thống sẽ thông báo cho khách hàng Khách hàng sẽ chọn thợ
            phù hợp bằng cách bấm nút &quot;Xem ngay&quot; để xem chi tiết thông tin thợ
            và báo giá
          </p>
        </>
      ),
    },
    {
      url: 'findWorker5-1.png',
      url2: 'findWorker5-2.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 5</p>
          <p className='text-[1.8rem]'>
            Sau khi vào trang Chi tiết báo giá, nếu khách đồng ý đặt thợ hãy bấm nút
            &quot;Đặt thợ&quot;
          </p>
          <p className='text-[1.8rem]'>
            Hệ thống sẽ đợi thợ xác nhận và đến nhà khách thực hiện kiểm tra chốt giá
          </p>
        </>
      ),
    },
    {
      url: 'findWorker6-1.png',
      url2: 'findWorker6-2.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 6</p>
          <p className='text-[1.8rem]'>
            Người dùng thực hiện thanh toán sau khi thợ hoàn tất công việc bằng cách bấm
            vào &quot;Thanh toán&quot; tại trang chi tiết đơn hàng
          </p>
          <p className='text-[1.8rem]'>
            Người dùng có thể thêm mã ưu đãi (nếu có), tip cho thợ (nếu có), chọn phương
            thức và bấm &quot;Xác nhận&quot;
          </p>
        </>
      ),
    },
  ]

  return (
    <div className='border-2 md:border-none border-base-gray rounded-lg md:p-0 p-6'>
      <h3 className='text-[#405AB7] font-semibold text-[2.4rem]'>Tìm thợ</h3>
      <p className='text-[1.8rem] my-[20px]'>
        Để đăng nhập lại vào ứng dụng, người dùng chỉ cần nhập số điện thoại sau đó nhập
        mã OTP được hệ thống gửi dưới dạng SMS
      </p>
      <div className='grid md:grid-cols-2 gap-10 2xl:gap-y-20'>
        {listRegisterItem.map((i, index) => (
          <RegisterItem url={i.url} key={i.url} url2={i.url2} index={index}>
            {i.content}
          </RegisterItem>
        ))}
      </div>
    </div>
  )
}

const Register: any = () => {
  const listRegisterItem = [
    {
      url: 'screen1.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 1</p>
          <p className='text-[1.8rem]'>Sau khi tải thành công app Vua Thợ</p>
          <p className='text-[1.8rem]'>
            Nếu bạn là người dùng mới, người dùng chọn tùy chọn &quot;Đăng ký&quot; trên
            ứng dụng
          </p>
        </>
      ),
    },
    {
      url: 'screen2.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 2</p>
          <p className='text-[1.8rem]'>
            Chọn mã quốc gia và nhập số điện thoại của người dùng
          </p>
          <p className='text-[1.8rem]'>Nhập mã giới thiệu (nếu có)</p>
        </>
      ),
    },
    {
      url: 'screen3.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 3</p>
          <p className='text-[1.8rem]'>
            Bấm tiếp theo để nhập mã OTP
            <span className='text-[#FF4343]'>
              (OTP sẽ được hệ thống gửi dưới dạng SMS)
            </span>
          </p>
        </>
      ),
    },
    {
      url: 'screen4.png',
      content: (
        <>
          <p className='text-[2.4rem] font-semibold'>Bước 4</p>
          <p className='text-[1.8rem]'>
            Khi đăng ký thành công, hệ thống sẽ hỏi tên người dùng, người dùng nhập tên và
            bấm &quot;Hoàn thành&quot;
          </p>
        </>
      ),
    },
  ]

  return (
    <div className=''>
      <h5 className='text-[2.5rem] lg:hidden block bg-primary-blue w-full py-6 pl-6 rounded-lg text-white mb-10'>
        Đăng ký
      </h5>
      <div className='grid md:grid-cols-2 gap-10'>
        {listRegisterItem.map((i) => (
          <RegisterItem url={i.url} key={i.url}>
            {i.content}
          </RegisterItem>
        ))}
      </div>
    </div>
  )
}

const Login = () => {
  return (
    <>
      <h5 className='text-[2.5rem] lg:hidden bg-primary-blue w-full py-6 pl-6 rounded-lg text-white mb-10'>
        Đăng nhập
      </h5>
      <p className='text-[1.8rem]'>
        Để đăng nhập lại vào ứng dụng, người dùng chỉ cần nhập số điện thoại sau đó nhập
        mã OTP được hệ thống gửi dưới dạng SMS
      </p>
      <p className='my-4'>
        <strong className='text-[2rem]'>Lưu ý:</strong>
      </p>
      <p className='text-[1.8rem]'>Để đăng nhập/đăng ký thành công, ngưởi dùng cần:</p>
      <ul className='list-inside list-disc pl-3 text-[1.8rem]'>
        <li>Chọn mã quốc gia phù hợp</li>
        <li>Nhập số điện thoại của khách hàng</li>
        <li>Nhập mã OTP được hệ thống gửi dưới dạng SMS</li>
      </ul>
      <div className='flex mt-[20px]'>
        <Image src='/find-worker/loginScreen1.png' alt='' width={220} height={420} />
        <Image src='/find-worker/loginScreen2.png' alt='' width={220} height={420} />
        <Image src='/find-worker/loginScreen3.png' alt='' width={220} height={420} />
      </div>
    </>
  )
}

const RegisterItem = ({
  children,
  url,
  url2,
  index,
}: {
  children: any
  url: any
  url2?: any
  index?: number
}) => {
  return (
    <div
      className={`${
        index == 4 || index == 5 ? 'xl:col-span-1 md:col-span-2' : 'col-span-1'
      } flex justify-between gap-[20px] flex-col md:flex-row`}
    >
      <div
        className={`text-[#282828] flex flex-col gap-4 ${url2 ? 'md:max-w-[55%]' : ''}`}
      >
        {children}
      </div>
      {url2 ? (
        <div className='flex gap-2 w-fit'>
          <div className='w-[180px]'>
            <Image
              src={`/find-worker/${url}`}
              alt=''
              width={220}
              height={300}
              className='h-full w-full'
            />
          </div>
          <div className='w-[180px]'>
            <Image
              src={`/find-worker/${url2}`}
              alt=''
              width={220}
              height={300}
              className='h-full w-full'
            />
          </div>
        </div>
      ) : (
        <div className='flex md:justify-end justify-start w-fit'>
          <div className='w-[180px]'>
            <Image src={`/find-worker/${url}`} alt='' width={220} height={300} />
          </div>
        </div>
      )}
    </div>
  )
}

export default SectionTest
