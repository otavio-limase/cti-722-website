import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaUsers, FaArrowRight } from 'react-icons/fa';
import defaultLogo from '../assets/Header/logo-itabira.png';
import '../styles/Card/card.css';

const Card = ({
  name,
  period,
  backgroundImage,
  profileImage,
  redirectLink,
  namesArray = [],
  role = "Mestre Conselheiro"
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (redirectLink) {
      navigate(redirectLink, { state: { namesArray, name, period } });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate();
    }
  };

  const initiatesCount = Array.isArray(namesArray) ? namesArray.length : 0;
  const hasProfileImage = Boolean(profileImage && profileImage.trim?.() !== '');

  return (
    <div 
      className="card-wrapper"
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes da gestão ${period} - ${name}`}
    >
      <div className="card">
        {/* Frente do Card */}
        <div className="card-front">
          {backgroundImage && (
            <img 
              src={backgroundImage} 
              alt="Brasão Capitular de Fundo" 
              className="card-background" 
              loading="lazy"
            />
          )}
          <div className="card-front-content">
            <span className="card-period-badge">{period}</span>
            <h3 className="card-leader-name">{name}</h3>
            <span className="card-role-label">{role}</span>
            <div className="card-meta">
              <span className="card-initiates-badge">
                <FaUsers className="meta-icon" />
                {initiatesCount > 0 ? `${initiatesCount} iniciados` : 'Sem iniciações'}
              </span>
            </div>
          </div>
        </div>

        {/* Verso do Card */}
        <div className="card-back">
          {hasProfileImage ? (
            <div className="card-back-image-wrapper">
              <img 
                src={profileImage} 
                alt={`Retrato oficial de ${name}`} 
                className="card-profile-img"
                loading="lazy"
              />
              <div className="card-back-overlay">
                <span className="card-back-name">{name}</span>
                <span className="card-back-action">
                  Ver iniciados <FaArrowRight className="inline-icon" />
                </span>
              </div>
            </div>
          ) : (
            <div className="card-back-fallback">
              <img src={defaultLogo} alt="Brasão CTI 722" className="card-fallback-crest" />
              <FaUserGraduate className="card-fallback-icon" />
              <span className="card-back-name">{name}</span>
              <span className="card-period-tag">{period}</span>
              <span className="card-back-action">
                Ver detalhes <FaArrowRight className="inline-icon" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
