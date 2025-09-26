import React, { useState, useEffect } from 'react';
import YouTubeService from '../services/youtubeService';
import '../styles/Transmissoes.css';

const Transmissoes = () => {
  const [videos, setVideos] = useState([]);
  const [liveStream, setLiveStream] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  // Componente de Thumbnail melhorado
  const VideoThumbnail = ({ video }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <div 
        className="video-thumbnail"
        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
      >
        <img 
          src={video.thumbnail} 
          alt={video.titulo}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        {!imageLoaded && (
          <div className="image-loading">📺 Carregando...</div>
        )}
        <div className="video-duracao">{formatDuration(video.duracao)}</div>
        <div className="play-overlay">▶</div>
      </div>
    );
  };

  // Função que funciona com qualquer formato
  const formatDuration = (duration, video = null) => {
    // Se for vídeo de fallback, usa duração legível direto
    if (video && video.duracaoLegivel) {
      return video.duracaoLegivel;
    }
    
    // Se já estiver no formato legível
    if (duration.includes(':') && duration.split(':').every(part => !isNaN(part))) {
      return duration;
    }
    
    // Formato ISO (da API YouTube)
    if (duration.startsWith('PT')) {
      const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
      const hours = (match[1] || '').replace('H', '');
      const minutes = (match[2] || '').replace('M', '');
      const seconds = (match[3] || '').replace('S', '');
      
      if (hours) return `${hours}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
      return `${minutes}:${seconds.padStart(2, '0')}`;
    }
    
    // Fallback
    return duration;
  };

  const loadVideos = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('🔍 Iniciando busca de vídeos...');

      // Buscar transmissão ao vivo
      const liveData = await YouTubeService.getLiveStreams();
      if (liveData.items && liveData.items.length > 0) {
        setLiveStream(liveData.items[0]);
        console.log('🔴 Live encontrada:', liveData.items[0].snippet.title);
      } else {
        console.log('📡 Nenhuma live ativa');
      }

      // Buscar vídeos recentes
      const videosData = await YouTubeService.getRecentVideos(6);
      
      console.log('📹 Vídeos retornados:', videosData);
      console.log('Quantidade:', videosData.length);
      
      setVideos(videosData);

      // Verificar se são vídeos reais ou fallback
      if (videosData[0]?.id.includes('fallback') || videosData[0]?.id.includes('video')) {
        console.log('⚠️ Usando vídeos de fallback');
        setUsingFallback(true);
      } else {
        console.log('✅ Vídeos reais da API');
        setUsingFallback(false);
      }

    } catch (err) {
      console.error('❌ Erro ao carregar vídeos:', err);
      setError('Erro ao carregar vídeos. Verifique sua conexão.');
      setUsingFallback(true);
    } finally {
      setLoading(false);
    }
  };

  /*useEffect(() => {
    loadVideos();
  }, []);*/
  useEffect(() => {
  // TESTE: Ver o que a API está retornando
  /*const testarConteudoDoCanal = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${config.youtube.apiKey}&channelId=${config.youtube.channelId}&part=snippet&maxResults=10&order=date`;
    
    try {
      console.log('🧪 Testando conteúdo do canal...');
      const response = await fetch(url);
      const data = await response.json();
      
      console.log('📊 TUDO que o canal tem:', data);
      
      if (data.items) {
        data.items.forEach((item, index) => {
          console.log(`🎬 Item ${index + 1}:`, {
            título: item.snippet.title,
            tipo: item.id.kind,
            liveStatus: item.snippet.liveBroadcastContent,
            data: item.snippet.publishedAt
          });
        });
      }
    } catch (error) {
      console.error('❌ Erro no teste:', error);
    }
  };

  testarConteudoDoCanal();*/
  loadVideos();
}, []);

  if (loading) {
    return (
      <div className="transmissoes-page">
        <section className="transmissoes-hero">
          <div className="container">
            <h1>Transmissões ao Vivo</h1>
            <p>Carregando transmissões...</p>
          </div>
        </section>
        <div className="loading">📺 Conectando ao YouTube...</div>
      </div>
    );
  }

  return (
    <div className="transmissoes-page">
      {/* Hero Section */}
      <section className="transmissoes-hero">
        <div className="container">
          <h1>Transmissões ao Vivo</h1>
          <p>Participe dos nossos cultos online e assista às gravações</p>
          {usingFallback && (
            <div className="api-warning">
              ⚠️ Modo offline - usando videos pre-carregados
            </div>
          )}
        </div>
      </section>

      {/* Transmissão Ao Vivo */}
      <section className="transmissao-ao-vivo">
        <div className="container">
          {liveStream ? (
            <div className="live-status">
              <div className="live-indicator">
                <span className="live-dot"></span>
                <span className="live-text">🔴 TRANSMISSÃO AO VIVO AGORA</span>
              </div>
              
              <div className="live-player">
                <div className="video-container">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${liveStream.id.videoId}?autoplay=1`}
                    title={liveStream.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="live-info">
                  <h3>{liveStream.snippet.title}</h3>
                  <p>Transmissão ao vivo - Igreja AD Cavallari</p>
                  <button 
                    className="btn-live"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${liveStream.id.videoId}`, '_blank')}
                  >
                    📺 Assistir no YouTube
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="proxima-transmissao">
              <div className="sem-transmissao">
                <h3>📡 Nenhuma transmissão ao vivo no momento</h3><br></br>
                <p>Confira nossa programação regular:</p>
                
                <div className="programacao">
                  <div className="horario-item">
                    <span className="dia">Terça-feira: </span>
                    <span className="hora">20:00 - Tarde da Benção</span>
                  </div>
                  <div className="horario-item">
                    <span className="dia">Quarta-feira: </span>
                    <span className="hora">20:00 - Culto de Ensino</span>
                  </div>
                  <div className="horario-item">
                    <span className="dia">Sexta-feira: </span>
                    <span className="hora">19:45 - Culto de Oração</span>
                  </div>
                  <div className="horario-item">
                    <span className="dia">Domingo: </span>
                    <span className="hora">09:00 - EBD - Escola Bíblica Dominical</span>
                  </div>
                  <div className="horario-item">
                    <span className="dia">Domingo: </span>
                    <span className="hora">18:30 - Culto da Família</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Cultos Anteriores */}
      <section className="cultos-anteriores">
        <div className="container">
          <h2>Cultos Anteriores</h2>
          <p className="section-subtitle">Assista às gravações dos nossos últimos cultos</p><br></br>
          
          {error && (
            <div className="error-message">
              {error} 
              <button onClick={loadVideos} className="btn-retry">
                Tentar Novamente
              </button>
            </div>
          )}

          <div className="videos-grid">
            {videos.map((video, index) => (
              <div key={video.id || index} className="video-card">
                {/* AQUI ESTÁ A THUMBNAIL - COMPONENTE CORRETO */}
                <VideoThumbnail video={video} />
                
                <div className="video-info">
                  <h4 className="video-titulo">{video.titulo}</h4>
                  <div className="video-meta">
                    <span className="video-data">{video.data}</span>
                    <span className="video-visualizacoes">
                      👁️ {parseInt(video.visualizacoes).toLocaleString('pt-BR')} visualizações
                    </span>
                  </div>
                  <div className="video-duracao">
                    {formatDuration(video.duracao, video)}
                  </div>
                  <button 
                    className="btn-assistir"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                  >
                    ▶ Assistir no YouTube
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canal YouTube */}
      <section className="canal-youtube">
        <div className="container">
          <div className="canal-info">
            <h2>🎬 Inscreva-se no nosso canal</h2>
            <p>Não perca nenhum culto! Ative o sininho para receber notificações.</p>
            <a href="https://www.youtube.com/@ADCavallari" target="_blank" rel="noopener noreferrer" className="rede-social-link">
                <svg className="rede-social-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transmissoes;