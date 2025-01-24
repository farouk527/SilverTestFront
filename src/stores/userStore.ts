import { writable } from 'svelte/store';

export interface IUser {
  _id: string;     
  token: string;   
}

export const user = writable<IUser | null>(null);
