import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Igreja Assembleia de Deus do Jardim Cavallari</h1>
          <p>"Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei." - Mateus 11:28</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Próximo Culto</button>
            <button className="btn btn-secondary">Como Chegar</button>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Bem-vindo à Família AD Cavallari</h2>
              <p>
                Somos uma comunidade cristã comprometida em servir a Deus e ao próximo. 
                Nossa missão é espalhar o amor de Cristo através de cultos inspiradores, 
                grupos de crescimento e ações sociais.
              </p>
              <div className="about-features">
                <div className="feature">
                  <span className="feature-icon">🙏</span>
                  <h4>Cultos Inspiradores</h4>
                  <p>Momentos de adoração e palavra</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">👨‍👩‍👧‍👦</span>
                  <h4>Comunidade</h4>
                  <p>Família unida em Cristo</p>
                </div>
                <div className="feature">
                  <span className="feature-icon">🌟</span>
                  <h4>Crescimento</h4>
                  <p>Jornada espiritual juntos</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                🏛️ Igreja ADCavallari
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministérios Preview */}
      <section className="ministerios-preview">
        <div className="container">
          <h2>Nossos Ministérios</h2>
          <p>Conheça os grupos que fazem nossa igreja</p>
          
          <div className="ministerios-grid">
            <div className="ministerio-preview">
              <span className="ministerio-emoji">🎮</span>
              <h3>Jovens</h3>
              <p>Ministério de jovens comprometidos com Cristo</p>
              <span className="ministerio-instagram">@jovensdocavallari</span>
            </div>
            
            <div className="ministerio-preview">
              <span className="ministerio-emoji">💎</span>
              <h3>Joias do Cavallari</h3>
              <p>Ministério infantil - nossas joias preciosas</p>
              <span className="ministerio-instagram">@joiasdocavallari</span>
            </div>
            
            <div className="ministerio-preview">
              <span className="ministerio-emoji">🙏</span>
              <h3>Colunas de Fé</h3>
              <p>Ministério de mulheres firmes na fé</p>
              <span className="ministerio-instagram">@colunasdefe_cavalari</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;