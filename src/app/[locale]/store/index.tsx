'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import ImageFallback from '@/components/ImageFallback'
import { ListBreadcrumbsForDetailPress } from '@/components/breadcrumbs'
import { BreadcrumbWithUrl } from '@/interface'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Skeleton,
  useDisclosure,
} from '@nextui-org/react'
import { Add } from 'iconsax-react'
import { useLocale, useTranslations } from 'next-intl'
import instance from '@/services/axiosConfig'

interface IItemClothe {
  title: string
  thumb: string
  currency: string
}

interface IItemClothes {
  title: string
  price: string
  thumb: string
  version: number
  currency: string
  isInStock: boolean
  package: IItemClothe[]
}

export const Store = () => {
  const td = useTranslations('listBreadcrumbs')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const locale = useLocale()

  const listBreadcrumbs: BreadcrumbWithUrl[] = [
    { title: td('home'), url: '/' },
    { title: td('store') },
  ]

  const [onLoading, setOnLoading] = useState<boolean>(true)
  const [onFetching, setOnFetching] = useState<boolean>(false)

  const [listItem, setListItem] = useState<any[]>([])
  const [itemActive, setItemActive] = useState<IItemClothes | null>(null)

  const t = useTranslations('Store')

  const handleClick = (item: IItemClothes) => {
    console.log(item)

    setItemActive(item.thumb ? item : null)
    item.thumb && onOpen()
  }

  const serverFetching = async () => {
    try {
      const data: IItemClothes[] = await instance.get('/uniforms', {
        params: {
          lang: locale,
          urrency: 'đ',
        },
      })
      setListItem([...data])
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

  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
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
            : listItem?.map((item: IItemClothes, index: number) => {
                return (
                  <div
                    className='group cursor-pointer overflow-hidden rounded-[8px] shadow-[0px_4px_8px_0px_#ACACAC29]'
                    key={index}
                    onClick={() => handleClick(item)}
                  >
                    <div className='h-[200px] w-full overflow-hidden'>
                      <ImageFallback
                        src={item.thumb}
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
                        {item.price}
                        {item.currency}
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
                  <ImageFallback
                    src={itemActive?.thumb || ''}
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
