import './Documentation.css';

export default function Documentation() {
  return (
    <div className="documentation">
      <h2>📚 Redux Toolkit Documentation</h2>

      <section className="doc-section">
        <h3>What is Redux Toolkit?</h3>
        <p>
          Redux Toolkit is the official, recommended way to write Redux logic. It wraps around the Redux core and provides a simpler, more efficient API for common Redux patterns.
        </p>
      </section>

      <section className="doc-section">
        <h3>Core Concepts</h3>
        <div className="concepts-list">
          <div className="concept">
            <h4>📦 Store</h4>
            <p>Holds the entire state tree of your application. There is only one store per Redux application.</p>
          </div>

          <div className="concept">
            <h4>⚡ Actions</h4>
            <p>Plain objects that describe what happened. Must have a type property and can carry additional payload.</p>
          </div>

          <div className="concept">
            <h4>🔧 Reducers</h4>
            <p>Pure functions that specify how the state changes in response to an action.</p>
          </div>

          <div className="concept">
            <h4>🔌 Slices</h4>
            <p>Collections of reducer logic and actions for a specific feature, created with createSlice.</p>
          </div>

          <div className="concept">
            <h4>🎣 Hooks</h4>
            <p>useSelector to read state, useDispatch to send actions, and custom hooks for reusable logic.</p>
          </div>

          <div className="concept">
            <h4>⏳ Async Thunk</h4>
            <p>createAsyncThunk creates async action creators that handle async operations with automatic pending/fulfilled/rejected states.</p>
          </div>
        </div>
      </section>

      <section className="doc-section">
        <h3>Common Patterns</h3>
        
        <div className="pattern">
          <h4>1. Creating a Slice</h4>
          <pre><code>{`import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer handles mutations
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`}</code></pre>
        </div>

        <div className="pattern">
          <h4>2. Configuring the Store</h4>
          <pre><code>{`import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  }
});`}</code></pre>
        </div>

        <div className="pattern">
          <h4>3. Using Redux in Components</h4>
          <pre><code>{`import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}`}</code></pre>
        </div>

        <div className="pattern">
          <h4>4. Creating Selectors</h4>
          <pre><code>{`// In your slice file
export const selectCount = (state) => state.counter.value;
export const selectIsPositive = (state) => state.counter.value > 0;

// In your component
const count = useSelector(selectCount);
const isPositive = useSelector(selectIsPositive);`}</code></pre>
        </div>

        <div className="pattern">
          <h4>5. Async Operations with createAsyncThunk</h4>
          <pre><code>{`import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/data');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});`}</code></pre>
        </div>
      </section>

      <section className="doc-section">
        <h3>Best Practices</h3>
        <ul className="best-practices">
          <li>✓ Keep state normalized and flat</li>
          <li>✓ Don't put everything in Redux - use local state for UI state</li>
          <li>✓ Use Redux Toolkit's createSlice for cleaner code</li>
          <li>✓ Create feature-based slices for better organization</li>
          <li>✓ Use selectors to access state from components</li>
          <li>✓ Keep reducers pure - no side effects</li>
          <li>✓ Use meaningful action names</li>
          <li>✓ Split large slices into smaller ones</li>
          <li>✓ Use TypeScript for type safety</li>
          <li>✓ Test reducers and selectors separately</li>
        </ul>
      </section>

      <section className="doc-section">
        <h3>Debugging with Redux DevTools</h3>
        <p>
          Redux DevTools Extension provides powerful debugging capabilities:
        </p>
        <ul>
          <li>📍 View all dispatched actions</li>
          <li>🔍 Inspect state changes</li>
          <li>⏮️ Time-travel debugging</li>
          <li>▶️ Replay actions</li>
          <li>💾 Import/export state</li>
          <li>📊 Visualize state tree</li>
        </ul>
        <p>
          <strong>Setup:</strong> Install the Redux DevTools Extension for Chrome/Firefox, and it will automatically integrate with Redux Toolkit's configureStore.
        </p>
      </section>

      <section className="doc-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">Official Redux Toolkit Docs</a></li>
          <li><a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">React-Redux Hooks API</a></li>
          <li><a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux Fundamentals</a></li>
          <li><a href="https://github.com/reduxjs/redux-toolkit" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
        </ul>
      </section>
    </div>
  );
}
