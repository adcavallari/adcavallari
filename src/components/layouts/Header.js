import React, { useState } from 'react';
import '../../styles/Header.css';
import logo from '../../assets/logo2.png'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Início' },
    { id: 'transmissoes', label: 'Transmissões' },
    { id: 'ministerios', label: 'Ministérios' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo com imagem */}
          <div className="logo">
            <img src={logo} alt="AD Cavallari" className="logo-image" />
            <span className="logo-text">AD CAVALLARI</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="nav-desktop">
            {navigationItems.map(item => (
              <button
                key={item.id}
                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => setCurrentPage(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          {navigationItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => {
                setCurrentPage(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;