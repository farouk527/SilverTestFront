import { user } from '../stores/userStore';
import { goto } from '$app/navigation';
import type { IUser } from '../stores/userStore.js';

export function checkAuth() {
  let currentUser: IUser | null = null;

  user.subscribe((value: IUser) => {
    currentUser = value;
  });
  const currentPath = window.location.pathname;

  if (!currentUser) {
    if (currentPath === '/register')
    goto('/register');
    else 
    goto("/");
    return;
  }

  
  if (currentPath === '/' || currentPath === '/register') {
    goto('/home');
  }
}
