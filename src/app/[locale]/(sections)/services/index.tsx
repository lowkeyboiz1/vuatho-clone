import { useLocale } from 'next-intl'

const SectionServices = () => {
  const locale = useLocale()

  return (
    <div className='w-full h-screen'>
      {locale === 'vi' ? (
        <div className="h-full w-full bg-[url('/images/Banner_danganhnghe_mobile1.webp')] md:bg-[url('/images/banner_services.webp')] bg-no-repeat bg-cover md:bg-contain 13inch:bg-cover"></div>
      ) : (
        <div className="h-full w-full bg-[url('/images/Banner_danganhnghe_mobile_en1.webp')] md:bg-[url('/images/banner_da_nganh_nghe-en.webp')] bg-no-repeat bg-cover md:bg-contain 13inch:bg-cover"></div>
      )}
    </div>
  )
}

export default SectionServices
