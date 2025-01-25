import axios from 'axios';
import { user } from '../stores/userStore.js'; 

const apiUrl = import.meta.env.VITE_API_URL; 

export const login = async (email: string, password: string): Promise<{ _id: string, token: string } | string> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/login`, { email, password });
    const { _id, token } = response.data;

    const userData = { _id, token };
    user.set(userData);
    localStorage.setItem('user', JSON.stringify(userData));  

    return userData;
  } catch (error : any) {
    return error.response?.data?.message || 'Erreur inconnue';
  }
};

export  interface message{
  message: string;
}

export const register = async (
  username: string,
  email: string,
  password: string
): Promise<string> => {
  try {
    const response = await axios.post(`${apiUrl}/auth/register`, {
      username,
      email,
      password,
    });

    if (response.status === 201) {
      return response.data.message; 
    } else {
      throw new Error(response.data?.message || "Une erreur inattendue est survenue.");
    }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Erreur réseau ou serveur.");
    }
    throw new Error("Une erreur inconnue est survenue.");
  }
};

export const logout = (): void => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem('user');
  }
  
  user.set(null);
};

