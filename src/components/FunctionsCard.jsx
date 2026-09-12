import { 
  FaCrown, 
  FaShieldAlt, 
  FaUsers, 
  FaFeatherAlt, 
  FaCoins, 
  FaBook, 
  FaCompass, 
  FaHeart, 
  FaFire, 
  FaUniversity,
  FaCheckCircle 
} from 'react-icons/fa';
import '../styles/Card/function-card.css';

const ICON_MAP = {
  crown: FaCrown,
  shield: FaShieldAlt,
  users: FaUsers,
  feather: FaFeatherAlt,
  coins: FaCoins,
  book: FaBook,
  compass: FaCompass,
  heart: FaHeart,
  flame: FaFire,
  university: FaUniversity,
};

const FunctionsCard = ({
  title,
  categoryLabel,
  badge,
  summary,
  responsibilities = [],
  symbolism,
  iconName = 'crown',
  isLight = false,
}) => {
  const IconComponent = ICON_MAP[iconName] || FaCrown;

  return (
    <article className={`function-card ${isLight ? 'card-light' : 'card-dark'}`}>
      <div className="function-card-header">
        <div className="function-icon-wrapper">
          <IconComponent className="function-main-icon" />
        </div>
        <div className="function-title-group">
          <div className="function-badges">
            {categoryLabel && <span className="function-category-tag">{categoryLabel}</span>}
            {badge && <span className="function-badge-tag">{badge}</span>}
          </div>
          <h2 className="function-title">{title}</h2>
        </div>
      </div>

      <div className="function-card-body">
        {summary && <p className="function-summary">{summary}</p>}

        {responsibilities && responsibilities.length > 0 && (
          <div className="function-responsibilities-block">
            <h4 className="function-section-subtitle">Principais Atribuições:</h4>
            <ul className="function-responsibilities-list">
              {responsibilities.map((resp, idx) => (
                <li key={idx} className="function-responsibility-item">
                  <FaCheckCircle className="bullet-icon" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {symbolism && (
          <div className="function-symbolism-box">
            <span className="symbolism-label">Significado & Simbolismo:</span>
            <p className="symbolism-text">{symbolism}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default FunctionsCard;