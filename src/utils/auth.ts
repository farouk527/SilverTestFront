import { user } from '../stores/userStore';
import { goto } from '$app/navigation';
import type { IUser } from '../stores/userStore.js';

export function checkAuth() {
  let currentUser;
  user.subscribe((value : IUser) => {
    currentUser = value;
  })();

  if (!currentUser) {
    goto('/');
  }
}
