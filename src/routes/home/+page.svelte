<script lang="ts">
  import { onMount } from 'svelte';
  import { logout } from "../../services/authService";
  import { goto } from '$app/navigation';
  import { user } from '../../stores/userStore';
  import {  Button } from '@sveltestrap/sveltestrap';
  import "../home/home.css";
  import CreateForm from '$lib/components/CreateForm/CreateForm.svelte';
	import type { IUser } from '../../stores/userStore.js';
  import { checkAuth } from '../../utils/auth';

  
  let isPostView: boolean = false;
  let isPostCreate: boolean = true;
 
  onMount(() => {
    checkAuth()
    });

 
  const handleLogout = (): void => {
    try {
      logout();
      goto("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const toggleState = (view: boolean, create: boolean): void => {
    isPostView = view;
    isPostCreate = create;
  };

 
</script>

<div>
  <div>
    <Button class="lgbtn" color="primary" on:click={handleLogout()}>Logout</Button>
  </div>

  <div class="btns">
    <Button color="primary" outline on:click={() => toggleState(false, !isPostCreate)} disabled={isPostCreate}>
      Add Post
    </Button>
    <Button color="primary" outline on:click={() => toggleState(!isPostView, false)} disabled={isPostView}>
      See Posts
    </Button>
  </div>

  <div class="homeMainDiv">
    {#if isPostCreate}
      <div>
       <CreateForm/>
      </div>
    {/if}

    {#if isPostView}
      <div>
        <h2>Viewing Posts</h2>
      </div>
    {/if}
  </div>
</div>
