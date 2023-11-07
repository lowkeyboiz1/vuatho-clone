import Image from 'next/image'

function BackgroundRelative({ text }: { text: string }) {
  return (
    <div className='bg-relative w-full relative h-[200px] 3xl:h-auto'>
      <Image
        src='/images/bg-relative.png'
        alt='bg-relative'
        width={3840}
        height={889}
        quality={100}
        className='min-h-[120px]'
      />
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+40px)] font-bold text-[3rem] 13inch:text-[4rem] 3xl:text-[5rem] text-white w-full max-w-max'>
        {text}
      </div>
    </div>
  )
}

export default BackgroundRelative
