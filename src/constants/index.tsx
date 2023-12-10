import Image from 'next/image'

export const langs = [
  {
    label: 'English',
    code: 'en',
    active: true,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/gb.png'
        width='20'
        height='15'
        alt='English'
      />
    ),
  },
  {
    label: 'Tiếng Việt',
    code: 'vi',
    active: true,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/vn.png'
        width='20'
        height='15'
        alt='Tiếng Việt'
      />
    ),
  },
  {
    label: 'Chinese',
    code: 'zh',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/zh.png'
        width='20'
        height='15'
        alt='Chinese'
      />
    ),
  },
  {
    label: 'Français',
    code: 'fr',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/fr.png'
        width='20'
        height='15'
        alt='Français'
      />
    ),
  },
  { label: 'Français (Afrique)', code: 'fr-AF', active: false, symbol: '🌍' },
  {
    label: 'Filipino',
    code: 'fil',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/ph.png'
        width='20'
        height='15'
        alt='Filipino'
      />
    ),
  },
  {
    label: 'Italiano',
    code: 'it',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/it.png'
        width='20'
        height='15'
        alt='Italiano'
      />
    ),
  },
  {
    label: 'Polski',
    code: 'pl',
    active: false,
    symbol: (
      <Image src='https://flagcdn.com/20x15/pl.png' width='20' height='15' alt='Polski' />
    ),
  },
  {
    label: 'Português (Brasil)',
    code: 'pt-BR',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/br.png'
        width='20'
        height='15'
        alt='Português (Brasil)'
      />
    ),
  },
  {
    label: 'Português (Portugal)',
    code: 'pt-PT',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/pt.png'
        width='20'
        height='15'
        alt='Português (Portugal)'
      />
    ),
  },
  {
    label: 'Română',
    code: 'ro',
    active: false,
    symbol: (
      <Image src='https://flagcdn.com/20x15/ro.png' width='20' height='15' alt='Română' />
    ),
  },
  {
    label: 'Svenska',
    code: 'sv',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/sv.png'
        width='20'
        height='15'
        alt='Svenska'
      />
    ),
  },
  {
    label: 'Slovenčina',
    code: 'sk',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/sk.png'
        width='20'
        height='15'
        alt='Slovenčina'
      />
    ),
  },
  {
    label: 'Slovenščina',
    code: 'sl',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/sl.png'
        width='20'
        height='15'
        alt='Slovenščina'
      />
    ),
  },
  {
    label: 'Türkçe',
    code: 'tr',
    active: false,
    symbol: (
      <Image src='https://flagcdn.com/20x15/tr.png' width='20' height='15' alt='Türkçe' />
    ),
  },
  {
    label: 'latviešu valoda',
    code: 'lv',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/lv.png'
        width='20'
        height='15'
        alt='latviešu valoda'
      />
    ),
  },
  {
    label: 'Čeština',
    code: 'cs',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/cz.png'
        width='20'
        height='15'
        alt='Čeština'
      />
    ),
  },
  {
    label: 'Ελληνικά',
    code: 'el',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/gr.png'
        width='20'
        height='15'
        alt='Ελληνικά'
      />
    ),
  },
  {
    label: 'Русский',
    code: 'ru',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/ru.png'
        width='20'
        height='15'
        alt='Русский'
      />
    ),
  },
  {
    label: 'Русский (Украина)',
    code: 'ru-UA',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/ua.png'
        width='20'
        height='15'
        alt='Русский (Украина)'
      />
    ),
  },
  {
    label: 'Українська',
    code: 'uk',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/ua.png'
        width='20'
        height='15'
        alt='Українська'
      />
    ),
  },
  {
    label: 'български',
    code: 'bg',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/hu.png'
        width='20'
        height='15'
        alt='български'
      />
    ),
  },
  {
    label: 'العربية',
    code: 'ar',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/sa.png'
        width='20'
        height='15'
        alt='العربية'
      />
    ),
  },
  {
    label: 'اردو',
    code: 'ur',
    active: false,
    symbol: (
      <Image src='https://flagcdn.com/20x15/pk.png' width='20' height='15' alt='اردو' />
    ),
  },
  {
    label: 'العربية (البحرين)',
    code: 'ar-BH',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/qa.png'
        width='20'
        height='15'
        alt='العربية (البحرين)'
      />
    ),
  },
  {
    label: 'বাংলা',
    code: 'bn',
    active: false,
    symbol: (
      <Image src='https://flagcdn.com/20x15/bd.png' width='20' height='15' alt='বাংলা' />
    ),
  },
  {
    label: '简体中文',
    code: 'zh-CN',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/cn.png'
        width='20'
        height='15'
        alt='简体中文'
      />
    ),
  },
  {
    label: '繁體中文',
    code: 'zh-TW',
    active: false,
    symbol: (
      <Image
        src='https://flagcdn.com/20x15/tw.png'
        width='20'
        height='15'
        alt='繁體中文'
      />
    ),
  },
  {
    label: '日本',
    code: 'ja',
    active: false,
    symbol: (
      <Image src='https://flagcdn.com/20x15/jp.png' width='20' height='15' alt='日本' />
    ),
  },
  {
    label: '한국인',
    code: 'kr',
    active: true,
    symbol: (
      <Image src='https://flagcdn.com/20x15/kr.png' width='20' height='15' alt='한국인' />
    ),
  },
]

export const locales = langs.map((item) => item.code)

export const langMiddleWare = locales.join('|')
