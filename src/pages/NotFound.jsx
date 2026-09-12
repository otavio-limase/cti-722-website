import { Link } from 'react-router-dom';
import { FaHome, FaCrown } from 'react-icons/fa';
import defaultLogo from '../assets/Header/logo-itabira.png';
import '../styles/index.css';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{
      textAlign: 'center',
      padding: '80px 20px',
      maxWidth: '700px',
      margin: '0 auto',
      color: '#ffffff',
    }}>
      <img 
        src={defaultLogo} 
        alt="Brasão CTI 722" 
        style={{ width: '100px', height: 'auto', marginBottom: '24px', opacity: 0.9 }} 
      />
      <h1 style={{ fontSize: '72px', margin: '0 0 10px 0', color: '#D4AF37', fontWeight: 800 }}>
        404
      </h1>
      <h2 style={{ fontSize: '26px', marginBottom: '16px', color: '#E2E8F0' }}>
        Página Não Encontrada
      </h2>
      <p style={{ fontSize: '16px', color: '#94A3B8', marginBottom: '32px', lineHeight: 1.6 }}>
        O endereço que você tentou acessar não existe ou foi movido. Navegue pelas nossas galerias ou
        retorne para a página inicial do Capítulo Templários de Itabira nº 722.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <FaHome /> Página Inicial
        </Link>
        <Link to="/galeria-mcs" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <FaCrown /> Galeria de MCs
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
