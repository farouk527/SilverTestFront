<script lang='ts'>
    import { Alert, Button, Input, InputGroup, InputGroupText } from '@sveltestrap/sveltestrap';
    import Icon from "@iconify/svelte";
    import { createPost } from '../../../services/postServices.js';
    import { Labels } from '../../../assets/Labels.js';
    
  // using non reactive variable without using state variables
    let title : string = '';
    let description : string = '';
    let category : string = '';
    let errorMessage: string = ''; 
    let successMessage: string = ''; 
    let showAlert: boolean = false; 
    let showSuccessAlert: boolean = false; 

    
  //call the create Post service from Posts service
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
  
      <!--Rendering the creation Form --> 

  <h2 style="text-align: center;">{Labels.createPost}</h2>
  <div>
    <div class="form-wrapper-cr">
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
  
      <Button  color="dark" block on:click={CreatPost}>
        {Labels.create}
      </Button>
  
          <!--Error Alert--> 

      {#if showAlert}
        <Alert color="danger" class="mt-3">
          {errorMessage}
        </Alert>
      {/if}
            <!--Success Alert--> 

      {#if showSuccessAlert}
        <Alert color="success" class="mt-3">
          {successMessage}
        </Alert>
      {/if}
    </div>
  </div>
  