import { useState } from 'react';
import CardComponent from '../components/CardComponent';
import FilterBar from '../components/FilterBar';
import { useAppContext } from '../context/AppContext';
import './Projects.css';

export default function Projects() {
  const { state } = useAppContext();
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('default');

  const projects = [
    {
      id: 1,
      icon: '🎨',
      title: 'Theme Switcher App',
      description: 'Build a theme switcher using Context API. Learn how to manage theme state globally across the application.',
      category: 'context',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      icon: '🛒',
      title: 'Shopping Cart Redux',
      description: 'Create a fully functional shopping cart using Redux Toolkit with add, remove, and quantity features.',
      category: 'redux',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      icon: '🌐',
      title: 'Multi-language App',
      description: 'Implement a multi-language support system using Context API for global language management.',
      category: 'context',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      icon: '👥',
      title: 'User Authentication',
      description: 'Build user authentication flow with Redux Toolkit, including login, logout, and user profile.',
      category: 'redux',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Create a dashboard that displays analytics data managed with Redux and async actions.',
      category: 'redux',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      icon: '✅',
      title: 'Todo Manager',
      description: 'Build a todo application with Context API including add, delete, toggle, and filter features.',
      category: 'context',
      difficulty: 'Beginner'
    },
    {
      id: 7,
      icon: '💰',
      title: 'Budget Tracker',
      description: 'Create a budget tracking app with Redux Toolkit for managing expenses and categories.',
      category: 'redux',
      difficulty: 'Intermediate'
    },
    {
      id: 8,
      icon: '🎬',
      title: 'Movie Search App',
      description: 'Build a movie search application with Redux, async thunk, and API integration.',
      category: 'redux',
      difficulty: 'Advanced'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: '📦' },
    { id: 'context', label: 'Context API', icon: '📚' },
    { id: 'redux', label: 'Redux', icon: '🛒' }
  ];

  const filterProjects = () => {
    let filtered = projects;

    if (activeFilter && activeFilter !== 'all') {
      filtered = filtered.filter(p => p.category === activeFilter);
    }

    if (searchValue) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        p.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Sort
    switch (sortValue) {
      case 'asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'desc':
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProjects = filterProjects();

  return (
    <div className={`projects-page ${state.theme}`}>
      <div className="projects-header">
        <h1>📁 Learning Projects</h1>
        <p>Explore practical projects to master state management</p>
      </div>

      <div className="projects-container">
        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          sortValue={sortValue}
          onSortChange={setSortValue}
        />

        {filteredProjects.length === 0 ? (
          <div className="no-results">
            <p>No projects found matching your filters</p>
          </div>
        ) : (
          <>
            <div className="results-count">
              Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
            </div>
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <CardComponent
                  key={project.id}
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  actions={[
                    {
                      label: `${project.difficulty} →`,
                      onClick: () => alert(`Starting ${project.title}`)
                    }
                  ]}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
