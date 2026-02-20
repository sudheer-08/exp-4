import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import './FeatureShowcase.css';

export default function FeatureShowcase({ onBack }) {
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div className={`feature-showcase ${theme}`}>
      <h2>📚 Context API Features</h2>
      
      <div className="features-grid">
        {/* User Context Feature */}
        <div className="feature-card">
          <div className="feature-icon">👤</div>
          <h3>User Context</h3>
          <div className="feature-content">
            <p><strong>Current User:</strong></p>
            <div className="user-display">
              <div><strong>Name:</strong> {user.name}</div>
              <div><strong>Email:</strong> {user.email}</div>
            </div>
            <p className="description">
              The UserContext manages global authentication state. It provides login/logout functionality without prop drilling!
            </p>
            <button className="logout-btn-small" onClick={logout}>
              Logout
            </button>
          </div>
        </div>

        {/* Theme Context Feature */}
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Theme Context</h3>
          <div className="feature-content">
            <p><strong>Current Theme:</strong> <span className="theme-badge">{theme.toUpperCase()}</span></p>
            <p className="description">
              The ThemeContext manages the application theme globally. Switch between light and dark mode anywhere in the app!
            </p>
            <button className="theme-btn" onClick={toggleTheme}>
              {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
            </button>
          </div>
        </div>

        {/* Language Context Feature */}
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Language Context</h3>
          <div className="feature-content">
            <p><strong>Current Language:</strong> <span className="lang-badge">{language.toUpperCase()}</span></p>
            <p className="description">
              The LanguageContext provides multi-language support. Change language globally without reloading!
            </p>
            <div className="lang-selector">
              {['en', 'es', 'fr'].map(lang => (
                <button
                  key={lang}
                  className={`lang-btn ${language === lang ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="code-section">
        <h3>💻 How It Works</h3>
        
        <div className="code-block">
          <p className="code-title">1️⃣ Create Context:</p>
          <pre><code>{`const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = (userData) => {
    setUser(userData);
  };
  
  const logout = () => {
    setUser(null);
  };
  
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}`}</code></pre>
        </div>

        <div className="code-block">
          <p className="code-title">2️⃣ Create Custom Hook:</p>
          <pre><code>{`export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};`}</code></pre>
        </div>

        <div className="code-block">
          <p className="code-title">3️⃣ Wrap App with Provider:</p>
          <pre><code>{`import { UserProvider } from './contexts/UserContext';

export default function App() {
  return (
    <UserProvider>
      <YourAppComponents />
    </UserProvider>
  );
}`}</code></pre>
        </div>

        <div className="code-block">
          <p className="code-title">4️⃣ Use in Component:</p>
          <pre><code>{`import { useUser } from './contexts/UserContext';

function MyComponent() {
  const { user, login, logout } = useUser();
  
  return (
    <div>
      {user ? (
        <>
          <p>Welcome {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({name: 'John'})}>
          Login
        </button>
      )}
    </div>
  );
}`}</code></pre>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="concepts-section">
        <h3>🎯 Key Concepts</h3>
        
        <div className="concepts-grid">
          <div className="concept-card">
            <h4>✓ What is Context?</h4>
            <p>A mechanism to pass data through component tree without passing props down manually at every level.</p>
          </div>

          <div className="concept-card">
            <h4>✓ Why Use It?</h4>
            <p>Solves the "prop drilling" problem where props need to be passed through many intermediate components.</p>
          </div>

          <div className="concept-card">
            <h4>✓ Best For</h4>
            <p>Theme preferences, user authentication, language selection, and other low-frequency updates.</p>
          </div>

          <div className="concept-card">
            <h4>✓ When to Avoid</h4>
            <p>Frequently changing data or complex application logic - use Redux Toolkit instead!</p>
          </div>
        </div>
      </div>

      <button className="back-button" onClick={onBack}>
        ← Back to Login
      </button>
    </div>
  );
}
