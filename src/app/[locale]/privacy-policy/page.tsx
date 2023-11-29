import { Metadata } from 'next'
import BackgroundRelative from '@/components/BackgroundRelative'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật',
}

function PrivateInformation() {
  const t = useTranslations('PrivacyPolicy')

  return (
    <div className=''>
      <BackgroundRelative text={t('heading')} />
      <div className='bg-white py-[20px] 13inch:py-[40px] 3xl:py-[80px]'>
        <div className='ct-container-70 gap-10 md:gap-20'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-6'>
              <h4 className='text-[1.8rem] font-bold text-[#0B27B6]'>{t('title1')}</h4>
              <p className='text-[1.6rem]'>{t('text1')}</p>
              <p className='text-[1.6rem]'>{t('text2')}</p>
              <p className='text-[1.6rem]'>{t('text3')}</p>
              <h4 className='text-[1.8rem] font-bold text-[#0B27B6]'>{t('title2')}</h4>
              <p className='text-[1.6rem]'>{t('text4')}</p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'> {t('vuatho')} </strong>
                {t('mean')}
                <strong className='text-[1.6rem]'>{t('ctyvuatho')}</strong>
                {t('text5')}
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>{t('xulydulieu')}</strong>
                {t('text6')}
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>{t('dulieucanhan')}</strong>
                {t('text7')}
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>{t('user')}</strong> {t('text8')}
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>{t('benthuba')}</strong>
                {t('text9')}
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>{t('baovedulieucanhan')}</strong>{' '}
                {t('text10')}
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>{t('phapluathienhanh')}</strong>{' '}
                {t('text11')}
              </p>
              <p className='text-[1.6rem]'>{t('text12')}</p>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('phanA')}</h5>
              <p className='text-[1.6rem]'>{t('text13')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text14')}</li>
                <li>{t('text15')}</li>
                <li>{t('text16')}</li>
                <li>{t('text17')}</li>
              </ul>
              <p className='text-[1.6rem]'>{t('text18')}</p>
              <p className='text-[1.6rem]'>{t('text19')}</p>
              <p className='text-[1.6rem]'>
                {t('text20')} 
                <strong>
                  <i>{t('phanE')}</i>
                </strong>
              </p>
              <div>
                <h1 className='text-[1.6rem]'> {t('title3')} </h1>
                <p className='text-[1.6rem]'>{t('text21')} </p>
              </div>
              <div>
                <h1 className='text-[1.6rem]'> {t('title4')}</h1>
                <p className='text-[1.6rem]'>{t('text22')} </p>
                <ul className='list-inside list-disc text-[1.6rem]'>
                  <li> {t('text23')}</li>
                  <li>{t('text24')}</li>
                  <li> {t('text25')}</li>
                  <li>{t('text26')}</li>
                  <li>{t('text27')}</li>
                  <li>{t('text28')}</li>
                  <li>{t('text29')} </li>
                  <li>{t('text30')} </li>
                </ul>
              </div>
              <div>
                <h1 className='text-[1.6rem]'>{t('text31')}</h1>
                <p className='text-[1.6rem]'>{t('text32')}</p>
              </div>
              <div>
                <h1 className='text-[1.6rem]'>{t('text33')}</h1>
                <p className='text-[1.6rem]'>{t('text34')}</p>
              </div>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text35')}</h5>
              <p className='text-[1.6rem]'>{t('text36')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text37')}</li>
                <li>{t('text38')}</li>
                <li>{t('text39')}</li>
                <li>{t('text40')}</li>
                <li>{t('text41')}</li>
                <li>{t('text42')}</li>
                <li>{t('text43')}</li>
              </ul>
              <p className='text-[1.6rem]'>{t('text44')}</p>

              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text45')}</h5>
              <h6 className='text-[1.6rem] font-medium'>{t('text46')}</h6>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text47')}</li>
                <li>{t('text48')}</li>
                <li>{t('text49')}</li>
                <li>{t('text50')}</li>
                <li>{t('text51')}</li>
                <li>{t('text52')}</li>
                <li>{t('text53')}</li>
                <li>{t('text54')}</li>
                <li>{t('text55')}</li>
                <li>{t('text56')}</li>
                <li>{t('text57')}</li>
                <li>{t('text58')}</li>
                <li>{t('text59')}</li>
                <li>{t('text60')}</li>
              </ul>
              <h6 className='text-[1.6rem] font-medium'>{t('text61')}</h6>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text62')}</li>
                <li>{t('text63')}</li>
                <li>{t('text64')}</li>
                <li>{t('text65')}</li>
                <li>{t('text66')}</li>
                <li>{t('text67')}</li>
                <li>{t('text68')}</li>
                <li>{t('text69')}</li>
                <li>{t('text70')}</li>
                <li>{t('text71')}</li>
                <li>{t('text72')}</li>
                <li>{t('text73')}</li>
                <li>{t('text74')}</li>
                <li>{t('text75')}</li>
              </ul>
              <h6 className='text-[1.6rem] font-medium'>{t('text76')}</h6>
              <p className='text-[1.6rem]'>{t('text77')}</p>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text78')}</h5>
              <p className='text-[1.6rem]'>{t('text79')}</p>
              <p className='text-[1.6rem]'>{t('text80')}</p>
              <p className='text-[1.6rem]'>{t('text81')}</p>
              <p className='text-[1.6rem]'>{t('text82')}</p>
              <p className='text-[1.6rem]'>{t('text83')}</p>
              <p className='text-[1.6rem]'>{t('text84')}</p>
              <p className='text-[1.6rem]'>{t('text85')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text86')}</li>
                <li>{t('text87')}</li>
                <li>{t('text88')}</li>
              </ul>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text89')}</h5>
              <p className='text-[1.6rem]'>{t('text90')}</p>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text91')}</h5>
              <p className='text-[1.6rem]'>{t('text92')}</p>
              <p className='text-[1.6rem]'>{t('text93')}</p>
              <p className='text-[1.6rem]'>{t('text94')}</p>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text95')}</h5>
              <h6 className='text-[1.6rem] font-medium'>{t('text96')}</h6>
              <p className='text-[1.6rem]'>{t('text97')}</p>
              <p className='text-[1.6rem]'>{t('text98')}</p>
              <p className='text-[1.6rem]'>{t('text99')}</p>
              <p className='text-[1.6rem]'>{t('text100')}</p>
              <p className='text-[1.6rem]'>{t('text101')}</p>
              <h6 className='text-[1.6rem] font-medium'>{t('text102')}</h6>
              <p className='text-[1.6rem]'>{t('text103')}</p>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text104')}</h5>
              <p className='text-[1.6rem]'>{t('text105')}</p>
              <strong className='text-[1.6rem]'>{t('text106')}</strong>
              <p className='text-[1.6rem]'>{t('text107')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text108')}</li>
                <li>{t('text109')}</li>
                <li>{t('text110')}</li>
                <li>{t('text111')}</li>
                <li>{t('text112')}</li>
                <li>{t('text113')}</li>
                <li>{t('text114')}</li>
                <li>{t('text115')}</li>
                <li>{t('text116')}</li>
              </ul>
              <p className='text-[1.6rem]'>
                {t('text117')}
                <strong className='text-[1.6rem]'>
                  <i>{t('lienhe')}</i>
                </strong>
              </p>
              <strong className='text-[1.6rem]'>{t('text118')}</strong>
              <ul className='list-inside list-decimal text-[1.6rem]'>
                <li>{t('text119')}</li>
                <li>{t('text120')}</li>
                <li>{t('text121')}</li>
                <li>{t('text122')}</li>
                <li>{t('text123')}</li>
              </ul>
              <p className='text-[1.6rem]'>{t('text124')}</p>
              <p className='text-[1.6rem]'>{t('text125')}</p>
              <strong className='text-[1.6rem]'>{t('text126')}</strong>
              <p className='text-[1.6rem]'>{t('text127')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text128')}</li>
                <li>{t('text129')}</li>
                <li>{t('text130')}</li>
                <li>{t('text131')}</li>
                <li>{t('text132')}</li>
                <li>{t('text133')}</li>
                <li>{t('text134')}</li>
              </ul>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text135')}</h5>
              <p className='text-[1.6rem]'>
                {t('text136')} <i>{t('phanK')}</i>.
              </p>
              <p className='text-[1.6rem]'>{t('text137')}</p>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text138')}</h5>
              <p className='text-[1.6rem]'>{t('text139')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text140')}</li>
                <li>{t('text141')}</li>
                <li>{t('text142')}</li>
              </ul>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text143')}</h5>
              <strong className='text-[1.6rem]'>{t('text144')}</strong>
              <p className='text-[1.6rem]'>
                {t('text145')}
                <i>{t('phanE')}</i>
                {t('text146')}
              </p>
              <p className='text-[1.6rem]'>{t('text147')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text148')}</li>
                <li>{t('text149')}</li>
              </ul>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text150')}</h5>
              <p className='text-[1.6rem]'>{t('text151')}</p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li>{t('text152')}</li>
                <li>{t('text153')}</li>
                <li>{t('text154')}</li>
                <li>{t('text155')}</li>
                <li>{t('text156')}</li>
              </ul>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text157')}</h5>
              <p className='text-[1.6rem]'>{t('text158')}</p>
              <p className='text-[1.6rem]'>{t('text159')}</p>
              <p className='text-[1.6rem]'>{t('text160')}</p>
              <p className='text-[1.6rem]'>{t('text161')}</p>
              <h5 className='text-[1.6rem] text-[#0B27B6]/90'>{t('text162')}</h5>
              <p className='text-[1.6rem]'>
                {t('text163')}
                <i>{t('phanH')}</i> {t('text164')}
              </p>
              <ul className='list-inside list-disc text-[1.6rem]'>
                <li> {t('text165')}</li>
                <li> {t('text166')}</li>
                <li> {t('text167')}</li>
                <li>
                  <strong className='text-[1.6rem]'>{t('text168')}</strong>
                </li>
                <li>
                  <strong className='text-[1.6rem]'> {t('text169')}</strong> {' '}
                  {t('text170')}
                </li>
                <li>{t('text171')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivateInformation
