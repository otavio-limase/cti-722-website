import { useState, useMemo } from 'react';
import { FaSearch, FaShieldAlt, FaTimes } from 'react-icons/fa';
import Card from '../components/Card';
import { PCCS_DATA } from '../data/pccsData';
import '../styles/Gallery/gallery.css';

const PCCGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return PCCS_DATA.filter((data) => {
      if (!term) return true;
      const matchesName = data.name.toLowerCase().includes(term);
      const matchesPeriod = data.period.toLowerCase().includes(term);
      const matchesDesc = data.description?.toLowerCase().includes(term);
      const matchesAdvisors = data.advisoryMembers?.some((m) =>
        m.toLowerCase().includes(term)
      );
      return matchesName || matchesPeriod || matchesDesc || matchesAdvisors;
    });
  }, [searchTerm]);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <div className="gallery-header-badge">Conselho Consultivo</div>
        <h1 className="gallery-title">
          <FaShieldAlt className="gallery-title-icon" /> Galeria de Presidentes do Conselho Consultivo
        </h1>
        <p className="gallery-subtitle">
          Mestres Maçons que presidiram o Conselho Consultivo do Capítulo Templários de Itabira nº 722,
          guiando e amparando a juventude itabirana com sabedoria, dedicação e afeto fraternal.
        </p>

        <div className="gallery-quick-stats">
          <span className="quick-stat-badge">
            <strong>{PCCS_DATA.length}</strong> Gestões Consultivas Registradas
          </span>
        </div>
      </header>

      {/* Barra de Busca */}
      <div className="gallery-controls-bar">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por nome do Presidente, ano ou consultor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Buscar na galeria de Presidentes do Conselho Consultivo"
          />
          {searchTerm && (
            <button 
              className="clear-search-btn"
              onClick={() => setSearchTerm('')}
              aria-label="Limpar busca"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Grade de Cards */}
      {filteredCards.length > 0 ? (
        <div className="card-grid">
          {filteredCards.map((data) => (
            <Card
              key={data.id}
              name={data.name}
              period={data.period}
              backgroundImage={data.backgroundImage}
              profileImage={data.profileImage}
              redirectLink={`/period/${data.id}`}
              namesArray={data.advisoryMembers}
              role="Pres. Conselho Consultivo"
            />
          ))}
        </div>
      ) : (
        <div className="empty-gallery-state">
          <h3>Nenhum registro encontrado para &ldquo;{searchTerm}&rdquo;</h3>
          <p>Tente buscar por outro termo ou nome de consultor.</p>
          <button className="btn-reset-filter" onClick={() => setSearchTerm('')}>
            Ver todas as gestões consultivas
          </button>
        </div>
      )}
    </div>
  );
};

export default PCCGallery;
