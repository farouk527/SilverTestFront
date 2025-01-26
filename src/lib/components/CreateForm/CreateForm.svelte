<script lang='ts'>
    import { Alert, Button, Input, InputGroup, InputGroupText } from '@sveltestrap/sveltestrap';
    import Icon from "@iconify/svelte";
    import { createPost } from '../../../services/postServices.js';
	import { onMount } from 'svelte';

    

    let title : string = '';
    let description : string = '';
    let category : string = '';
    let errorMessage: string = ''; 
    let successMessage: string = ''; 
    let showAlert: boolean = false; 
    let showSuccessAlert: boolean = false; 

    
  
    const CreatPost = async () => {
      try {
        const result = await createPost(title, description, category);
        successMessage = "Post Created Succesffuly !"; 
        showAlert = false;
        showSuccessAlert = true; 
        title = '';
        description = '';
        category = '';
      } catch (error) {
        errorMessage = error instanceof Error ? error.message : "Une erreur inconnue s'est produite";
        showAlert = true;
        showSuccessAlert = false; 
      }
    }
  </script>
  
  <h2>Create Post</h2>
  <div>
    <div class="form-group">
      <InputGroup class="mb-3">
        <InputGroupText>
          <Icon icon="mdi:text" />
        </InputGroupText>
        <Input
          type="text"
          placeholder="Title"
          class="form-control"
          bind:value={title}
          required
        />
      </InputGroup>
  
      <InputGroup class="mb-3">
        <InputGroupText>
          <Icon icon="mdi:comment" />
        </InputGroupText>
        <Input
          type="textarea"
          placeholder="Description"
          class="form-control"
          bind:value={description}
          required
        />
      </InputGroup>
  
      <InputGroup class="mb-3">
        <InputGroupText>
          <Icon icon="mdi:label" />
        </InputGroupText>
        <Input
          type="text"
          placeholder="Category"
          class="form-control"
          required
          bind:value={category}
        />
      </InputGroup>
  
      <Button color="primary" block on:click={CreatPost}>
        Create
      </Button>
  
      {#if showAlert}
        <Alert color="danger" class="mt-3">
          {errorMessage}
        </Alert>
      {/if}
  
      {#if showSuccessAlert}
        <Alert color="success" class="mt-3">
          {successMessage}
        </Alert>
      {/if}
    </div>
  </div>
  