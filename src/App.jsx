import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Analytics from './pages/Analytics';
import './App.css';

function AppContent() {
  const { state } = useAppContext();

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', state.theme);
    document.body.className = `${state.theme}-mode`;
  }, [state.theme]);

  return (
    <div className={`app ${state.theme}-mode`} id="app-root">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}
