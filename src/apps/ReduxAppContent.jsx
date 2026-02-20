import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts, initializeCart } from '../store/slices/productSlice';
import { initializeCart as initCart } from '../store/slices/cartSlice';
import ProductList from '../components/redux-app/ProductList';
import Cart from '../components/redux-app/Cart';
import Documentation from '../components/redux-app/Documentation';
import './ReduxApp.css';

export default function ReduxAppContent() {
  const dispatch = useDispatch();
  const [view, setView] = useState('products');

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(initCart());
  }, [dispatch]);

  return (
    <div className="redux-app">
      <header className="redux-header">
        <h1>🛒 Shopping App with Redux Toolkit</h1>
        <p>State Management for Complex Applications</p>
        
        <nav className="nav-tabs">
          <button 
            className={`nav-btn ${view === 'products' ? 'active' : ''}`}
            onClick={() => setView('products')}
          >
            📦 Products
          </button>
          <button 
            className={`nav-btn ${view === 'cart' ? 'active' : ''}`}
            onClick={() => setView('cart')}
          >
            🛒 Shopping Cart
          </button>
          <button 
            className={`nav-btn ${view === 'docs' ? 'active' : ''}`}
            onClick={() => setView('docs')}
          >
            📚 Documentation
          </button>
        </nav>
      </header>

      <main className="redux-content">
        {view === 'products' && <ProductList />}
        {view === 'cart' && <Cart />}
        {view === 'docs' && <Documentation />}
      </main>
    </div>
  );
}
