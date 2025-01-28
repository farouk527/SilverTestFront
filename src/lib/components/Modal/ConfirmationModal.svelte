<script lang="ts">
  import { 
    Button,
    ButtonGroup,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader 
  } from '@sveltestrap/sveltestrap';
	import { Labels } from '../../../assets/Labels.js';

  //define the props interfaces
  let { open = false, toggle , deletePost , idPost ="" }: { open?: boolean; toggle: (id :string) => void ,deletePost :(id : string)=>void , idPost:string } = $props();

</script>

<div>
            <!--Reander modal using definig modals of sveltstrap--> 

  <Modal isOpen={open} backdrop={false} {toggle}>
    <ModalHeader {toggle}>{Labels.ays}</ModalHeader>
    <ModalBody>
      {Labels.confirmMsg}
    </ModalBody>
    <ModalFooter>
      <Button color="primary" on:click={deletePost(idPost)}>{Labels.confirm}</Button>
      <Button color="secondary" on:click={toggle}>{Labels.cancel}</Button>
    </ModalFooter>
  </Modal>
</div>