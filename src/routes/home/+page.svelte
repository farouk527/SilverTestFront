<script lang="ts">
  import { onMount } from 'svelte';
  import { logout } from "../../services/authService";
  import { goto } from '$app/navigation';
  import { Button } from '@sveltestrap/sveltestrap';
  import "../home/home.css";
  import CreateForm from '$lib/components/CreateForm/CreateForm.svelte';
  import { checkAuth } from '../../utils/auth';
  import ViewPostForm from '$lib/components/ViewPostForm/ViewPostForm.svelte';
  
  let isPostView: boolean = false;
  let isPostCreate: boolean = true;

  onMount(() => {
    checkAuth();
  });

  const handleLogout = (): void => {
      logout();
      goto("/");  
  };

  const toggleState = (view: boolean, create: boolean): void => {
    isPostView = view;
    isPostCreate = create;
  };
</script>

<div class="logout-container">
  <Button color="primary" on:click={handleLogout}>Logout</Button>
</div>

<div>
  <div class="buttons-container">
    <Button color="primary" outline on:click={() => toggleState(false, !isPostCreate)} disabled={isPostCreate}>
      Add Post
    </Button>
    <Button color="primary" outline on:click={() => toggleState(!isPostView, false)} disabled={isPostView}>
      See Posts
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
