import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  // baseURL: 'https://superman-dqt1hvkg6-tonybnyas-projects.vercel.app',
})

export default api;
