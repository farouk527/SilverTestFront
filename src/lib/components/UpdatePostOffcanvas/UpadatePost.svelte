<script lang="ts">
    import { Offcanvas, Button, Input, Form, FormGroup, Label } from '@sveltestrap/sveltestrap';
    import { postsStore, type IPost } from "../../../stores/postStore.ts";
	import { UpdatePost } from '../../../services/postServices.js';
	import { createEventDispatcher } from 'svelte';

    let { openUpd = false, toggleUpd, idPostUpd = "" , postToUpdate = []  }: { openUpd?: boolean; toggleUpd: (id: string) => void; idPostUpd: string ,
        postToUpdate :IPost []} = $props();

        let description = $state(postToUpdate[0].description);
        let title = $state(postToUpdate[0].title);
        let category = $state(postToUpdate[0].category);
        const dispatch = createEventDispatcher();

    
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
  
  <Offcanvas scroll isOpen={openUpd} >
    <h1 slot="header" class="text-center">
      Update your Post
    </h1>
  
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input id="title" type="text" placeholder="Enter post title" bind:value={title} />
      </FormGroup>
  
      <FormGroup>
        <Label for="description">Description</Label>
        <Input id="description" type="textarea" bind:value={description} placeholder="Enter post description" />
      </FormGroup>
  
      <FormGroup>
        <Label for="category">Category</Label>
        <Input id="category" type="text" bind:value={category} placeholder="Enter post category" />
      </FormGroup>
  
      <div class="d-flex justify-content-between">
        <Button outline color="success" class="w-48" on:click={handleUpdatePost}>Update</Button>
        <Button outline color="danger" on:click={toggleUpd} class="w-48">Cancel</Button>
      </div>
    </Form>
  </Offcanvas>
  