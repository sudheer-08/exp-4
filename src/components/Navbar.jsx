import './Navbar.css';
import { useAppContext } from '../context/AppContext';
import { useState } from 'react';

export default function Navbar() {
  const { state, dispatch } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🚀</span>
          <h1>State Management Lab</h1>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/analytics">Analytics</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="navbar-actions">
            {state.isLoggedIn && state.user ? (
              <div className="user-section">
                <span className="user-name">👤 {state.user.name}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <span className="not-logged">Not logged in</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
