// Configuração segura para YouTube API
const config = {
  youtube: {
    apiKey: process.env.REACT_APP_YOUTUBE_API_KEY || 'AIzaSyBAwcYfyhT8lwQg8Fz1GSVUqC-hjFZHFFI', 
    channelId: process.env.REACT_APP_YOUTUBE_CHANNEL_ID || 'UCd76-d5_7f3EXAqIc4hEK0A',
    baseUrl: 'https://www.googleapis.com/youtube/v3'
  }
};

// Debug seguro
console.log('🎯 YouTube Config:', {
  hasApiKey: !!config.youtube.apiKey,
  channelId: config.youtube.channelId,
  isDevelopment: process.env.NODE_ENV === 'development'
});

// Se não tem API Key, mostra aviso
if (!config.youtube.apiKey) {
  console.warn('⚠️ YouTube API Key não encontrada. Usando modo fallback.');
}

export default config;