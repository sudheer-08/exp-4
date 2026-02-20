import React, { createContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  theme: 'light',
  language: 'en',
  isLoggedIn: false,
  user: null,
  sidebarOpen: false
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    
    case 'LOGIN':
      return { ...state, isLoggedIn: true, user: action.payload };
    
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, user: null };
    
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
