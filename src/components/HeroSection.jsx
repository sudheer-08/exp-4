import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>🎯 Master State Management in React</h1>
        <p className="hero-subtitle">
          Learn Context API & Redux Toolkit - Build scalable SPAs
        </p>
        
        <div className="hero-cards">
          <div className="hero-card">
            <div className="hero-icon">📦</div>
            <h3>Context API</h3>
            <p>Simple global state management without extra dependencies</p>
          </div>

          <div className="hero-card">
            <div className="hero-icon">🛒</div>
            <h3>Redux Toolkit</h3>
            <p>Advanced state management for complex applications</p>
          </div>

          <div className="hero-card">
            <div className="hero-icon">🎓</div>
            <h3>Learn Together</h3>
            <p>Practical examples and best practices</p>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn btn-primary">
            📚 Get Started
          </button>
          <button className="btn btn-secondary">
            📖 View Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
