import type { Metadata, ResolvingMetadata } from 'next'

import axios from 'axios'
import { PressContent } from '.'

export async function generateMetadata({ params, searchParams }: any): Promise<Metadata> {
  console.log(searchParams.search)

  return {
    title: searchParams.search ? searchParams.search : 'Press',
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