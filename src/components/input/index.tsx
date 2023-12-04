'use client'

import { Input, Skeleton } from '@nextui-org/react'
import { useState, useRef, useEffect } from 'react'
import { Add, SearchNormal1 } from 'iconsax-react'
import { useUnfocusItem } from '@/hook'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { SearchSpiner } from '../Icons'
import instance from '@/services/axiosConfig'
import Link from 'next/link'

export const InputSearch = ({ onRefresh }: { onRefresh: any }) => {
  const router = useRouter()
  const locale = useLocale()

  const [searchValue, setSearchValue] = useState('')
  const [showSearchItem, setShowSearchItem] = useState<boolean>(false)
  const [onSearching, setOnSearching] = useState<boolean>(false)
  const [onFetchingTag, setOnFetchingTag] = useState<boolean>(false)
  const [listTagSearch, setListTagSearch] = useState([{}])
  const [listTag, setListTag] = useState([{}])

  const exclusionRef = useRef(null)
  const itemRef = useUnfocusItem(() => {
    setShowSearchItem(false)
  }, exclusionRef)

  const handleNavigate = (value?: string) => {
    if (value) {
      router.push(`/${locale}/press?keyword=${value}`)
    }

    if (searchValue.length > 0) {
      router.push(`/${locale}/press?keyword=${searchValue}`)
      setShowSearchItem(false)
      if (itemRef.current) {
        itemRef.current.blur()
      }
    }
  }

  const handleChangeValueSearch = (e: any) => {
    const value = e.target.value
    if (value.length < 70) setSearchValue(value)
  }

  const handleFetchingListTag = async () => {
    // const {data} = instance.get('/asdasdas')
    try {
      setListTag([
        { name: 'Sửa chữa xe máy', slug: 'sua-chua-xe-may' },
        { name: 'Điện lạnh', slug: 'dien-lanh' },
        { name: 'Xây dựng công trình', slug: 'xay-dung-cong-trinh' },
        { name: 'Mẹo vặt', slug: 'meo-vat' },
        { name: 'Hướng dẫn người mới', slug: 'huong-dan-nguoi-moi' },
        { name: 'Nghề nghiệp', slug: 'nghe-nghiep' },
      ])
      setOnFetchingTag(false)
    } catch (error) {
      console.log(error)
      setOnFetchingTag(false)
    }
  }

  useEffect(() => {
    onFetchingTag && handleFetchingListTag()
  }, [onFetchingTag])

  useEffect(() => {
    setOnFetchingTag(true)
  }, [])

  const handleSearch = async () => {
    try {
      // const {data} = instance.post('home/search')
      setListTagSearch([
        { name: 'Nghề nghiệp', slug: 'nghe-nghiep' },
        { name: 'Xây dựng công trình', slug: 'xay-dung-cong-trinh' },
        { name: 'Mẹo vặt', slug: 'meo-vat' },
        { name: 'Sửa chữa xe máy', slug: 'sua-chua-xe-may' },
        { name: 'Điện lạnh', slug: 'dien-lanh' },
        { name: 'Hướng dẫn người mới', slug: 'huong-dan-nguoi-moi' },
      ])
    } catch (error) {
      console.log(error)
    } finally {
      setOnSearching(false)
    }
  }

  useEffect(() => {
    setOnSearching(true)

    const debounceTimer = setTimeout(() => {
      //goi api o day
      handleSearch()

      console.log('searching ...')
    }, 500)

    return () => {
      clearTimeout(debounceTimer)
    }
  }, [searchValue])

  return (
    <>
      <Input
        autoComplete='off'
        value={searchValue}
        ref={itemRef}
        onFocus={() => setShowSearchItem(true)}
        onChange={(e: any) => {
          handleChangeValueSearch(e)
        }}
        startContent={<SearchNormal1 size={24} className=' text-[#292D32]' />}
        placeholder='Tìm kiếm'
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            handleNavigate()
          }
        }}
        endContent={
          searchValue.length > 0 && (
            <div
              className={`cursor-pointer rounded-full ${
                !onSearching && 'bg-[#292D32] hover:bg-[#292D32]/40'
              }`}
              onClick={() => {
                setSearchValue('')
                setShowSearchItem(true)
                if (itemRef.current) {
                  itemRef.current.focus()
                }
              }}
            >
              {onSearching ? (
                <SearchSpiner className='h-[20px] w-[20px] animate-spin text-[#292D32]' />
              ) : (
                <Add size={16} className='rotate-45 text-white' />
              )}
            </div>
          )
        }
        classNames={{
          clearButton: 'pr-[10px]',
          innerWrapper:
            'py-[16px] px-[8px] data-[hover=true]:bg-white group-data-[focus=true]:bg-white bg-white ',
          input:
            'text-[1.8rem] placeholder:font-light data-[has-start-content=true]:ps-[10px]',
          inputWrapper:
            'bg-white rounded rounded-full overflow-hidden data-[hover=true]:bg-white group-data-[focus=true]:bg-white h-[58px] shadow-[0px_4px_8px_0px_#ACACAC29] group-data-[focus=true]:border-none border-none',
        }}
      />
      {showSearchItem && (
        <>
          <div
            className='absolute left-0 right-0 top-[70px] z-[2] max-h-[400px] overflow-y-auto rounded-[16px] bg-white py-[16px] shadow-[0px_4px_8px_0px_#ACACAC29]'
            ref={exclusionRef}
          >
            {searchValue.trim().length !== 0 ? (
              <div className=''>
                {onSearching ? (
                  <div className='px-[32px] py-[10px]  text-[1.8rem]'>
                    Đang tìm kiếm...
                  </div>
                ) : (
                  listTagSearch.map((i: any) => (
                    <div
                      key={i.name}
                      onClick={() => {
                        setSearchValue(i.name)
                        setShowSearchItem(false)
                        handleNavigate(i.name)
                      }}
                      className='cursor-pointer px-[32px] py-[10px] text-[1.8rem] font-normal text-base-black-1 duration-300 hover:bg-[#F8F8F8] '
                    >
                      {i.name}
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className=' flex flex-col gap-[10px] px-[16px]'>
                <h3 className='text-[1.8rem] font-bold'>Tìm kiếm nhiều</h3>
                <div className='list-tag flex flex-wrap items-center gap-[8px]'>
                  {onFetchingTag ? (
                    <div className='flex items-center gap-[20px]'>
                      <Skeleton className='h-[40px] w-[120px] rounded-full' />
                      <Skeleton className='h-[40px] w-[80px] rounded-full' />
                      <Skeleton className='h-[40px] w-[150px] rounded-full' />
                      <Skeleton className='h-[40px] w-[200px] rounded-full' />
                      <Skeleton className='h-[40px] w-[50px] rounded-full' />
                    </div>
                  ) : (
                    listTag.map((i: any) => (
                      <div
                        key={i.name}
                        onClick={() => {
                          setSearchValue(i.name)
                          handleNavigate(i.name)
                          setShowSearchItem(false)
                          console.log(i.name)
                        }}
                        className='cursor-pointer rounded-full bg-[#F8F8F8] px-[16px] py-[10px] text-[1.8rem] font-normal text-base-black-1'
                      >
                        {i.name}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
