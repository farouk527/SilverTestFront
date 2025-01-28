<script lang="ts">
  import { onMount } from 'svelte';
  import { logout } from "../../services/authService";
  import { goto } from '$app/navigation';
  import { Button } from '@sveltestrap/sveltestrap';
  import "../home/home.css";
  import CreateForm from '$lib/components/CreateForm/CreateForm.svelte';
  import { checkAuth } from '../../utils/auth';
  import ViewPostForm from '$lib/components/ViewPostForm/ViewPostForm.svelte';
	import { Labels } from '../../assets/Labels.js';
  
  let isPostView: boolean = false;
  let isPostCreate: boolean = true;

  onMount(() => {
    checkAuth();
  });
  //logout
  const handleLogout = (): void => {
    goto("/");  
      logout();
  };

  const toggleState = (view: boolean, create: boolean): void => {
    isPostView = view;
    isPostCreate = create;
  };
</script>

<!-- Render The main container and call other components-->
<div class="logout-container">
  <Button color="primary" on:click={handleLogout}>{Labels.logout}</Button>
</div>

<div>
  <div class="buttons-container">
    <Button color="primary" outline on:click={() => toggleState(false, !isPostCreate)} disabled={isPostCreate}>
{Labels.addPosts}  
  </Button>
    <Button color="primary" outline on:click={() => toggleState(!isPostView, false)} disabled={isPostView}>
      {Labels.seePosts}
    </Button>
  </div> 
  
  <div>
    {#if isPostCreate}
      <div class="form-wrapper">
        <CreateForm />
      </div>
    {/if}

    {#if isPostView}
      <div class="form-wrapper">
        <ViewPostForm />
      </div>
    {/if}
  </div>
</div>
