import { useState } from 'react';
import { UserProvider } from '../contexts/UserContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/context-app/Header';
import AuthSection from '../components/context-app/AuthSection';
import FeatureShowcase from '../components/context-app/FeatureShowcase';
import './ContextAPIApp.css';

export default function ContextAPIApp() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <UserProvider>
          <ContextAppContent />
        </UserProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

function ContextAppContent() {
  const [showingFeatures, setShowingFeatures] = useState(false);

  return (
    <div className="context-app">
      <Header />
      
      <div className="context-content">
        {!showingFeatures ? (
          <>
            <AuthSection onShowFeatures={() => setShowingFeatures(true)} />
          </>
        ) : (
          <>
            <FeatureShowcase onBack={() => setShowingFeatures(false)} />
          </>
        )}
      </div>
    </div>
  );
}
