import Image from 'next/image'
import Link from 'next/link'

interface IlistMostViewed {
  img: string
  tag: string
  time: string
  title: string
}
const listMostViewed: IlistMostViewed[] = [
  {
    img: 'blog1.png',
    tag: 'Thẻ tag',
    time: '11/12/2023',
    title: 'Sada - A PSD Template For Blog & Shop',
  },
  {
    img: 'blog1.png',
    tag: 'Thẻ tag',
    time: '11/12/2023',
    title: 'Sada - A PSD Template For Blog & Shop11',
  },
  {
    img: 'blog1.png',
    tag: 'Thẻ tag',
    time: '11/12/2023',
    title: 'Sada - A PSD Template For Blog & Shop123',
  },
  {
    img: 'blog1.png',
    tag: 'Thẻ tag',
    time: '11/12/2023',
    title: 'Sada - A PSD Template For Blog & Shop23',
  },
  {
    img: 'blog1.png',
    tag: 'Thẻ tag',
    time: '11/12/2023',
    title: 'Sada - A PSD Template For Blog & Sho412p',
  },
]

interface IMostViewed {
  isHidden?: boolean
}

export const MostViewed: React.FC<IMostViewed> = ({ isHidden }) => {
  return (
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
        {listMostViewed?.map((i: IlistMostViewed, index: number) => {
          if (index + 1 === 4) return
          return (
            <div className='grid grid-cols-5 items-center bg-white' key={i.title}>
              <div className='col-span-2 h-full w-full'>
                <Image
                  alt='blog'
                  src={'/press/blog1.png'}
                  width={256}
                  height={202}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='col-span-3 p-[16px]'>
                <Link
                  href={'#'}
                  className='mb-[4px] block text-[1.5rem] text-primary-blue'
                >
                  Thẻ tag
                </Link>
                <time className='text-[1.5rem] text-base-drak-gray'>11/12/2023</time>
                <h5 className='mt-[8px] line-clamp-2 text-[1.6rem] font-semibold text-base-black-1'>
                  Sada - A PSD Template For Blog & Shop
                </h5>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
