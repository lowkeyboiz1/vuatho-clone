import { Metadata } from 'next'
import BackgroundRelative from '@/components/BackgroundRelative'

export const metadata: Metadata = {
  title: 'Điều khoản và điều kiện',
}

function Guides() {
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <BackgroundRelative text='Điều Khoản & Điều Kiện' />
      <div className='rounded-t-[20px] 13inch:rounded-t-[40px] 3xl:rounded-t-[100px] bg-white relative -top-[40px] 3xl:-top-[80px] py-[20px] 13inch:py-[40px] 3xl:py-[80px]'>
        <div className='ct-container-70 md:gap-20 gap-10'>
          <TermsOfService />
        </div>
      </div>
    </div>
  )
}

export default Guides

const TermsOfService = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>1. QUY ĐỊNH CHUNG</h4>
        <p className='text-[1.6rem]'>
          VUI LÒNG ĐỌC KỸ CÁC ĐIỀU KHOẢN NÀY TRƯỚC KHI TRUY CẬP HOẶC SỬ DỤNG DỊCH VỤ.
        </p>
        <p className='text-[1.6rem]'>
          Điều khoản sử dụng này là thỏa thuận pháp lý dưới hình thức điện tử điều chỉnh
          việc Khách hàng, một cá nhân, truy cập hoặc sử dụng các ứng dụng, trang web, nội
          dung, sản phẩm và dịch vụ (“Dịch vụ”) của CÔNG TY TNHH CÔNG NGHỆ VUA THỢ, một
          doanh nghiệp thành lập theo pháp luật Việt Nam, có văn phòng tại 57 Song Hành,
          Phường An Phú, Thành phố Thủ Đức, Thành phố Hồ Chí Minh. Giấy Chứng nhận đăng ký
          doanh nghiệp số 0318063280 ngày 25 tháng 09 năm 2023 (“Vua Thợ”).
        </p>
        <p className='text-[1.6rem]'>
          Điều khoản sử dụng này và bất kỳ sửa đổi, bổ sung nào của Điều khoản sử dụng này
          được công bố bởi Vua Thợ tại từng thời điểm tại trang web
          <a className='mx-2' href='https://vuatho.com/' target='_blank'>
            www.vuatho.com
          </a>
          và/hoặc trên Ứng dụng Vua Thợ. Vua Thợ bảo lưu quyền được điều chỉnh, sửa đổi,
          bổ sung hoặc hủy bỏ bất kỳ điều khoản nào của Điều khoản sử dụng và/hoặc các
          chính sách liên quan đến Dịch vụ tại bất cứ thời điểm nào mà Vua Thợ cho là phù
          hợp. Những điều chỉnh, sửa đổi, bổ sung hoặc hủy bỏ Điều khoản sử dụng và/hoặc
          các chính sách có liên quan đến Dịch vụ sẽ có hiệu lực ngay khi nội dung được
          đăng tải trên trang web
          <a className='mx-2' href='https://vuatho.com/' target='_blank'>
            www.vuatho.com
          </a>
          và/hoặc thông qua Ứng dụng hoặc kể từ thời điểm được Vua Thợ thông báo trên
          trang thông tin điện tử
          <a className='mx-2' href='https://vuatho.com/' target='_blank'>
            www.vuatho.com
          </a>
          và/hoặc Ứng dụng. Bạn nên kiểm tra thường xuyên Điều khoản sử dụng này khi sử
          dụng Dịch vụ thông qua Ứng dụng.
        </p>
        <p className='text-[1.6rem]'>
          Việc sử dụng Ứng dụng và/hoặc tiếp tục sử dụng Dịch vụ thông qua Ứng dụng sau
          khi có bất kỳ thay đổi nào về Điều khoản sử dụng sẽ mặc nhiên được coi là Bạn đã
          chấp thuận và bị ràng buộc đối với Điều khoản sử dụng và những nội dung thay đổi
          đó.
        </p>
        <p className='text-[1.6rem]'>
          Bằng việc sử dụng dịch vụ hay tạo tài khoản tại ứng dụng Vua Thợ, bạn đã chấp
          nhận và đồng ý với Điều khoản sử dụng này và chính sách bổ sung được dẫn chiếu
          theo đây. Nếu bạn không đồng ý với những điều khoản dịch vụ này, vui lòng không
          sử dụng dịch vụ hoặc truy cập vào trang Vua Thợ. Nếu bạn là người chưa thành
          niên hoặc bị giới hạn về năng lực hành vi theo quy định pháp luật, bạn cần nhận
          được sự hỗ trợ hoặc chấp thuận từ cha mẹ hoặc người giám hộ hợp pháp, tùy từng
          trường hợp áp dụng, để mở tài khoản hoặc sử dụng dịch vụ. Trong trường hợp đó,
          cha mẹ hoặc người giám hộ hợp pháp, tùy từng trường hợp áp dụng, cần hỗ trợ để
          bạn hiểu rõ hoặc thay mặt bạn chấp nhận những điều khoản trong thỏa thuận dịch
          vụ này. Nếu bạn chưa chắc chắn về độ tuổi cũng như năng lực hành vi dịch vụ của
          mình, hoặc chưa hiểu rõ các điều khoản này cũng như quy định pháp luật có liên
          quan áp dụng cho độ tuổi hoặc năng lực hành vi dịch vụ của mình, vui lòng không
          tạo tài khoản hoặc sử dụng dịch vụ cho đến khi nhận được sự giúp đỡ từ cha mẹ
          hoặc người giám hộ hợp pháp. Nếu bạn là cha mẹ hoặc người giám hộ hợp pháp của
          người chưa thành niên hoặc bị giới hạn về năng lực hành vi dịch vụ, tùy từng
          trường hợp theo quy định pháp luật, bạn cần hỗ trợ để người được giám hộ hiểu rõ
          hoặc đại diện người được giám hộ chấp nhận các điều khoản dịch vụ này và chịu
          trách nhiệm đối với toàn bộ quá trình sử dụng tài khoản hoặc các dịch vụ của Vua
          Thợ mà không phân biệt tài khoản đã hoặc sẽ được tạo lập.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>
          2. ĐỊNH NGHĨA VÀ GIẢI THÍCH TỪ NGỮ
        </h4>
        <p className='text-[1.6rem]'>
          <strong>“Vua Thợ”</strong> là Công ty TNHH Công Nghệ Vua Thợ hoạt động theo Giấy
          chứng nhận đăng ký doanh nghiệp số 0318063280 do Sở kế hoạch &amp; Đầu tư Thành
          phố Hồ Chí Minh cấp lần đầu ngày 25 tháng 09 2023;
        </p>
        <p className='text-[1.6rem]'>
          <strong>“Dịch vụ”</strong> là các dịch vụ do Vua Thợ hoặc đối tác của Vua Thợ
          cung cấp thông qua Ứng dụng;
        </p>
        <p className='text-[1.6rem]'>
          <strong>“Bạn”</strong> nghĩa là bất kỳ khách hàng, một cá nhân truy cập hoặc sử
          dụng các ứng dụng, trang web, nội dung, sản phẩm và dịch vụ được yêu cầu thông
          qua Tài khoản Người dùng;
        </p>
        <p className='text-[1.6rem]'>
          <strong>“Đối tác”</strong> là cá nhân hợp tác kinh doanh với Vua Thợ, có đủ điều
          kiện để cung cấp Dịch vụ cho Người dùng theo quy định của pháp luật Việt Nam;
        </p>
        <p className='text-[1.6rem]'>
          <strong>“Ứng dụng”</strong> là ứng dụng Vua Thợ được cài đặt trên thiết bị di
          động, được quản lý, vận hành bởi Vua Thợ, cho phép Người dùng truy cập để sử
          dụng Dịch vụ;
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>3. CAM KẾT</h4>
        <p className='text-[1.6rem] underline'>
          Cam kết trong suốt quá trình sử dụng Ứng dụng
        </p>
        <p className='text-[1.6rem]'>Bạn cam kết rằng:</p>
        <ul className='list-disc list-inside text-[1.6rem]'>
          <li>
            Có năng lực hành vi dân sự đầy đủ theo quy định của pháp luật để chấp thuận và
            đồng ý với Điều khoản sử dụng; có quyền, thẩm quyền và năng lực để sử dụng
            Dịch vụ và để tuân theo Điều khoản sử dụng này;
          </li>
          <li>
            Những thông tin cung cấp cho Vua Thợ luôn đảm bảo cập nhật, đầy đủ và xác
            thực;
          </li>
          <li>Việc sử dụng Ứng Dụng là để phục vụ cho nhu cầu hợp pháp;</li>
          <li>
            Có năng lực hành vi dân sự đầy đủ theo quy định của pháp luật để chấp thuận và
            đồng ý với Điều khoản sử dụng; có quyền, thẩm quyền và năng lực để sử dụng
            Dịch vụ và để tuân theo Điều khoản sử dụng này;
          </li>
          <li>
            Không cung cấp cho bất kỳ người nào khác quyền truy cập vào Tài khoản Người
            dùng/ Tài khoản Thợ, bao gồm cả việc chuyển giao Tài khoản Người dùng/ Tài
            khoản Thợ hoặc thông tin từ Tài khoản Người dùng/ Tài khoản Thợ cho bất kỳ
            người nào khác;
          </li>
          <li>
            Có trách nhiệm kiểm tra và đảm bảo rằng Bạn đã tải đúng Ứng dụng tương thích
            dành cho thiết bị di động của mình. Vua Thợ không chịu trách nhiệm đối với
            việc Bạn không có một thiết bị tương thích với Ứng dụng và/hoặc đã tải một
            phiên bản Ứng dụng không phù hợp, không tương thích dành cho thiết bị di động
            của Bạn.
          </li>
        </ul>
        <p className='text-[1.6rem] underline'>Cam kết khi sử dụng Dịch vụ</p>
        <p className='text-[1.6rem]'>Bằng việc sử dụng Ứng dụng, Bạn đồng ý rằng:</p>
        <ul className='list-disc list-inside text-[1.6rem]'>
          <li>
            Không sử dụng Ứng dụng để gửi và lưu trữ bất kỳ tài liệu hoặc thông tin trái
            phép nào hoặc phục vụ các mục đích lừa đảo; để làm phiền, quấy nhiễu người
            khác hoặc thực hiện đặt sử dụng dịch vụ giả mạo; vi phạm điều cấm của pháp
            luật hiện hành của Việt Nam;
          </li>
          <li>
            Không sử dụng thông tin của Vua Thợ, của Đối tác, của Người dùng cho mục đích
            nào khác ngoài mục đích sử dụng Dịch vụ;
          </li>
          <li>
            Không thực hiện các hành vi (cố ý hay vô ý) có thể gây tổn hại cho Ứng dụng,
            tổn hại tới uy tín thương hiệu, tài sản của Vua Thợ và/hoặc Đối tác và/hoặc
            Người dùng;
          </li>
          <li>
            Hoàn toàn chịu trách nhiệm bảo toàn và bảo mật mật khẩu Tài khoản Người dùng/
            Tài khoản Thợ của mình hoặc bất kỳ phương thức nhận dạng nào mà Vua Thợ cung
            cấp để Bạn sử dụng Ứng dụng;
          </li>
          <li>
            Cung cấp cho Vua Thợ bất kỳ bằng chứng về nhận dạng nào mà Vua Thợ có thể yêu
            cầu vì mục đích thiết lập Tài khoản Người dùng/ Tài khoản Thợ và cung cấp Dịch
            vụ;
          </li>
          <li>
            Đồng ý cung cấp thông tin xác thực, thường xuyên duy trì, cập nhật kịp thời và
            đầy đủ thông tin theo yêu cầu của Vua Thợ để cung cấp, sử dụng Dịch vụ để đảm
            bảo rằng các thông tin này luôn xác thực, cập nhật và đầy đủ vào mọi thời
            điểm. Bạn xác nhận rằng nếu các thông tin về Bạn là không đúng, không chính
            xác, thiếu cập nhật hoặc không đầy đủ trên bất kỳ phương diện nào thì Vua Thợ
            có quyền chấm dứt việc cung cấp, sử dụng Dịch vụ của Bạn tại bất kỳ thời điểm
            nào cho dù là có hoặc không thông báo;
          </li>
          <li>
            Không được thực hiện các hành vi lừa dối Vua Thợ và các hành vi có tính chất
            tương tự nhằm hưởng lợi bất chính trong bất kỳ sự kiện, hoạt động khuyến mại
            nào do Vua Thợ tiến hành;
          </li>
          <li>
            <strong>Không được hủy dịch vụ nhiều lần liên tiếp;</strong>
          </li>
          <li>
            Vua Thợ có quyền chặn hoặc từ chối quyền truy cập vào Tài khoản Người dùng,
            và/hoặc chặn các tính năng tích hợp sẵn trong Ứng dụng, mà không ảnh hưởng đến
            các quyền và chế tài khác của Vua Thợ khi Vua Thợ cho rằng Bạn có hành vi vi
            phạm bất kỳ điều khoản nào trong Điều khoản sử dụng này và/hoặc quy định pháp
            luật Việt Nam;
          </li>
          <li>
            Khi yêu cầu Dịch vụ thông qua Ứng dụng hoặc khi sử dụng Dịch vụ, Bạn phải tự
            chi trả cước viễn thông theo chính sách của đơn vị cung cấp dịch vụ viễn thông
            mà Bạn sử dụng;
          </li>
          <li>
            Việc sử dụng Ứng dụng, Dịch vụ và/hoặc các tính năng được tích hợp trên Ứng
            dụng của Bạn sẽ phù hợp và tuân theo{' '}
            <strong>chính sách bảo mật thông tin</strong> của Vua Thợ;
          </li>
          <li>
            Chịu trách nhiệm cuối cùng về sự an toàn của chính Bạn trong khi cung cấp, sử
            dụng Dịch vụ, và phải thực hiện tất cả các biện pháp phòng ngừa cần thiết để
            đảm bảo an toàn khi cung cấp, sử dụng Dịch vụ;
          </li>
          <li>
            Cam kết hoàn toàn chịu trách nhiệm pháp lý, chịu trách nhiệm đối với toàn bộ
            tổn thất hoặc thiệt hại gây ra cho chính bản thân Bạn, Đối tác, Vua Thợ, nhân
            sự của Vua Thợ và bất kỳ bên thứ ba nào khi Bạn vi phạm bất kỳ quy định nào
            của pháp luật, Điều khoản sử dụng này.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>
          4. NỘI DUNG DỊCH VỤ ĐƯỢC VUA THỢ CUNG CẤP THÔNG QUA NỀN TẢNG KẾT NỐI
        </h4>
        <h5 className='text-[1.8rem] text-[#0B27B6]/90'>4.1. Nền tảng công nghệ:</h5>
        <p className='text-[1.6rem]'>
          Công ty cung cấp một nền tảng công nghệ cho phép người dùng sử dụng các ứng dụng
          di động của Công ty hoặc các trang web được Vua Thợ cung cấp như một phần của
          Dịch vụ (gọi chung là “Ứng dụng”) để kết nối Bạn với một nhà cung cấp cá nhân
          sẵn sàng cung cấp dịch vụ theo thỏa thuận với Vua Thợ (sau đây gọi tắt là “đối
          tác”). Bạn công nhận rằng Bạn sử dụng Ứng dụng để tìm kiếm và kết nối với mỗi
          đối tác của Vua Thợ để thực hiện các dịch vụ khác nhau tại các thời điểm khác
          nhau tuỳ theo nhu cầu và quyết định riêng của Bạn.
        </p>
        <p className='text-[1.6rem]'>
          Vua Thợ là một doanh nghiệp cung cấp dịch vụ công nghệ và không cung cấp dịch vụ
          việc làm, không có chức năng của doanh nghiệp hoạt động dịch vụ việc làm.
        </p>
        <h5 className='text-[1.8rem] text-[#0B27B6]/90'>4.2. Dịch vụ khác:</h5>
        <p className='text-[1.6rem]'>
          - Là các dịch vụ được hiển thị trên ứng dụng hoặc được tư vấn, truyền thông tới
          Bạn bằng bất cứ công cụ truyền thông nào khác do Công ty TNHH Công Nghệ Vua Thợ
          thực hiện.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>5. THANH TOÁN</h4>
        <h5 className='text-[1.8rem] text-[#0B27B6]/90'>
          a. Nếu bạn thanh toán giá trị đơn hàng trước khi sử dụng dịch vụ.
        </h5>
        <p className='text-[1.6rem]'>
          - Hủy buổi làm việc: Trong trường hợp Bạn không sắp xếp được một hoặc một số
          buổi làm cho đối tác thì buổi làm việc sẽ được làm bù. Buổi làm bù này sẽ được
          thực hiện trong thời gian tối đa là 01 (một) tháng tính từ ngày hết hạn đơn
          hàng. Sau thời gian này, nếu Bạn không sắp xếp được thời gian để làm bù thì Vua
          Thợ sẽ không có trách nhiệm kết nối đối tác cho Bạn nữa.
        </p>
        <p className='text-[1.6rem]'>
          - Cơ sở tính phí dịch vụ: Là khoảng thời gian đối tác giúp làm việc tại địa điểm
          làm việc của Bạn, khoảng thời gian này được ghi nhận và thông báo trên ứng dụng
          Vua Thợ dành cho Bạn. Giữa bạn và Vua Thợ, Vua Thợ có quyền tùy ý thiết lập, xóa
          và/hoặc sửa đổi Phí đối với bất kỳ hoặc tất cả các dịch vụ hoặc hàng hóa nhận
          được thông qua việc sử dụng Dịch vụ tại bất kỳ thời điểm nào. Hơn nữa, bạn công
          nhận và đồng ý rằng Phí áp dụng tại các khu vực địa lý nhất định có thể tăng
          đáng kể trong thời gian nhu cầu cao. Vua Thợ sẽ nỗ lực thông báo cho bạn về
          những khoản phí có thể được áp dụng, với điều kiện là bạn sẽ chịu trách nhiệm
          cho các khoản Phí phát sinh theo Tài khoản của bạn bất kể bạn có biết về các
          khoản Phí hoặc các khoản tiền đó hay không. Tùy từng thời điểm, Vua Thợ có thể
          cung cấp cho người dùng nhất định các chương trình khuyến mãi và giảm giá có thể
          dẫn đến việc tính phí các khoản tiền khác nhau cho cùng dịch vụ hoặc hàng hóa
          hay các dịch vụ hoặc hàng hóa tương tự nhận được thông qua việc sử dụng các Dịch
          vụ này, và bạn đồng ý rằng các chương trình khuyến mãi giảm giá như vậy sẽ không
          liên quan đến việc bạn sử dụng các Dịch vụ hoặc các khoản Phí áp dụng đối với
          bạn, trừ khi cũng được cung cấp cho bạn.
        </p>
        <p className='text-[1.6rem]'>
          - Trong trường hợp giờ làm việc trong ngày phát sinh ngoài khung giờ đã thỏa
          thuận, Bạn cần thông báo trước cho Vua Thợ. Nếu Bạn không thông báo trước về giờ
          làm việc có thể phát sinh, Vua Thợ sẽ không đảm bảo việc bố trí đối tác làm việc
          theo đúng yêu cầu của Bạn.
        </p>
        <h5 className='text-[1.8rem] text-[#0B27B6]/90'>
          b. Các khoảng thời gian sau cũng được tính là thời gian làm việc của đối tác cho
          Bạn:
        </h5>
        <p className='text-[1.6rem]'>
          - Đối tác đã đến địa điểm làm việc theo khung giờ đã định nhưng Bạn đã không có
          mặt để mở cửa cho đối tác giúp việc thực hiện công việc trong khoảng thời gian
          30 phút dẫn đến đối tác không thể thực hiện công việc. Trong trường hợp này,
          thời gian làm việc của đối tác được tính bằng 100% thời gian của buổi làm việc
          đó.
        </p>
        <h5 className='text-[1.8rem] text-[#0B27B6]/90'>c. Hình thức thanh toán</h5>
        <p className='text-[1.6rem]'>
          - Bạn có thể thanh toán trước hoặc sau khi Bạn đã hoàn thành việc sử dụng Dịch
          vụ, Bạn được yêu cầu thanh toán đầy đủ cho Đối tác và Vua Thợ bằng cách chọn một
          trong các phương thức thanh toán có sẵn trên Ứng dụng.
        </p>
        <ul className='list-disc list-inside text-[1.6rem]'>
          <li>
            Thanh toán bằng cách chuyển khoản vào tài khoản thu hộ duy nhất
            <br />
            Tài khoản số: 31361688
            <br />
            Tên tài khoản: Công ty TNHH Công Nghệ Vua Thợ
            <br />
            Chi nhánh: ACB Phú Lâm
          </li>
          <li>Thanh toán bằng tiền mặt cho đối tác của Vua Thợ</li>
        </ul>
        <p className='text-[1.6rem]'>
          - Bạn đồng ý trả các khoản chi phí cho dịch vụ (“Phí”) có được thông qua kết
          nối. Sau khi Bạn nhận được dịch vụ thông qua việc sử dụng Dịch vụ, Vua Thợ sẽ
          thay mặt đối tác giúp việc thu hộ các khoản thanh toán Phí liên quan. Trong
          trường hợp pháp luật quy định, các khoản Phí sẽ bao gồm cả các khoản thuế và
          nghĩa vụ tài chính liên quan.
        </p>
        <p className='text-[1.6rem]'>
          - Vua Thợ có thể từ chối chấp nhận thanh toán bất kỳ giao dịch nào bằng phương
          thức Thẻ trên Ứng dụng trong trường hợp có bất kỳ lỗi nào trong giao dịch dẫn
          đến việc tổ chức phát hành Thẻ từ chối thanh toán hoặc khi Vua Thợ tin rằng Thẻ
          đã được sử dụng cho một giao dịch có thể là lừa đảo, bất hợp pháp hoặc liên quan
          đến bất kỳ hoạt động tội phạm nào hoặc khi Vua Thợ tin rằng Bạn vi phạm Điều
          khoản sử dụng này. Bạn có trách nhiệm tự giải quyết các tranh chấp với tổ chức
          phát hành Thẻ.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>6. KHUYẾN MẠI</h4>
        <p className='text-[1.6rem]'>
          Vua Thợ, có thể đưa ra các khuyến mại với các tính năng khác nhau và mức giá
          khác nhau cho bất kỳ Người dùng nào. Các ưu đãi khuyến mại này tuân theo Điều
          khoản sử dụng này và có thể chỉ có hiệu lực đối với một số Người dùng nhất định
          như được nêu trong ưu đãi. Bạn có thể quyết định có tham gia chương trình ưu đãi
          và khuyến mãi hay không.
        </p>
        <p className='text-[1.6rem]'>
          Nếu Bạn quyết định tham gia, Bạn đồng ý rằng khuyến mại:
        </p>
        <ul className='list-disc list-inside text-[1.6rem]'>
          <li className=''>
            Chỉ có thể được sử dụng bởi đối tượng dự định, với mục đích đã định và theo
            cách hợp pháp;
          </li>
          <li>
            Không được sao chép, bán hoặc chuyển nhượng theo bất kỳ cách nào hoặc cung cấp
            cho công chúng, trừ khi được Vua Thợ cho phép một cách rõ ràng;
          </li>
          <li>Tuân theo các điều khoản cụ thể mà Vua Thợ thiết lập cho khuyến mại đó;</li>
          <li>Không được quy đổi thành tiền mặt hoặc tương đương tiền mặt;</li>
          <li>Không có giá trị sử dụng sau ngày hết hạn ghi trong khuyến mại.</li>
        </ul>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>
          7. QUYỀN VÀ NGHĨA VỤ CỦA CÁC BÊN
        </h4>
        <h5 className='text-[#0B27B6]/90 text-[1.8rem]'>7.1 Quyền và nghĩa vụ của bạn</h5>
        <p className='text-[1.6rem]'>
          - Yêu cầu Vua Thợ cung cấp thông tin của đối tác, bao gồm: CMND/CCCD, ảnh, họ
          tên;
        </p>
        <p className='text-[1.6rem]'>
          - Đảm bảo môi trường làm việc tốt, an toàn và lành mạnh cho đối tác (không có
          hóa chất độc hại, không bị ô nhiễm, không có các hành vi quấy rối, xâm hại đến
          tính mạng, danh dự, nhân phẩm, thân thể của đối tác);
        </p>
        <p className='text-[1.6rem]'>
          - Tự bảo quản và chịu trách nhiệm trong việc quản lý, bảo quản tài sản của mình
          trong mọi trường hợp;
        </p>
        <p className='text-[1.6rem]'>
          - Đảm bảo thanh toán đúng hạn theo quy định tại Điều khoản sử dụng này;
        </p>
        <p className='text-[1.6rem]'>
          - Kịp thời thông báo cho Vua Thợ trong vòng 24 giờ nếu phát hiện những hành vi
          tiêu cực từ phía đối tác giúp việc để hai Bên cùng phối hợp xử lý;
        </p>
        <p className='text-[1.6rem]'>
          - Không tự ý thỏa thuận với đối tác để thay đổi nội dung công việc, thay đổi giờ
          làm, yêu cầu thêm nội dung công việc, yêu cầu làm thêm giờ… nếu vi phạm Bạn phải
          thanh toán cho Vua Thợ một khoản tiền bồi thường tương đương với 10% giá trị đơn
          hàng;
        </p>
        <p className='text-[1.6rem]'>
          - Kiểm tra tài sản của mình khi đối tác rời khỏi địa điểm làm việc;
        </p>
        <p className='text-[1.6rem]'>
          - Trong trường hợp nghi ngờ đối tác có hành vi trộm cắp tài sản của Bạn nhưng
          chưa có kết luận của cơ quan điều tra, Bạn không được cung cấp thông tin cho bất
          kỳ cá nhân, tổ chức nào làm ảnh hưởng đến uy tín, thương hiệu của Vua Thợ.
        </p>
        <p className='text-[1.6rem]'>
          - Thực hiện các cam kết khác theo quy định tại Điều khoản sử dụng này;
        </p>
        <h5 className='text-[#0B27B6]/90 text-[1.8rem]'>
          7.2 Quyền và nghĩa vụ của Vua Thợ:
        </h5>
        <p className='text-[1.6rem]'>
          - Vua Thợ có quyền yêu cầu Bạn cung cấp thông tin, tài liệu chính xác liên quan
          đến Bạn và bao gồm Dữ Liệu Cá Nhân được quy định tại Chính Sách Bảo Mật của Vua
          Thợ.
        </p>
        <p className='text-[1.6rem]'>
          - Vua Thợ có quyền yêu cầu Bạn thanh toán đúng và đủ Phí Sử Dụng Dịch Vụ theo
          các điều khoản và điều kiện được quy định tại Điều khoản sử dụng dịch vụ này.
        </p>
        <p className='text-[1.6rem]'>
          - Không ảnh hưởng đến các điều khoản được quy định trong Điều khoản sử dụng này,
          trong trường hợp Bạn vi phạm nghĩa vụ quy định Điều khoản sử dụng dịch vụ này
          thì Vua Thợ có quyền đơn phương chấm dứt hoặc tạm dừng cung cấp Dịch Vụ Ứng
          Dụng; Vua Thợ sẽ gửi thông báo văn bản cho Bạn và yêu cầu bồi thường thiệt hại
          (nếu có). Để tránh hiểu nhầm, việc vi phạm các điều kiện dịch vụ của Ứng Dụng
          Vua Thợ bởi Bạn sẽ được xem là một vi phạm vì mục đích của quy định tại đoạn
          này.
        </p>
        <p className='text-[1.6rem]'>
          - Kết nối đối tác cho Bạn đảm bảo lý lịch, nguồn gốc rõ ràng;
        </p>
        <p className='text-[1.6rem]'>
          - Thường xuyên trao đổi và ngay lập tức tiếp nhận thông tin phản hồi từ Bạn về
          chất lượng dịch vụ.
        </p>
        <p className='text-[1.6rem]'>
          - Trừ trường hợp việc tiết lộ Dữ Liệu Cá Nhân vì mục đích của các dịch vụ được
          quy định tại Điều khoản sử dụng dịch vụ và Chính sách bảo mật của Vua Thợ này,
          Vua Thợ sẽ giữ bí mật thông tin về Bạn bao gồm các Dữ Liệu Cá Nhân được cung cấp
          cho Vua Thợ và tuân thủ theo Chính Sách Bảo Mật của Vua Thợ được ban hành tại
          từng thời điểm.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>8. BẢO MẬT</h4>
        <p className='text-[1.6rem]'>
          Là người sử dụng Ứng dụng, Bạn phải bảo mật tất cả các thông tin và dữ liệu liên
          quan đến Vua Thợ, các dịch vụ, sản phẩm, công việc kinh doanh, kế hoạch tiếp thị
          và quảng bá hoặc các hoạt động khác của Vua Thợ và các công ty liên kết của Vua
          Thợ, cũng như các thông tin/dữ liệu cá nhân liên quan đến Đối tác hoặc dịch vụ
          của Đối tác (nếu có), thông tin/dữ liệu cá nhân liên quan đến Người dùng mà đã
          được tiết lộ với Bạn bởi Vua Thợ hoặc đại diện của Vua Thợ (bất kể bằng lời nói
          hay bằng văn bản, trước, tại hoặc sau ngày của Điều khoản sử dụng này) hoặc đã
          được Bạn thu thập gián tiếp hay trực tiếp, từ Vua Thợ hoặc bất kỳ các công ty
          liên kết nào khác, hoặc đã được tạo ra trong quá trình giao kết Điều khoản sử
          dụng này.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>
          9. CHÍNH SÁCH BẢO MẬT DỮ LIỆU CÁ NHÂN
        </h4>
        <p className='text-[1.6rem]'>
          Bảo mật dữ liệu là vấn đề của sự tin tưởng. Vua Thợ nhận thức được rằng việc bảo
          mật thông tin &amp; danh tính của Bạn đặc biệt quan trọng. Vì vậy, chúng tôi cam
          kết sử dụng những thông tin mà Bạn cung cấp theo cách được đề ra trong Chính
          sách Bảo mật của Vua Thợ được ban hành tại từng thời điểm. Việc thu thập và sử
          dụng thông tin cá nhân liên quan đến các Dịch vụ của chúng tôi được quy định
          trong Chính sách bảo mật dữ liệu cá nhân của Vua Thợ tại
          <a className='mx-2' href='https://vuatho.com/' target='_blank'>
            www.vuatho.com
          </a>
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>10. MIỄN TRỪ TRÁCH NHIỆM</h4>
        <p className='text-[1.6rem]'>
          Vua Thợ không đưa ra bất kỳ cam đoan, bảo đảm hoặc phát sinh bất kỳ một trách
          nhiệm nào đối với độ tin cậy, sự đúng hạn, kịp thời, chất lượng, sự phù hợp,
          tính sẵn có, tính chính xác hoặc hoàn thiện của Dịch vụ cung cấp thông qua Ứng
          dụng, và/hoặc về chế độ ưu đãi/quà tặng.
        </p>
        <p className='text-[1.6rem]'>Vua Thợ không bảo đảm chắc chắn rằng:</p>
        <ul className='list-disc list-inside text-[1.6rem]'>
          <li>
            Ứng dụng, phần mềm hỗ trợ liên quan sẽ hoàn toàn không có lỗi hoặc khiếm
            khuyết.
          </li>
          <li>
            Chất lượng của bất kỳ sản phẩm, dịch vụ, thông tin, quà tặng, ưu đãi mà Bạn
            mua hoặc có được thông qua Ứng dụng sẽ đáp ứng hoàn toàn các yêu cầu hoặc mong
            đợi của Bạn.
          </li>
          <li>Dịch vụ, Ứng dụng sẽ hoàn toàn đạt yêu cầu hoặc mong đợi của Bạn.</li>
          <li>
            Ứng dụng và/hoặc (các) máy chủ mà Ứng dụng hoạt động sẽ không có virus hoặc
            các thành phần có hại khác.
          </li>
          <li>
            Việc sử dụng Dịch vụ trên Ứng dụng và/hoặc phần mềm hỗ trợ khác sẽ được an
            toàn, kịp thời, không bị gián đoạn hoặc không có lỗi hoặc có thể vận hành kết
            hợp với bất kỳ phần cứng, phần mềm, hệ thống hoặc dữ liệu nào khác.
          </li>
        </ul>
        <p className='text-[1.6rem]'>
          Vua Thợ sẽ được miễn trừ trách nhiệm trong các trường hợp sau:
        </p>
        <ul className='list-disc list-inside text-[1.6rem]'>
          <li>
            Các tổn thất có thể gây ra cho Bạn do không thể truy cập, sử dụng Ứng dụng vì
            các lý do:
          </li>
          <li>
            Không thể truy cập, sử dụng ứng dụng vì lý do lỗi kết nối mạng Internet.
          </li>
          <li>Lỗi phần cứng hoặc phần mềm ngoài tầm kiểm soát của Công ty.</li>
          <li>
            Các tổn thất do lỗi mạng Internet, lỗi máy móc, hay lỗi khi bảo trì hệ thống.
          </li>
        </ul>
        <p className='text-[1.6rem]'>
          Bạn xác nhận và hoàn toàn đồng ý rằng Dịch vụ được thực hiện bởi Đối tác thông
          qua Ứng dụng Vua Thợ là hoàn toàn thuộc phạm vi trách nhiệm bên Đối tác. Bạn
          thừa nhận và đồng ý rằng toàn bộ rủi ro phát sinh từ việc sử dụng dịch vụ, ưu
          đãi và bất kỳ dịch vụ của Đối tác, bao gồm, nhưng không giới hạn, các dịch vụ
          và/hoặc ưu đãi của Đối tác là hoàn toàn thuộc về chính Bạn và Bạn sẽ không kiện
          đòi Vua Thợ dưới bất kỳ hình thức nào.
        </p>
        <p className='text-[1.6rem]'>
          Bất kỳ khiếu nại nào của Bạn về bất kỳ tổn thất hoặc thiệt hại nào mà bạn phải
          gánh chịu sẽ là vấn đề giữa bạn và Đối tác thực hiện dịch vụ. Bạn theo đây sẽ
          miễn trừ một cách rõ ràng và giải trừ Vua Thợ khỏi bất kỳ và tất cả các trách
          nhiệm, khiếu nại, khởi kiện, hoặc các thiệt hại phát sinh từ việc sử dụng Dịch
          vụ thông qua Ứng dụng Vua Thợ.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>11. LỖI INTERNET</h4>
        <p className='text-[1.6rem]'>
          Dịch vụ được cung cấp thông qua Ứng dụng có thể có những hạn chế, chậm trễ, và
          các vấn đề khác xuất phát từ việc sử dụng internet và thông tin liên lạc theo
          phương thức điện tử bao gồm việc thiết bị Bạn sử dụng hoặc Đối tác sử dụng bị
          lỗi, không có kết nối, nằm ngoài miền phủ sóng, bị tắt nguồn hoặc không hoạt
          động. Vua Thợ sẽ được miễn trừ hoàn toàn trách nhiệm đối với các thiệt hại hay
          tổn thất phát sinh từ những vấn đề này.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>12. GIỚI HẠN</h4>
        <p className='text-[1.6rem]'>
          Bằng việc đồng ý với Điều khoản sử dụng khi sử dụng Ứng dụng, Bạn đồng ý rằng
          Bạn sẽ bồi thường và giữ cho Vua Thợ và các chi nhánh, cán bộ, giám đốc, thành
          viên, nhân viên, luật sư và đại lý của Vua Thợ không bị tổn hại bởi mọi khiếu
          nại, chi phí, thiệt hại, tổn thất, trách nhiệm pháp lý và phí khác (bao gồm phí
          luật sư và chi phí và/ hoặc hành động pháp lý) phát sinh từ hoặc liên quan đến:
          (a) việc Bạn cung cấp/sử dụng Dịch vụ và/hoặc Ứng dụng trong giao dịch với Đối
          tác hoặc Người dùng (tùy từng trường hợp, hoặc (b) vi phạm của Bạn đối với bất
          kỳ Điều khoản sử dụng nào hoặc bất kỳ quy định pháp luật nào, cho dù có hoặc
          không được tham chiếu ở đây, hoặc (c) vi phạm của Bạn đối với bất kỳ quyền nào
          của bất kỳ bên thứ ba nào, bao gồm Đối tác hoặc Người dùng phát sinh thông qua
          việc cung cấp/sử dụng Dịch vụ, hoặc (d) việc Bạn cung cấp/sử dụng hoặc cung
          cấp/sử dụng sai Dịch vụ và/hoặc Ứng dụng; (e) khi vận hành bất kỳ phương tiện
          nào để cung cấp Dịch vụ. Để làm rõ, việc xác định thiệt hại và mức bồi thường sẽ
          căn cứ vào các quy định và nguyên tắc của Bộ Luật Dân sự hiện hành.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>13. THÔNG BÁO</h4>
        <p className='text-[1.6rem]'>
          Vua Thợ có thể gửi thông báo dưới dạng một thông báo chung trên trang thông tin
          điện tử, trên Ứng dụng, qua thư điện tử đến địa chỉ thư điện tử của Bạn có trong
          hồ sơ của Vua Thợ, hoặc bằng văn bản gửi bằng thư đảm bảo hoặc thư trả trước đến
          địa chỉ của Bạn lưu trong dữ liệu của Công ty.
        </p>
        <p className='text-[1.6rem]'>
          Thông báo của Vua Thợ sẽ được coi là đã gửi tới Bạn sau 48 giờ kể từ lúc gửi bưu
          điện (nếu được gửi bằng thư bảo đảm hoặc thư trả trước) hoặc sau 01 giờ sau khi
          đã gửi (nếu gửi bằng thư điện tử).
        </p>
        <p className='text-[1.6rem]'>
          Bạn có thể gửi thông báo cho Vua Thợ bằng thư điện tử đến địa chỉ thư điện tử
          info@vuatho.com, thư gửi qua đường bưu điện hoặc thư bảo đảm tới địa chỉ Công ty
          theo thông tin liên hệ như được cung cấp trên website hoặc Ứng dụng. Thời điểm
          thông báo này có hiệu lực là kể từ thời điểm Vua Thợ nhận được thông báo.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>14. CHUYỂN GIAO</h4>
        <p className='text-[1.6rem]'>
          Bạn không được chuyển giao quyền, nghĩa vụ của mình phát sinh theo Điều khoản sử
          dụng này nếu không có sự chấp thuận trước bằng văn bản của Vua Thợ. Bất kỳ hành
          động cố ý chuyển giao quyền, nghĩa vụ của mình phát sinh theo Điều khoản sử dụng
          này của Bạn vi phạm mục này sẽ bị coi là vô hiệu.
        </p>
        <p className='text-[1.6rem]'>
          Vua Thợ có thể chuyển giao quyền, nghĩa vụ của mình phát sinh theo Điều khoản sử
          dụng này mà không cần sự chấp thuận của Bạn.
        </p>
      </div>
      <div className='flex flex-col gap-6'>
        <h4 className='font-bold text-[#0B27B6] text-[2rem]'>
          15. GIẢI QUYẾT TRANH CHẤP
        </h4>
        <p className='text-[1.6rem]'>
          Điều khoản sử dụng này sẽ được điều chỉnh bởi pháp luật Việt Nam.
        </p>
        <p className='text-[1.6rem]'>
          Trong trường hợp có bất kỳ tranh chấp nào phát sinh từ và/hoặc liên quan đến
          việc ký kết và thực hiện Điều khoản sử dụng này, Vua Thợ và Bạn sẽ giải quyết
          thông qua thương lượng. Nếu tranh chấp không được giải quyết bằng cách thương
          lượng thì tranh chấp đó sẽ do Tòa án nhân dân có thẩm quyền giải quyết theo quy
          định pháp luật.
        </p>
        <p className='text-[1.6rem]'>
          Không phụ thuộc vào các quy định trái với điều này, bất kỳ khiếu nại nào giữa
          Đối tác và Người dùng phải được giải quyết trực tiếp với nhau.
        </p>
      </div>
    </div>
  )
}
