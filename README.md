# State Management in React - Experiment 4

## 🎓 Experiment Overview

**Institution:** University Institute of Engineering  
**Department:** AIT-CSE CORE & AIML  
**Course:** Full Stack - II (23CSH-382)  
**Semester:** 4th  
**Academic Session:** 2025-26 (EVEN Semester Jan-Jun 2026)

**Student:** Sudheer  
**UID:** 23BAI70356

**Instructor:** Mr. Prince Pal Singh (E18505) - Assistant Professor

**Duration:** 4-5 hours  
**Tools:** Context API, Redux Toolkit  
**Learning Outcome:** CO1 - BT3

---

## 📚 Learning Objectives

After completing this experiment, students will understand:

1. ✓ State management concepts and challenges
2. ✓ Implement Context API for simple global state
3. ✓ Set up Redux Toolkit for complex applications
4. ✓ Create actions, reducers, and store
5. ✓ Use hooks: useContext, useSelector, useDispatch
6. ✓ Handle asynchronous actions with Redux Thunk
7. ✓ Debug with Redux DevTools
8. ✓ Compare different state management solutions

---

## 📁 Project Structure

```
exp-4/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── HeroSection.jsx
│   │   ├── HeroSection.css
│   │   ├── CardComponent.jsx
│   │   ├── CardComponent.css
│   │   ├── ThemeToggle.jsx
│   │   ├── ThemeToggle.css
│   │   ├── FilterBar.jsx
│   │   ├── FilterBar.css
│   │   ├── context-app/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.css
│   │   │   ├── AuthSection.jsx
│   │   │   ├── AuthSection.css
│   │   │   ├── FeatureShowcase.jsx
│   │   │   └── FeatureShowcase.css
│   │   └── redux-app/
│   │       ├── ProductList.jsx
│   │       ├── ProductList.css
│   │       ├── Cart.jsx
│   │       ├── Cart.css
│   │       ├── Documentation.jsx
│   │       └── Documentation.css
│   │
│   ├── context/
│   │   ├── AppContext.jsx
│   │   ├── UserContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── LanguageContext.jsx
│   │
│   ├── reducer/
│   │   └── appReducer.js
│   │
│   ├── store/
│   │   ├── index.js
│   │   └── slices/
│   │       ├── productSlice.js
│   │       └── cartSlice.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Analytics.jsx
│   │   └── Analytics.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd exp-4

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:3000`

---

## 🎯 Features Demonstration

### 1. **Navigation & Layout** (Navbar & Footer)
- DemoContextualized navigation using AppContext
- Footer with experiment details and instructor info
- Theme toggle button for light/dark mode

### 2. **Home Page**
- Hero section with animated introduction
- Core concepts showcase
- Learning statistics
- Context API vs Redux comparison
- Experiment information

### 3. **Projects Page**
- Filterable project list
- Search functionality
- Category-based filtering
- Difficulty levels for each project

### 4. **Contact Page**
- Contact form with local state management (useState hook)
- Instructor and institution information
- Success message on form submission

### 5. **Analytics Page**
- Dashboard with loading states
- Filtered metrics display
- Key insights and learning recommendations
- When-to-use comparison cards

---

## 🎨 State Management Demonstrations

### Context API (Simple State Management)

**Files:**
- `src/context/AppContext.jsx` - Main app context with reducer
- `src/context/UserContext.jsx` - User authentication context
- `src/context/ThemeContext.jsx` - Theme toggle context
- `src/context/LanguageContext.jsx` - Language selection context

**Key Concepts:**
```jsx
// 1. Create Context
const UserContext = createContext();

// 2. Create Provider Component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Create Custom Hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

// 4. Use in Component
function Component() {
  const { user, login } = useUser();
  return <div>{user.name}</div>;
}
```

**Benefits:**
- Built into React
- No external dependencies
- Simple to understand
- Good for theme, auth, language

**Limitations:**
- Limited dev tools
- Can cause re-renders
- Not ideal for complex state
- Limited middleware support

