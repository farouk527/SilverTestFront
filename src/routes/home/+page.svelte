<script lang="ts">
    import { onMount } from 'svelte';
    import { logout } from "../../services/authService.js";
    import { user } from '../../stores/userStore';
    import { goto } from '$app/navigation';
    
    let currentUser;

    onMount(() => {
    const unsubscribe = user.subscribe((value) => {
      currentUser = value;
      console.log('Contenu du user :', currentUser);
    });
    return () => unsubscribe();
  });

    
   
    const handleLogout = () => {
      logout(); 
      goto("/"); 
    };
  </script>
  
  <h1>Hello dans home component</h1>
  
    <button on:click={handleLogout}>Logout</button>
    {#if currentUser}
    <p>Utilisateur connecté: {currentUser._id}</p>
    <button on:click={handleLogout}>Logout</button>
  {:else}
    <p>Pas de connexion utilisateur</p>
  {/if}