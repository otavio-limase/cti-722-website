import { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/header/header.css';
import logo from '../assets/Header/logo-itabira.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="header-container">
        <Link to="/" className="header-logo-link" onClick={closeMenu}>
          <img src={logo} alt="Capítulo Templários de Itabira nº 722" className="header-logo" />
          <div className="header-title-block">
            <span className="header-org">Ordem DeMolay</span>
            <span className="header-chapter">Cap. Templários de Itabira nº 722</span>
          </div>
        </Link>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`} aria-label="Navegação principal">
          <ul className="header-menu">
            <li>
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMenu}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/galeria-mcs" 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMenu}
              >
                Galeria de MCs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/galeria-pccs" 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMenu}
              >
                Galeria de PCCs
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cargos" 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMenu}
              >
                Cargos
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                onClick={closeMenu}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
