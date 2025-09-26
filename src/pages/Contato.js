import React, { useState } from 'react';
import '../styles/Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Função para abrir o Google Maps
  const abrirGoogleMaps = () => {
    const endereco = encodeURIComponent('Av. Maria Fernandes Cavalari, 2399 - Jardim Cavallari, Marília - SP, 17526-431');
    const url = `https://www.google.com/maps/dir/?api=1&destination=${endereco}`;
    window.open(url, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formsubmit.co/ajax/ad.cavallri@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  }
  };

  {submitStatus === 'success' && (
    <div className="alert success">
      ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
    </div>
  )}

  {submitStatus === 'error' && (
    <div className="alert error">
      ❌ Erro ao enviar mensagem. Tente novamente ou nos contate diretamente.
    </div>
  )}

  return (
    <div className="contato-page">
      <section className="contato-hero">
        <div className="container">
          <h1>Fale Conosco</h1>
          <p>Estamos aqui para servir e conectar. Entre em contato conosco!</p>
        </div>
      </section>

      <section className="contato-content">
        <div className="container">
          {/* Informações de Contato e Redes Sociais */}
          <div className="contato-info-grid">
            <div className="info-card">
              <h3>📞 Telefone</h3>
              <p>(14) 0000-0000</p>
              <span className="info-desc">Estamos sem telefone no momento!</span>
            </div>

            <div className="info-card">
              <h3>📧 Email</h3>
              <p>ad.cavallri@gmail.com</p>
              <span className="info-desc">Respondemos em até 24h</span>
            </div>

            <div className="info-card">
              <h3>📍 Endereço</h3>
              <p>Av. Maria Fernandes Cavalari, 2399</p>
              <span className="info-desc">Jardim Cavallari, Marília-SP</span>
            </div>

            <div className="info-card">
              <h3>🕒 Horários</h3>
              <p>Domingo: 9h00 e 18h30</p>
              <span className="info-desc">Terça: 15h00</span><br></br>
              <span className="info-desc">Quarta: 20h00</span><br></br>
              <span className="info-desc">Sexta: 19h45</span>
            </div>
          </div>

          {/* Redes Sociais com Logos */}
          <div className="redes-sociais-section">
            <h2>Siga-nos nas Redes Sociais</h2>
            <div className="redes-grid">
              <a href="https://www.facebook.com/ad.cavallari/" target="_blank" rel="noopener noreferrer" className="rede-social-link">
                <svg className="rede-social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>

              <a href="https://www.instagram.com/ad.cavallari/" target="_blank" rel="noopener noreferrer" className="rede-social-link">
                <svg className="rede-social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a href="https://www.youtube.com/@ADCavallari" target="_blank" rel="noopener noreferrer" className="rede-social-link">
                <svg className="rede-social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>

              <a href="https://www.tiktok.com/@ad.cavallari" target="_blank" rel="noopener noreferrer" className="rede-social-link">
                <svg className="rede-social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-3.77-1.105zm0 0V6.79a4.831 4.831 0 0 1-3.77-1.105z"/>
                </svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Formulário e Mapa lado a lado */}
          <div className="form-mapa-grid">
            <div className="form-container">
              <h2>Envie uma Mensagem</h2>
              
              {submitStatus === 'success' && (
                <div className="alert success">
                  ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="assunto">Assunto *</label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes">Informações sobre a igreja</option>
                    <option value="oracao">Pedido de oração</option>
                    <option value="visita">Agendar visita pastoral</option>
                    <option value="ministerio">Informações sobre ministérios</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="6"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-nos como podemos ajudá-lo..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : '📤 Enviar Mensagem'}
                </button>
              </form>
            </div>

            <div className="mapa-container">
              <h2>Onde Estamos</h2>
              <div className="mapa-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.456789012345!2d-49.9456789!3d-22.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bfd6a123456789%3A0x1234567890abcdef!2sAv.%20Maria%20Fernandes%20Cavalari%2C%202399%20-%20Jardim%20Cavallari%2C%20Mar%C3%ADlia%20-%20SP%2C%2017526-431!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{border:0, borderRadius: '10px'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Igreja AD Cavallari - Marília/SP"
                ></iframe>
              </div>
              <div className="endereco-info">
                <p>📍 Av. Maria Fernandes Cavalari, 2399 - Jardim Cavallari, Marília - SP, 17526-431</p>
                {/* Botão para abrir Google Maps */}
                <button className="btn-maps" onClick={abrirGoogleMaps}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  Abrir no Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;