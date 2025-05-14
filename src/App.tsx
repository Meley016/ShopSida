// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/index.css';
import Header from './components/layout/Header';
import ProductList from './components/common/products/ProductList';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/men" element={<h2 className="text-2xl font-bold">Bộ sưu tập Nam</h2>} />
            <Route path="/women" element={<h2 className="text-2xl font-bold">Bộ sưu tập Nữ</h2>} />
            <Route path="/handbags" element={<h2 className="text-2xl font-bold">Túi Xách</h2>} />
            <Route path="/shoes" element={<h2 className="text-2xl font-bold">Giày</h2>} />
            <Route path="/accessories" element={<h2 className="text-2xl font-bold">Phụ Kiện</h2>} />
            <Route path="/account" element={<h2 className="text-2xl font-bold">Tài khoản</h2>} />
            <Route path="/cart" element={<h2 className="text-2xl font-bold">Giỏ hàng</h2>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;