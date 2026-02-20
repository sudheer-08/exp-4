import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import { useAppContext } from '../context/AppContext';
import './Home.css';

export default function Home() {
  const { state } = useAppContext();

  const features = [
    {
      id: 1,
      icon: '📚',
      title: 'Context API',
      description: 'Learn how to manage simple global state with React Context API. Perfect for theme, authentication, and language preferences.',
      highlighted: false
    },
    {
      id: 2,
      icon: '🛒',
      title: 'Redux Toolkit',
      description: 'Master advanced state management with Redux Toolkit. Ideal for complex applications with frequent state updates.',
      highlighted: true
    },
    {
      id: 3,
      icon: '⚙️',
      title: 'Hooks & Selectors',
      description: 'Understand useContext, useSelector, useDispatch and create efficient selectors for your application.',
      highlighted: false
    },
    {
      id: 4,
      icon: '🐛',
      title: 'Redux DevTools',
      description: 'Debug state changes with time-travel debugging and action replay capabilities.',
      highlighted: false
    }
  ];

  const stats = [
    { label: 'Learning Outcomes', value: '8' },
    { label: 'Concepts Covered', value: '12' },
    { label: 'Practical Examples', value: '50+' },
    { label: 'Hours Duration', value: '4-5' }
  ];

  return (
    <div className={`home ${state.theme}`}>
      <HeroSection />

      <section className="features-section">
        <h2>Core Concepts</h2>
        <div className="features-grid">
          {features.map(feature => (
            <CardComponent
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlighted={feature.highlighted}
            />
          ))}
        </div>
      </section>

      <section className="stats-section">
        <h2>Learning Journey</h2>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="comparison-section">
        <h2>Context API vs Redux</h2>
        <div className="comparison-table">
          <div className="comparison-col">
            <h3>Context API</h3>
            <ul>
              <li>✓ Built-in to React</li>
              <li>✓ No dependencies</li>
              <li>✓ Easy to learn</li>
              <li>✓ Good for simple state</li>
              <li>✗ Limited dev tools</li>
              <li>✗ Can cause re-renders</li>
            </ul>
          </div>
          <div className="comparison-col">
            <h3>Redux Toolkit</h3>
            <ul>
              <li>✓ Industry standard</li>
              <li>✓ Advanced debugging</li>
              <li>✓ Middleware support</li>
              <li>✓ Time-travel debugging</li>
              <li>✓ Scalable</li>
              <li>✗ More boilerplate</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="experiment-info">
        <h2>📋 Experiment Details</h2>
        <div className="info-cards">
          <div className="info-card">
            <h4>👤 Student Info</h4>
            <p><strong>Name:</strong> Sudheer</p>
            <p><strong>UID:</strong> 23BAI70356</p>
          </div>
          <div className="info-card">
            <h4>🎓 Course Info</h4>
            <p><strong>Course:</strong> Full Stack - II (23CSH-382)</p>
            <p><strong>Semester:</strong> 4th</p>
          </div>
          <div className="info-card">
            <h4>👨‍🏫 Instructor</h4>
            <p><strong>Name:</strong> Mr. Prince Pal Singh</p>
            <p><strong>Code:</strong> E18505</p>
          </div>
        </div>
      </section>
    </div>
  );
}
