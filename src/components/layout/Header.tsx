// src/components/layout/Header.tsx
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined, SearchOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = Layout;

const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <AntdHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        height: '100px'
      }}
    >
    <div
        className="container mx-auto px-4 py-3 flex justify-between items-center"
        style={{ height: '80px', minHeight: '100px' }}
        >
        <div className="flex items-center px-3 space-x-4 text-black">
            <button
            className="focus:outline-none px-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Mở/Đóng Menu"
            >
            <MenuOutlined className="text-xl" />
            </button>
            <button className="focus:outline-none" aria-label="Tìm kiếm">
            <SearchOutlined className="text-xl" />
            </button>
        </div>

        <Link
            to="/"
            className="flex items-center text-3xl md:text-4xl lg:text-5xl font-serif uppercase tracking-widest text-black font-bold mx-auto"
            style={{ lineHeight: '100px' }} // Cập nhật lineHeight để khớp với chiều cao mới
        >
            Shop Sida
        </Link>

        <div className="flex items-center px-3 space-x-4 text-black h-full">
            <Link
                to="/favorites"
                className="hover:text-gray-600 px-4 flex items-center"
            >
                <HeartOutlined className="text-xl" />
            </Link>
            <Link
                to="/account"
                className="hover:text-gray-600 flex items-center"
            >
                <UserOutlined className="text-xl" />
            </Link>
        </div>
    </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <Menu
            mode="vertical"
            items={[
              { key: '1', label: <Link to="/men" onClick={() => setIsMenuOpen(false)}>Nam</Link> },
              { key: '2', label: <Link to="/women" onClick={() => setIsMenuOpen(false)}>Nữ</Link> },
              { key: '3', label: <Link to="/handbags" onClick={() => setIsMenuOpen(false)}>Túi Xách</Link> },
              { key: '4', label: <Link to="/shoes" onClick={() => setIsMenuOpen(false)}>Giày</Link> },
              { key: '5', label: <Link to="/accessories" onClick={() => setIsMenuOpen(false)}>Phụ Kiện</Link> },
            ]}
            style={{ backgroundColor: 'white', color: 'black' }}
          />
        </div>
      )}
    </AntdHeader>
  );
};

export default AppHeader;