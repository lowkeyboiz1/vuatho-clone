import SectionDownloadApp from '@/app/[locale]/(sections)/downloadApp'
import SectionBanner from '@/app/[locale]/(sections)/banner'
import SectionBenefit from '@/app/[locale]/(sections)/benefit'
import SectionWithVuaTho from './(sections)/withVuaTho'
import SectionToTheMoon from './(sections)/toTheMoon'
import SectionMultiServices from './(sections)/mulltiIndustry'

export default function Home() {
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <SectionBanner />
      <div className='mt-[80px]' />
      <SectionMultiServices />
      <SectionToTheMoon />
      <SectionBenefit />
      <SectionDownloadApp />
      <SectionWithVuaTho />
    </div>
  )
}
