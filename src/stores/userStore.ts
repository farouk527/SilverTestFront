import { writable } from 'svelte/store';

export interface IUser {
  _id: string;     
  token: string;   
}

const storedUser = typeof window !== 'undefined' && window.localStorage.getItem('user');
const initialUser = storedUser ? JSON.parse(storedUser) : null;

export const user = writable<IUser | null>(initialUser); 
