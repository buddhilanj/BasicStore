import axios from 'axios';

const baseURL = 'https://dummyjson.com';

const API = axios.create({
  baseURL,
  timeout: 4000,
  headers: { 'Content-Type': 'application/json' },
});

export default { API };
