import { useState } from 'react';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './AuthSection.css';

export default function AuthSection({ onShowFeatures }) {
  const { user, isLoggedIn, login, logout } = useUser();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      login({
        name: formData.name,
        email: formData.email
      });
      setFormData({ name: '', email: '', password: '' });
      setTimeout(() => onShowFeatures(), 500);
    }
  };

  return (
    <div className={`auth-section ${theme}`}>
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>{t('welcome')} to Context API Demo</h2>
          <p style={{ fontSize: '1.1em', marginBottom: '25px' }}>
            Learn state management the React way!
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="name">{t('username')}:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('email')}:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">{t('password')}:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="submit-btn">
              {t('login')} →
            </button>
          </form>

          <div className="demo-users">
            <p><strong>Demo Users:</strong></p>
            <button 
              className="demo-btn"
              onClick={() => {
                login({ name: 'Alice Johnson', email: 'alice@example.com' });
                setTimeout(() => onShowFeatures(), 500);
              }}
            >
              👩‍💼 Alice Johnson
            </button>
            <button 
              className="demo-btn"
              onClick={() => {
                login({ name: 'Bob Smith', email: 'bob@example.com' });
                setTimeout(() => onShowFeatures(), 500);
              }}
            >
              👨‍💻 Bob Smith
            </button>
            <button 
              className="demo-btn"
              onClick={() => {
                login({ name: 'Carol White', email: 'carol@example.com' });
                setTimeout(() => onShowFeatures(), 500);
              }}
            >
              👩‍🔬 Carol White
            </button>
          </div>
        </div>
      ) : (
        <div className="logged-in-container">
          <div className="welcome-message">
            <h2>✅ {t('loginSuccess')}</h2>
            <p>Welcome back, <strong>{user.name}</strong>!</p>
            <p style={{ color: '#999', marginTop: '10px' }}>{user.email}</p>
          </div>

          <button className="explore-btn" onClick={onShowFeatures}>
            🚀 {t('allFeatures')} →
          </button>

          <button className="logout-btn" onClick={logout}>
            {t('logout')}
          </button>
        </div>
      )}
    </div>
  );
}
