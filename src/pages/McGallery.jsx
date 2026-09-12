import { useState, useMemo } from 'react';
import { FaSearch, FaSortAmountDown, FaSortAmountUp, FaCrown, FaTimes } from 'react-icons/fa';
import Card from '../components/Card';
import { MCS_DATA } from '../data/mcsData';
import '../styles/Gallery/gallery.css';

const McGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest'

  // Filtragem inteligente por nome do MC ou por nomes dos iniciados
  const filteredCards = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    let result = MCS_DATA.filter((data) => {
      if (!term) return true;

      const matchesLeaderName = data.name.toLowerCase().includes(term);
      const matchesPeriod = data.period.toLowerCase().includes(term);
      const matchesInitiate = data.namesArray?.some((name) =>
        name.toLowerCase().includes(term)
      );

      return matchesLeaderName || matchesPeriod || matchesInitiate;
    });

    if (sortOrder === 'oldest') {
      return [...result].reverse();
    }

    return result;
  }, [searchTerm, sortOrder]);

  const totalInitiates = useMemo(() => {
    return MCS_DATA.reduce((acc, curr) => acc + (curr.namesArray?.length || 0), 0);
  }, []);

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <div className="gallery-header-badge">Histórico Capitular</div>
        <h1 className="gallery-title">
          <FaCrown className="gallery-title-icon" /> Galeria de Mestres Conselheiros
        </h1>
        <p className="gallery-subtitle">
          Líderes que conduziram o Capítulo Templários de Itabira nº 722 em cada gestão semestral desde a sua fundação.
        </p>

        {/* Métricas rápidas */}
        <div className="gallery-quick-stats">
          <span className="quick-stat-badge">
            <strong>{MCS_DATA.length}</strong> Gestões Registradas
          </span>
          <span className="quick-stat-badge">
            <strong>{totalInitiates}</strong> Membros Iniciados
          </span>
        </div>
      </header>

      {/* Barra de Busca e Filtros */}
      <div className="gallery-controls-bar">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por Mestre Conselheiro, período (ex: 2023) ou iniciado..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Buscar na galeria de Mestres Conselheiros"
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

        <div className="sort-controls">
          <button
            className={`sort-btn ${sortOrder === 'newest' ? 'active' : ''}`}
            onClick={() => setSortOrder('newest')}
            title="Mais recentes primeiro"
          >
            <FaSortAmountDown className="sort-icon" /> Mais recentes
          </button>
          <button
            className={`sort-btn ${sortOrder === 'oldest' ? 'active' : ''}`}
            onClick={() => setSortOrder('oldest')}
            title="Mais antigos primeiro"
          >
            <FaSortAmountUp className="sort-icon" /> Mais antigos
          </button>
        </div>
      </div>

      {/* Grade de Cards ou Estado Vazio */}
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
              namesArray={data.namesArray}
              role="Mestre Conselheiro"
            />
          ))}
        </div>
      ) : (
        <div className="empty-gallery-state">
          <h3>Nenhuma gestão encontrada para &ldquo;{searchTerm}&rdquo;</h3>
          <p>Tente buscar pelo primeiro nome do líder, ano da gestão ou nome de um irmão iniciado.</p>
          <button className="btn-reset-filter" onClick={() => setSearchTerm('')}>
            Ver todas as gestões
          </button>
        </div>
      )}
    </div>
  );
};

export default McGallery;