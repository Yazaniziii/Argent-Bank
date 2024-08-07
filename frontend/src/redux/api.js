import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api/v1', // Base URL de votre API
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
});

export default api;
