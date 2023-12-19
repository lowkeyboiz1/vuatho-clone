import { Button } from '@nextui-org/react'
import { ArrowLeft } from 'iconsax-react'

import './lottery.css'
import Image from 'next/image'
function Lottery() {
  return (
    <>
      <div className='hidden rounded border border-red-400 bg-red-100 p-4 text-red-700 md:block'>
        Chúng tôi chỉ hỗ trợ giao diện điện thoại, vui lòng đổi thiết bị hoặc thu nhỏ màn
        hình.
      </div>
      <div className='ct-container-game ct-background-app h-screen pt-10 md:hidden'>
        <Button
          isIconOnly
          radius='full'
          className='bg-gradient-to-br from-[#FFF8E6] via-[#FFB300] to-[#FFCB51]'
        >
          <ArrowLeft size={16} className='text-bold text-base-black-1' />
        </Button>
        <div className='relative flex flex-col items-center'>
          <div className='absolute z-10'>
            <Image src={'/lottery/title.png'} alt='title' width={193} height={83} />
          </div>
          <div className='relative flex justify-center'>
            <div className='relavtive inset-0'>
              <Image src={'/lottery/glass.png'} alt='glass' width={320} height={320} />
              <div className='absolute left-1/2 top-1/2 w-[290px] -translate-x-1/2 -translate-y-1/2'>
                <Image src={'/lottery/bar.png'} alt='bar' width={290} height={55} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lottery
