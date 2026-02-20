import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
  total: 0
};

// Calculate total
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...item,
          quantity: 1
        });
      }
      
      state.total = calculateTotal(state.items);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
      state.total = calculateTotal(state.items);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
      
      state.total = calculateTotal(state.items);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      localStorage.removeItem('cart');
    },
    
    initializeCart: (state) => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        state.items = JSON.parse(savedCart);
        state.total = calculateTotal(state.items);
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart, initializeCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartItemCount = (state) => 
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartItem = (state, itemId) => 
  state.cart.items.find(item => item.id === itemId);

export default cartSlice.reducer;
