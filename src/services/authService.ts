import axios from 'axios';
import { user } from '../stores/userStore.js'; 

const apiUrl = import.meta.env.VITE_API_URL; 

export const login = async (email: string, password: string): Promise<{ _id: string, token: string } | string> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, { email, password });
    const { _id, token } = response.data;

    user.set({ _id, token });

    return { _id, token };
  } catch (error : any) {
    return error.response?.data?.message || 'Erreur inconnue';
  }
};
