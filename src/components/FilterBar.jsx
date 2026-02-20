import './FilterBar.css';

export default function FilterBar({ 
  filters = [], 
  activeFilter = null, 
  onFilterChange,
  searchValue = '',
  onSearchChange,
  sortValue = 'default',
  onSortChange
}) {
  return (
    <div className="filter-bar">
      <div className="filter-search">
        <input
          type="text"
          placeholder="🔍 Search..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-buttons">
        {filters.length > 0 && filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.icon} {filter.label}
          </button>
        ))}
      </div>

      <div className="filter-sort">
        <select
          value={sortValue}
          onChange={(e) => onSortChange(e.target.value)}
          className="sort-select"
        >
          <option value="default">Sort: Default</option>
          <option value="asc">Sort: A-Z</option>
          <option value="desc">Sort: Z-A</option>
          <option value="price-low">Sort: Price (Low)</option>
          <option value="price-high">Sort: Price (High)</option>
        </select>
      </div>
    </div>
  );
}
