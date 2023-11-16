import Image from 'next/image'

function BackgroundRelative({ text }: { text: string }) {
  return (
    <div className='w-full relative min-h-[200px] h-[200px] md:h-[300px] flex-center'>
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='/images/bg-relative.webp'
          alt='bg-relative'
          width={3840}
          height={889}
          quality={100}
          className='h-full pointer-events-none object-cover'
        />
      </div>
      <h1 className=' z-[10] font-bold text-[3rem] 13inch:text-[4rem] 3xl:text-[5rem] text-white w-full max-w-max'>
        {text}
      </h1>
    </div>
  )
}

export default BackgroundRelative
