import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart, selectCartItems, selectCartTotal } from '../../store/slices/cartSlice';
import './Cart.css';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleQuantityChange = (id, quantity) => {
    const newQty = Math.max(1, parseInt(quantity));
    dispatch(updateQuantity({ id, quantity: newQty }));
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="cart-container">
      <h2>🛒 Shopping Cart</h2>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛍️</div>
          <p>Your cart is empty</p>
          <p style={{ fontSize: '0.95em', opacity: 0.7 }}>
            Add products from the Products tab to get started
          </p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-icon">{item.image}</div>
                
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>

                <div className="item-quantity">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="qty-btn"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="qty-input"
                  />
                  <button
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="qty-btn"
                  >
                    +
                  </button>
                </div>

                <div className="item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                  title="Remove from cart"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-actions">
            <button className="checkout-btn">
              💳 Proceed to Checkout
            </button>
            <button className="clear-btn" onClick={handleClear}>
              🗑️ Clear Cart
            </button>
          </div>

          <div className="cart-info">
            <p>Items in cart: <strong>{items.reduce((sum, item) => sum + item.quantity, 0)}</strong></p>
          </div>
        </>
      )}
    </div>
  );
}
