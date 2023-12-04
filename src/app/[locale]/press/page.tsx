import type { Metadata, ResolvingMetadata } from 'next'

import axios from 'axios'
import { PressContent } from '.'

// export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
//   const { data } = await axios.get('http://192.168.1.50:7006/home/blogs')

//   console.log('1', data)

//   const title = data?.data?.[0]?.title

//   return {
//     title,
//   }
// }

function Press({ searchParams, params }: { searchParams: any; params: any }) {
  return (
    <div className='flex flex-col pt-[64px] 3xl:pt-[80px]'>
      <PressContent searchParams={searchParams} />
    </div>
  )
}

export default Press
