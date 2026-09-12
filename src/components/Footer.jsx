import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-title">Capítulo Templários de Itabira Nº 722</h3>
            <p className="footer-subtitle">
              Ordem DeMolay • Patrocinado pelas Lojas Maçônicas Estrela do Vale Nº 1.740 e União e Paz Nº 261
            </p>
            <p className="footer-location">
              <FaMapMarkerAlt className="footer-loc-icon" /> Itabira, Minas Gerais — Brasil
            </p>
          </div>

          <div className="footer-cta">
            <Link to="/contato" className="btn-footer-cta">
              Quero ser um DeMolay
            </Link>
          </div>

          <div className="footer-social">
            <span className="footer-social-label">Redes Sociais:</span>
            <div className="footer-social-icons">
              <a 
                href="https://www.instagram.com/templariosdeita" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="Acessar Instagram do Capítulo 722"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a 
                href="https://www.facebook.com/CapituloTemplarioDeItabiraNo722/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="Acessar Facebook do Capítulo 722"
              >
                <FaFacebook className="social-icon" />
              </a>
              <a 
                href="https://www.youtube.com/@OrdemDeMolayBrasil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="Acessar Canal no YouTube"
              >
                <FaYoutube className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Capítulo Templários de Itabira Nº 722. Todos os direitos reservados.
          </p>
          <p className="footer-virtue">
            &ldquo;Fidelidade, Companheirismo e Fraternidade.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;