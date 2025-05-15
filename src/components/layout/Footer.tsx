import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center space-x-12 mb-8 text-sm">
          <div className="flex items-center">
            <span className="mr-2">↻</span>
            <span>Đổi trả trong 30 ngày</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🎧</span>
            <span>Hỗ trợ khách hàng 24/7</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🔒</span>
            <span>Thanh toán an toàn 100%</span>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-xl font-bold text-blue-500 mb-2">
            ĐỪNG BỎ LỠ CÁC ƯU ĐÃI!
          </h2>
          <p className="mb-4">
            Đăng ký nhận bản tin để cập nhật các ưu đãi hấp dẫn!
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded-l-md bg-gray-800 border-none text-gray-300 focus:outline-none"
            />
            <button className="px-4 py-2 bg-white text-black rounded-r-md hover:bg-gray-200">
              Gửi
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">SHOP SIDA</h3>
            <p className="text-sm mb-2">Công ty TNHH SHOP SIDA</p>
            <p className="text-sm mb-2">Được cấp phép bởi Sở Kế hoạch và Đầu tư</p>
            <p className="text-sm mb-2">
              Số 12 Cống Quỳnh, Nguyễn Cư Trinh, Quận 1, Việt Nam
            </p>
            <p className="text-sm mb-2">shopsida@gmail.com</p>
            <p className="text-sm mb-2">Số điện thoại: +84 947315815</p>
            <p className="text-sm">
              Hỗ trợ khách hàng: 9:00 - 17:00 (Thứ 2 - Thứ 6)
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Cửa hàng</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Trang chủ</a></li>
              <li><a href="#" className="hover:underline">Danh mục</a></li>
              <li><a href="#" className="hover:underline">Bộ sưu tập</a></li>
              <li><a href="#" className="hover:underline">Triển lãm nghệ thuật</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Về ShopSida</a></li>
              <li><a href="#" className="hover:underline">Liên hệ</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Hiệu ứng thêu</a></li>
              <li><a href="#" className="hover:underline">Theo dõi đơn hàng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Chính sách vận chuyển</a></li>
              <li><a href="#" className="hover:underline">Chính sách đổi trả</a></li>
              <li><a href="#" className="hover:underline">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="hover:underline">Chính sách bảo mật</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bản tin</h4>
            <p className="text-sm mb-4">Cập nhật ưu đãi hàng tuần của chúng tôi!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="E-mail"
                className="px-4 py-2 rounded-l-md bg-gray-800 border-none text-gray-300 focus:outline-none"
              />
              <button className="px-4 py-2 bg-white text-black rounded-r-md hover:bg-gray-200">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="mb-4">Theo dõi chúng tôi trên các nền tảng khác</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">📘</a>
            <a href="#" className="text-gray-300 hover:text-white">🎵</a>
            <a href="#" className="text-gray-300 hover:text-white">📸</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;