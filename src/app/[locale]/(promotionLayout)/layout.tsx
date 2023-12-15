import { PromotionsHeader } from './promotion'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PromotionsHeader />
      {children}
    </div>
  )
}
