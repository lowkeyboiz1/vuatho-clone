'use client'

import { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'

function FaqSection() {
  const listAccordion: any = [
    {
      title: 'Tài khoản',
      children: [
        {
          title: 'Làm thế nào để thay đổi tên, email và số điện thoại của tôi?',
          children: [
            {
              title: 'Bước 1: Đăng nhập vào tài khoản của bạn trên ứng dụng Vua Thợ.',
            },
            {
              title:
                'Bước 2: Truy cập vào phần "Cài đặt tài khoản" hoặc "Thông tin cá nhân" trong ứng dụng.',
            },
            {
              title:
                'Bước 3: Chọn tùy chọn để chỉnh sửa tên, email, hoặc số điện thoại của bạn và làm theo hướng dẫn.',
            },
          ],
        },
        {
          title: 'Làm thế nào để thay đổi ngôn ngữ trên ứng dụng?',
          children: [
            {
              title: 'Để thay đổi thông tin cá nhân của bạn, hãy thực hiện các bước sau:',
            },
            {
              title: 'Bước 1: Đăng nhập vào tài khoản của bạn.',
            },
            {
              title:
                'Bước 2: Truy cập vào phần "Cài đặt" hoặc "Tùy chọn ngôn ngữ" trong ứng dụng.',
            },
            {
              title: 'Bước 3: Chọn ngôn ngữ mà bạn muốn sử dụng từ danh sách có sẵn.',
            },
          ],
        },
        {
          title: 'Ai đó đang sử dụng tài khoản của tôi?',
          children: [
            {
              title:
                'Nếu bạn nghi ngờ có ai đó đang truy cập vào tài khoản của bạn mà không phải bạn, hãy thực hiện các bước sau đây:',
            },
            {
              title: 'Bước 1: Ngay lập tức đăng nhập vào tài khoản của bạn.',
            },

            {
              title:
                'Bước 2: Thay đổi mật khẩu đăng nhập của bạn để ngăn chặn truy cập trái phép.',
            },
            {
              title:
                'Bước 3: Liên hệ với bộ phận hỗ trợ của chúng tôi để báo cáo sự việc này và được hỗ trợ trong việc khôi phục tài khoản của bạn.',
            },
          ],
        },
      ],
    },
    {
      title: 'Khái quát ứng dụng Vua Thợ',
      children: [
        {
          title: 'Ứng dụng Vua Thợ là gì?',
          children: [
            {
              title:
                'Vua Thợ là một ứng dụng kết nối người cần dịch vụ với các thợ chuyên nghiệp trong nhiều lĩnh vực khác nhau. Chúng tôi giúp người dùng dễ dàng tìm kiếm và thuê thợ, cũng như cho phép thợ tìm kiếm công việc phù hợp với kỹ năng của họ.',
            },
          ],
        },
        {
          title: 'Ứng dụng đang được triển khai ở đâu?',
          children: [
            {
              title:
                'Hiện tại, ứng dụng Vua Thợ đã được triển khai và hoạt động tại nhiều thành phố và khu vực trên toàn quốc. Bạn có thể sử dụng ứng dụng ở bất kỳ địa điểm nào chúng tôi đã hoạt động.',
            },
          ],
        },
        {
          title:
            'Mình muốn sử dụng thử dịch vụ của Vua Thợ nhưng phân vân về chất lượng dịch vụ có tốt hay không?',
          children: [
            {
              title:
                'Chúng tôi hiểu sự phân vân của bạn. Để đảm bảo chất lượng dịch vụ, Vua Thợ đã xây dựng một hệ thống đánh giá và đánh giá từng thợ sau mỗi công việc hoàn thành. Bạn có thể xem xét nhận xét và đánh giá từ người dùng khác để đưa ra quyết định thông thái khi chọn thợ.',
            },
          ],
        },

        {
          title:
            'Khi đăng công việc lên ứng dụng thì phải mất bao lâu mới có người nhận việc?',
          children: [
            {
              title:
                'Thời gian để có người thợ nhận công việc có thể thay đổi tùy theo vị trí của bạn và loại công việc. Thông thường, các công việc thông thường có thể tìm được thợ nhanh chóng, trong khi các công việc đặc biệt hoặc tại vị trí xa hơn có thể mất thời gian hơn.',
            },
          ],
        },
        {
          title: 'Làm sao tôi biết được người giúp việc này có làm tốt hay không?',
          children: [
            {
              title:
                'Bạn có thể đánh giá và xem xét lịch sử làm việc của thợ thông qua hồ sơ của họ trên ứng dụng. Ngoài ra, bạn cũng có thể tham khảo đánh giá và nhận xét từ người dùng khác để đảm bảo chọn một thợ có độ tin cậy và kỹ năng phù hợp.',
            },
          ],
        },
        {
          title: 'Làm sao nhận dạng thợ?',
          children: [
            {
              title:
                'Mọi thợ trên ứng dụng Vua Thợ đều có hồ sơ cá nhân với hình ảnh, thông tin liên hệ và đánh giá từ người dùng khác. Bạn có thể kiểm tra hồ sơ của thợ trước khi quyết định chọn họ để thực hiện công việc.',
            },
          ],
        },
        {
          title:
            'Nếu giới thiệu bạn bè sử dụng ứng dụng tôi có được khuyến mại gì không?',
          children: [
            {
              title:
                'Chúng tôi có chương trình khuyến mãi cho người dùng giới thiệu. Khi bạn giới thiệu bạn bè sử dụng ứng dụng và họ hoàn thành công việc đầu tiên, cả hai bạn sẽ nhận được ưu đãi hoặc giảm giá cho các dịch vụ tương lai.',
            },
          ],
        },
        {
          title: 'Vào ngày Lễ, Tết, người giúp việc có đến dọn dẹp nhà không?',
          children: [
            {
              title:
                'Chúng tôi cung cấp dịch vụ quanh năm, bao gồm cả ngày Lễ và Tết. Tuy nhiên, trong những ngày này, có thể có số lượng công việc nhiều hơn, vì vậy nên đặt lịch sớm để đảm bảo bạn có người giúp việc theo đúng thời gian bạn muốn.',
            },
          ],
        },
        {
          title: 'Làm thể nào để sử dụng dịch vụ trên Ứng dụng một cách hoàn hảo?',
          children: [
            {
              title: 'Để sử dụng dịch vụ một cách tốt nhất, hãy:',
            },
            {
              title: '- Xem xét đánh giá và lựa chọn thợ có uy tín và kỹ năng phù hợp.',
            },
            {
              title: '- Mô tả chi tiết công việc của bạn để thợ hiểu rõ yêu cầu.',
            },
            {
              title:
                '- Đặt lịch trước để đảm bảo bạn có người thợ vào thời gian bạn muốn.',
            },
            {
              title:
                '- Khi công việc hoàn thành, đánh giá và xem xét thợ để giúp cải thiện chất lượng dịch vụ.',
            },
          ],
        },
        {
          title: 'Giá dịch vụ được tính như thế nào?',
          children: [
            {
              title:
                'Giá dịch vụ được tính dựa trên loại công việc, thời gian và vị trí của bạn. Thợ sẽ dựa trên thông tin và tiến hành báo giá. Giá cuối cùng có thể thay đổi tùy thuộc vào các yếu tố cụ thể trong quá trình làm việc.',
            },
          ],
        },
      ],
    },
    {
      title: 'Thao tác trên ứng dụng Vua Thợ',
      children: [
        {
          title: 'Tôi có thể đặt lịch thợ vào buổi tối không?',
          children: [
            {
              title:
                'Có, bạn có thể đặt lịch thợ vào buổi tối. Vua Thợ cung cấp dịch vụ quanh năm, bao gồm cả buổi tối và cuối tuần. Tuy nhiên, bạn nên đặt lịch trước để đảm bảo có thợ sẵn trong thời gian bạn mong muốn.',
            },
          ],
        },
        {
          title: 'Thợ liên hệ với tôi bằng cách nào?',
          children: [
            {
              title:
                'Thợ sẽ liên hệ với bạn thông qua ứng dụng Vua Thợ qua tin nhắn hoặc cuộc gọi điện thoại. Bạn sẽ nhận được thông báo khi có thợ đồng ý nhận công việc của bạn và từ đó có thể trao đổi thông tin chi tiết.',
            },
          ],
        },
        {
          title:
            'Tôi muốn có nhiều thợ đến hỗ trợ sửa chữa cho nhanh thì phải làm như thế nào?',
          children: [
            {
              title:
                'Để có nhiều thợ đến hỗ trợ công việc sửa chữa nhanh chóng, bạn có thể tạo nhiều đơn tìm thợ cho nhiều công việc. Các thợ sẽ cùng nhận việc để hoàn thành trong thời gian ngắn.',
            },
          ],
        },
        {
          title:
            'Tôi muốn người giúp việc đến nấu ăn cho gia đình mà không cần dọn dẹp có được không?',
          children: [
            {
              title:
                'Có, bạn có thể yêu cầu dịch vụ nấu ăn mà không cần dọn dẹp. Trong quá trình đăng công việc, bạn có thể ghi chú rằng bạn chỉ cần dịch vụ nấu ăn và không cần dọn dẹp. Thợ sẽ thực hiện theo yêu cầu của bạn.',
            },
          ],
        },
        {
          title: 'Tôi có thể đặt nhiều dịch vụ cùng một lúc được không?',
          children: [
            {
              title:
                'Có, bạn có thể đặt nhiều dịch vụ khác nhau cùng một lúc thông qua ứng dụng Vua Thợ. Chỉ cần đăng công việc cho mỗi loại dịch vụ bạn cần và chọn thợ phù hợp cho từng công việc.',
            },
          ],
        },
        {
          title:
            'Ngoài dọn dẹp nhà ra nếu tôi cần người nấu ăn, ủi đồ thì Vua Thợ có thể đáp ứng được không?',
          children: [
            {
              title:
                'Vua Thợ cung cấp nhiều loại dịch vụ khác nhau, bao gồm dọn dẹp nhà, nấu ăn, ủi đồ và nhiều dịch vụ khác. Bạn có thể chọn các dịch vụ mà bạn cần và tìm thợ phù hợp để thực hiện chúng.',
            },
          ],
        },
        {
          title: 'Tôi có thể huỷ việc sau khi đăng việc không?',
          children: [
            {
              title:
                'Có, bạn có thể huỷ công việc sau khi đã đăng nếu có lý do cần thiết. Tuy nhiên, hãy xem xét quyền lợi và chính sách huỷ bỏ của ứng dụng để biết thêm chi tiết và có thể có các điều khoản và điều kiện cụ thể.',
            },
          ],
        },
        {
          title: 'Không tìm thấy địa điểm nhà tôi?',
          children: [
            {
              title:
                'Nếu bạn không thể tìm thấy địa điểm nhà của bạn trong ứng dụng, hãy thử nhập địa chỉ cụ thể hoặc điểm gần nhất để tạo địa điểm của bạn. Nếu vẫn gặp khó khăn, bạn có thể liên hệ với bộ phận hỗ trợ để được hỗ trợ thêm.',
            },
          ],
        },
        {
          title: 'Tôi muốn đổi lịch thì phải làm thế nào?',
          children: [
            {
              title:
                'Để đổi lịch đã đặt, bạn có thể liên hệ trực tiếp với thợ thông qua tin nhắn trong ứng dụng để thỏa thuận về thời gian mới. Tuy nhiên, hãy lưu ý rằng thay đổi lịch có thể phụ thuộc vào sự sẵn có của thợ trong thời gian bạn mong muốn.',
            },
          ],
        },
        {
          title: 'Theo dõi tình trạng đơn hàng ở đâu?',
          children: [
            {
              title:
                'Bạn có thể theo dõi tình trạng đơn hàng của mình trực tiếp trong ứng dụng Vua Thợ. Tại mục "Đơn hàng của tôi," bạn sẽ thấy thông tin về đơn hàng hiện tại, bao gồm trạng thái và chi tiết liên quan.',
            },
          ],
        },
        {
          title: 'Nhân viên có mang công cụ dụng cụ gì?',
          children: [
            {
              title:
                'Công cụ và dụng cụ mà nhân viên mang theo sẽ phụ thuộc vào loại dịch vụ bạn yêu cầu. Thợ sẽ mang theo các công cụ cần thiết để thực hiện công việc mà bạn đã đặt, ví dụ như dụng cụ làm vườn, dụng cụ sửa chữa, hoặc đồ nấu ăn, tùy thuộc vào yêu cầu của bạn.',
            },
          ],
        },
        {
          title: 'Tại sao nên đánh giá ca làm?',
          children: [
            {
              title:
                'Đánh giá ca làm là việc bạn thể hiện ý kiến, phản hồi về dịch vụ để chúng tôi cải thiện và phát triển dịch vụ phù hợp hơn nữa với nhu cầu thị trường. Đánh giá ca làm sớm trong vòng 24h, đảm bảo quyền lợi "Bảo hành" của bạn trong trường hợp chất lượng ca làm không làm bạn hài lòng.',
            },
          ],
        },
        {
          title: 'Nhân viên đến sẽ làm những gì?',
          children: [
            {
              title: 'Trước khi bắt đầu làm:',
            },
            {
              title:
                'Bước 1: Chào khách hàng (KH), giới thiệu họ và tên, nhấn nút “Bắt đầu” trên ứng dụng tính giờ làm.',
            },
            {
              title:
                'Bước 2: Nhắc KH cất những đồ vật quý, dễ mất vào một ngăn tủ và khóa lại.',
            },
            {
              title:
                'Bước 3: Hỏi KH về yêu cầu đặc biệt (nếu có), nếu không thì làm theo qui trình đã được đào tạo.',
            },
            {
              title: 'Sau khi hoàn thành việc:',
            },
            { title: '- Kiểm tra túi đồ.' },
            { title: '- Có vấn đề nào chưa ưng ý hay có việc gì cần làm nữa không?' },
            {
              title:
                '- NV chào KH và nhấn nút “Kết thúc” trên ứng dụng, và tiến hành ra về.',
            },
          ],
        },
      ],
    },
    {
      title: 'Hình thức thanh toán',
      children: [
        {
          title: 'Hình thức thanh toán như thế nào?',
          children: [
            {
              title:
                'Vua Thợ hỗ trợ nhiều hình thức thanh toán để bạn có sự linh hoạt. Các hình thức thanh toán thường bao gồm:',
            },
            { title: '- Thanh toán trực tiếp cho thợ sau khi công việc hoàn thành.' },
            {
              title:
                '- Thanh toán qua ứng dụng Vua Thợ, sử dụng thẻ tín dụng hoặc ví điện tử.',
            },
          ],
        },
        {
          title: 'Tôi có nhận được biên nhận khi đặt dịch vụ không?',
          children: [
            {
              title:
                'Có, bạn sẽ nhận được biên nhận hoặc hóa đơn điện tử sau khi công việc hoàn thành. Biên nhận này chứa thông tin về công việc đã được thực hiện và số tiền bạn đã thanh toán.',
            },
          ],
        },
        {
          title: 'Vua Thợ có xuất hoá đơn giá trị gia tăng không?',
          children: [
            {
              title:
                'Vua Thợ có thể xuất hoá đơn giá trị gia tăng (VAT) cho dịch vụ, tùy theo quy định thuế và yêu cầu của địa phương. Thông tin về VAT sẽ được cung cấp trên hoá đơn nếu áp dụng.',
            },
          ],
        },
      ],
    },
    {
      title: 'Đặt thợ định kì',
      children: [
        {
          title: 'Với vai trò khách',
          children: [
            {
              title: 'Có cách đặt thợ định kì không?',
              bold: true,
            },
            {
              title:
                '- Có, bạn có thể đặt thợ định kì để thực hiện các dịch vụ theo lịch trình cố định, ví dụ như dọn dẹp nhà hàng tuần hoặc hàng tháng. Trong ứng dụng, bạn có thể chọn tùy chọn "Đặt dịch vụ định kì" và xác định lịch trình và loại dịch vụ bạn muốn.',
            },
            {
              title:
                'Tôi đang sử dụng đặt thợ định kì, tôi muốn thay đổi thợ khác có được không?',
              bold: true,
            },
            {
              title:
                '- Có, bạn có quyền thay đổi thợ nếu bạn cảm thấy không hài lòng hoặc có lý do khác. Trong ứng dụng, bạn có thể tìm kiếm và chọn thợ mới để thay thế.',
            },
            {
              title:
                'Tôi đang sử dụng đặt thợ định kì, tôi có việc bận đột xuất và đi vắng, tôi phải làm như thế nào?',
              bold: true,
            },
            {
              title:
                '- Nếu bạn có việc bận đột xuất hoặc đi vắng và không cần dịch vụ trong thời gian đó, bạn nên thay đổi lịch trình đặt thợ để tránh làm phiền thợ của mình. Trong ứng dụng, bạn có thể điều chỉnh lịch đặt thợ theo nhu cầu của bạn.',
            },
            {
              title: 'Tôi có thể huỷ dọn dẹp nhà theo gói không?',
              bold: true,
            },
            {
              title:
                '- Có, bạn có thể huỷ dịch vụ dọn dẹp nhà theo gói, tuy nhiên, hãy xem xét chính sách và điều khoản huỷ bỏ của ứng dụng để biết thông tin chi tiết về quyền lợi và điều kiện của bạn.',
            },
          ],
        },
        {
          title: 'Với vai trò thợ',
          children: [
            {
              title: 'Thợ muốn ứng trước tiền',
              bold: true,
            },
            {
              title:
                '- Trong ứng dụng Vua Thợ, hình thức thanh toán thường là sau khi công việc hoàn thành. Tuy nhiên, bạn có thể thảo luận với khách hàng của mình về việc thanh toán trước tiền và đưa ra thoả thuận cụ thể về hình thức thanh toán.',
            },

            {
              title: 'Thợ muốn khách hàng trả hết tiền',
              bold: true,
            },

            {
              title:
                '- Bạn có thể thảo luận với khách hàng về việc thanh toán trước hoặc trả hết tiền sau khi công việc hoàn thành. Điều này nên được thống nhất giữa bạn và khách hàng trước khi bắt đầu công việc để tránh những hiểu lầm sau này.',
            },
          ],
        },
      ],
    },
    {
      title: 'Báo cáo sự cố',
      children: [
        {
          title: 'Tôi phải làm như thế nào khi Thợ huỷ công việc?',
          children: [
            {
              title: 'Nếu thợ đã huỷ công việc, bạn nên thực hiện các bước sau:',
            },
            {
              title:
                '- Liên hệ với thợ để hiểu lý do họ đã huỷ và xem xét có thể thỏa thuận lại lịch khác.',
            },
            {
              title:
                '- Nếu không thể thỏa thuận được, hãy đăng lại công việc trên ứng dụng để tìm một thợ khác.',
            },
            {
              title:
                '- Đánh giá và ghi nhận trường hợp huỷ công việc của thợ trên ứng dụng để cung cấp phản hồi cho Vua Thợ.',
            },
          ],
        },
        {
          title: 'Tại sao không có thợ nhận việc mà tôi đã đăng?',
          children: [
            {
              title:
                'Có một số lý do có thể khiến không có thợ nhận công việc của bạn, chẳng hạn:',
            },
            {
              title:
                '- Công việc yêu cầu một kỹ năng đặc biệt mà không có thợ phù hợp sẵn.',
            },

            { title: '- Thời gian bạn đề xuất không phù hợp với lịch của thợ.' },
            {
              title:
                '- Địa điểm của bạn quá xa so với thợ gần khu vực đó. Trong trường hợp này, bạn nên thử điều chỉnh yêu cầu công việc, thời gian hoặc địa điểm để tăng khả năng tìm thấy thợ.',
            },
          ],
        },
        {
          title: ' Tôi phải làm như thế nào khi thợ đến không giống trên ứng dụng?',
          children: [
            {
              title:
                'Nếu thợ đến không giống như thông tin trên ứng dụng, bạn nên thực hiện các bước sau:',
            },
            {
              title:
                '- Liên hệ với thợ để xác nhận danh tính và thông tin cá nhân của họ.',
            },
            {
              title:
                '- Nếu bạn có bất kỳ sự nghi ngờ hoặc vấn đề nào về an toàn, hãy ngừng công việc và liên hệ với Vua Thợ để báo cáo tình huống.',
            },
            {
              title:
                '- Ghi chú lại sự không phù hợp này trên ứng dụng để cung cấp phản hồi cho Vua Thợ.',
            },
          ],
        },
        {
          title: 'Tại sao tôi không sử dụng được mã khuyến mại?',
          children: [
            {
              title:
                'Nếu bạn gặp vấn đề khi sử dụng mã khuyến mại, bạn nên kiểm tra một số điều sau:',
            },

            {
              title:
                '- Hãy đảm bảo mã khuyến mại bạn sử dụng còn hiệu lực và chưa hết hạn.',
            },
            {
              title:
                '- Kiểm tra xem có các điều khoản và điều kiện cụ thể áp dụng cho mã khuyến mại không, ví dụ như số lần sử dụng hoặc giá trị tối thiểu.',
            },
            {
              title:
                '- Nếu vẫn gặp khó khăn, hãy liên hệ với bộ phận hỗ trợ của Vua Thợ để được giúp đỡ.',
            },
          ],
        },
        {
          title:
            'Nếu trong quá trình làm việc có sự cố hư hao hay mất cắp tài sản thì Vua Thợ sẽ xử lý như thế nào?',
          children: [
            {
              title:
                'Vua Thợ sẽ xem xét mọi sự cố hư hao hoặc mất cắp tài sản một cách nghiêm túc. Bạn nên báo cáo sự cố ngay lập tức và cung cấp bằng chứng liên quan như hình ảnh hoặc thông tin cụ thể. Vua Thợ sẽ tiến hành điều tra và hỗ trợ bạn trong việc giải quyết sự cố này.',
            },
          ],
        },
      ],
    },
  ]

  const [activeSelect, setActiveSelect] = useState<string>('Tài khoản')
  const [childActive, setChildActive] = useState(['0'])
  const [contentActive, setContentActive] = useState(
    listAccordion.find((i: any) => i.title === activeSelect)?.children,
  )

  const handleActiveSelect = (title: any) => {
    setActiveSelect(title)
    setContentActive(listAccordion.find((i: any) => i.title === title)?.children)
    setChildActive(['0'])
  }

  const highlightRef = useRef(null)
  const handleSelect = () => {
    const activeButton = document.querySelector(`button.menuActive`) as HTMLElement
    const highlight = highlightRef.current

    if (activeButton && highlight) {
      const { offsetTop: top, offsetHeight: height } = activeButton
      ;(highlight as HTMLElement).style.transform = `translateY(${top}px)`
      ;(highlight as HTMLElement).style.height = `${height}px`
    }
  }
  useEffect(() => {
    handleSelect()
  }, [activeSelect])

  useEffect(() => {
    const handleResize = () => {
      handleSelect()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [activeSelect])

  return (
    <>
      {' '}
      <div className='rounded-t-[20px] 13inch:rounded-t-[40px] 3xl:rounded-t-[100px] bg-white relative -top-[40px] 3xl:-top-[80px] py-[20px] 13inch:py-[40px] 3xl:py-[80px]'>
        <div className='ct-container-70 gap-10 hidden md:flex'>
          <div className='w-full relative max-w-[320px] 3xl:max-w-[400px]'>
            <div
              className='absolute w-full rounded-[60px] min-h-[40px] h-[40px] 13inch:h-[50px] 3xl:h-[60px] px-10 bg-gradient-to-r from-[#FFB500] to-[#FED32C] transition'
              ref={highlightRef}
            />
            <div className='flex flex-col gap-2'>
              {listAccordion.map((i: any) => (
                <button
                  onClick={() => handleActiveSelect(i.title)}
                  className={`w-full rounded-[60px] min-h-[40px] h-[40px] 13inch:h-[50px] 3xl:h-[60px] px-10 text-[1.6rem] 13inch:text-[1.8rem] 3xl:text-[2rem] flex items-center justify-start ${
                    activeSelect === i.title
                      ? 'menuActive text-black'
                      : 'bg-transparent hover:bg-gradient-to-r hover:from-[#FFB500]/5 hover:to-[#FED32C]/5'
                  }`}
                  key={i.title}
                >
                  <span className='z-[1] relative'>{i.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className='w-full'>
            <Accordion
              selectionMode='single'
              variant='splitted'
              selectedKeys={childActive}
              onSelectionChange={(i): any =>
                setChildActive(new Set(Array.from(i)) as any)
              }
              className='gap-5'
              itemClasses={{
                base: 'group-[.is-splitted]:shadow-[0px_0px_12px_2px_rgba(0,0,0,0.20)]',
              }}
            >
              {contentActive.map((i: any, index: any) => (
                <AccordionItem
                  key={index?.toString()}
                  aria-label={i.title}
                  title={i.title}
                  classNames={{
                    content: 'flex flex-col gap-2 pb-8',
                    title:
                      'text-[1.8rem] 13inch:text-[2rem] 3xl:text-[2.2rem] font-bold data-[open=true]:text-[#0B27B6]',
                    indicator: 'text-[2rem]',
                    base: 'group-[.is-splitted]:pl-12',
                  }}
                >
                  {i.children.map((ic: any) => (
                    <p
                      key={ic.title}
                      className={`text-[1.6rem] text-[#555] ${
                        ic?.bold ? 'font-bold' : ''
                      }`}
                    >
                      {ic.title}
                    </p>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className='ct-container-70 block md:hidden'>
          <div className='w-full'>
            <Accordion
              selectionMode='single'
              className='gap-5'
              itemClasses={{
                base: 'group-[.is-splitted]:shadow-[0px_0px_12px_2px_rgba(0,0,0,0.20)]',
              }}
            >
              {listAccordion.map((item: any, index: any) => (
                <AccordionItem
                  key={item.title}
                  aria-label={item.title}
                  title={item.title}
                  classNames={{
                    content: 'flex flex-col gap-2',
                    title:
                      'text-[1.8rem] 13inch:text-[2rem] 3xl:text-[2.2rem] font-bold data-[open=true]:text-[#0B27B6]',
                    indicator: 'text-[2rem]',
                    base: 'group-[.is-splitted]:pl-12',
                  }}
                >
                  {item?.children.map((ic: any, index: any) => (
                    <Accordion
                      selectionMode='single'
                      key={ic.title}
                      className='gap-5'
                      itemClasses={{
                        base: 'group-[.is-splitted]:shadow-[0px_0px_12px_2px_rgba(0,0,0,0.20)]',
                      }}
                    >
                      <AccordionItem
                        key={index}
                        aria-label={ic.title}
                        title={ic.title}
                        classNames={{
                          content: 'flex flex-col gap-2 pb-2',
                          title:
                            'text-[1.8rem] 13inch:text-[2rem] 3xl:text-[2.2rem] font-bold data-[open=true]:text-[#0B27B6] pl-2',
                          indicator: 'text-[2rem]',
                          base: 'group-[.is-splitted]:pl-12',
                        }}
                      >
                        {ic?.children.map((icc: any) => (
                          <p className='text-[1.6rem] text-[#555]' key={icc.title}>
                            {icc.title}
                          </p>
                        ))}
                      </AccordionItem>
                    </Accordion>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  )
}

export default FaqSection
