import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { useTranslations } from 'next-intl'

import { Apple as AppleIcon, GooglePlay as GooglePlayIcon } from 'iconsax-react'

function DownloadApps({
  width,
  height,
  hidden = false,
  gap = false,
}: {
  width?: number
  height?: number
  hidden?: boolean
  gap?: boolean
}) {
  return (
    <div className='flex justify-center md:justify-start w-full items-center gap-2 13inch:gap-8 mt-2 md:mt-0'>
      {!hidden && (
        <div className='relative w-[120px] h-[120px] 13inch:w-[150px] 13inch:h-[150px] hidden md:block'>
          <Image
            alt='QRCode'
            src={'/QRCODE.png'}
            fill
            className='hover:cursor-pointer pointer-events-none'
          />
        </div>
      )}
      <div
        className={`flex items-center md:flex-col ${
          gap ? 'gap-2 md:flex-col justify-between w-full' : 'gap-2 13inch:gap-[20px]'
        }`}
      >
        <Link href={'/'}>
          <div className='relative h-[50px] w-[160px] 13inch:h-[60px] 13inch:w-[200px]'>
            <Image
              alt='DownloadGooglePlay'
              src={'/DownloadGooglePlay1.svg'}
              height={height || 80}
              width={width || 260}
              className='hover:cursor-pointer pointer-events-none'
            />
          </div>
        </Link>
        <Link href={'/'}>
          <div className='relative h-[50px] w-[160px] 13inch:h-[60px] 13inch:w-[200px]'>
            <Image
              alt='DownloadAppStore'
              src={'/DownloadAppStore.svg'}
              height={height || 80}
              width={width || 260}
              className='hover:cursor-pointer pointer-events-none'
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export const AndroidBtn: React.FC<{ style?: any }> = ({ style }) => {
  const t = useTranslations('Download')

  return (
    <a
      href='https://play.google.com/store/apps/details?id=com.vuatho.mobile&pli=1'
      target='_blank'
      className={twMerge(
        'flex items-center gap-4 3xl:p-6 p-4 rounded-xl bg-black w-fit text-white 3xl:min-w-[220px] 2xl:min-w-[180px] min-w-[150px] overflow-hidden relative group select-none',
        style,
      )}
    >
      <GooglePlayIcon variant='Bold' size={36} />
      <div>
        <span className='text-white/70 text-[1.2rem]'>{t('download_chplay')}</span>
        <h6 className='3xl:text-[1.7rem] text-[1.5rem]'>Google Play</h6>
      </div>
      <div className='bg-white/[0.15] h-full w-1/2 absolute -right-1/3 top-0 -skew-x-[30deg] group-hover:-translate-x-1/2 transition' />
      <div className='bg-white/10 h-full w-1/2 absolute -right-1/2 top-0 -skew-x-[30deg] group-hover:-translate-x-1/2 transition' />
    </a>
  )
}

export const IosBtn: React.FC<{ style?: any }> = ({ style }) => {
  const t = useTranslations('Download')

  return (
    <a
      href='https://apps.apple.com/vn/app/vua-th%E1%BB%A3-si%C3%AAu-k%E1%BA%BFt-n%E1%BB%91i/id6467541777?l=vi'
      target='_blank'
      className={twMerge(
        'flex items-center gap-4 3xl:p-6 p-4 rounded-xl bg-black w-fit text-white 3xl:min-w-[220px] 2xl:min-w-[180px] min-w-[150px] overflow-hidden relative group select-none',
        style,
      )}
    >
      <AppleIcon variant='Bold' size={36} />
      <div>
        <span className='text-white/70 text-[1.2rem]'>{t('download_appstore')}</span>
        <h6 className='3xl:text-[1.7rem] text-[1.5rem]'>App Store</h6>
      </div>
      <div className='bg-white/[0.15] h-full w-1/2 absolute -right-1/3 top-0 -skew-x-[30deg] group-hover:-translate-x-1/2 transition' />
      <div className='bg-white/10 h-full w-1/2 absolute -right-1/2 top-0 -skew-x-[30deg] group-hover:-translate-x-1/2 transition' />
    </a>
  )
}

export const QrCode: React.FC<{ height?: string }> = ({ height }) => {
  return (
    <div className='bg-black/5 p-3 rounded-lg relative overflow-hidden backdrop-blur-md'>
      <Image
        alt='QRCode'
        src={'/downloadApp/qrcode.webp'}
        width={128}
        height={128}
        quality={100}
        className={`${
          height ? height : 'h-[140px]'
        } relative z-[1] object-contain w-auto`}
      />
      <div className='h-1/2 aspect-square w-fit rounded-full bg-primary-blue blur-xl absolute top-0 left-0 animate-pulse hidden lg:block' />
      <div className='h-1/2 aspect-square w-fit rounded-full bg-primary-yellow blur-xl absolute top-0 right-0 animate-pulse hidden lg:block' />
      <div className='h-1/2 aspect-square w-fit rounded-full bg-primary-yellow blur-xl absolute bottom-0 left-0 animate-pulse hidden lg:block' />
      <div className='h-1/2 aspect-square w-fit rounded-full bg-primary-blue blur-xl absolute bottom-0 right-0 animate-pulse hidden lg:block' />
    </div>
  )
}

export default DownloadApps
