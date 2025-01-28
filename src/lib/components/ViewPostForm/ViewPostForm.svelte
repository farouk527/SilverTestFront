<script lang="ts">
  import { onMount } from "svelte";
  import { postsStore, type IPost } from "../../../stores/postStore.ts";
  import { DeletePost, GetAllPosts } from "../../../services/postServices.js";
  import { user } from "../../../stores/userStore.js";
  import { Table, Button } from "@sveltestrap/sveltestrap";
  import { derived } from "svelte/store";
  import "./view.css";
  import Icon from "@iconify/svelte";
  import ConfirmationModal from "../Modal/ConfirmationModal.svelte";
	import UpadatePost from "../UpdatePostOffcanvas/UpadatePost.svelte";
	import { Labels } from "../../../assets/Labels.js";
  
  //declaring the main interactive variables to manage interfaces 
  let open: boolean = false;
  let openUpd: boolean = false;
  let idPost: string = "";
  let idPostUpd : string = "";
  let isUserAuthorized: string ="";
  let postToUpdate : IPost [];

  const toggle = (id: string) => {
    open = !open;
    idPost = id;
  };

  const toggleUpd = (id: string) => {
  openUpd = !openUpd;  
  idPostUpd = id;  
if (id) {
  posts.subscribe((val) => {
    postToUpdate = val.filter(post => post._id === id);
    console.log(postToUpdate); 
  });
}
  
};
  //get Data From the posts store for better state mangament
  const posts = derived(postsStore, ($postsStore) => $postsStore || []);
  // fetch all needed data
  onMount(async () => {
    try {
      await GetAllPosts();
      user.subscribe(val => isUserAuthorized = val._id)
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  });
// call the delete post  service  from post service
  const deletePost = async (id: string) => {
    try {
      await DeletePost(id);
      await GetAllPosts();
      toggle('');
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
</script>


  <!-- Render the layout and calling other components-->
<div class="table-container">
  <h2>{Labels.viewingPosts}</h2>
  <Table hover>
    <thead>
      <tr>
        <th>{Labels.title}</th>
        <th>{Labels.description}</th>
        <th>{Labels.category}</th>
        <th>{Labels.addedBy}</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each $posts as post, index}
        <tr>
          <td>{post.title}</td>
          <td class="description">{post.description}</td>
          <td>{post.category}</td>
          <td>{post.user.username}</td>
          <td>
            <Button outline color="success" on:click={()=>toggleUpd(post._id)} disabled={post.user._id !== isUserAuthorized}
              >
              <Icon icon="mdi:update" />
            </Button>
          </td>
          <td>
            <Button
              outline
              color="danger"
              on:click={toggle(post._id)}
              disabled={post.user._id !== isUserAuthorized}
            >
              <Icon icon="mdi:delete" />
            </Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </Table>

  <ConfirmationModal {open} {toggle} {deletePost} {idPost} />

  {#if openUpd}
  <UpadatePost postToUpdate={postToUpdate} openUpd={openUpd} toggleUpd={toggleUpd} {idPostUpd} on:fetchdata={GetAllPosts}/>
  {/if}
</div>
