import { useLocale } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

function Article({
  tag,
  time,
  title,
  desc,
  style,
  thumbnail,
  tagSlug,
  slug,
  ref,
}: {
  tag: string
  time: string
  title: string
  desc: string
  style?: string
  thumbnail: string
  tagSlug: string
  slug: string
  ref?: any
}) {
  // const router = useRouter()
  const locale = useLocale()

  return (
    <Link
      href={`/${locale}/${slug}`}
      ref={ref}
      className={twMerge(
        'group flex w-full flex-shrink-0 cursor-pointer flex-col bg-white',
        style,
      )}
    >
      <div className='w-full overflow-hidden'>
        <Image
          src={thumbnail || '/default-blog.png'}
          alt=''
          height={406}
          width={800}
          className='object-cover transition group-hover:scale-[1.1]'
        />
      </div>
      <div className='flex flex-col gap-[8px] p-[16px]'>
        <div className='flex items-center justify-between text-[1.4rem]'>
          <Link
            href={`/${locale}/${tagSlug ? `?tag=${tagSlug}` : ''}`}
            className='text-[1.5rem] font-light text-primary-blue hover:cursor-pointer hover:text-primary-blue/80'
          >
            {tag || 'Sự kiện'}
          </Link>
          <time className='text-[1.5rem] font-light text-base-drak-gray'>
            {time || '30/11/2023'}
          </time>
        </div>
        <h3 className='text-[1.8rem] font-semibold'>{title || 'Tải ngay ứng dụng'}</h3>
        <p
          className='line-clamp-3 text-[1.8rem] font-light text-base-drak-gray'
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          {desc}
        </p>
      </div>
    </Link>
  )
}

export default Article
