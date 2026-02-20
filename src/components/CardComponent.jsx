import './CardComponent.css';

export default function CardComponent({ 
  icon, 
  title, 
  description, 
  actions, 
  onClick,
  highlighted = false 
}) {
  return (
    <div 
      className={`card ${highlighted ? 'highlighted' : ''}`}
      onClick={onClick}
    >
      <div className="card-icon">
        {icon}
      </div>
      
      <h3 className="card-title">{title}</h3>
      
      <p className="card-description">
        {description}
      </p>

      {actions && (
        <div className="card-actions">
          {actions.map((action, index) => (
            <button
              key={index}
              className={`card-btn ${action.variant || 'primary'}`}
              onClick={(e) => {
                e.stopPropagation();
                action.onClick?.();
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
