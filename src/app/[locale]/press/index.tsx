'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import instance from '@/services/axiosConfig'
import { BreadcrumbWithUrl } from '@/interface'

import Article from '@/components/article'
import { ListBreadcrumbs } from '@/components/breadcrumbs'
import { InputSearch } from '@/components/input'
import { SkeletonBlog } from '@/components/skeleton'
import { ImageSkeleton } from '@/components/Icons'

import { Button, Skeleton } from '@nextui-org/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import './pressSwiper.scss'
import Link from 'next/link'

interface IMostViewed {
  isHidden?: boolean
}

export const MostViewed: React.FC<IMostViewed> = ({ isHidden }) => {
  const [listMostView, setListMostView] = useState<any>([])
  const [onFetching, setOnFetching] = useState<boolean>(false)

  const _ServerFetching = async () => {
    try {
      // const { data } = await instance.get('/home/blogs')
      // setListMostView(data)

      setListMostView([
        {
          img: '/',
          title: 'Chào mừng Vua Thợ',
          slugTitle: 'chao-mung-vua-tho',
          time: '20/12/2023',
          tag: 'Sự kiện',
          slug: 'su-kien',
        },
        {
          img: '/',
          title: 'Chúc mừng Vua Thợ',
          slugTitle: 'chuc-mung-vua-tho',
          time: '02/12/2023',
          tag: 'Khác',
          slug: 'khac',
        },
        {
          img: '/',
          title: '100.000 Đăng ký',
          slugTitle: '100.000-dang-ky',
          time: '30/12/2023',
          tag: 'Sự kiện',
          slug: 'su-kien',
        },
        {
          img: '/',
          title: 'Chào mừng Vua Thợ',
          slugTitle: 'chao-mung-vua-tho',
          time: '26/12/2023',
          tag: 'Khác',
          slug: 'khac',
        },
      ])
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setOnFetching(false)
      }, 500)
    }
  }
  useEffect(() => {
    onFetching && _ServerFetching()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  const locale = useLocale()
  const router = useRouter()

  return (
    <>
      <div className='flex flex-col gap-[16px]'>
        <h4 className=' border-b-4 border-[#FCB713] py-[9px] text-[2rem] font-semibold'>
          Xem nhiều nhất
        </h4>
        <div
          className={`grid-cols-1 gap-[16px]  ${
            isHidden
              ? 'hidden !grid-cols-1 lg:grid lg:grid-cols-2 '
              : 'grid md:grid-cols-2 lg:grid-cols-1'
          }`}
        >
          {onFetching
            ? Array(4)
                .fill(1)
                .map((item: any, index: number) => (
                  <div className='flex items-center' key={index}>
                    <Skeleton className='h-[130px] w-[165px] flex-shrink-0'>
                      <ImageSkeleton />
                    </Skeleton>
                    <div className='flex w-full flex-col gap-[8px] p-[16px]'>
                      <Skeleton className='h-[12px] w-[50px] rounded-[4px]' />
                      <Skeleton className='h-[12px] w-[70px] rounded-[4px]' />
                      <Skeleton className='h-[12px] w-full rounded-[4px]' />
                      <Skeleton className='h-[12px] w-full rounded-[4px]' />
                    </div>
                  </div>
                ))
            : listMostView.map((item: any, index: number) => {
                if (index + 1 === 4) return
                return (
                  <Link
                    href={`/${locale}/press/${item.slugTitle}`}
                    title={item.title}
                    key={item.title}
                    className='block'
                  >
                    <div className='grid grid-cols-5 items-center bg-white'>
                      <div className='col-span-2 h-full w-full'>
                        <Image
                          alt='blog'
                          src={'/press/blog1.png'}
                          width={256}
                          height={202}
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <div className='col-span-3 flex h-full flex-col justify-center gap-[4px] p-[16px]'>
                        <span
                          className='mb-[4px] block text-[1.5rem] text-primary-blue'
                          onClick={(e) => {
                            e.stopPropagation()
                            router.push(`/${locale}/press/?tag=${item.slug}`)
                          }}
                        >
                          {item.tag}
                        </span>
                        <time className='text-[1.5rem] text-base-drak-gray'>
                          11/12/2023
                        </time>
                        <h5 className='mt-[8px] line-clamp-2 h-fit text-[1.8rem] font-semibold leading-[1] text-base-black-1'>
                          {item.title} sadl;samdlksamd samdlk samlkd maslkdm samdksa
                          mdlksa
                        </h5>
                      </div>
                    </div>
                  </Link>
                )
              })}
        </div>
      </div>
    </>
  )
}

export const PressContent = ({ searchParams }: { searchParams: any }) => {
  const t = useTranslations('listBreadcrumbs')
  const listBreadcrumbs: BreadcrumbWithUrl[] = [
    { title: t('home'), url: '/' },
    { title: t('acrticle') },
  ]
  const [onFetching, setOnFetching] = useState<boolean>()
  const [listBlog, setListBlog] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)

  const serverFetching = async () => {
    try {
      const { data } = await instance.get('/home/blogs')
      setListBlog(data)
      setOnFetching(false)
    } catch (error) {
      setOnFetching(false)
      console.log(error)
    }
  }
  useEffect(() => {
    onFetching && serverFetching()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  const lastElementBlog = useCallback(
    (node: Element | null) => {
      if (observer.current) {
        observer.current.disconnect()
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setOnFetching(true)
          // setLimit((prevLimit) => prevLimit + ITEMS_PER_PAGE)
          // Gọi API tại đây
          // setOffset((prevOffset) => prevOffset + ITEMS_PER_PAGE)
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [hasMore],
  )
  return (
    <>
      <div className='w-full'>
        <SwiperPress renderBreadcums={<ListBreadcrumbs list={listBreadcrumbs} />} />
      </div>
      <div className='bg-base-gray py-[24px]'>
        <div className='ct-container-70'>
          <div className='flex flex-col items-center lg:flex-row lg:gap-[20px]'>
            <h3 className='flex h-[58px] w-full items-center text-[2.4rem] font-semibold lg:w-[400px] lg:min-w-[400px]'>
              BLOG
            </h3>
            <div className='relative w-full'>
              <InputSearch onRefresh={setOnFetching} />
            </div>
          </div>
          <div className='flex flex-col-reverse gap-[20px] lg:flex-row'>
            <div className=' flex flex-col gap-[16px] lg:w-[400px] lg:min-w-[400px]'>
              <MostViewed isHidden />
              <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:hidden'>
                {onFetching
                  ? Array(4)
                      .fill(null)
                      .map((item: any, index: number) => <SkeletonBlog key={index} />)
                  : listBlog.map((item: any, index: number) => {
                      if (listBlog.length == index + 1) {
                        return (
                          <Article
                            ref={lastElementBlog}
                            slug={item.slug}
                            thumbnail={item.thumbnail}
                            key={item.id}
                            desc={item.short_description}
                            time={item.time || '30/11/2023'}
                            title={item.title}
                            tagSlug={item.category.slug}
                            tag={item.category.title}
                          />
                        )
                      } else {
                        return (
                          <Article
                            slug={item.slug}
                            thumbnail={item.thumbnail}
                            key={item.id}
                            desc={item.short_description}
                            time={item.time || '30/11/2023'}
                            title={item.title}
                            tagSlug={item.category.slug}
                            tag={item.category.title}
                          />
                        )
                      }
                    })}
              </div>
            </div>
            <div className='grid-cols grid w-full flex-col gap-[16px]'>
              <h4 className='h-[52px] w-full truncate whitespace-nowrap border-b-4 border-primary-blue py-[9px] text-[2rem] font-semibold'>
                {searchParams.keyword
                  ? `Kết quả tìm kiếm cho "${searchParams.keyword}"`
                  : 'Mới nhất'}
              </h4>
              <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2'>
                {onFetching
                  ? Array(4)
                      .fill(null)
                      .map((item: any, index: number) => (
                        <SkeletonBlog key={index}></SkeletonBlog>
                      ))
                  : listBlog.length > 0
                    ? listBlog.map((item: any) => (
                        <Article
                          slug={item.slug}
                          thumbnail={item.thumbnail}
                          key={item.id}
                          desc={item.short_description}
                          time={item.time || '30/11/2023'}
                          title={item.title}
                          tagSlug={item.category.slug}
                          tag={item.category.title}
                        />
                      ))
                    : 'không có dữ liệu || api bị lỗi'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const SwiperPress = React.memo(({ renderBreadcums }: { renderBreadcums: any }) => {
  const [onFetching, setOnFetching] = useState(false)
  const [slidersData, setSliderData] = useState<any>([])

  const serverFetchingMostBlog = () => {
    try {
      setSliderData([
        {
          title: 'Trang phục chuyên nghiệp cho thợ tự tin hơn khi làm việc',
          img: '/',
          url: '#',
          titleLink: 'Xem ngay',
        },
        {
          title: 'Trang phục chuyên nghiệp cho thợ tự tin hơn khi làm việc 2',
          img: '/',
          url: '#',
          titleLink: 'Xem ngay',
        },
        {
          title: 'Trang phục chuyên nghiệp cho thợ tự tin hơn khi làm việc 3',
          img: '/',
          url: '#',
          titleLink: 'Xem ngay',
        },
      ])
      setOnFetching(false)
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setOnFetching(false)
      }, 500)
    }
  }

  useEffect(() => {
    onFetching && serverFetchingMostBlog()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])

  return (
    <div>
      {onFetching ? (
        <div className='flex h-[420px] w-full animate-pulse items-center justify-center bg-gray-300 '>
          <ImageSkeleton style='h-[120px] w-[300px] animate-pulse' />
        </div>
      ) : (
        <>
          {!slidersData.length ? (
            <div className='flex h-[420px] w-full animate-pulse items-center justify-center bg-gray-300 '>
              <ImageSkeleton style='h-[120px] w-[300px] animate-pulse' />
            </div>
          ) : (
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
              {slidersData?.map((item: any, index: number) => (
                <SwiperSlide key={index} className=''>
                  <Image
                    src={'/press/pressBanner1.png'}
                    alt=''
                    height={419}
                    width={3000}
                    className={`absolute h-full rotate-180 object-cover`}
                  />
                  <div className='relative inset-0 h-[420px]'>
                    <div className='ct-container-70 relative flex h-full flex-col p-12'>
                      <div className='max-w-[50%] space-y-6'>
                        {renderBreadcums ? renderBreadcums : <div />}
                        <h1 className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                          {item.title}
                        </h1>

                        <Link href={item.url || ''}>
                          <Button
                            type='button'
                            className='h-[46px] max-w-max rounded-full bg-[#FCB713] px-[24px] text-[1.8rem] font-semibold text-base-black-1'
                          >
                            {item.titleLink}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      )}
    </div>
  )
})
SwiperPress.displayName = 'SwiperPress'
