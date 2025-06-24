import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../interface/Product'; // Importamos a interface Product

const products: Product[] = [ // Tipamos o array de produtos
  {
    id: 1,
    name: 'Fone de Ouvido Bluetooth',
    description: 'Som de alta qualidade com cancelamento de ruído.',
    price: 199.90,
    oldPrice: 249.90,
    image: 'https://via.placeholder.com/200/0000FF/FFFFFF?text=Fone' // Exemplo de imagem
  },
  {
    id: 2,
    name: 'Smartwatch Esportivo',
    description: 'Monitore sua saúde e atividades físicas.',
    price: 349.99,
    image: 'https://via.placeholder.com/200/FF0000/FFFFFF?text=Smartwatch' // Exemplo de imagem
  },
  {
    id: 3,
    name: 'Câmera DSLR Profissional',
    description: 'Capture momentos com detalhes incríveis.',
    price: 1299.00,
    image: 'https://via.placeholder.com/200/00FF00/FFFFFF?text=Camera' // Exemplo de imagem
  },
  {
    id: 4,
    name: 'Teclado Mecânico RGB',
    description: 'Experiência de digitação premium com iluminação personalizável.',
    price: 289.50,
    oldPrice: 320.00,
    image: 'https://via.placeholder.com/200/FFFF00/000000?text=Teclado' // Exemplo de imagem
  },
];

const ProductList: React.FC = () => { // Usamos React.FC para tipar o componente funcional
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Nossos Produtos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;