---

### Redux Toolkit (Advanced State Management)

**Files:**
- `src/store/index.js` - Store configuration
- `src/store/slices/productSlice.js` - Product management
- `src/store/slices/cartSlice.js` - Shopping cart

**Key Concepts:**
```jsx
// 1. Create Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Immer handles mutations
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

// 2. Export Actions & Reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

// 3. Configure Store
export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// 4. Use in Component
function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
```

**Benefits:**
- Industry standard
- Advanced debugging with DevTools
- Middleware support
- Time-travel debugging
- Scalable for large apps
- Strong community

**Considerations:**
- More boilerplate code
- Learning curve
- Overkill for simple apps

---

## 🔄 when to Use What

### Use Context API When:
- ✓ Managing theme, language, auth status
- ✓ Simple global state
- ✓ Low-frequency updates
- ✓ Small to medium apps
- ✓ No need for advanced dev tools

### Use Redux When:
- ✓ Complex state logic
- ✓ Frequent state updates
- ✓ Large applications
- ✓ Need for middleware
- ✓ Team prefers Redux patterns
- ✓ Need time-travel debugging

---

## 🐛 Debugging with Redux DevTools

**Installation:**
1. Install Redux DevTools Extension for Chrome/Firefox
2. Open DevTools (F12)
3. Click on "Redux" tab
4. Interact with the app to see actions

**Features:**
- View all dispatched actions
- Inspect state changes
- Time-travel debugging
- Replay actions
- State import/export

---

## 📋 Deliverables

1. **Complete React Application** with:
   - Working navigation and pages
   - Context API demonstrations
   - Redux Toolkit shopping cart
   - Responsive design
   - Theme switching
   - Form handling

2. **Code Organization:**
   - Clean folder structure
   - Separate components, pages, and state
   - Proper use of hooks
   - Contextual naming conventions

3. **Features:**
   - Authentication flow (Context API)
   - Shopping cart (Redux)
   - Data filtering
   - Search functionality
   - Local storage persistence
   - Responsive design

---

## 🔗 Technologies Used

- **React 18** - UI framework
- **React Router v6** - Navigation
- **Redux Toolkit** - State management
- **React-Redux** - React bindings
- **Vite** - Build tool
- **CSS3** - Styling

---

## 📖 Key Learnings

### State Management Principles:
1. Single source of truth
2. State is read-only
3. Changes via pure functions (reducers)

### React Hooks:
- `useState()` - Local component state
- `useContext()` - Access context values
- `useReducer()` - Complex state with reducer
- `useSelector()` - Read Redux state
- `useDispatch()` - Dispatch Redux actions
- `useEffect()` - Side effects

### Best Practices:
1. Keep state normalized
2. Don't put everything in Redux
3. Use Redux Toolkit (not plain Redux)
4. Create feature-based slices
5. Use selectors for derived state
6. Keep reducers pure
7. Use meaningful action names

---

## 🎓 References

- [Redux Documentation](https://redux.js.org)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [React Context API](https://react.dev/reference/react/useContext)
- [React Hooks](https://react.dev/reference/react/hooks)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

---

## 📝 Notes

- All components use functional React patterns
- CSS modules are used for styling
- Responsive design for mobile and desktop
- Accessibility features included
- Error handling and loading states

---

## ✅ Completion Checklist

- [x] Project structure organized
- [x] Context API implementation
- [x] Redux Toolkit setup
- [x] Components created and styled
- [x] Pages implemented
- [x] Navigation working
- [x] Theme switching functional
- [x] Shopping cart functional
- [x] Data persistence (localStorage)
- [x] Responsive design
- [x] Documentation complete

---

## 📞 Support

For questions or issues regarding this experiment, contact:

**Instructor:** Mr. Prince Pal Singh (E18505)  
**Department:** AIT-CSE CORE & AIML  
**University:** University Institute of Engineering

---

**Last Updated:** February 20, 2026  
**Version:** 1.0.0
"# exp-4" 
