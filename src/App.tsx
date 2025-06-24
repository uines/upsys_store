// src/App.tsx
import React from 'react';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            <a href="/" className="hover:text-blue-400 transition-colors duration-300">
              UpsyStore
            </a>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="text-lg hover:text-blue-400 transition-colors duration-300">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-lg bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full transition duration-300">
                  Carrinho (0)
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero Section (Opcional, para dar um toque extra) */}
        <section className="bg-blue-500 text-white text-center py-16 rounded-lg shadow-lg mb-12">
          <h2 className="text-5xl font-bold mb-4">Bem-vindo à UpsyStore!</h2>
          <p className="text-xl mb-8">Descubra as últimas tendências em tecnologia e gadgets.</p>
          <button className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-full text-lg shadow-md transition duration-300">
            Explorar Produtos
          </button>
        </section>

        {/* Product List Section */}
        <section>
          <ProductList />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 mt-12">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; {new Date().getFullYear()} UpsyStore. Todos os direitos reservados.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-blue-400 mx-2 transition-colors duration-300">
              Política de Privacidade
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-blue-400 mx-2 transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;