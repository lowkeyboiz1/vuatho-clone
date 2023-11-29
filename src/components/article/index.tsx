import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
function Article({
  tag,
  time,
  title,
  desc,
  url,
  style,
}: {
  tag: string
  time: string
  title: string
  desc: string
  url: string
  style?: string
}) {
  const router = useRouter()
  return (
    <article
      className={twMerge('group flex w-full flex-shrink-0 flex-col bg-white', style)}
      onClick={() => {
        router.replace(`vi/press/${title.toLowerCase().split(' ').join('')}`)
      }}
    >
      <div className='w-full overflow-hidden'>
        <Image
          src={'/press/press1.png'}
          alt=''
          height={406}
          width={800}
          className='object-cover transition group-hover:scale-[1.1]'
        />
      </div>
      <div className='flex flex-col gap-[8px] p-[16px]'>
        <div className='flex items-center justify-between text-[1.4rem]'>
          <p className='text-[1.5rem] font-light text-primary-blue'>{tag}</p>
          <time className='text-[1.5rem] font-light text-base-drak-gray'>{time}</time>
        </div>
        <h3 className='text-[1.6rem] font-semibold'>{title}</h3>
        <p className='line-clamp-2 text-[1.6rem] font-light text-base-drak-gray'>
          {desc}
        </p>
      </div>
    </article>
  )
}

export default Article
