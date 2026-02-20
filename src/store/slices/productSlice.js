import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockProducts = [
        {
          id: 1,
          name: 'React Learning Path',
          price: 29.99,
          category: 'courses',
          description: 'Complete React course from basics to advanced',
          image: '📚'
        },
        {
          id: 2,
          name: 'Redux Mastery',
          price: 39.99,
          category: 'courses',
          description: 'Master Redux state management',
          image: '🎓'
        },
        {
          id: 3,
          name: 'Context API Guide',
          price: 19.99,
          category: 'guides',
          description: 'In-depth Context API tutorial',
          image: '📖'
        },
        {
          id: 4,
          name: 'JavaScript ES6+',
          price: 34.99,
          category: 'courses',
          description: 'Modern JavaScript features explained',
          image: '⚡'
        },
        {
          id: 5,
          name: 'Web Development Bundle',
          price: 89.99,
          category: 'bundles',
          description: 'Complete web development package',
          image: '🚀'
        },
        {
          id: 6,
          name: 'CSS Grid & Flexbox',
          price: 24.99,
          category: 'design',
          description: 'Master modern CSS layouts',
          image: '🎨'
        },
        {
          id: 7,
          name: 'Testing React Apps',
          price: 44.99,
          category: 'courses',
          description: 'Unit and integration testing',
          image: '✅'
        },
        {
          id: 8,
          name: 'Next.js Fundamentals',
          price: 49.99,
          category: 'courses',
          description: 'Full-stack with Next.js',
          image: '⚙️'
        }
      ];
      
      return mockProducts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    category: 'all',
    search: ''
  }
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },
    setSearch: (state, action) => {
      state.filters.search = action.payload;
    },
    clearFilters: (state) => {
      state.filters.category = 'all';
      state.filters.search = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setCategory, setSearch, clearFilters } = productSlice.actions;

// Selectors
export const selectAllProducts = (state) => state.products.items;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;
export const selectProductFilters = (state) => state.products.filters;

export const selectFilteredProducts = (state) => {
  const { items, filters } = state.products;
  return items.filter(product => {
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesSearch = product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                         product.description.toLowerCase().includes(filters.search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
};

export default productSlice.reducer;
