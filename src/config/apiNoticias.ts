import axios from 'axios';
const api = axios.create({
    // baseURL: 'http://host.docker.internal:5002',
    baseURL: 'http://localhost:5002',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default api;
