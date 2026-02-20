import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>📚 About Experiment</h3>
          <p>
            Learn state management concepts using Context API and Redux Toolkit.
            Build scalable React applications with proper state handling.
          </p>
        </div>

        <div className="footer-section">
          <h3>🎓 Learning Outcomes</h3>
          <ul>
            <li>Context API fundamentals</li>
            <li>Redux Toolkit essentials</li>
            <li>State management patterns</li>
            <li>Debug with Redux DevTools</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>👨‍🎓 Course Info</h3>
          <ul>
            <li>Full Stack - II (23CSH-382)</li>
            <li>4th Semester</li>
            <li>UIET - AIL-CSE</li>
            <li>Academic 2025-26</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>📖 Documentation</h3>
          <ul>
            <li><a href="#docs">React Docs</a></li>
            <li><a href="#redux">Redux Docs</a></li>
            <li><a href="#context">Context API</a></li>
            <li><a href="#hooks">React Hooks</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="student-credit">
          <p><strong>Student:</strong> Sudheer | <strong>UID:</strong> 23BAI70356</p>
        </div>
        <p>&copy; {currentYear} Experiment 4 - State Management in SPA. All rights reserved.</p>
        <p>Instructor: Mr. Prince Pal Singh (E18505)</p>
      </div>
    </footer>
  );
}
