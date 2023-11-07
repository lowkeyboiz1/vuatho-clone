import { useLocale } from 'next-intl'

const SectionServices = () => {
  const locale = useLocale()

  return (
    <div className='w-full h-screen'>
      {locale === 'vi' ? (
        <div className="h-screen w-full bg-[url('/images/Banner_danganhnghe_mobile1.png')] md:bg-[url('/images/banner_services.png')] bg-cover bg-no-repeat"></div>
      ) : (
        <div className="h-screen w-full bg-[url('/images/Banner_danganhnghe_mobile_en1.png')] md:bg-[url('/images/banner_da_nganh_nghe-en.png')] bg-cover bg-no-repeat"></div>
      )}
    </div>
  )
}

export default SectionServices
