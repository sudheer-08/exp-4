// App Reducer - Handles all application state
export const appReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };

    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload
      };

    case 'SET_USER':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload
      };

    case 'CLEAR_USER':
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };

    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
      };

    case 'CLOSE_SIDEBAR':
      return {
        ...state,
        sidebarOpen: false
      };

    case 'UPDATE_NOTIFICATIONS':
      return {
        ...state,
        notifications: action.payload
      };

    default:
      return state;
  }
};

export const initialState = {
  theme: localStorage.getItem('theme') || 'light',
  language: localStorage.getItem('language') || 'en',
  isLoggedIn: !!localStorage.getItem('user'),
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  sidebarOpen: false,
  notifications: []
};
