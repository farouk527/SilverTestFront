<script lang="ts">
    import { Offcanvas, Button, Input, Form, FormGroup, Label } from '@sveltestrap/sveltestrap';
    import { postsStore, type IPost } from "../../../stores/postStore.ts";
	import { UpdatePost } from '../../../services/postServices.js';
	import { createEventDispatcher } from 'svelte';
	import { Labels } from '../../../assets/Labels.js';
  
  // props interface
    let { openUpd = false, toggleUpd, idPostUpd = "" , postToUpdate = []  }: { openUpd?: boolean; toggleUpd: (id: string) => void; idPostUpd: string ,
        postToUpdate :IPost []} = $props();

        //declaring of state interactive variables
        let description = $state(postToUpdate[0].description);
        let title = $state(postToUpdate[0].title);
        let category = $state(postToUpdate[0].category);
        const dispatch = createEventDispatcher();

      //call the back service to update specifique post and fetch new data
    const handleUpdatePost = async() => {
            try{    
                await UpdatePost(title,description,category,idPostUpd);
                toggleUpd('');
                dispatch("fetchdata");

            }catch(error) {
                console.log(error);
            }
    }
  </script>
  
            <!--Render the Update interface using Offcanvas --> 

  <Offcanvas scroll isOpen={openUpd} >
    <h1 slot="header" class="text-center">
      {Labels.updatePost}
    </h1>
  
    <Form>
      <FormGroup>
        <Label for="title">{Labels.title}</Label>
        <Input id="title" type="text" placeholder="Enter post title" bind:value={title} />
      </FormGroup>
  
      <FormGroup>
        <Label for="description">{Labels.description}</Label>
        <Input id="description" type="textarea" bind:value={description} placeholder="Enter post description" />
      </FormGroup>
  
      <FormGroup>
        <Label for="category">{Labels.category}</Label>
        <Input id="category" type="text" bind:value={category} placeholder="Enter post category" />
      </FormGroup>
  
      <div class="d-flex justify-content-between">
        <Button outline color="success" class="w-48" on:click={handleUpdatePost}>{Labels.update}</Button>
        <Button outline color="danger" on:click={toggleUpd} class="w-48">{Labels.cancel}</Button>
      </div>
    </Form>
  </Offcanvas>
  