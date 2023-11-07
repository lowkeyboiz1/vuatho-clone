import { twMerge } from 'tailwind-merge'
import { AndroidBtn, IosBtn, QrCode } from '../DownloadApps'

export const Download = ({ style }: { style?: string }) => {
  return (
    <div
      className={twMerge(
        'flex gap-5 items-center md:justify-start justify-center w-full mt-5',
        style,
      )}
    >
      <QrCode height='2xl:h-[140px] h-[100px]' />
      <div className='space-y-2'>
        <AndroidBtn />
        <IosBtn />
      </div>
    </div>
  )
}
