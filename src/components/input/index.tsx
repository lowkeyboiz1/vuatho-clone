'use client'

import { Input } from '@nextui-org/react'
import { useState, useRef } from 'react'
import { Add, SearchNormal1 } from 'iconsax-react'
import { useUnfocusItem } from '@/hook'

export const InputSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const [showSearchItem, setShowSearchItem] = useState<boolean>(false)
  const exclusionRef = useRef(null)
  const itemRef = useUnfocusItem(() => {
    setShowSearchItem(false)
  }, exclusionRef)

  const users = [
    { name: 'Sửa chữa xe máy' },
    { name: 'Điện lạnh' },
    { name: 'Xây dựng công trình' },
    { name: 'Mẹo vặt' },
    { name: 'Hướng dẫn người mới' },
    { name: 'Nghề nghiệp' },
  ]

  return (
    <>
      <Input
        autoComplete='off'
        value={searchValue}
        ref={itemRef}
        onFocus={() => setShowSearchItem(true)}
        onChange={(e: any) => {
          setSearchValue(e.target.value)
          console.log(e.target.value)
        }}
        startContent={<SearchNormal1 size={24} className=' text-[#292D32]' />}
        placeholder='Tìm kiếm'
        endContent={
          searchValue.length > 0 && (
            <div
              className='cursor-pointer rounded-full bg-[#292D32] hover:bg-[#292D32]/40'
              onClick={() => {
                setSearchValue('')
                setShowSearchItem(true)
                if (itemRef.current) {
                  itemRef.current.focus()
                }
              }}
            >
              <Add size={16} className='rotate-45 text-white' />
            </div>
          )
        }
        classNames={{
          clearButton: 'pr-[10px]',
          innerWrapper:
            'py-[16px] px-[8px] data-[hover=true]:bg-white group-data-[focus=true]:bg-white bg-white ',
          input:
            'text-[1.6rem] placeholder:font-light data-[has-start-content=true]:ps-[10px]',
          inputWrapper:
            'bg-white rounded rounded-full overflow-hidden data-[hover=true]:bg-white group-data-[focus=true]:bg-white h-[58px] shadow-[0px_4px_8px_0px_#ACACAC29] group-data-[focus=true]:border-none border-none',
        }}
      />
      {showSearchItem && (
        <>
          <div
            className='absolute left-0 right-0 top-[70px] max-h-[400px] overflow-y-auto rounded-[16px] bg-white py-[16px] shadow-[0px_4px_8px_0px_#ACACAC29]'
            ref={exclusionRef}
          >
            {searchValue.length > 0 ? (
              <div className=''>
                {users.map((i) => (
                  <div
                    key={i.name}
                    onClick={() => {
                      setSearchValue(i.name)
                      setShowSearchItem(false)
                    }}
                    className='cursor-pointer px-[32px] py-[10px] text-[1.6rem] font-normal text-base-black-1 duration-300 hover:bg-[#F8F8F8]'
                  >
                    {i.name}
                  </div>
                ))}
              </div>
            ) : (
              <div className='flex flex-col gap-[10px] px-[16px]'>
                <h3 className='text-[1.6rem] font-bold'>Tìm kiếm nhiều</h3>
                <div className='list-tag flex flex-wrap items-center gap-[8px]'>
                  {users.map((i) => (
                    <div
                      key={i.name}
                      onClick={() => {
                        setSearchValue(i.name)
                        setShowSearchItem(false)
                      }}
                      className='rounded-full bg-[#F8F8F8] px-[16px] py-[10px] text-[1.6rem] font-normal text-base-black-1'
                    >
                      {i.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  )
}
