'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from '@nextui-org/react'
import { ListBreadcrumbsForDetailPress } from '@/components/breadcrumbs'
import { BreadcrumbWithUrl } from '@/interface'
import instance from '@/services/axiosConfig'
import { useTranslations } from 'next-intl'
import { Add } from 'iconsax-react'
import ImageFallback from '@/components/ImageFallback'

interface IItemClothes {
  title: string
  price: string
  thumb: string
}

export const Store = () => {
  const td = useTranslations('listBreadcrumbs')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const listBreadcrumbs: BreadcrumbWithUrl[] = [
    { title: td('home'), url: '/' },
    { title: td('store') },
  ]

  const [onLoading, setOnLoading] = useState<boolean>(true)
  const [onFetching, setOnFetching] = useState<boolean>(false)

  const [listItem, setListItem] = useState<IItemClothes[]>([])
  const [itemActive, setItemActive] = useState<IItemClothes | null>(null)

  const t = useTranslations('Store')

  const handleClick = (item: IItemClothes) => {
    setItemActive(item.thumb ? item : null)
    item.thumb && onOpen()
  }

  const serverFetching = async () => {
    try {
      // const { data } = instance.get('/store')
      // setListItem(data)
      setListItem([
        {
          title: 'Áo thun vua thợ',
          price: '80.000',
          thumb: 'ao1.png',
        },
        {
          title: 'Áo tay dài vua thợ',
          price: '120.000',
          thumb: 'ao2.png',
        },
        {
          title: 'Quần thun vua thợ',
          price: '90.000',
          thumb: 'ao3.png',
        },
        {
          title: 'Quần dài vua thợ',
          price: '80.000',
          thumb: 'ao4.png',
        },
        {
          title: 'Mũ bảo hiểm vua thợ',
          price: '100.000',
          thumb: 'ao5.png',
        },
        {
          title: 'Khẩu trang vua thợ',
          price: '5.000',
          thumb: 'ao6.png',
        },
        {
          title: 'Giày vua thợ',
          price: '200.000',
          thumb: 'ao7.png',
        },
        {
          title: 'Dép lào vua thợ',
          price: '90.000',
          thumb: 'ao8.png',
        },
      ])
    } catch (error) {
      console.log(error)
    } finally {
      setOnFetching(false)
      setOnLoading(false)
    }
  }
  useEffect(() => {
    onFetching && serverFetching()
  }, [onFetching])

  useEffect(() => {
    setOnFetching(true)
  }, [])
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      {/* {onFetching || onLoading ? (
        <div className='flex h-[420px] w-full animate-pulse items-center justify-center bg-gray-300 '>
          <ImageSkeleton style='h-[120px] w-[300px] animate-pulse' />
        </div>
      ) : (
        <div className='w-full'>
          <div className='relative inset-0 h-[420px]'>
            <ImageFallback
              src={imageStore.thumbnail}
              alt=''
              height={419}
              width={3000}
              className='h-full object-cover'
            />
            <div className='absolute top-[10%] 13inch:left-1/2 13inch:-translate-x-1/2'>
              <div className='ct-container-70 flex flex-col gap-[20px] text-white'>
                <div className=''>
                  <ListBreadcrumbs list={listBreadcrumbs} />
                </div>
              </div>
            </div>
            <div className='absolute bottom-[10%] w-full text-center'>
              <div className='mb-[16px]'>
                <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                  {t('text1')}
                </p>
                <p className='text-[2.4rem] font-semibold text-white md:text-[3.2rem]'>
                  {t('text2')}
                </p>
              </div>
              <Button
                size='lg'
                className=' h-[46px] max-w-max rounded-full bg-[#FCB713] px-[24px] text-[1.8rem] font-semibold text-base-black-1'
                endContent={<Call variant='Bold' />}
              >
                {t('text3')}
              </Button>
            </div>
          </div>
        </div>
      )} */}
      <div className='ct-container-70 mb-[60px]'>
        <div className='mt-[40px]'>
          <ListBreadcrumbsForDetailPress list={listBreadcrumbs} />
        </div>
        <h3 className='mb-[20px] mt-[36px] text-[2.4rem] font-semibold uppercase text-base-black-1'>
          {t('text4')}
        </h3>
        <div className='grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {onFetching || onLoading
            ? Array(8)
                .fill(null)
                .map((item, index) => (
                  <div
                    className='overflow-hidden rounded-[8px] shadow-[0px_4px_8px_0px_#ACACAC29]'
                    key={index}
                  >
                    <Skeleton className='h-[200px] w-full' />
                    <div className='flex flex-col gap-[8px] p-[16px] '>
                      <Skeleton className='h-[10px] w-1/2 rounded-[8px]' />
                      <Skeleton className='h-[10px] w-1/3 rounded-[8px]' />
                    </div>
                  </div>
                ))
            : listItem.map((item: IItemClothes, index: number) => {
                return (
                  <div
                    className='group cursor-pointer overflow-hidden rounded-[8px] shadow-[0px_4px_8px_0px_#ACACAC29]'
                    key={index}
                    onClick={() => handleClick(item)}
                  >
                    <div className='h-[200px] w-full overflow-hidden'>
                      <ImageFallback
                        src={`/store/${item.thumb}`}
                        alt=''
                        height={300}
                        width={600}
                        className='h-full w-full object-cover duration-300 group-hover:scale-[1.1]'
                      />
                    </div>
                    <div className='flex flex-col gap-[8px] bg-white p-[16px]'>
                      <p className='text-[1.8rem] font-semibold text-base-black-1'>
                        {item.title}
                      </p>
                      <p className='text-[1.8rem] font-semibold text-primary-blue'>
                        {item.price}đ
                      </p>
                    </div>
                  </div>
                )
              })}
        </div>
      </div>
      <Modal
        isOpen={isOpen && !!itemActive?.thumb}
        onOpenChange={onOpenChange}
        hideCloseButton
        size='5xl'
        placement='center'
        classNames={{
          body: 'p-0',
          header: 'p-0 pl-8 ',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex items-center justify-between'>
                <h6 className='text-[2rem] font-semibold text-primary-blue'>
                  {itemActive?.title}
                </h6>
                <Button
                  isIconOnly
                  onPress={onClose}
                  variant='light'
                  className='h-[48px] w-[56px]'
                >
                  <Add className='rotate-45' size={32} />
                </Button>
              </ModalHeader>
              <ModalBody>
                <div className='h-full w-full'>
                  <Image
                    src={`/store/${itemActive?.thumb}`}
                    alt=''
                    width={800}
                    height={600}
                    className='max-h-[400px] object-cover'
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
