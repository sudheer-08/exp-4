import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    welcome: 'Welcome',
    login: 'Login',
    logout: 'Logout',
    username: 'Username',
    email: 'Email',
    password: 'Password',
    submit: 'Submit',
    language: 'Language',
    theme: 'Theme',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    pleaseLogin: 'Please login to continue',
    loginSuccess: 'Login successful!',
    allFeatures: 'All Features'
  },
  es: {
    welcome: 'Bienvenido',
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    username: 'Nombre de usuario',
    email: 'Correo electrónico',
    password: 'Contraseña',
    submit: 'Enviar',
    language: 'Idioma',
    theme: 'Tema',
    lightMode: 'Modo claro',
    darkMode: 'Modo oscuro',
    pleaseLogin: 'Por favor inicia sesión para continuar',
    loginSuccess: '¡Inicio de sesión exitoso!',
    allFeatures: 'Todas las características'
  },
  fr: {
    welcome: 'Bienvenue',
    login: 'Connexion',
    logout: 'Déconnexion',
    username: 'Nom d\'utilisateur',
    email: 'Email',
    password: 'Mot de passe',
    submit: 'Soumettre',
    language: 'Langue',
    theme: 'Thème',
    lightMode: 'Mode clair',
    darkMode: 'Mode sombre',
    pleaseLogin: 'Veuillez vous connecter pour continuer',
    loginSuccess: 'Connexion réussie!',
    allFeatures: 'Toutes les fonctionnalités'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = (key) => translations[language]?.[key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
