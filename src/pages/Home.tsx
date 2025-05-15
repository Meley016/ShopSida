import React from 'react';
import ProductList from '../components/common/products/ProductList';
import CategoryList from '../components/common/categories/CategoryList';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Banner Image */}
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://teeholic.s3.amazonaws.com/wp-content/uploads/2024/11/2-1.webp')`,
        }}
      >
        {/* Optional: Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r drop-shadow-[0_0_10px_rgba(0,0,0,0.7)]"
            style={{
              textShadow: ' 0 0 20px white, 0 0 20px rgba(255, 255, 255, 0.8)', 
              WebkitTextStroke: '1px black',
            }}
          >
            WELL COME TO SHOP SIDA
          </h1>
        </div>
      </div>

      {/* Product List */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb- text-center">SẢN PHẨM NỔI BẬT</h2>
        <ProductList />
      </div>
      <div className="container mx-auto px-4 py-8">
        <CategoryList />
      </div>
    </div>
  );
};

export default HomePage;