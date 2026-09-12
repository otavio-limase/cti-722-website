import { Link } from 'react-router-dom';
import { 
  FaHeart, 
  FaPray, 
  FaHandsHelping, 
  FaUsers, 
  FaShieldAlt, 
  FaGem, 
  FaFlag, 
  FaArrowRight, 
  FaCrown, 
  FaAward, 
  FaHistory 
} from 'react-icons/fa';
import firstSectionImg from '../assets/Home/Brasao10.png';
import { CHAPTER_INFO, SEVEN_VIRTUES, CHAPTER_STATS } from '../data/chapterData';
import '../styles/Home/home.css';

const VIRTUE_ICONS = {
  FaHeart: FaHeart,
  FaPray: FaPray,
  FaHandsHelping: FaHandsHelping,
  FaUsers: FaUsers,
  FaShieldAlt: FaShieldAlt,
  FaGem: FaGem,
  FaFlag: FaFlag,
};

const Home = () => {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Ordem DeMolay • Itabira - MG</div>
          <h1 className="hero-title">
            Capítulo Templários de Itabira <span className="highlight-text">nº 722</span>
          </h1>
          <p className="hero-subtitle">
            {CHAPTER_INFO.motto}
          </p>
          <div className="hero-actions">
            <Link to="/galeria-mcs" className="btn-primary">
              <FaCrown className="btn-icon" /> Galeria de Líderes
            </Link>
            <Link to="/contato" className="btn-secondary">
              Quero ser um DeMolay <FaArrowRight className="btn-icon-right" />
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="crest-glow-container">
            <img 
              src={firstSectionImg} 
              alt="Brasão Capítulo Templários de Itabira nº 722" 
              className="hero-crest-img" 
            />
          </div>
        </div>
      </section>

      {/* 2. Estatísticas do Capítulo */}
      <section className="stats-section">
        <div className="stats-grid">
          {CHAPTER_STATS.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Sobre a Ordem DeMolay */}
      <section className="about-section">
        <div className="about-card">
          <div className="about-text">
            <div className="section-tag">Tradição & Fraternidade</div>
            <h2 className="section-title">Sobre a Ordem DeMolay</h2>
            <p className="about-paragraph">
              A <strong>Ordem DeMolay</strong> é uma organização juvenil internacional e filantrópica,
              patrocinada pela Maçonaria e fundada em 1919 nos Estados Unidos pelo maçom Frank Sherman Land.
              Seu propósito inicial surgiu ao amparar o jovem Louis Gordon Lower e seus companheiros, criando um espaço
              fraterno de aprendizado, companheirismo e crescimento pessoal.
            </p>
            <p className="about-paragraph">
              O nome é uma homenagem histórica a <strong>Jacques DeMolay</strong>, o 23º e último Grão-Mestre da Ordem
              dos Cavaleiros Templários, martirizado no século XIV por honrar a lealdade inabalável e recusar-se a
              trair seus irmãos sob tortura e condenações infundadas.
            </p>
            <Link to="/cargos" className="inline-link-btn">
              Conheça os Cargos e a Estrutura <FaArrowRight className="inline-arrow" />
            </Link>
          </div>
          <div className="about-image-side">
            <img src={firstSectionImg} alt="Emblema DeMolay" className="about-emblem" />
          </div>
        </div>
      </section>

      {/* 4. Sobre o Capítulo 722 */}
      <section className="chapter-history-section">
        <div className="chapter-history-card">
          <div className="history-header">
            <div className="section-tag">Nossa História em Itabira</div>
            <h2 className="section-title">Capítulo Templários de Itabira nº 722</h2>
          </div>
          <div className="history-columns">
            <div className="history-col">
              <p>
                Fundado em <strong>{CHAPTER_INFO.foundedYear}</strong> na cidade histórica de Itabira, Minas Gerais,
                o Capítulo Templários de Itabira nº 722 nasceu da dedicação e visão de valorosos mestres maçons
                e jovens determinados a fazer a diferença em sua comunidade.
              </p>
              <p>
                Ao longo de mais de 35 gestões administrativas, o Capítulo tornou-se uma referência na formação
                de líderes, oradores, profissionais de destaque e cidadãos engajados com a caridade e a retidão moral.
              </p>
            </div>
            <div className="history-col">
              <p>
                Por meio de iniciativas como campanhas do agasalho, doações de alimentos, celebrações do Dia das Mães,
                ações em asilos e apoio educacional, nossos membros exercem a filantropia ativa como instrumento de
                transformação real da sociedade.
              </p>
              <div className="history-highlights">
                <div className="highlight-item">
                  <FaAward className="highlight-icon" />
                  <span>Reconhecimento contínuo no Gabinete Estadual de Minas Gerais</span>
                </div>
                <div className="highlight-item">
                  <FaHistory className="highlight-icon" />
                  <span>Mais de uma década e meia de tradição ininterrupta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. As 7 Virtudes Cardeais */}
      <section className="virtues-section">
        <div className="virtues-header">
          <div className="section-tag">Pilares Morais</div>
          <h2 className="section-title">As Sete Virtudes Cardeais</h2>
          <p className="section-description">
            A bússola moral que guia o comportamento de todo DeMolay dentro do Templo e no convívio em sociedade.
          </p>
        </div>

        <div className="virtues-grid">
          {SEVEN_VIRTUES.map((virtue) => {
            const Icon = VIRTUE_ICONS[virtue.icon] || FaHeart;
            return (
              <div key={virtue.id} className="virtue-card">
                <div className="virtue-icon-bubble">
                  <Icon className="virtue-icon" />
                </div>
                <span className="virtue-number">0{virtue.id}</span>
                <h3 className="virtue-name">{virtue.name}</h3>
                <p className="virtue-desc">{virtue.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Acesso Rápido às Galerias */}
      <section className="galleries-preview-section">
        <div className="section-tag">Nossa Galeria Histórica</div>
        <h2 className="section-title">Preservando o Legado Capitular</h2>

        <div className="preview-cards-grid">
          <Link to="/galeria-mcs" className="preview-card">
            <div className="preview-card-icon-box">
              <FaCrown className="preview-icon" />
            </div>
            <h3>Galeria de Mestres Conselheiros</h3>
            <p>
              Explore todas as gestões semestrais desde 2007, seus líderes e os membros iniciados em cada período.
            </p>
            <span className="preview-cta">
              Acessar Galeria de MCs <FaArrowRight className="inline-arrow" />
            </span>
          </Link>

          <Link to="/galeria-pccs" className="preview-card">
            <div className="preview-card-icon-box">
              <FaShieldAlt className="preview-icon" />
            </div>
            <h3>Galeria de Presidentes do Conselho Consultivo</h3>
            <p>
              Conheça os Mestres Maçons que guiaram e orientaram o Capítulo Templários de Itabira nº 722 com dedicação paternal.
            </p>
            <span className="preview-cta">
              Acessar Galeria de PCCs <FaArrowRight className="inline-arrow" />
            </span>
          </Link>

          <Link to="/cargos" className="preview-card">
            <div className="preview-card-icon-box">
              <FaUsers className="preview-icon" />
            </div>
            <h3>Oficiais e Cargos da Ordem</h3>
            <p>
              Entenda o papel de cada oficial no templo, da Tríplice Coroa aos Oficiais de Ritualística e Conselho.
            </p>
            <span className="preview-cta">
              Ver Estrutura de Cargos <FaArrowRight className="inline-arrow" />
            </span>
          </Link>
        </div>
      </section>

      {/* 7. Call To Action Final */}
      <section className="cta-banner-section">
        <div className="cta-banner-content">
          <h2>Pronto para fazer parte desta irmandade?</h2>
          <p>
            Se você tem entre 12 e 21 anos e busca desenvolver sua liderança, fazer amizades verdadeiras e
            construir um futuro honrado, o Capítulo Templários de Itabira nº 722 está de portas abertas.
          </p>
          <Link to="/contato" className="btn-cta-gold">
            Quero Me Tornar um DeMolay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
