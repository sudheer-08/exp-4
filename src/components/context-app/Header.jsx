import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useUser } from '../../contexts/UserContext';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const { user, isLoggedIn } = useUser();

  return (
    <header className={`header ${theme}`}>
      <div className="header-content">
        <h1>🎯 Context API Demo</h1>
        
        <div className="user-section">
          {isLoggedIn && user ? (
            <div className="user-info">
              👤 {user.name} ({user.email})
            </div>
          ) : null}
        </div>

        <div className="controls">
          <div className="language-selector">
            <label>{t('language')}:</label>
            <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>

          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            title={t(theme === 'light' ? 'darkMode' : 'lightMode')}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}
