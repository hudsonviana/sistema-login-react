import axios from 'axios';

const URL = `http://localhost:3333/api`;

const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useApi = () => ({
  validateToken: async (token) => {
    const response = await api.post('/auth/validate', { token });
    return response.data;
  },
  signIn: async ({ email, password }) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      return error.response.errors;
    }
  },
  signOut: async () => {
    return true;
    // const response = await api.post('/auth/logout');
    // return response.data;
  },
});
