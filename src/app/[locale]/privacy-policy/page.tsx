import { Metadata } from 'next'
import BackgroundRelative from '@/components/BackgroundRelative'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật',
}

function PrivateInformation() {
  return (
    <div className='pt-[64px] 3xl:pt-[80px]'>
      <BackgroundRelative text='Chính sách bảo mật' />
      <div className='rounded-t-[20px] 13inch:rounded-t-[40px] 3xl:rounded-t-[100px] bg-white relative -top-[40px] 3xl:-top-[80px] py-[20px] 13inch:py-[40px] 3xl:py-[80px]'>
        <div className='ct-container-70 md:gap-20 gap-10'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-6'>
              <h4 className='font-bold text-[#0B27B6] text-[4rem]'>Dữ liệu cá nhân</h4>
              <p className='text-[1.6rem]'>
                Chúng tôi, CÔNG TY TNHH CÔNG NGHỆ VUA THỢ (sau đây gọi là “Vua Thợ” hay
                “chúng tôi”, “của chúng tôi”) luôn xem trọng sự riêng tư và bảo vệ dữ liệu
                cá nhân của Người dùng.
              </p>
              <p className='text-[1.6rem]'>
                Chính sách bảo mật dữ liệu cá nhân của CÔNG TY TNHH CÔNG NGHỆ VUA THỢ
                (&quot;Vua Thợ &quot;) (sau đây gọi là &quot;Chính sách&quot;) sẽ cung cấp
                các thông tin về cách thức mà Vua Thợ thu thập và xử lý, lưu trữ dữ liệu
                cá nhân của Người dùng nhằm mục đích cung cấp sản phẩm và/hoặc dịch vụ của
                Vua Thợ hoặc thực hiện giao dịch kinh doanh với Người dùng và khi Người
                dùng sử dụng dịch vụ trực tuyến của Vua Thợ. Chính sách này nêu rõ lý do
                vì sao phải thu thập thông tin cá nhân của Người dùng, chúng được sử dụng
                như thế nào, có thể chuyển cho ai, làm cách nào để truy cập, xem và sửa
                đổi thông tin cá nhân của mình. Bên cạnh đó, Chính sách này cũng đưa ra
                các tiêu chuẩn và quy trình kiểm soát được mong đợi để bảo vệ Dữ liệu Cá
                nhân phù hợp với các mục tiêu Chính sách. Chúng tôi cũng sẽ cho Người dùng
                biết người dùng có quyền gì, và làm thế nào người dùng có thể liên lạc với
                chúng tôi.
              </p>
              <p className='text-[1.6rem]'>
                Để tránh nhầm lẫn, Chính sách bảo mật dữ liệu này chỉ áp dụng cho người
                dùng là cá nhân. Vua Thợ khuyến khích người dùng đọc kỹ Chính sách này và
                thường xuyên kiểm tra trang tin điện tử để cập nhật bất kỳ thay đổi nào mà
                Vua Thợ có thể thực hiện theo các điều khoản của Chính sách.
              </p>
              <h4 className='font-bold text-[#0B27B6] text-[4rem]'>Giải thích từ ngữ</h4>
              <p className='text-[1.6rem]'>
                Cho mục đích của Chính sách này, xin lưu ý rằng:
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'> “Vua Thợ” </strong>nghĩa là{' '}
                <strong className='text-[1.6rem]'>CÔNG TY TNHH CÔNG NGHỆ VUA THỢ</strong>{' '}
                được thành lập dưới hình thức công ty trách nhiệm hữu hạn một thành viên,
                có hiệu lực từ ngày được cấp Giấy phép Thành lập và Hoạt động, và hoạt
                động kinh doanh theo quy định của Pháp luật Việt Nam.
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>“Xử lý dữ liệu”</strong> nghĩa là thu
                thập, ghi lại, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết
                hợp, truy xuất, thu hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa,
                cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân hoặc các hành động khác có
                liên quan đến dữ liệu cá nhân của Quý khách hàng/ đối tác.
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>“Dữ liệu cá nhân”</strong> đề cập đến
                bất kỳ thông tin nào liên quan trực tiếp hoặc gián tiếp đến Người dùng,
                và/hoặc các giao dịch của Người dùng với chúng tôi. Dữ liệu cá nhân gồm dữ
                liệu cá nhân cơ bản hoặc dữ liệu cá nhân nhạy cảm.
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>“Người dùng”</strong> là cá nhân tiếp
                cận, tìm hiểu, đăng ký, sử dụng hoặc có liên quan trong quy trình hoạt
                động, cung cấp các sản phẩm, dịch vụ của Vua Thợ.
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>“Bên thứ ba”</strong> là tổ chức, cá
                nhân khác ngoài Vua Thợ và người dùng đã được giải thích theo Chính sách
                này.
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>“Bảo vệ dữ liệu cá nhân”</strong> là
                hoạt động phòng ngừa, phát hiện, ngăn chặn, xử lý hành vi vi phạm liên
                quan đến dữ liệu cá nhân theo quy định của pháp luật.
              </p>
              <p className='text-[1.6rem]'>
                <strong className='text-[1.6rem]'>“Pháp luật hiện hành”</strong> có nghĩa
                là các quy định pháp luật của nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam được
                ban hành, sửa đổi, bổ sung vào từng thời điểm áp dụng điều chỉnh về hoạt
                động bảo vệ Dữ liệu cá nhân.
              </p>
              <p className='text-[1.6rem]'>
                Xin lưu ý rằng những thông tin mà bản thân chúng không thể sử dụng để nhận
                dạng chủ thể dữ liệu sẽ không được xem là Dữ liệu cá nhân. Việc cung cấp
                dữ liệu cá nhân từ người dùng cho Vua Thợ là hoàn toàn tự nguyện để Vua
                Thợ có thể cung cấp các sản phẩm/dịch vụ phù hợp cho Người dùng. Vua Thợ
                xử lý dữ liệu cá nhân từ Người dùng với mục đích đúng đắn theo thỏa thuận
                trong hợp đồng, tuân thủ yêu cầu của pháp luật hay các mục đích khác được
                nêu tại chính sách bảo vệ dữ liệu cá nhân dưới đây. Trong trường hợp người
                dùng không thể cung cấp dữ liệu cá nhân cần thiết để Vua Thợ có thể cung
                cấp sản phẩm và/hoặc dịch vụ của chúng tôi cho người dùng, rất tiếc là
                chúng tôi cũng sẽ không thể cung cấp cho Người dùng các sản phẩm và/hoặc
                dịch vụ đó.
              </p>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần A – Các loại dữ liệu cá nhân chúng tôi sẽ thu thập và xử lý
              </h5>
              <p className='text-[1.6rem]'>
                Nhằm giúp chúng tôi giải đáp các thắc mắc của Người dùng và/hoặc cung cấp
                các sản phẩm và dịch vụ nói chung, chúng tôi có thể cần và/hoặc được yêu
                cầu xử lý các dữ liệu cá nhân về Người dùng, bao gồm nhưng không giới hạn:
              </p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Thông tin cá nhân: là thông tin về người dùng mang tính nhận dạng, bao
                  gồm nhưng không giới hạn tên, số chứng minh thư nhân dân, số giấy khai
                  sinh, số hộ chiếu, quốc tịch, địa chỉ, số điện thoại, số fax, thông tin
                  ngân hàng, thông tin thẻ tín dụng, dân tộc, giới tính, ngày sinh, tình
                  trạng hôn nhân, tình trạng cư trú, nền tảng giáo dục, tình trạng tài
                  chính, sở thích cá nhân, địa chỉ thư điện tử (email) của người dùng,
                  nghề nghiệp, định danh của người dùng trong Website/Ứng dụng Vua Thợ,
                  thông tin của người dùng trong Website/Ứng dụng Vua Thợ, ngành làm việc
                  của người dùng, bất kỳ thông tin nào về người dùng mà người dùng đã cung
                  cấp cho Vua Thợ trong các đơn đăng ký, đơn xin gia nhập hoặc bất kỳ đơn
                  tương tự nào và/hoặc bất kỳ thông tin nào về người dùng đã được hoặc sẽ
                  được Vua Thợ thu thập, lưu trữ, sử dụng và xử lý theo thời gian và bao
                  gồm các thông tin cá nhân nhạy cảm như các dữ liệu về sức khỏe, tôn giáo
                  hoặc tín ngưỡng tương tự khác.
                </li>
                <li>
                  Thông tin về mối quan hệ kinh doanh của chúng tôi với Người dùng và điều
                  đó giúp chúng tôi thực hiện kinh doanh với Người dùng, chẳng hạn như các
                  loại dịch vụ mà chúng tôi cung cấp có thể khiến Người dùng quan tâm và
                  thông tin giúp chúng tôi điều chỉnh dịch vụ cho phù hợp với Người dùng
                </li>
                <li>
                  Thông tin mà Người dùng cung cấp khi đăng ký bất kỳ sản phẩm và dịch vụ
                  nào của chúng tôi, bao gồm ý kiến của Người dùng thông qua phản hồi hoặc
                  khảo sát;
                </li>
                <li>
                  Dữ liệu điện tử hoặc thông tin khác liên quan đến Người dùng như địa chỉ
                  IP, cookies, nhật ký hoạt động, định danh trực tuyến và thông tin địa
                  điểm của Người dùng thông qua việc Người dùng sử dụng các sản phẩm và
                  dịch vụ của chúng tôi hoặc là một phần của quá trình gửi đến Người dùng.
                  Chẳng hạn như lịch sử các cuộc gọi của Người dùng đến số điện thoại của
                  trung tâm dịch vụ khách hàng của chúng tôi và, nếu Người dùng liên lạc
                  với chúng tôi bằng các dịch vụ trực tuyến hoặc qua Website/ứng dụng của
                  chúng tôi, các chi tiết như dữ liệu vị trí điện thoại di động, địa chỉ
                  IP và địa chỉ MAC. Bên cạnh đó, chúng tôi sẽ ghi nhận những thông tin
                  của Người dùng khi Người dùng bắt đầu nhập vào biểu mẫu Liên hệ với
                  chúng tôi trên các website của Vua Thợ và gửi cho Người dùng tiến độ
                  hoặc trạng thái hoàn thành khi cần thiết;
                </li>
              </ul>
              <p className='text-[1.6rem]'>
                Việc Người dùng cung cấp Dữ liệu Cá nhân của Người dùng là hoàn toàn tự
                nguyện. Tuy nhiên, nếu Người dùng không cung cấp cho Vua Thợ Dữ liệu Cá
                nhân của Người dùng, Vua Thợ sẽ không thể xử lý Dữ liệu Cá nhân của Người
                dùng cho các Mục đích và Mục đích Bổ sung như được nêu dưới đây.
              </p>
              <p className='text-[1.6rem]'>
                Nếu Người dùng là một đối tác, việc cung cấp Dữ liệu Cá nhân của Người
                dùng là bắt buộc, và việc không cung cấp Dữ liệu Cá nhân của Người dùng sẽ
                là hành vi vi phạm pháp luật hoặc các quy định pháp lý, và có thể khiến
                Vua Thợ không thể hợp tác với Người dùng để cung cấp các dịch vụ hoặc sản
                phẩm hoặc thực hiện các khoản thanh toán cho Người dùng về sản phẩm hoặc
                dịch vụ mà Người dùng cung cấp.
              </p>
              <p className='text-[1.6rem]'>
                Một số dữ liệu cá nhân mà chúng tôi thu thập, xử lý có thể là dữ liệu cá
                nhân cơ bản hoặc nhạy cảm theo quy định pháp luật hay đặc tính tự nhiên.
                Người dùng có thể xem thêm cách thức chúng tôi xử lý dữ liệu cá nhân nhạy
                cảm của Người dùng tại <i>Phần E</i>.
              </p>

              <div>
                <h1 className='text-[2.4rem]'>Dữ Liệu Cá Nhân nhạy cảm</h1>
                <p className='text-[1.6rem]'>
                  Một số Dữ Liệu Cá Nhân mà chúng tôi thu thập là nhạy cảm theo đặc tính
                  tự nhiên. Điều này bao gồm Dữ Liệu Cá Nhân liên quan đến chủng tộc của
                  bạn, thông tin số CMND/ số thẻ căn cước công dân, niềm tin tôn giáo,
                  thông tin lý lịch (bao gồm hồ sơ tài chính và lý lịch tư pháp, khi được
                  phép hợp pháp), dữ liệu sức khỏe, khuyết tật, tình trạng hôn nhân và dữ
                  liệu sinh trắc học, nếu phù hợp. Chúng tôi chỉ thu thập thông tin này
                  với sự đồng thuận của bạn và/hoặc tuân thủ nghiêm ngặt các luật áp dụng
                  hiện hành. Trong trường hợp bạn được yêu cầu cung cấp bất kỳ tài liệu
                  hoặc thông tin nào cho chúng tôi cho bất kỳ Mục Đích nào mà có thể chứa
                  Dữ Liệu Cá Nhân nhạy cảm đó (không bắt buộc đối với Mục Đích đó), bạn
                  đồng ý loại bỏ đi Dữ Liệu Cá Nhân nhạy cảm đó trước khi cung cấp tài
                  liệu hoặc thông tin đó cho chúng tôi.
                </p>
              </div>
              <div>
                <h1 className='text-[2.4rem]'>Từ các nguồn khác</h1>
                <p className='text-[1.8rem]'>
                  Chúng tôi có thể thu thập Dữ Liệu Cá Nhân, bao gồm nhưng không giới hạn
                  ở tên của bạn, thông tin liên hệ và thông tin nhận dạng khác, từ các
                  nguồn khác khi cần thiết. Những nguồn này bao gồm:
                </p>
                <ul className='text-[1.8rem]'>
                  <li>từ các chương trình giới thiệu;</li>
                  <li>
                    từ các đối tác kinh doanh của chúng tôi, chẳng hạn như các đối tác vận
                    tải, nhà cung cấp dịch vụ thanh toán, đối tác dịch vụ gọi xe và đối
                    tác vận chuyển;
                  </li>
                  <li>nhà cung cấp bảo hiểm và tài chính;</li>
                  <li>trung tâm tín dụng và các đại lý báo cáo tín dụng khác;</li>
                  <li>nguồn dữ liệu công khai có sẵn hoặc nguồn dữ liệu chính phủ;</li>
                  <li>
                    khi người dùng của chúng tôi thêm bạn làm người liên lạc khẩn cấp;
                  </li>
                  <li>
                    khi người dùng của chúng tôi thêm bạn như là người nhận hoặc người thụ
                    hưởng của việc sử dụng bất kỳ Dịch Vụ nào của chúng tôi;
                  </li>
                  <li>
                    khi bạn sử dụng trò chuyện trong Ứng Dụng; và nhà cung cấp hoặc đối
                    tác dịch vụ tiếp thị.
                  </li>
                </ul>
              </div>
              <div>
                <h1 className='text-[2.4rem]'>
                  Khi bạn cung cấp Dữ Liệu Cá Nhân của một người khác cho chúng tôi
                </h1>
                <p className='text-[1.6rem]'>
                  Trong một số trường hợp, bạn có thể cung cấp Dữ Liệu Cá Nhân của các cá
                  nhân khác (như vợ/ chồng, thành viên gia đình hoặc bạn bè) cho chúng
                  tôi. Ví dụ, bạn có thể thêm họ như người liên hệ khẩn cấp của bạn, khi
                  bạn sử dụng trò chuyện trong Ứng Dụng hoặc khi bạn thêm họ như là người
                  nhận hoặc người thụ hưởng của bất kỳ việc sử dụng các Dịch Vụ của chúng
                  tôi. Nếu bạn cung cấp cho chúng tôi Dữ Liệu Cá Nhân của họ, bạn cam đoan
                  và bảo đảm rằng bạn đã có được sự chấp thuận của họ để Dữ Liệu Cá Nhân
                  của họ được thu thập, sử dụng và tiết lộ như quy định trong Thông Báo
                  Bảo Mật này.
                </p>
              </div>
              <div>
                <h1 className='text-[2.4rem]'>Dữ Liệu Cá Nhân của trẻ vị thành niên</h1>
                <p className='text-[1.6rem]'>
                  Là cha mẹ hoặc người giám hộ hợp pháp, vui lòng không cho phép trẻ vị
                  thành niên đặt dưới sự chăm sóc của bạn gởi Dữ Liệu Cá Nhân cho Vua Thợ.
                  Trong trường hợp Dữ Liệu Cá Nhân của trẻ vị thành niên được tiết lộ cho
                  Vua Thợ, bạn theo đó chấp thuận việc xử lý Dữ Liệu Cá Nhân của trẻ vị
                  thành niên, chấp nhận và đồng ý chịu ràng buộc theo Thông Báo Bảo Mật
                  này và chịu trách nhiệm đối với các hành động của trẻ vị thành niên do
                  mình giám hộ hợp pháp.
                </p>
              </div>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần B – Cách thức chúng tôi thu thập dữ liệu cá nhân của Người dùng
              </h5>
              <p className='text-[1.6rem]'>
                - Trực tiếp từ Người dùng bằng các phương tiện khác nhau:
              </p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Khi Người dùng gửi yêu cầu đăng ký hoặc bất kỳ biểu mẫu nào khác liên
                  quan tới các dịch vụ của Vua Thợ;
                </li>
                <li>
                  Khi Người dùng tương tác với nhân viên dịch vụ Người dùng của Vua Thợ,
                  ví dụ như thông qua các cuộc gọi điện thoại, thư từ, gặp mặt trực tiếp,
                  gửi thư điện tử hoặc tương tác trên mạng xã hội hoặc bất kỳ kênh thông
                  tin nào khác;
                </li>
                <li>Khi Người dùng sử dụng Website/Ứng dụng của Vua Thợ</li>
                <li>
                  Khi người dùng có cập nhật, bổ sung, điều chỉnh các thông tin, dữ liệu
                  cá nhân thì Vua Thợ cũng sẽ thu thập các thông tin, dữ liệu đó;
                </li>
                <li>
                  Khi Người dùng truy cập các trang tin điện tử của chúng tôi hoặc nền
                  tảng truyền thông xã hội của Vua Thợ và/hoặc tải xuống ứng dụng dành cho
                  thiết bị di động của chúng tôi mà có thể để lại địa chỉ IP của thiết bị
                  hoặc từ dữ liệu được thu thập qua cookies.
                </li>
                <li>
                  Khi Người dùng được liên hệ và phản hồi lại các đại diện tiếp thị và các
                  nhân viên dịch vụ Người dùng của Vua Thợ hay khi người dùng tham gia các
                  cuộc thi do Vua Thợ tổ chức; từ nhiều thực thể hoặc đơn vị thuộc Vua
                  Thợ; các khảo sát, các chương trình ưu đãi;
                </li>
                <li>
                  Khi Người dùng gửi thông tin cá nhân của mình cho Vua Thợ vì bất kỳ lý
                  do nào khác, bao gồm cả khi Người dùng đăng ký sử dụng thử miễn phí bất
                  kỳ dịch vụ nào hoặc khi Người dùng thể hiện quan tâm đến bất kỳ dịch vụ
                  nào của Vua Thợ
                </li>
              </ul>
              <p className='text-[1.6rem]'>
                - Từ các bên thứ ba khác nếu họ đã được Người dùng đồng ý cho việc tiết
                lộ, chuyển giao hoặc đã được Người dùng lựa chọn công khai. Bằng việc đồng
                ý cho bên kiểm soát và/hoặc xử lý dữ liệu cá nhân liên quan đến Người dùng
                chuyển giao Dữ liệu cá nhân cho Vua Thợ, Vua Thợ hiểu rằng Người dùng đã
                đồng ý với Chính sách này và trong trường hợp nhận từ các bên thứ ba đó,
                Vua Thợ sẽ đối xử với các dữ liệu của khách hàng theo các quy định trong
                Chính sách này.
              </p>

              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần C – Mục đích chúng tôi xử lý dữ liệu cá nhân của Người dùng
              </h5>
              <h6 className='text-[1.8rem] font-medium'>
                1. Đối với Người dùng là khách hàng của các dịch vụ do Vua Thợ cung cấp
              </h6>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Để thực hiện các nghĩa vụ của Vua Thợ theo bất kỳ thỏa thuận nào được ký
                  kết với Người dùng;
                </li>
                <li>
                  Để cung cấp cho Người dùng bất kỳ dịch vụ nào mà Người dùng yêu cầu;
                </li>
                <li>
                  Để xử lý các đăng ký của Người dùng và để cung cấp các dịch vụ cho Người
                  dùng;
                </li>
                <li>
                  Khi Người dùng yêu cầu tải xuống và sử dụng ứng dụng Vua Thợ (“Ứng
                  dụng”), hoặc để xử lý yêu cầu của Người dùng;
                </li>
                <li>
                  Các hoạt động makerting, quảng cáo, thông báo cho Người dùng về các dịch
                  vụ, sự kiện, chương trình hoặc thay đổi đối với các chính sách và nguyên
                  tắc của Vua Thợ
                </li>
                <li>
                  Để xử lý, quản lý hoặc xác minh việc đăng ký theo dõi của Người dùng đối
                  với Vua Thợ và để cung cấp cho Người dùng các lợi ích dành cho người
                  theo dõi;
                </li>
                <li>
                  Để xác nhận các đặt hàng của Người dùng và xử lý các thanh toán liên
                  quan đến bất kỳ sản phẩm hay dịch vụ nào mà khách hàng đã yêu cầu;
                </li>
                <li>
                  Để phát triển, tăng cường, và cung cấp các dịch vụ để đáp ứng được nhu
                  cầu của Người dùng;
                </li>
                <li>
                  Thu, truy đòi các số tiền, khoản nợ của Người dùng, điều tra, phân tích,
                  xử lý giải quyết các yêu cầu của Người dùng trong quá trình Vua Thợ thực
                  hiện dịch vụ với Người dùng;
                </li>
                <li>
                  Để liên lạc (bao gồm cả việc gửi cho Người dùng thông tin quản lý và các
                  thông tin trao đổi khác về bất kỳ hợp đồng hoặc tài khoản nào Người dùng
                  có thể có với Vua Thợ), để cung cấp hỗ trợ kỹ thuật liên quan đến
                  Website và ứng dụng của Vua Thợ hoặc về các thay đổi trong tương lai đối
                  với Chính sách này; để cung cấp cho Người dùng quyền truy cập vào nội
                  dung trên Website hoặc ứng dụng hoặc các nền tảng truyền thông xã hội
                  của Vua Thợ, để thực hiện các yêu cầu khác của Người dùng;
                </li>
                <li>Thống kê, đối chiếu, xử lý và quản trị cơ sở dữ liệu;</li>
                <li>Thực hiện các báo cáo, giải trình theo Pháp luật hiện hành;</li>
                <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền;</li>
                <li>Các trường hợp khác theo quy định Pháp luật hiện hành;</li>
              </ul>
              <h6 className='text-[1.8rem] font-medium'>
                2. Đối với Người dùng là đối tác trực tiếp thực hiện dịch vụ cho Khách
                hàng của Vua Thợ:
              </h6>
              <ul className='list-disc list-inside text-[1.8rem]'>
                <li>
                  Để phục vụ mục đích hợp tác với Người dùng để cung cấp dịch vụ hoặc sản
                  phẩm;
                </li>
                <li>Phục vụ cho việc định danh và xác thực;</li>
                <li>
                  Để tạo điều kiện hoặc cho phép bất kỳ sự kiểm tra nào mà Vua Thợ có thể
                  yêu cầu để hợp tác với Người dùng;
                </li>
                <li>
                  Khi Người dùng yêu cầu tải xuống và sử dụng ứng dụng Vua Thợ (“Ứng
                  dụng”), hoặc để xử lý yêu cầu của Người dùng;
                </li>
                <li>Đánh giá hồ sơ, ký kết hợp đồng;</li>
                <li>
                  Thu, truy đòi các số tiền, khoản nợ của Người dùng, phân tích, tổng hợp,
                  xử lý, giải quyết các yêu cầu của Người dùng trong quá trình thực hiện
                  các hợp đồng, thỏa thuận hợp tác ký với Vua Thợ (chẳng hạn như các yêu
                  cầu sửa đổi hợp đồng);
                </li>
                <li>
                  Để xử lý các thanh toán liên quan đến bất kỳ dịch vụ nào mà Người dùng
                  thực hiện cung cấp cho Khách hàng của Vua Thợ;
                </li>
                <li>Quản lý, giám sát, đánh giá chất lượng hoạt động Người dùng;</li>
                <li>
                  Các hoạt động makerting, quảng cáo, thông báo cho Người dùng về các
                  chương trình, dịch vụ, sự kiện, hoặc thay đổi đối với các chính sách và
                  nguyên tắc của Vua Thợ;
                </li>
                <li>
                  Để liên lạc (bao gồm cả việc gửi cho Người dùng thông tin quản lý và các
                  thông tin trao đổi khác về bất kỳ hợp đồng hoặc tài khoản nào đại lý bảo
                  hiểm có thể có với Vua Thợ), để cung cấp hỗ trợ kỹ thuật liên quan đến
                  Website và ứng dụng của Vua Thợ hoặc về các thay đổi trong tương lai đối
                  với Chính sách này, để cung cấp cho Vua Thợ quyền truy cập vào nội dung
                  trên Website hoặc ứng dụng hoặc các nền tảng truyền thông xã hội của Vua
                  Thợ, để thực hiện các yêu cầu khác của khách hàng;
                </li>
                <li>Thống kê, đối chiếu, xử lý và quản trị cơ sở dữ liệu;</li>
                <li>Thực hiện các báo cáo, giải trình theo Pháp luật hiện hành;</li>
                <li>Theo yêu cầu của cơ quan nhà nước có thẩm quyền;</li>
                <li>Các trường hợp khác theo quy định Pháp luật hiện hành;</li>
              </ul>
              <h6 className='text-[1.8rem] font-medium'>
                3. Người dùng là các đối tác khác
              </h6>
              <p className='text-[1.6rem]'>
                Tùy thuộc vào các dịch vụ cụ thể mà Vua thợ và đối tác ký kết hoặc dự định
                ký kết, Vua Thợ cam kết chỉ thu thập Dữ liệu cá nhân của đối tác hoặc Dữ
                liệu cá nhân do đối tác cung cấp, trong phạm vi và mục đích cụ thể để phục
                vụ cho hoạt động kinh doanh của Vua Thợ (chẳng hạn như gửi các thông tin
                tiếp thị, giới thiệu sản phẩm, khuyến mại, chăm sóc khách hàng, hay các
                hoạt động khảo sát), thực hiện hợp đồng, tuân thủ các quy định pháp luật
                và quy định của Vua Thợ. Chẳng hạn, Chúng tôi sẽ thu thập các thông tin
                liên lạc cho phép liên lạc đến đối tác (như họ tên, tên người dùng, địa
                chỉ email, số điện thoại); hay thông tin về mối quan hệ kinh doanh của Vua
                Thợ với đối tác, thông tin giao dịch về cách thức tương tác (như thông tin
                tài khoản, thông tin giao dịch).
              </p>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần D - Chúng tôi chia sẻ dữ liệu cá nhân của Người dùng với ai và tại
                sao
              </h5>
              <p className='text-[1.6rem]'>
                Chúng tôi không chia sẻ dữ liệu cá nhân về hoặc liên quan đến Người dùng
                với đơn vị, tổ chức và cá nhân bên ngoài Vua Thợ ngoại trừ các trường hợp
                dưới đây:
              </p>
              <p className='text-[1.6rem]'>
                1. Có sự đồng ý của Người dùng sẽ chia sẻ dữ liệu của Người dùng với công
                ty, tổ chức hoặc cá nhân bên ngoài Người dùng khi chúng tôi có sự đồng ý
                của Người dùng để làm vậy.
              </p>
              <p className='text-[1.6rem]'>
                2. Chia sẻ dữ liệu cá nhân là một phần của việc cung cấp sản phẩm và dịch
                vụ cho Người dùng và việc quản lý và/hoặc điều hành sản phẩm và dịch vụ
                và/hoặc để thực hiện một hay bất kỳ mục đích nào được nêu ở Phần C trong
                Chính sách này liên quan đến việc sử dụng dữ liệu cá nhân của Người dùng,
                hoặc nếu pháp luật cho phép và nếu việc tiết lộ đó là cần thiết để đáp ứng
                yêu cầu cho các bên sau đây:
              </p>
              <p className='text-[1.6rem]'>
                Dữ liệu Cá nhân của Người dùng có thể được chuyển giao, truy cập hoặc tiết
                lộ cho bên thứ ba để phục vụ các Mục đích trong Chính sách này. Ngoài ra,
                Vua Thợ có thể làm việc với các công ty, nhà cung cấp dịch vụ hoặc cá nhân
                khác để thay mặt Vua Thợ thực hiện các chức năng, và vì vậy có thể cung
                cấp quyền tiếp cận hoặc tiết lộ Dữ liệu Cá nhân của Người dùng cho nhà
                cung cấp dịch vụ hoặc bên thứ ba đó. Bên thứ ba bao gồm, nhưng không giới
                hạn Các đối tác của Vua Thợ, bao gồm các bên Vua Thợ cộng tác trong các sự
                kiện, chương trình và hoạt động nhất định; Các công ty tổ chức sự kiện và
                nhà tài trợ sự kiện; Các công ty nghiên cứu thị trường; Các nhà cung cấp
                dịch vụ, bao gồm, các nhà cung cấp dịch vụ công nghệ thông tin (CNTT) về
                cơ sở hạ tầng, phần mềm và công tác phát triển; Các cố vấn chuyên môn và
                kiểm toán viên bên ngoài, bao gồm cố vấn pháp lý, cố vấn tài chính và
                chuyên gia tư vấn; Các tổ chức khác trong Vua Thợ; và Các cơ quan Chính
                phủ để thực hiện các quy định của pháp luật. Dữ liệu Cá nhân cũng có thể
                được chia sẻ liên quan đến giao dịch doanh nghiệp, ví dụ như bán chi nhánh
                hoặc bộ phận, sáp nhập, hợp nhất, hoặc bán tài sản, hoặc trong trường hợp
                hiếm là giải thể doanh nghiệp.
              </p>
              <p className='text-[1.6rem]'>
                Vua Thợ cam kết việc chia sẻ hoặc cùng xử lý dữ liệu cá nhân chỉ thực hiện
                trong trường hợp cần thiết để thực hiện các Mục Đích Xử Lý được nêu tại
                Chính sách này hoặc theo quy định của pháp luật. Các tổ chức, cá nhân nhận
                được dữ liệu cá nhân của Người dùng sẽ phải tuân thủ theo nội dung quy
                định tại Chính sách này và quy định của pháp luật về bảo vệ dữ liệu cá
                nhân liên quan.
              </p>
              <p className='text-[1.6rem]'>
                Mặc dù Vua Thợ sẽ thực hiện mọi nỗ lực để đảm bảo rằng các thông tin Người
                dùng được ẩn danh/mã hóa, nhưng không thể loại trừ hoàn toàn rủi ro các dữ
                liệu này có thể bị tiết lộ trong những trường hợp bất khả kháng.
              </p>
              <p className='text-[1.6rem]'>
                3. Vì lí do pháp lý, Vua Thợ có thể chia sẻ dữ liệu cá nhân của Người dùng
                với các đơn vị, tổ chức hoặc cá nhân bên ngoài Vua Thợ nếu chúng tôi có
                căn cứ để giả định một cách ngay tình rằng việc truy cập, sử dụng, bảo
                toàn hoặc tiết lộ thông tin đó là cần thiết một cách hợp lý để:
              </p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Tuân thủ bất kỳ luật pháp, quy định, quy trình pháp lý hiện hành nào
                  hoặc yêu cầu cưỡng chế thi hành của cơ quan nhà nước có thẩm quyền, kể
                  cả việc điều tra những vi phạm tiềm tàng;
                </li>
                <li>
                  Phát hiện, ngăn ngừa hoặc theo cách khác xử lý các vấn đề về gian lận,
                  trục lợi, an ninh hoặc kỹ thuật;
                </li>
                <li>
                  Bảo vệ các quyền, tài sản hoặc sự an toàn của Người dùng và của Vua Thợ
                </li>
              </ul>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần E – Xử lý dữ liệu cá nhân nhạy cảm của Người dùng
              </h5>
              <p className='text-[1.6rem]'>
                Trong một số trường hợp hoặc đối với một số sản phẩm hoặc dịch vụ nhất
                định, chúng tôi có thể cần xử lý dữ liệu cá nhân nhạy cảm của Người dùng,
                chẳng hạn như thông tin liên quan đến sức khỏe, di truyền, định danh sinh
                trắc học và khuynh hướng giới tính. Đây là dữ liệu cá nhân gắn liền với
                quyền riêng tư mà khi bị xâm phạm sẽ gây ảnh hưởng trực tiếp tới quyền,
                lợi ích hợp pháp của Người dùng. Chính vì vậy, chúng tôi chỉ xử lý dữ liệu
                cá nhân này trên cơ sở đồng ý của Người dùng và/hoặc tuân thủ nghiêm ngặt
                pháp luật đang được áp dụng hiện hành.
              </p>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần F - Xử lý dữ liệu cá nhân của trẻ chưa thành niên và Cá nhân khác
              </h5>
              <p className='text-[1.6rem]'>
                Nếu Người dùng là một bậc cha mẹ hoặc người giám hộ, xin vui lòng không
                cho phép trẻ chưa thành niên (người dưới 18 (mười tám) tuổi) dưới sự giám
                hộ của người dùng gửi Dữ liệu Cá nhân tới Vua Thợ. Trong trường hợp Dữ
                liệu Cá nhân như vậy được cung cấp cho Vua Thợ, bằng cách này Người dùng
                chấp thuận cho việc xử lý Dữ liệu Cá nhân của trẻ chưa thành niên và cá
                nhân Người dùng chấp nhận và đồng ý ràng buộc bởi Chính sách này và chịu
                trách nhiệm đối với các hành động của trẻ.
              </p>
              <p className='text-[1.6rem]'>
                Trong một số trường hợp Người dùng có thể đã cung cấp Dữ liệu Cá nhân liên
                quan đến cá nhân khác (ví dụ như vợ/chồng, các thành viên trong gia đình
                hoặc bạn bè của Người dùng) và trong những trường hợp đó Người dùng thay
                mặt và đảm bảo rằng Người dùng được ủy quyền cung cấp Dữ liệu Cá nhân của
                họ cho Vua Thợ và Người dùng đã có sự chấp thuận của họ về việc Dữ liệu Cá
                nhân của họ được xử lý và sử dụng theo cách thức như đã nêu trong Chính
                sách này.
              </p>
              <p className='text-[1.6rem]'>
                Trước khi xử lý dữ liệu cá nhân liên quan đến dữ liệu cá nhân của người bị
                tuyên bố mất tích, người đã chết, chúng tôi sẽ cần có sự đồng ý của vợ,
                chồng, hoặc con thành niên của người đó, trừ trường hợp pháp luật quy định
                khác đi, ví dụ như những trường hợp chúng tôi được xử lý dữ liệu cá nhân
                mà không cần sự đồng ý của chủ thể dữ liệu.
              </p>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần G - Xử lý dữ liệu khi truy cập trang web
              </h5>
              <h6 className='text-[1.8rem] font-medium'>1. Công cụ xử lý dữ liệu</h6>
              <p className='text-[1.6rem]'>
                Công cụ xử lý dữ liệu là công cụ dò tìm duy nhất trên máy tính của Người
                dùng hoặc trên các thiết bị khác thông qua một máy chủ của trang web, có
                chứa những thông tin mà về sau có thể đọc được từ máy chủ đã cung cấp cho
                Người dùng công cụ này.
              </p>
              <p className='text-[1.6rem]'>
                Vua Thợ có thể sử dụng nhiều công cụ xử lý trên các trang web, ứng dụng,
                công cụ khác nhau do Chúng tôi quản lý. Thông tin được thu thập bao gồm
                nhưng không giới hạn địa chỉ IP của Người dùng, tên domain, phần mềm lướt
                web, các loại và cấu hình của công cụ lướt web của Người dùng, các thiết
                lập về ngôn ngữ, vị trí địa lý, hệ điều hành, trang web tham khảo, các
                trang web và nội dung đã xem, cùng với thời gian truy cập… nhằm thống kê,
                phân tích, tổng hợp, cải thiện chất lượng trang web, ứng dụng và phục vụ
                cho các hoạt động nâng cao chất lượng dịch vụ cung cấp cho Người dùng.
              </p>
              <p className='text-[1.6rem]'>
                Các công cụ xử lý này cũng có thể làm cho trang web, ứng dụng, công cụ của
                Chúng tôi ghi nhận lại phần truy cập của Người dùng cũng như các thứ tự ưu
                tiên, đồng thời điều chỉnh trang web, ứng dụng, công cụ cho phù hợp với
                nhu cầu của Người dùng. Các công cụ xử lý dữ liệu cho mục đích quảng cáo
                cho phép Chúng tôi cung cấp những mẫu quảng cáo trên các trang web, ứng
                dụng, công cụ của mình phù hợp hơn, ví dụ như bằng việc chọn mẫu quảng cáo
                dựa vào sự quan tâm dành cho Người dùng, hoặc chặn lại các mẫu quảng cáo
                có cùng nội dung liên tục gửi đến Người dùng.
              </p>
              <p className='text-[1.6rem]'>
                Hầu hết những công cụ lướt web được thiết kế trước tiên là nhận được sự
                chấp thuận của Người dùng cho phép xử lý dữ liệu và Người dùng có thể tạm
                khóa hoặc từ chối hoặc thiết lập công cụ lướt web của mình. Tuy nhiên,
                Người dùng sẽ không được hưởng đầy đủ mọi quyền lợi từ các trang web, ứng
                dụng hoặc công cụ của Chúng tôi cũng như một số chức năng có thể hoạt động
                không chính xác.
              </p>
              <p className='text-[1.6rem]'>
                Ngoài ra, Chúng tôi có thể áp dụng phương thức Xử lý dữ liệu cá nhân tự
                động thông qua các thuật toán để xử lý dữ liệu của Người dùng.
              </p>
              <h6 className='text-[1.8rem] font-medium'>2. Kết nối bên ngoài</h6>
              <p className='text-[1.6rem]'>
                Nếu bất kỳ phần nào của trang web, ứng dụng, công cụ do Chúng tôi quản lý
                có chứa các đường dẫn kết nối với trang web khác, những trang đó có thể
                không chịu sự quản lý của Chính sách này. Người dùng nên kiểm tra phần quy
                định về bảo mật trên các trang web đó để hiểu rõ về chính sách của họ khi
                thu thập, sử dụng, chuyển giao và tiết lộ dữ liệu cá nhân.
              </p>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần H – Quyền và nghĩa vụ của Người dùng
              </h5>
              <p className='text-[1.6rem]'>
                Pháp luật về bảo vệ dữ liệu cá nhân cho phép Người dùng thực hiện một số
                quyền, và có nghĩa vụ tương ứng, đối với chúng tôi khi chúng tôi xử lý dữ
                liệu cá nhân của Người dùng.
              </p>
              <strong className='text-[1.6rem]'>Quyền của Người dùng</strong>
              <p className='text-[1.6rem]'>Người dùng có các quyền như sau:</p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>Biết về cách thức chúng tôi xử lý dữ liệu cá nhân của Người dùng;</li>
                <li>
                  Đồng ý hoặc không đồng ý cho phép chúng tôi xử lý dữ liệu cá nhân của
                  Người dùng;
                </li>
                <li>
                  Truy cập để xem, chỉnh sửa hoặc yêu cầu chúng tôi chỉnh sửa dữ liệu cá
                  nhân của Người dùng;
                </li>
                <li>Rút lại sự đồng ý của Người dùng;</li>
                <li>Hoặc yêu cầu chúng tôi xóa dữ liệu cá nhân của Người dùng;</li>
                <li>Yêu cầu chúng tôi hạn chế xử lý dữ liệu cá nhân của Người dùng;</li>
                <li>
                  Yêu cầu một bản sao dữ liệu cá nhân của Người dùng miễn phí (chúng tôi
                  có thể tính phí yêu cầu của Người dùng nếu không có cơ sở rõ ràng hoặc
                  bị lạm dụng quá mức);
                </li>
                <li>
                  Phản đối chúng tôi xử lý dữ liệu cá nhân của Người dùng nhằm ngăn chặn
                  hoặc hạn chế tiết lộ dữ liệu cá nhân hoặc sử dụng cho mục đích tiếp thị,
                  giới thiệu sản phẩm, quảng cáo và khuyến mại;
                </li>
                <li>
                  Yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy ra vi
                  phạm quy định về bảo vệ dữ liệu cá nhân của Người dùng, trừ trường hợp
                  các bên có thỏa thuận khác;
                </li>
              </ul>
              <p className='text-[1.6rem]'>
                Để thực thi các quyền của mình trên cơ sở pháp luật hoặc muốn giải thích
                về (các) quyền này, Người dùng có thể liên lạc chúng tôi trong phần
                <strong className='text-[1.6rem]'> <i>Liên hệ.</i></strong>
              </p>
              <strong className='text-[1.6rem]'>Bảo lưu quyền của Vua Thợ</strong>
              <ul className='list-decimal list-inside text-[1.6rem]'>
                <li>
                  Chúng tôi bảo lưu quyền để yêu cầu thêm tài liệu, chứng từ phù hợp để
                  giúp chúng tôi xác định danh tính cũng như sàng lọc, xác minh tính hợp
                  pháp, hợp lệ trong yêu cầu về quyền của Người dùng đối với chúng tôi.
                  Sau khi xác minh, chúng tôi sẽ xử lý các yêu cầu của Người dùng trong
                  thời hạn được quy định bởi pháp luật.
                </li>
                <li>
                  Chúng tôi có quyền từ chối yêu cầu của Người dùng trong trường hợp yêu
                  cầu đó vi phạm quy định pháp luật hiện hành. Nếu yêu cầu không tuân thủ
                  các quy định liên quan đến việc xử lý dữ liệu cá nhân hoặc có thể gây
                  ảnh hưởng đáng kể đến quyền và tự do của người khác, Chúng tôi có thể từ
                  chối hành động được yêu cầu. Điều này nhằm đảm bảo rằng Chúng tôi không
                  vi phạm các quy định pháp luật và tuân thủ các quy định bảo vệ dữ liệu
                  cá nhân.
                </li>
                <li>
                  Chúng tôi có quyền từ chối yêu cầu Trong trường hợp yêu cầu dữ liệu cá
                  nhân có tính bí mật thương mại, thông tin bí mật thương mại được bảo vệ
                  để đảm bảo không xảy ra việc tiết lộ thông tin quan trọng cho đối tác
                  cạnh tranh hoặc bên thứ ba không có quyền truy cập.
                </li>
                <li>
                  Nếu yêu cầu ảnh hưởng đến quyền và quyền tự do của người khác hoặc vô
                  căn cứ hoặc quá mức thì chúng tôi có quyền từ chối hành động được yêu
                  cầu.
                </li>
                <li>
                  Chúng có quyền từ chối yêu cầu của Người dùng trong một số tình huống
                  nhất định, ví dụ như khi chúng tôi không thể xác nhận danh tính của
                  Người dùng hoặc trong trường hợp chúng tôi nhận được yêu cầu nhiều lần
                  cho cùng loại thông tin.
                </li>
              </ul>
              <p className='text-[1.6rem]'>
                Trong mọi trường hợp được nêu trên, Vua Thợ sẽ thông báo cho Người dùng lý
                do không thể thực hiện yêu cầu của Người dùng.
              </p>
              <p className='text-[1.6rem]'>
                Nếu Người dùng không muốn Dữ liệu Cá nhân của người dùng được thu thập qua
                cookies trên Trang Web, người dùng có thể tắt cookies bằng cách điều chỉnh
                cài đặt trình duyệt internet của người dùng để vô hiệu hóa, khóa hoặc tắt
                cookies, bằng cách xóa lịch sử truy cập của người dùng hoặc xóa bộ nhớ
                cache khỏi trình duyệt internet của người dùng
              </p>
              <strong className='text-[1.6rem]'>Nghĩa vụ của Người dùng</strong>
              <p className='text-[1.6rem]'>
                Người dùng có nghĩa vụ theo luật định như sau:
              </p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Tự bảo vệ dữ liệu cá nhân của Người dùng; chủ động áp dụng các biện pháp
                  nhằm bảo vệ Dữ liệu cá nhân của mình trong quá trình sử dụng dịch vụ của
                  Vua Thợ.
                </li>
                <li>
                  Thông báo kịp thời cho Vua Thợ khi phát hiện thấy có sai sót, nhầm lẫn
                  về Dữ liệu cá nhân của mình hoặc nghi ngờ Dữ liệu cá nhân của mình đang
                  bị xâm phạm.
                </li>
                <li>Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.</li>
                <li>
                  Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép chúng tôi
                  xử lý dữ liệu cá nhân.
                </li>
                <li>
                  Tự chịu trách nhiệm đối với những thông tin, dữ liệu, chấp thuận mà mình
                  tạo lập, cung cấp trên môi trường mạng; tự chịu trách nhiệm trong trường
                  hợp dữ liệu cá nhân bị rò rỉ, xâm phạm do lỗi của mình.
                </li>
                <li>
                  Thường xuyên cập nhật các Quy định, Chính sách của Vua Thợ trong từng
                  thời kỳ được thông báo tới Người dùng hoặc đăng tải trên các website và
                  hoặc các kênh giao dịch khác của Vua Thợ từng thời kỳ.
                </li>
                <li>Nghĩa vụ khác theo quy định pháp luật có liên quan</li>
              </ul>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần I - Lưu trữ và tiêu hủy dữ liệu cá nhân
              </h5>
              <p className='text-[1.6rem]'>
                Dữ liệu cá nhân của Người dùng do chúng tôi lưu trữ sẽ được bảo mật bằng
                việc thực hiện các biện pháp hợp lý. Trong phạm vi pháp luật cho phép,
                chúng tôi có thể lưu trữ dữ liệu cá nhân của Người dùng trong khoảng thời
                gian cần thiết để hoàn thành đúng và đủ các mục đích xử lý dữ liệu cá nhân
                được nêu cụ thể trong Chính Sách Bảo Mật này. Chúng tôi có thể phải lưu
                trữ dữ liệu cá nhân của Người dùng lâu hơn dựa trên yêu cầu của pháp luật
                có hiệu lực tại từng thời điểm như pháp luật về Thuế, Phòng, chống rửa
                tiền, hay nhằm giải quyết tranh chấp, vấn đề pháp lý, nếu có. Chúng tôi
                cũng sẽ bảo quản Dữ liệu Cá nhân của Người dùng trong thời gian cần thiết
                để đạt được các mục tiêu quảng cáo của chúng tôi, trừ khi Người dùng yêu
                cầu xóa dữ liệu cá nhân của Người dùng <i>(Phần K)</i>.
              </p>
              <p className='text-[1.6rem]'>
                Chúng tôi sẽ ngừng lưu giữ các tài liệu có chứa dữ liệu cá nhân về hoặc
                liên quan đến Quý khách ngay khi nhận thấy rằng mục đích mà Chúng tôi thu
                thập dữ liệu không còn đáp ứng yêu cầu của Chúng tôi và Chúng tôi không
                còn cần dữ liệu đó cho mục đích kinh doanh hoặc pháp lý nữa. Ngoài ra,
                Chúng tôi cũng có thể ẩn Dữ liệu cá nhân để dữ liệu đó không còn liên quan
                đến Quý khách nữa.
              </p>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần K - Cam kết xoá dữ liệu cá nhân của Người dùng.
              </h5>
              <p className='text-[1.6rem]'>
                Khi xoá tài khoản ứng dụng dựa trên yêu cầu của người dùng, Vua Thợ sẽ xoá
                dữ liệu người dùng liên kết với tài khoản ứng dụng đó. Chúng tôi sẽ chỉ
                lưu giữ những dữ liệu nhất định liên quan đến giao dịch nếu có vì các lý
                do chính đáng như:
              </p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Tuân thủ bất kỳ luật pháp, quy định, quy trình pháp lý hiện hành nào
                  hoặc yêu cầu cưỡng chế thi hành của cơ quan nhà nước có thẩm quyền, kể
                  cả việc điều tra những vi phạm tiềm tàng;
                </li>
                <li>
                  Phát hiện, ngăn ngừa các vấn đề về gian lận, trục lợi, an ninh hoặc kỹ
                  thuật;
                </li>
                <li>
                  Bảo vệ các quyền, tài sản hoặc sự an toàn của Người dùng và của Vua Thợ
                </li>
              </ul>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần L – Hậu quả, thiệt hại không mong muốn có thể xảy ra
              </h5>
              <strong className='text-[1.6rem]'>
                Khi xử lý yêu cầu về quyền của Người dùng:
              </strong>
              <p className='text-[1.6rem]'>
                Như đã đề cập tại <i>Phần E</i>, Người dùng có những quyền theo luật định
                và yêu cầu chúng tôi thực hiện trong khi đang xử lý dữ liệu cá nhân của
                Người dùng. Lúc này, chúng tôi có thể cần thời gian hợp lý (tùy thuộc vào
                mức độ phức tạp và sự ảnh hưởng của yêu cầu của Người dùng đối với mối
                quan hệ giữa chúng tôi và Người dùng) để xử lý yêu cầu của Người dùng
                và/hoặc để thông báo cho Người dùng biết hậu quả, thiệt hại không mong
                muốn có thể xảy ra nếu yêu cầu của Người dùng được thực hiện.
              </p>
              <p className='text-[1.6rem]'>Chúng tôi mong Người dùng lưu ý rằng:</p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Căn cứ vào bản chất và phạm vi yêu cầu của Người dùng, chúng tôi có thể
                  sẽ không thể tiếp tục cung cấp dịch vụ cho Người dùng, và theo yêu cầu
                  của pháp luật tùy từng trường hợp, chúng tôi cũng sẽ thông báo cho Người
                  dùng trước khi hoàn tất việc xử lý yêu cầu của Người dùng.
                </li>
                <li>
                  Hay như trong trường hợp, chúng tôi không thể thực hiện yêu cầu rút lại
                  sự đồng ý của Người dùng trong khi Vua Thợ đang thực hiện nghĩa vụ theo
                  hợp đồng giữa Vua Thợ với Người dùng; hay cần xử lý ngay dữ liệu cá nhân
                  có liên quan để bảo vệ tính mạng, sức khỏe của chủ thể dữ liệu hoặc
                  người khác theo luật định.
                </li>
              </ul>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần M - Cam kết bảo mật dữ liệu cá nhân của Người dùng
              </h5>
              <p className='text-[1.6rem]'>
                Dữ liệu cá nhân của người dùng trên Ứng dụng và Website của Vua Thợ được
                Vua Thợ cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân
                của Vua Thợ. Việc thu thập và sử dụng thông tin của người dùng chỉ được
                thực hiện khi có sự đồng ý của người dùng trừ những trường hợp pháp luật
                có quy định khác. Vua Thợ cam kết rằng:
              </p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>
                  Vua Thợ chỉ lưu giữ dữ liệu cá nhân khi cần thiết cho các mục đích pháp
                  lý và kinh doanh. Vua Thợ cam kết bảo mật dữ liệu cá nhân của Người dùng
                  cũng như tuân thủ các yêu cầu về bảo mật dữ liệu cá nhân theo Pháp Luật
                  Việt Nam tại từng thời điểm. Trong thời gian lưu giữ Dữ liệu cá nhân đó,
                  Chúng tôi sẽ thực hiện các phương pháp bảo vệ hợp lý theo quy định của
                  Pháp luật hiện hành để ngăn chặn tình trạng truy cập, thu thập, sử dụng,
                  tiết lộ, sao chép, sửa đổi, tiêu hủy một cách trái phép hoặc rủi ro
                  tương tự.
                </li>
                <li>
                  Ngoại trừ những trường hợp được liệt kê cụ thể trong Chính sách bảo mật
                  này, Vua Thợ sẽ không tiết lộ bất kỳ dữ liệu cá nhân nào của Người dùng
                  cho bên thứ ba trừ khi có sự đồng ý của Người dùng hoặc trong các tình
                  huống theo qui định của pháp luật.
                </li>
                <li>
                  Vua Thợ sẽ thực hiện các bước cần thiết để đảm bảo lưu trữ an toàn dữ
                  liệu cá nhân Người dùng cung cấp cho Công ty.
                </li>
                <li>
                  Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến
                  mất mát dữ liệu cá nhân của Người dùng, Vua Thợ sẽ có trách nhiệm thông
                  báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo
                  cho Người dùng được biết.
                </li>
                <li>
                  Vua Thợ yêu cầu Người dùng khi đăng ký/mua hàng là Thành Viên, phải cung
                  cấp đầy đủ thông tin cá nhân có liên quan như: họ và tên, địa chỉ liên
                  lạc, địa chỉ thư điện tử, số chứng minh nhân dân, điện thoại, số tài
                  khoản, số thẻ thanh toán…, và chịu trách nhiệm về tính chính xác, pháp
                  lý và cập nhật của những thông tin trên. Chúng tôi không chịu trách
                  nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi
                  của người dùng nếu xét thấy dữ liệu cá nhân của người dùng đó cung cấp
                  là không chính xác.
                </li>
              </ul>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần N: Cơ chế giải quyết khiếu nại, tranh chấp:
              </h5>
              <p className='text-[1.6rem]'>
                Khi phát sinh khiếu nại, tranh chấp liên quan tới thông tin cá nhân của
                người dùng, Vua Thợ đề cao giải pháp thương lượng, hòa giải giữa các bên
                nhằm duy trì sự tin cậy của thành viên vào chất lượng dịch vụ của Vua Thợ
                và thực hiện theo các bước sau:
              </p>
              <p className='text-[1.6rem]'>
                Bước 1: Người dùng khiếu nại về vụ việc liên quan tới dữ liệu cá nhân của
                mình tới Vua Thợ bằng cách liên hệ vào địa chỉ liên hệ bên dưới.
              </p>
              <p className='text-[1.6rem]'>
                Bước 2: Bộ phận Chăm sóc Khách hàng của Vua Thợ sẽ tiếp nhận các khiếu nại
                của Người dùng, tùy theo tính chất và mức độ của khiếu nại, Vua Thợ sẽ có
                những biện pháp cụ thể để hỗ trợ Người dùng giải quyết tranh chấp đó và
                trả lời kết quả cho người dùng trong thời hạn 15 ngày làm việc.
              </p>
              <p className='text-[1.6rem]'>
                Trong trường hợp sự việc nằm ngoài khả năng và thẩm quyền giải quyết của
                Vua Thợ, Vua Thợ sẽ yêu cầu Người dùng đưa sự việc tới cơ quan nhà nước có
                thẩm quyền giải quyết theo pháp luật.
              </p>
              <h5 className='text-[#0B27B6]/90 text-[2.4rem]'>
                Phần O: Liên hệ với chúng tôi
              </h5>
              <p className='text-[1.6rem]'>
                Trường hợp Người dùng có bất kỳ thắc mắc, câu hỏi nào liên quan đến Chính
                Sách Bảo Mật Dữ Liệu Cá Nhân hoặc nếu Người dùng muốn thực hiện các quyền
                của mình trong <i>Phần H</i>, Người dùng có thể liên hệ với chúng tôi theo
                nhiều cách khác nhau.
              </p>
              <ul className='list-disc list-inside text-[1.6rem]'>
                <li>Gọi cho đường dây nóng của chúng tôi: 38 786 688</li>
                <li>Gửi thư điện tử cho chúng tôi theo địa chỉ: info@vuatho.com</li>
                <li>
                  Hoặc liên hệ trực tiếp với chúng tôi tại văn phòng: 57 Song Hành, P. An
                  Phú, TP. Thủ Đức, TP. HCM, Việt Nam.
                </li>
                <li>
                  <strong className='text-[1.6rem]'>
                    Trụ sở chính: 57 Song Hành, P. An Phú, TP. Thủ Đức, TP. HCM, Việt Nam.
                  </strong>
                </li>
                <li>
                  <strong className='text-[1.6rem]'>Điện thoại:</strong> 38 786 688
                </li>
                <li>
                  Nếu Người dùng muốn ngừng nhận quảng cáo từ Vua Thợ, vui lòng gửi email
                  đến: info@vuatho.com
                </li>
              </ul>
            </div>
            {/* a */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivateInformation
