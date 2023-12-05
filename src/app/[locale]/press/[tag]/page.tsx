import type { Metadata, ResolvingMetadata } from 'next'

import axios from 'axios'
import { PressContent } from '..'

export async function generateMetadata({ params }: { params?: any }) {
  try {
    const { data } = await axios.get(
      'https://sandbox-api-website.vuatho.com/blog/byCategory?slug=tin-tuc',
    )
    return {
      title: data?.data?.[0].category?.title,
    }
  } catch (error) {
    console.log(error)
    return {
      title: 'Không tìm thấy thẻ tag',
    }
  }
}

function Press({ searchParams, params }: { searchParams: any; params: any }) {
  return (
    <div className='flex flex-col pt-[64px] 3xl:pt-[80px]'>
      <PressContent searchParams={searchParams} />
    </div>
  )
}

export default Press
