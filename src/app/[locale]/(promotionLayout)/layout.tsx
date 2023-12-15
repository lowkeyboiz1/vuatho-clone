import { HeaderPromotion } from './promotion/page'

export const metadata = {
  title: 'Promotion',
  description: 'Promotion of Vua Thợ',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderPromotion />
      {children}
    </div>
  )
}
