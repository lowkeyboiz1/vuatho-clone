'use client'
import Image from 'next/image'
import { ListBreadcrumbsForDetailPress } from '@/components/breadcrumbs'
import { MostViewed } from '..'
import { BreadcrumbWithUrl } from '@/interface'
import { InputSearch } from '@/components/input'
import { useEffect, useState } from 'react'
import instance from '@/services/axiosConfig'
// get router pathname
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

function PressDetail({ params, searchParams }: { params: any; searchParams: any }) {
  const t = useTranslations('listBreadcrumbs')

  const paramsData = useParams()
  const [onFetching, setOnFetching] = useState<boolean>(false)
  const [detailPress, setDetailPress] = useState({
    title: 'Title Blog',
  })

  const listBreadcrumbs: BreadcrumbWithUrl[] = [
    { title: t('home'), url: '/' },
    { title: t('acrticle'), url: '/press' },
    { title: detailPress?.title },
  ]
  const ServerFetching = async () => {
    try {
      const { data } = await instance.get('/blog/detail', {
        params: {
          slug: paramsData.id,
          lang: paramsData.locale,
        },
      })
      setDetailPress({ ...data })
    } catch (error) {
      setOnFetching(false)
    } finally {
      setOnFetching(false)
    }
  }

  useEffect(() => {
    onFetching && ServerFetching()
  }, [onFetching])

  useEffect(() => {
    paramsData.id && setOnFetching(true)
  }, [paramsData.id])

  return (
    <div className='bg-base-gray py-[104px]'>
      <div className=' ct-container-70 '>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[20px] lg:flex-row'>
            <div className='relative min-w-[400px]'>
              <InputSearch onRefresh={setOnFetching} />
            </div>
            <div className='max-w-max rounded-full p-[17px] lg:bg-white'>
              <ListBreadcrumbsForDetailPress list={listBreadcrumbs} />
            </div>
          </div>
          <div className='grid grid-cols-6 gap-12'>
            <div className='col-span-2'>
              <MostViewed />
            </div>
            <div className='col-span-4'>
              <h1 className='text-[3.2rem] font-semibold text-base-black-1'>
                <Link href={`${detailPress?.slug}`}>{detailPress?.title}</Link>
              </h1>
              <div className='flex items-center'>
                <h3 className='text-base-black-1'>
                  <Link href={`${detailPress?.slug}`}>{detailPress?.category?.name}</Link>
                </h3>
                <time className='font-light text-base-drak-gray'>
                  {detailPress?.created_at}
                </time>
              </div>
              <div
                className='content-blog'
                dangerouslySetInnerHTML={{ __html: detailPress?.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PressDetail
