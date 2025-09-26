import config from '../config/youtube';

class YouTubeService {
  constructor() {
    this.apiKey = config.youtube.apiKey;
    this.channelId = config.youtube.channelId;
    this.baseUrl = config.youtube.baseUrl;
  }

  isApiAvailable() {
    return !!this.apiKey && this.apiKey.length > 0;
  }

  // Função para fazer requests com tratamento de CORS
  async makeRequest(url) {
    try {
      // Tentar com modo 'cors' primeiro
      const response = await fetch(url, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Erro CORS:', error);
      
      // Fallback: tentar usar proxy CORS
      try {
        const proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
        const response = await fetch(proxyUrl);
        return await response.json();
      } catch (proxyError) {
        console.error('Erro no proxy CORS:', proxyError);
        throw error;
      }
    }
  }

  async getLiveStreams() {
    if (!this.isApiAvailable()) {
      return this.getFallbackData();
    }

    try {
      const url = `${this.baseUrl}/search?key=${this.apiKey}&channelId=${this.channelId}&eventType=live&type=video&part=snippet&maxResults=1`;
      return await this.makeRequest(url);
    } catch (error) {
      console.error('YouTube API Error:', error);
      return this.getFallbackData();
    }
  }

  async getRecentVideos(maxResults = 6) {
    if (!this.isApiAvailable()) {
      return this.getFallbackVideos();
    }

    try {
      const url = `${this.baseUrl}/search?key=${this.apiKey}&channelId=${this.channelId}&order=date&type=video&part=snippet&maxResults=${maxResults}`;
      const data = await this.makeRequest(url);
      
      if (data.error) {
        console.error('Erro da API:', data.error);
        return this.getFallbackVideos();
      }

      if (data.items && data.items.length > 0) {
        return await this.getVideoDetails(data.items);
      } else {
        return this.getFallbackVideos();
      }
    } catch (error) {
      console.error('YouTube API Error:', error);
      return this.getFallbackVideos();
    }
  }

  async getVideoDetails(videos) {
    if (!videos || videos.length === 0) return [];
    
    const videoIds = videos.map(item => item.id.videoId).join(',');
    
    try {
      const url = `${this.baseUrl}/videos?key=${this.apiKey}&id=${videoIds}&part=contentDetails,statistics,snippet`;
      const detailsData = await this.makeRequest(url);
      
      return videos.map((item, index) => {
        const details = detailsData.items[index];
        return {
          id: item.id.videoId,
          titulo: item.snippet.title,
          data: new Date(item.snippet.publishedAt).toLocaleDateString('pt-BR'),
          thumbnail: item.snippet.thumbnails.medium.url,
          videoId: item.id.videoId,
          duracao: details?.contentDetails?.duration || 'PT0M0S',
          visualizacoes: details?.statistics?.viewCount || '0',
        };
      });
    } catch (error) {
      console.error('Erro ao buscar detalhes:', error);
      return this.getFallbackVideos();
    }
  }

  getFallbackData() {
    return { items: [] };
  }

  getFallbackVideos() {
    return [
      {
        id: 'video1',
        titulo: 'Congresso do Círculo de Oração - Colunas de Fé',
        data: '25 Jul 2025',
        videoId: 'rT8YqGItaR0',
        thumbnail: 'https://img.youtube.com/vi/rT8YqGItaR0/hqdefault.jpg',
        duracao: '2:07:55',
        visualizacoes: '131',
        duracaoLegivel: '2:07:55'
      },
      // ... seus outros vídeos de fallback
    ];
  }
}

export default new YouTubeService();