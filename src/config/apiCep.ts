import axios from 'axios';
const api = axios.create({
    baseURL: 'http://viacep.com.br/ws/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default api;
