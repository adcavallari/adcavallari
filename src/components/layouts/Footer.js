import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Informações da Igreja */}
          <div className="footer-section">
            <h3>AD Cavallari</h3>
            <p>Uma comunidade de fé, esperança e amor. Junte-se a nós nessa jornada espiritual.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/ad.cavallari/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="social-text"> Facebook</span>
              </a>
              
              <a href="https://www.instagram.com/ad.cavallari/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="social-text"> Instagram</span>
              </a>
              
              <a href="https://www.youtube.com/@ADCavallari" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="social-text"> YouTube</span>
              </a>

              <a href="https://www.tiktok.com/@ad.cavallari" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105zm0 0V6.79a4.831 4.831 0 0 1-3.77-1.105z"/>
                </svg>
                <span className='social-text'> TikTok</span>
              </a>
            </div>
          </div>

          {/* Horários de Culto */}
          <div className="footer-section">
            <h4>Horários de Culto</h4>
            <ul className="culto-times">
              <li>
                <span>Terça</span>
                <span>15:00 - Tarde da Benção</span>
              </li>
              <li>
                <span>Quarta</span>
                <span>20:00 - Culto de Ensino</span>
              </li>
              <li>
                <span>Sexta</span>
                <span>19:45 - Culto de Oração</span>
              </li>
              <li>
                <span>Domingo</span>
                <span>09:00 - Escola Bíblica Dominical</span>
                <span>18:30 - Culto da Família</span>
              </li>
            </ul>
          </div>

          {/* Contato Rápido */}
          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📞 (14) 99999-9999</p>
              <p>📧 ad.cavallri@gmail.com</p>
              <p>📍 Av. Maria Fernandes Cavallari 2399 - Marília SP</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Igreja Assembleia de Deus de Marília - Jardim Cavallari. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;