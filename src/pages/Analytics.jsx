import { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import CardComponent from '../components/CardComponent';
import FilterBar from '../components/FilterBar';
import './Analytics.css';

export default function Analytics() {
  const { state } = useAppContext();
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Simulate data fetching (like Redux async actions)
    const timer = setTimeout(() => {
      const data = [
        {
          id: 1,
          name: 'Context API Users',
          value: 2450,
          change: '+12.5%',
          icon: '📚',
          category: 'context'
        },
        {
          id: 2,
          name: 'Redux Implementations',
          value: 3820,
          change: '+23.4%',
          icon: '🛒',
          category: 'redux'
        },
        {
          id: 3,
          name: 'Active Sessions',
          value: 1250,
          change: '+8.2%',
          icon: '👥',
          category: 'sessions'
        },
        {
          id: 4,
          name: 'Learning Hours',
          value: 5640,
          change: '+15.3%',
          icon: '⏱️',
          category: 'learning'
        },
        {
          id: 5,
          name: 'Projects Completed',
          value: 484,
          change: '+5.7%',
          icon: '✅',
          category: 'projects'
        },
        {
          id: 6,
          name: 'Success Rate',
          value: '94.2%',
          change: '+2.1%',
          icon: '🎯',
          category: 'success'
        }
      ];
      setMetrics(data);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filters = [
    { id: 'all', label: 'All Metrics', icon: '📊' },
    { id: 'context', label: 'Context API', icon: '📚' },
    { id: 'redux', label: 'Redux', icon: '🛒' }
  ];

  const filteredMetrics = metrics
    .filter(m => activeFilter === 'all' || m.category === activeFilter)
    .filter(m => m.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className={`analytics-page ${state.theme}`}>
      <div className="analytics-header">
        <h1>📊 Analytics Dashboard</h1>
        <p>Monitor learning progress and metrics</p>
      </div>

      <div className="analytics-container">
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading analytics data...</p>
          </div>
        )}

        {!loading && (
          <>
            <FilterBar
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              searchValue={searchValue}
              onSearchChange={setSearchValue}
            />

            {filteredMetrics.length === 0 ? (
              <div className="no-data">
                <p>No metrics found</p>
              </div>
            ) : (
              <div className="metrics-grid">
                {filteredMetrics.map(metric => (
                  <div key={metric.id} className="metric-card">
                    <div className="metric-icon">{metric.icon}</div>
                    <h3 className="metric-name">{metric.name}</h3>
                    <div className="metric-value">{metric.value}</div>
                    <div className={`metric-change positive`}>
                      {metric.change}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      <section className="insights-section">
        <h2>📈 Key Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <h4>🎓 Learning Path</h4>
            <p>Context API is ideal for beginners, while Redux scales better for complex applications. Start with Context API and graduate to Redux.</p>
          </div>

          <div className="insight-card">
            <h4>⚡ Performance Tips</h4>
            <p>Use selectors to optimize Redux state access. Avoid unnecessary re-renders by memoizing components and using proper selector patterns.</p>
          </div>

          <div className="insight-card">
            <h4>🛠️ Best Practices</h4>
            <p>Keep state normalized, avoid putting everything in Redux, use Redux Toolkit for simplicity, and create feature-based slices.</p>
          </div>

          <div className="insight-card">
            <h4>🐛 Debugging</h4>
            <p>Redux DevTools is powerful for debugging. Install the extension and use time-travel debugging to understand state changes.</p>
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <h2>🔄 When to Use What</h2>
        <div className="comparison-cards">
          <div className="comp-card">
            <h3>Context API</h3>
            <ul>
              <li>✓ Theme toggling</li>
              <li>✓ Language selection</li>
              <li>✓ User authentication</li>
              <li>✓ Simple global state</li>
              <li>✗ Frequent updates</li>
              <li>✗ Complex logic</li>
            </ul>
            <span className="comp-badge">Simple</span>
          </div>

          <div className="comp-card">
            <h3>Redux Toolkit</h3>
            <ul>
              <li>✓ Shopping carts</li>
              <li>✓ Complex forms</li>
              <li>✓ Real-time data</li>
              <li>✓ Large apps</li>
              <li>✓ Team collaboration</li>
              <li>✗ Learning curve</li>
            </ul>
            <span className="comp-badge">Advanced</span>
          </div>
        </div>
      </section>
    </div>
  );
}
