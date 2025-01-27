<script lang="ts">
  import { onMount } from "svelte";
  import { postsStore, type IPost } from "../../../stores/postStore.ts";
  import { DeletePost, GetAllPosts } from "../../../services/postServices.js";
  import { Table, Button } from "@sveltestrap/sveltestrap";
  import { derived } from "svelte/store";
  import "./view.css";
  import Icon from "@iconify/svelte";
  import ConfirmationModal from "../Modal/ConfirmationModal.svelte"

  let open : boolean = false;
  let idPost: string;

const toggle = (id : string ) => {
  open = !open;
  idPost = id;
};
  const posts = derived(postsStore, ($postsStore) => $postsStore || []);

  onMount(async () => {
    try {
      await GetAllPosts();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  });


  const deletePost = async (id: string) => {
    try {
      await DeletePost(id);
      await GetAllPosts();
      toggle("");

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
        <th>User</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each $posts as post, index}
        <tr>
          <td>{post.title}</td>
          <td>{post.description}</td>
          <td>{post.category}</td>
          <td>{post.user.username}</td>
          <td>
            <Button outline color="success">
              <Icon icon="mdi:update" />
            </Button>
          </td>
          <td>
            <Button
              outline
              color="danger"
              on:click={toggle(post._id)}
            >
              <Icon icon="mdi:delete" />
            </Button>
          </td>
        </tr>

      {/each}
    </tbody>
  </Table>

  <ConfirmationModal {open} {toggle} {deletePost}  {idPost}/>

</div>
