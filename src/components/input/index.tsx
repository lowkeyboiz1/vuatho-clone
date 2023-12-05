'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'

import { Input } from '@nextui-org/react'
import { Add, SearchNormal1 } from 'iconsax-react'

import { useUnfocusItem } from '@/hook'
import { SearchSpiner } from '../Icons'

export const InputSearch = ({ onRefresh }: { onRefresh: any }) => {
  const [searchValue, setSearchValue] = useState<string>(
    useSearchParams().get('search') || '',
  )
  const [showSearchItem, setShowSearchItem] = useState<boolean>(false)
  const [onSearching, setOnSearching] = useState<boolean>(false)
  const [listTagSearch, setListTagSearch] = useState<any>([])

  const router = useRouter()
  const locale = useLocale()

  const t = useTranslations('inputSearch')

  const exclusionRef = useRef(null)
  const itemRef = useUnfocusItem(() => {
    setShowSearchItem(false)
  }, exclusionRef)

  const handleNavigate = useCallback(
    (item?: any) => {
      if (item?.slug?.length) {
        router.push(`/${locale}/press?search=${item.slug}`)
        setShowSearchItem(false)
        if (itemRef.current) {
          itemRef.current.blur()
        }
        return
      }
      if (searchValue?.length) {
        router.push(`/${locale}/press?search=${searchValue?.trim()}`)
        setShowSearchItem(false)
        if (itemRef.current) {
          itemRef.current.blur()
        }
      }
    },
    [searchValue],
  )

  const handleChangeValueSearch = (e: any) => {
    const value = e.target.value
    if (value.length < 70) setSearchValue(value)
  }

  const _handleClickSearchItem = (e: any, item: any) => {
    setSearchValue(item.name)
    setShowSearchItem(false)
    handleNavigate(item)
  }

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
        placeholder={t('search')}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            handleNavigate()
          }
        }}
        endContent={
          !!searchValue?.length && (
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
      {!!searchValue?.length && showSearchItem && (
        <>
          <div
            className='absolute left-0 right-0 top-[70px] z-[2] max-h-[400px] overflow-y-auto rounded-[16px] bg-white py-[16px] shadow-[0px_4px_8px_0px_#ACACAC29]'
            ref={exclusionRef}
          >
            {onSearching ? (
              <div className='px-[32px] py-[10px]  text-[1.8rem]'>{t('lookingFor')}</div>
            ) : (
              listTagSearch.map((i: any) => (
                <div
                  key={i.name}
                  onClick={(e) => {
                    _handleClickSearchItem(e, i)
                  }}
                  className='cursor-pointer px-[32px] py-[10px] text-[1.8rem] font-normal text-base-black-1 duration-300 hover:bg-[#F8F8F8] '
                >
                  {i.name}
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  )
}
