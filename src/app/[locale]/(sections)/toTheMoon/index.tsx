import AnimationToTheMoon from '../../about-us/(sections)/animation'
import { useTranslations } from 'next-intl'

function SectionToTheMoon() {
  const t = useTranslations('ToTheMoon')

  return (
    <div className='flex-center ct-container-70 gap-[60px] w-full md:mt-10 flex-col md:flex-row pb-[40px]'>
      <div className='flex flex-col gap-4 w-full order-2'>
        <div className='w-full flex flex-col gap-2'>
          <h3 className='text-[4rem] 13inch:text-[5rem] 3xl:text-[4rem] font-semibold hidden md:block'>
            {t('title')}
          </h3>
          <div className='w-full'>
            <p className='text-[2rem] 3xl:w-[600px]'>
              {/* {t('text1')} */}
              <br className='text-[2rem] mt-2' />
              {t('text2')}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full mt-2 order-1 md:order-3'>
        <h3 className='text-[4rem] md:text-[6rem] w-full text-center 13inch:text-[5rem] 3xl:text-[4rem] font-semibold md:hidden block'>
          <span className='text-primaryBlue1'>Phát Triển </span>
          Không Ngừng
        </h3>
        <div className=''>
          <AnimationToTheMoon />
        </div>
      </div>
    </div>
  )
}

export default SectionToTheMoon
