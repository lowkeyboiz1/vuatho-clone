import { useLocale } from 'next-intl'

const SectionServices = () => {
  const locale = useLocale()

  return (
    <div className='h-screen w-full'>
      {locale === 'vi' ? (
        <div className="h-full w-full bg-[url('/images/Banner_danganhnghe_mobile1.webp')] bg-cover bg-no-repeat md:bg-[url('/images/banner_services.webp')] md:bg-contain 13inch:bg-cover"></div>
      ) : (
        <div className="h-full w-full bg-[url('/images/Banner_danganhnghe_mobile_en1.webp')] bg-cover bg-no-repeat md:bg-[url('/images/banner_da_nganh_nghe-en.webp')] md:bg-contain 13inch:bg-cover"></div>
      )}
    </div>
  )
}

export default SectionServices
