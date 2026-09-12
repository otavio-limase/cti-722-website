import { useState, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaUsers, 
  FaUserCheck, 
  FaSearch, 
  FaCalendarAlt, 
  FaCrown, 
  FaShieldAlt 
} from 'react-icons/fa';
import { getMcById } from '../data/mcsData';
import { getPccById } from '../data/pccsData';
import defaultLogo from '../assets/Header/logo-itabira.png';
import '../styles/Gallery/PeriodDetails/PeriodDetailsPage.css';

const PeriodDetailsPage = () => {
  const { periodId } = useParams();
  const location = useLocation();
  const [memberFilter, setMemberFilter] = useState('');

  // Busca dados por ID direto na base ou fallback do state de navegação
  const mcData = useMemo(() => getMcById(periodId), [periodId]);
  const pccData = useMemo(() => getPccById(periodId), [periodId]);

  const record = mcData || pccData;
  const isPcc = Boolean(pccData);

  const leaderName = record?.name || location.state?.name || "Líder da Gestão";
  const period = record?.period || location.state?.period || periodId?.replace('-', '/');
  const membersList = useMemo(() => {
    return record?.namesArray || record?.advisoryMembers || location.state?.namesArray || [];
  }, [record, location.state]);
  const profileImage = record?.profileImage || "";
  const roleTitle = isPcc ? "Presidente do Conselho Consultivo" : "Mestre Conselheiro";

  // Filtro de membros iniciados ou consultores
  const filteredMembers = useMemo(() => {
    if (!memberFilter.trim()) return membersList;
    const term = memberFilter.toLowerCase();
    return membersList.filter((m) => m.toLowerCase().includes(term));
  }, [membersList, memberFilter]);

  if (!record && membersList.length === 0) {
    return (
      <div className="period-details-page not-found-state">
        <div className="details-container">
          <Link to="/galeria-mcs" className="back-link">
            <FaArrowLeft /> Voltar para a Galeria
          </Link>
          <div className="error-box">
            <h2>Gestão não encontrada</h2>
            <p>Não foi possível localizar os registros para o período informado ({periodId}).</p>
            <Link to="/galeria-mcs" className="btn-primary">
              Ver todas as gestões
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="period-details-page">
      <div className="details-container">
        {/* Navegação de Retorno */}
        <div className="details-top-bar">
          <Link 
            to={isPcc ? "/galeria-pccs" : "/galeria-mcs"} 
            className="back-link"
          >
            <FaArrowLeft className="back-icon" /> Voltar para a Galeria
          </Link>
          <span className="period-id-tag">ID: {periodId}</span>
        </div>

        {/* Banner do Líder da Gestão */}
        <section className="leader-banner">
          <div className="leader-avatar-wrapper">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt={`Retrato de ${leaderName}`} 
                className="leader-avatar-img" 
              />
            ) : (
              <div className="leader-avatar-fallback">
                <img src={defaultLogo} alt="Brasão Templários 722" className="fallback-logo" />
                <span className="fallback-role-icon">
                  {isPcc ? <FaShieldAlt /> : <FaCrown />}
                </span>
              </div>
            )}
          </div>

          <div className="leader-info-content">
            <div className="period-pill">
              <FaCalendarAlt className="inline-icon" /> Gestão {period}
            </div>
            <h1 className="leader-name">{leaderName}</h1>
            <p className="leader-role-tag">
              {isPcc ? <FaShieldAlt className="inline-icon" /> : <FaCrown className="inline-icon" />}
              {roleTitle}
            </p>
            {record?.description && (
              <p className="leader-description">{record.description}</p>
            )}
          </div>
        </section>

        {/* Seção de Membros Iniciados / Membros do Conselho */}
        <section className="members-section">
          <div className="members-header">
            <div className="members-title-group">
              <h2 className="members-section-title">
                {isPcc ? "Membros do Conselho Consultivo" : "Irmãos Iniciados na Gestão"}
              </h2>
              <span className="members-count-badge">
                <FaUsers className="inline-icon" />
                {membersList.length} {membersList.length === 1 ? 'membro' : 'membros'}
              </span>
            </div>

            {membersList.length > 5 && (
              <div className="member-search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Filtrar por nome..."
                  value={memberFilter}
                  onChange={(e) => setMemberFilter(e.target.value)}
                  className="member-search-input"
                  aria-label="Filtrar membros"
                />
              </div>
            )}
          </div>

          {membersList.length === 0 ? (
            <div className="no-initiates-box">
              <p>Nenhuma iniciação ou ata de novos membros registrada oficialmente para este semestre.</p>
            </div>
          ) : (
            <div className="members-grid">
              {filteredMembers.map((name, index) => (
                <div key={index} className="member-card">
                  <div className="member-number">#{index + 1}</div>
                  <div className="member-name-group">
                    <FaUserCheck className="member-check-icon" />
                    <span className="member-name">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PeriodDetailsPage;