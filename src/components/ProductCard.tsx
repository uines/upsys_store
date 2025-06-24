// src/components/ProductCard.tsx
import React from 'react';
import type { Product } from '../interface/Product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-48 h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm mb-2 line-clamp-2"> {/* line-clamp para limitar linhas */}
        {product.description}
      </p>
      <div className="flex items-baseline mb-4 mt-auto"> {/* mt-auto para alinhar na parte inferior */}
        <span className="text-2xl font-bold text-green-600 mr-2">
          R$ {product.price.toFixed(2)}
        </span>
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">
            R$ {product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 w-full">
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductCard;