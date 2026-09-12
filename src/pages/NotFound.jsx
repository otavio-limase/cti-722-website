import { Link } from 'react-router-dom';
import { FaHome, FaCrown, FaExclamationTriangle } from 'react-icons/fa';
import defaultLogo from '../assets/Header/logo-itabira.png';

const NotFound = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px 20px',
      maxWidth: '680px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
    }}>
      <img
        src={defaultLogo}
        alt="Brasão CTI 722"
        style={{ width: '90px', height: 'auto', opacity: 0.85 }}
      />

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 14px',
        background: 'rgba(216, 178, 87, 0.15)',
        border: '1px solid #D8B257',
        borderRadius: '20px',
        color: '#c49d3e',
        fontSize: '0.75rem',
        fontWeight: 700,
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}>
        <FaExclamationTriangle style={{ fontSize: '0.8rem' }} />
        Erro 404
      </div>

      <h1 style={{
        fontFamily: "'Cinzel', Georgia, serif",
        fontSize: 'clamp(3.5rem, 10vw, 6rem)',
        fontWeight: 800,
        color: '#741315',
        lineHeight: 1,
        margin: 0,
      }}>
        404
      </h1>

      <h2 style={{
        fontFamily: "'Cinzel', Georgia, serif",
        fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
        fontWeight: 700,
        color: '#1D1D1B',
        margin: 0,
      }}>
        Página Não Encontrada
      </h2>

      <p style={{
        fontSize: '1rem',
        color: '#7F8084',
        lineHeight: 1.7,
        maxWidth: '520px',
        margin: 0,
      }}>
        O endereço que você tentou acessar não existe ou foi movido. Navegue pelas nossas
        galerias ou retorne para a página inicial do Capítulo Templários de Itabira nº 722.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#741315',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.95rem',
            padding: '13px 26px',
            borderRadius: '8px',
            textDecoration: 'none',
            border: '2px solid #741315',
            transition: 'all 0.22s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#5a0f10';
            e.currentTarget.style.borderColor = '#5a0f10';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#741315';
            e.currentTarget.style.borderColor = '#741315';
          }}
        >
          <FaHome />
          Página Inicial
        </Link>

        <Link
          to="/galeria-mcs"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            color: '#741315',
            fontWeight: 600,
            fontSize: '0.95rem',
            padding: '11px 26px',
            borderRadius: '8px',
            textDecoration: 'none',
            border: '2px solid #741315',
            transition: 'all 0.22s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(116, 19, 21, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <FaCrown />
          Galeria de MCs
        </Link>
      </div>

      <p style={{
        fontSize: '0.78rem',
        color: '#A0A2A6',
        marginTop: '16px',
      }}>
        Capítulo Templários de Itabira nº 722 — Ordem DeMolay
      </p>
    </div>
  );
};

export default NotFound;
