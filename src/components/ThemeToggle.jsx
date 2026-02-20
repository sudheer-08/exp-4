import { useAppContext } from '../context/AppContext';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { state, dispatch } = useAppContext();

  const handleThemeToggle = () => {
    dispatch({ type: 'TOGGLE_THEME' });
    localStorage.setItem('theme', state.theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      className={`theme-toggle ${state.theme}`}
      onClick={handleThemeToggle}
      title={`Switch to ${state.theme === 'light' ? 'dark' : 'light'} mode`}
      aria-label="Toggle theme"
    >
      {state.theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
