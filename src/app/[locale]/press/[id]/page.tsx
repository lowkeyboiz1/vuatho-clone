'use client'

import { Add, SearchNormal1 } from 'iconsax-react'
import { Input } from '@nextui-org/react'
import Image from 'next/image'
import { ListBreadcrumbsForDetailPress } from '@/components/breadcrumbs'
import { useState, useRef } from 'react'
import { useUnfocusItem } from '@/hook'
import { MostViewed } from '..'
import { BreadcrumbWithUrl } from '@/interface'
import { InputSearch } from '@/components/input'

function PressDetail() {
  const listBreadcrumbs: BreadcrumbWithUrl[] = [
    { title: 'Trang chủ', url: '/' },
    { title: 'Bài viết', url: '/press' },
    { title: 'Đại bàng ở trọ' },
  ]

  const [searchValue, setSearchValue] = useState('')
  const [showSearchItem, setShowSearchItem] = useState<boolean>(false)
  const exclusionRef = useRef(null)
  const itemRef = useUnfocusItem(() => {
    setShowSearchItem(false)
  }, exclusionRef)

  return (
    <div className='bg-base-gray py-[104px]'>
      <div className=' ct-container-70 '>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-col gap-[20px] lg:flex-row'>
            <div className='relative min-w-[400px]'>
              <InputSearch />
            </div>
            <div className='max-w-max rounded-full p-[17px] lg:bg-white'>
              <ListBreadcrumbsForDetailPress list={listBreadcrumbs} />
            </div>
          </div>
          <div className='flex flex-col-reverse gap-[20px] lg:flex-row '>
            <div className='lg:min-w-[400px]'>
              <MostViewed />
            </div>
            <div className='flex flex-col gap-[16px] rounded-[16px] bg-white p-[16px]'>
              <h3 className='text-[3.2rem] font-semibold text-base-black-1'>
                Đại bàng ở trọ
              </h3>
              <div className='flex items-center gap-[16px] text-[1.4rem]'>
                <p className='font-normal text-base-black-1'>Thẻ tag</p>
                <time className='font-light text-base-drak-gray'>11/12/2023</time>
              </div>
              <div className='overflow-hidden rounded-[16px]'>
                <Image
                  src={'/press/press1.png'}
                  alt=''
                  height={480}
                  width={2000}
                  className='object-contain'
                />
              </div>
              <p className='text-[1.8rem] font-semibold text-base-black-1 '>
                Đại bạng ở trọ
              </p>
              <p className='text-[1.6rem] font-light'>
                Tại bất kỳ văn phòng làm việc nào trên thế giới, cứ ba máy tính đang hoạt
                động, ít nhất một chiếc có bộ não - CPU, được xuất xưởng từ TP HCM. Đó là
                kết quả sau hơn 17 năm đầu tư của Intel - tập đoàn công nghệ cao đầu tiên
                trên thế giới, chọn Việt Nam cho một dự án tỷ USD. Nhà sản xuất chip Mỹ
                chiếm khoảng 70% thị phần CPU máy tính toàn cầu. Còn nhà máy tại Khu công
                nghệ cao TP HCM (SHTP) đang lắp ráp, kiểm định và đóng gói hơn một nửa
                tổng số chip của Intel. Mời gọi được Intel là cột mốc quan trọng trong quá
                trình thu hút đầu tư FDI, ông Phạm Chánh Trực, nguyên Phó bí thư Thành uỷ
                TP HCM, Trưởng Ban quản lý đầu tiên của SHTP, nhìn nhận. Ông Trực đóng vai
                trò chủ chốt trong cuộc đàm phán kéo dài hơn hai năm đưa tập đoàn bán dẫn
                Mỹ vào Việt Nam. Sau Intel, nhiều thương hiệu công nghệ toàn cầu như
                Samsung, LG cũng thiết lập các nhà máy tỷ USD tại Việt Nam, cùng với một
                loạt đơn vị lắp ráp của Dell, Apple. Từ áo quần, giày dép, cụm từ made in
                Việt Nam bắt đầu xuất hiện trên TV, smartphone, đồng hồ thông minh, chip
                bán dẫn tiêu thụ trên toàn cầu.
                <br />
                Thiết bị điện, điện tử ngày nay trở thành mặt hàng quan trọng nhất, chiếm
                gần một nửa tổng giá trị xuất khẩu của Việt Nam với kim ngạch 155 tỷ USD,
                tăng 5 lần sau 10 năm. Việt Nam lọt vào top 10 quốc gia cung cấp thiết bị
                điện, điện tử lớn nhất cho thế giới. Nhưng hàng tỷ USD đầu tư của các tập
                đoàn này cho Việt Nam một hình ảnh mới trên bản đồ thương mại chứ chưa thể
                kéo nền kinh tế lên nấc thang giá trị cao hơn.
              </p>
              <div className='overflow-hidden rounded-[16px]'>
                <Image
                  src={'/press/press1.png'}
                  alt=''
                  height={480}
                  width={2000}
                  className='object-contain'
                />
              </div>
              <p className='text-[1.8rem] font-semibold text-base-black-1 '>
                Đại bạng ở trọ
              </p>
              <p className='text-[1.6rem] font-light'>
                Tại bất kỳ văn phòng làm việc nào trên thế giới, cứ ba máy tính đang hoạt
                động, ít nhất một chiếc có bộ não - CPU, được xuất xưởng từ TP HCM. Đó là
                kết quả sau hơn 17 năm đầu tư của Intel - tập đoàn công nghệ cao đầu tiên
                trên thế giới, chọn Việt Nam cho một dự án tỷ USD. Nhà sản xuất chip Mỹ
                chiếm khoảng 70% thị phần CPU máy tính toàn cầu. Còn nhà máy tại Khu công
                nghệ cao TP HCM (SHTP) đang lắp ráp, kiểm định và đóng gói hơn một nửa
                tổng số chip của Intel. Mời gọi được Intel là cột mốc quan trọng trong quá
                trình thu hút đầu tư FDI, ông Phạm Chánh Trực, nguyên Phó bí thư Thành uỷ
                TP HCM, Trưởng Ban quản lý đầu tiên của SHTP, nhìn nhận. Ông Trực đóng vai
                trò chủ chốt trong cuộc đàm phán kéo dài hơn hai năm đưa tập đoàn bán dẫn
                Mỹ vào Việt Nam. Sau Intel, nhiều thương hiệu công nghệ toàn cầu như
                Samsung, LG cũng thiết lập các nhà máy tỷ USD tại Việt Nam, cùng với một
                loạt đơn vị lắp ráp của Dell, Apple. Từ áo quần, giày dép, cụm từ made in
                Việt Nam bắt đầu xuất hiện trên TV, smartphone, đồng hồ thông minh, chip
                bán dẫn tiêu thụ trên toàn cầu.
                <br />
                Thiết bị điện, điện tử ngày nay trở thành mặt hàng quan trọng nhất, chiếm
                gần một nửa tổng giá trị xuất khẩu của Việt Nam với kim ngạch 155 tỷ USD,
                tăng 5 lần sau 10 năm. Việt Nam lọt vào top 10 quốc gia cung cấp thiết bị
                điện, điện tử lớn nhất cho thế giới. Nhưng hàng tỷ USD đầu tư của các tập
                đoàn này cho Việt Nam một hình ảnh mới trên bản đồ thương mại chứ chưa thể
                kéo nền kinh tế lên nấc thang giá trị cao hơn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PressDetail
