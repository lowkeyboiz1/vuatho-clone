'use client'

import { SearchNormal1 } from 'iconsax-react'
import { Button, Input } from '@nextui-org/react'
import Image from 'next/image'
import Article from '@/components/article'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './pressSwiper.scss'
import { ListBreadcrumbs } from '@/components/breadcrumbs'
import { MostViewed } from '.'
import { BreadcrumbWithUrl } from '@/interface'
import { InputSearch } from '@/components/input'

function Press() {
  const listBreadcrumbs: BreadcrumbWithUrl[] = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Bài viết' },
  ]

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
    <div className='flex flex-col pt-[64px] 3xl:pt-[80px]'>
      <div className=' w-full'>
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
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          className='pressSwiper w-full'
        >
          {Array(3)
            .fill(null)
            .map((i: any, index: number) => (
              <SwiperSlide key={index} className=''>
                <div className='relative inset-0 h-[420px]'>
                  <Image
                    src={'/press/pressBanner1.png'}
                    alt=''
                    height={419}
                    width={3000}
                    className={
                      index % 2 !== 0
                        ? ' h-full rotate-180 object-cover'
                        : ' h-full object-cover'
                    }
                  />
                </div>
                <div className='absolute top-[10%] 13inch:left-1/2 13inch:-translate-x-1/2'>
                  <div className='ct-container-70 flex flex-col gap-[20px] text-white'>
                    <div className=''>
                      <ListBreadcrumbs list={listBreadcrumbs} />
                    </div>
                    <div className=''>
                      <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                        Trang phục chuyên nghiệp cho thợ {index}
                      </p>
                      <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                        Tự tin hơn khi làm việc
                      </p>
                    </div>
                    <Button
                      size='lg'
                      className=' h-[46px] max-w-max rounded-full bg-[#FCB713] px-[24px] text-[1.6rem] font-semibold text-base-black-1'
                    >
                      Xem ngay
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className='bg-base-gray py-[24px]'>
        <div className='ct-container-70'>
          <div className='flex flex-col items-center lg:flex-row lg:gap-[20px]'>
            <h3 className='flex h-[58px] w-full items-center text-[2.4rem] font-semibold lg:w-[400px] lg:min-w-[400px]'>
              BLOG
            </h3>
            <div className='relative w-full'>
              <InputSearch />
            </div>
          </div>
          <div className='flex flex-col-reverse gap-[20px] lg:flex-row'>
            <div className=' lg:w-[400px] lg:min-w-[400px]'>
              <MostViewed isHidden />
              <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:hidden'>
                {listArticle.map((i, index) => (
                  <Article
                    key={index}
                    desc={i.desc}
                    tag={i.tag}
                    time={i.time}
                    title={i.title}
                    url={i.url}
                  />
                ))}
              </div>
            </div>
            <div className='flex w-full flex-col gap-[16px]'>
              <h4 className='border-b-4 border-primary-blue py-[9px] text-[2rem] font-semibold'>
                Mới nhất
              </h4>
              <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2'>
                {listArticle.map((i, index) => (
                  <Article
                    key={index}
                    desc={i.desc}
                    tag={i.tag}
                    time={i.time}
                    title={i.title}
                    url={i.url}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Press
