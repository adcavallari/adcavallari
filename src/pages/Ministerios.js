import React from 'react';
import '../styles/Ministerios.css';

const Ministerios = () => {
  const ministerios = [
    {
      id: 1,
      nome: "Ministério de Jovens",
      instagram: "jovensdocavallari",
      url: "https://www.instagram.com/jovensdocavallari/",
      descricao: "Jovens comprometidos com Cristo, buscando viver o evangelho de forma autêntica e relevante para nossa geração.",
      hashtag: "#jovensdocavallari",
      cor: "#2563eb",
      lideres: ["Pb. Lucas Santos"]
    },
    {
      id: 2,
      nome: "Joias do Cavallari",
      instagram: "joiasdocavallari",
      url: "https://www.instagram.com/joiasdocavallari/",
      descricao: "Ministério infantil onde nossas crianças são tratadas como joias preciosas aos olhos de Deus.",
      hashtag: "#joiasdocavallari",
      cor: "#fbbf24",
      lideres: ["Francine Foster"]
    },
    {
      id: 3,
      nome: "Colunas de Fé",
      instagram: "colunasdefe_cavalari",
      url: "https://www.instagram.com/colunasdefe_cavalari/",
      descricao: "Ministério de mulheres que buscam ser colunas firmes na fé, apoiando umas às outras em Cristo.",
      hashtag: "#colunasdefe",
      cor: "#dc2626",
      lideres: ["Eliciane Jesus"]
    }
  ];

  // SVG do Instagram com cor fixa
  const InstagramIcon = ({ color = "#E1306C", size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill={color} d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
    </svg>
  );

  return (
    <div className="ministerios-page">
      <section className="ministerios-hero">
        <div className="container">
          <h1>Nossos Ministérios</h1>
          <p>Conheça os grupos que fazem parte da nossa família espiritual</p>
        </div>
      </section>

      <section className="ministerios-list">
        <div className="container">
          <div className="ministerios-grid">
            {ministerios.map(ministerio => (
              <div key={ministerio.id} className="ministerio-card">
                <div className="card-header" style={{ background: ministerio.cor }}>
                  <h3>{ministerio.nome}</h3>
                </div>

                <div className="card-content">
                  <p className="ministerio-descricao">{ministerio.descricao}</p>
                  
                  <div className="ministerio-info">
                    <div className="info-item">
                      <span className="info-label">Líderes:</span>
                      <span>{ministerio.lideres.join(', ')}</span>
                    </div>
                  </div>

                  {/* Instagram Section */}
                  <div className="instagram-section">
                    <div className="instagram-header">
                      <InstagramIcon color="#E1306C" size={20} />
                      <div className="instagram-info">
                        <a 
                          href={ministerio.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="instagram-link"
                          style={{ color: '#2563eb' }} 
                        >
                          @{ministerio.instagram}
                        </a>
                        <span 
                          className="instagram-hashtag"
                          style={{ color: '#6b7280' }} 
                        >
                          {ministerio.hashtag}
                        </span>
                      </div>
                    </div>

                    <button 
                      className="btn-seguir"
                      onClick={() => window.open(ministerio.url, '_blank')}
                      style={{ 
                        background: ministerio.cor,
                        color: 'white' // Força cor branca inline
                      }}
                    >
                      <InstagramIcon color="white" size={16} />
                      <span style={{ color: 'white' }}>Seguir no Instagram</span>
                    </button>
                  </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministerios;