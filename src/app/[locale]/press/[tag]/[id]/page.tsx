import axios from 'axios'
import PressDetail from '.'

export async function generateMetadata({ params }: { params?: any }) {
  const { data } = await axios.get('https://sandbox-api-website.vuatho.com/blog/detail', {
    params: {
      slug: params.id,
      lang: params.locale,
    },
  })

  return {
    title: data?.data.title,
  }
}

function PressDetailWrapper() {
  return <PressDetail />
}

export default PressDetailWrapper
