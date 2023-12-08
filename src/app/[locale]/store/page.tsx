import { Store } from '.'

export async function generateMetadata({ params }: { params?: any }) {
  try {
    const metadata: any = {
      vi: 'Mua đồng phục',
      en: 'Store',
    }
    return {
      title: metadata[params.locale || 'vi'],
    }
  } catch (error) {
    console.log(error)
  }
}
function StorePage() {
  return <Store />
}
export default StorePage
