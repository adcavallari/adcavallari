// Configuração para integrar com Formspree depois
export const FORMSPREE_CONFIG = {
  // Substituir pelo seu endpoint do Formspree
  endpoint: 'https://formspree.io/f/xrbybazj',
  
  // Headers para a requisição
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(FORMSPREE_CONFIG.endpoint, {
      method: 'POST',
      headers: FORMSPREE_CONFIG.headers,
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      return { success: true, message: 'Email enviado com sucesso!' };
    } else {
      return { success: false, message: 'Erro ao enviar email.' };
    }
  } catch (error) {
    return { success: false, message: 'Erro de conexão.' };
  }
};