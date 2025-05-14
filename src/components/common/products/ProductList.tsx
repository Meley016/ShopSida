import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  image: string;
  name: string;
  code: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json'); 
        if (!response.ok) {
          throw new Error('Lỗi khi lấy dữ liệu sản phẩm');
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Đang tải...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Lỗi: {error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          code={product.code}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;