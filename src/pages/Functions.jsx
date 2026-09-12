import { useState, useMemo } from 'react';
import { FaSearch, FaUsersCog, FaTimes } from 'react-icons/fa';
import FunctionsCard from '../components/FunctionsCard';
import { OFFICERS_DATA } from '../data/officersData';
import '../styles/functions/functions-page.css';

const CATEGORIES = [
  { id: 'all', label: 'Todos os Cargos' },
  { id: 'Diretoria', label: 'Diretoria Executiva' },
  { id: 'Ritual', label: 'Oficiais de Ritualística' },
  { id: 'Conselho', label: 'Conselho Consultivo' },
];

const Functions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOfficers = useMemo(() => {
    return OFFICERS_DATA.filter((officer) => {
      const matchesCategory =
        selectedCategory === 'all' || officer.category === selectedCategory;

      const term = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !term ||
        officer.title.toLowerCase().includes(term) ||
        officer.summary.toLowerCase().includes(term) ||
        officer.responsibilities.some((r) => r.toLowerCase().includes(term)) ||
        officer.symbolism?.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="functions-page">
      <header className="functions-header">
        <div className="functions-badge">Estrutura Capitular</div>
        <h1 className="functions-page-title">
          <FaUsersCog className="header-icon" /> Cargos e Oficiais da Ordem DeMolay
        </h1>
        <p className="functions-subtitle">
          Cada oficial possui deveres sagrados na liturgia templária e na gestão executiva do Capítulo.
          Juntos, operam como uma engrenagem harmônica de liderança, responsabilidade e crescimento mútuo.
        </p>

        {/* Barra de Filtros por Categoria */}
        <div className="functions-filter-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Busca por cargo */}
        <div className="functions-search-bar">
          <div className="functions-search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por cargo, responsabilidade ou simbolismo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="functions-search-input"
              aria-label="Buscar cargo"
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
      </header>

      {/* Lista de Cards */}
      <main className="officers-cards-grid">
        {filteredOfficers.length > 0 ? (
          filteredOfficers.map((officer, index) => (
            <FunctionsCard
              key={officer.id}
              title={officer.title}
              categoryLabel={officer.categoryLabel}
              badge={officer.badge}
              summary={officer.summary}
              responsibilities={officer.responsibilities}
              symbolism={officer.symbolism}
              iconName={officer.iconName}
              isLight={index % 2 === 0}
            />
          ))
        ) : (
          <div className="empty-officers-state">
            <h3>Nenhum cargo encontrado para &ldquo;{searchTerm}&rdquo;</h3>
            <p>Tente selecionar outra categoria ou buscar por termos como &ldquo;Conselheiro&rdquo;, &ldquo;Orador&rdquo; ou &ldquo;Escrivão&rdquo;.</p>
            <button
              className="btn-primary"
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
            >
              Restaurar todos os cargos
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Functions;