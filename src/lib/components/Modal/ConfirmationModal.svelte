<script lang="ts">
  import { 
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader 
  } from '@sveltestrap/sveltestrap';


  let { open = false, toggle , deletePost , idPost ="" }: { open?: boolean; toggle: (id :string) => void ,deletePost :(id : string)=>void , idPost:string } = $props();

</script>

<div>
  <Modal isOpen={open} backdrop={false} {toggle}>
    <ModalHeader {toggle}>Are you Sure?</ModalHeader>
    <ModalBody>
      If you Want Delete just click on confirm else cancel
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={deletePost(idPost)}>Confrim</Button>
      <Button color="secondary" on:click={toggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
</div>