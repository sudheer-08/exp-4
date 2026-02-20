import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import {
  selectFilteredProducts,
  selectProductsLoading,
  selectProductsError,
  selectProductFilters,
  setCategory,
  setSearch,
  clearFilters
} from '../../store/slices/productSlice';
import './ProductList.css';

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const loading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const filters = useSelector(selectProductFilters);
  const [addedItems, setAddedItems] = useState(new Set());

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    
    // Flash animation
    setAddedItems(prev => new Set([...prev, product.id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 1000);
  };

  const categories = ['all', 'courses', 'guides', 'bundles', 'design'];

  return (
    <div className="product-list-container">
      <h2>📦 Available Products</h2>

      {/* Filters */}
      <div className="filters-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={filters.search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${filters.category === cat ? 'active' : ''}`}
              onClick={() => dispatch(setCategory(cat))}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
          
          {(filters.category !== 'all' || filters.search) && (
            <button 
              className="clear-btn"
              onClick={() => dispatch(clearFilters())}
            >
              ✕ Clear
            </button>
          )}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-state">
          <p>❌ Error loading products: {error}</p>
        </div>
      )}

      {/* Products Grid */}
      {!loading && !error && (
        <>
          {products.length === 0 ? (
            <div className="no-products">
              <p>No products found matching your filters</p>
            </div>
          ) : (
            <>
              <div className="products-info">
                <p>Showing <strong>{products.length}</strong> product(s)</p>
              </div>
              
              <div className="products-grid">
                {products.map(product => (
                  <div 
                    key={product.id} 
                    className="product-card"
                  >
                    <div className="product-icon">
                      {product.image}
                    </div>
                    
                    <h3>{product.name}</h3>
                    
                    <p className="product-description">
                      {product.description}
                    </p>
                    
                    <div className="product-category">
                      {product.category}
                    </div>
                    
                    <div className="product-footer">
                      <div className="price">
                        ${product.price.toFixed(2)}
                      </div>
                      
                      <button
                        className={`add-btn ${addedItems.has(product.id) ? 'added' : ''}`}
                        onClick={() => handleAddToCart(product)}
                      >
                        {addedItems.has(product.id) ? '✓ Added' : '🛒 Add'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
