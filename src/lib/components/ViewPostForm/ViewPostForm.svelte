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

  const posts = derived(postsStore, ($postsStore) => $postsStore || []);

  onMount(async () => {
    try {
      await GetAllPosts();
      user.subscribe(val => isUserAuthorized = val._id)
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  });

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

<div class="table-container">
  <h2>Viewing Posts</h2>
  <Table hover>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Category</th>
        <th>Added By</th>
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
