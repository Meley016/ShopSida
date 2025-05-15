import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/index.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="fixed top-0 w-full z-10">
          <Header />
        </div>
        <main className="container mx-auto mt-20 px-4 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/men" element={<h2 className="text-2xl font-bold">Bộ sưu tập Nam</h2>} />
            <Route path="/women" element={<h2 className="text-2xl font-bold">Bộ sưu tập Nữ</h2>} />
            <Route path="/handbags" element={<h2 className="text-2xl font-bold">Túi Xách</h2>} />
            <Route path="/shoes" element={<h2 className="text-2xl font-bold">Giày</h2>} />
            <Route path="/accessories" element={<h2 className="text-2xl font-bold">Phụ Kiện</h2>} />
            <Route path="/account" element={<h2 className="text-2xl font-bold">Tài khoản</h2>} />
            <Route path="/cart" element={<h2 className="text-2xl font-bold">Giỏ hàng</h2>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;