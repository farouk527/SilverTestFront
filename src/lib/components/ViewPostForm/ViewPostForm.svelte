<script lang="ts">
  import { onMount } from "svelte";
  import { postsStore, type IPost } from "../../../stores/postStore.ts";
  import { GetAllPosts } from "../../../services/postServices.js";
  import { Table,Button  } from "@sveltestrap/sveltestrap";
  import { derived } from "svelte/store";
  import "./view.css";
	import Icon from "@iconify/svelte";

  onMount(async () => {
    GetAllPosts();
  });

  const posts = derived(postsStore, ($postsStore) => $postsStore || []);



  
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
            <Button outline color="success"    > <Icon icon="mdi:update" />
               </Button>
          </td>
            <td>

            <Button  outline color="danger" ><Icon icon="mdi:delete" /></Button>
          </td>
        </tr>
      {/each}
    </tbody>
  </Table>
</div>
