<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { Alert, Button, Input, InputGroup, InputGroupText } from '@sveltestrap/sveltestrap';
    import Icon from "@iconify/svelte";
 
    export let username: string = '';
    export let email: string = '';
    export let password: string = '';
    export let errorMessage: string = ''; 
    export let showError: boolean = false; 
 
    const dispatch = createEventDispatcher();
 
    const handleSubmit = () => {
        dispatch("submit", { username, email, password });
    };
 </script>
 
 <div class="form-container">
     <h3 class="text-center mb-4 text-primary">
         <span class="mr-2">
            <Icon icon="mdi:lock" /> 
        </span> 
         Register
     </h3>
 
     <div class="form-group">
         <InputGroup class="mb-3">
             <InputGroupText>
                <Icon icon="mdi:user"  />
            </InputGroupText>
             <Input
                 type="text"
                 bind:value={username}
                 placeholder="Username"
                 class="form-control"
                 required
             />
         </InputGroup>
 
         <InputGroup class="mb-3">
             <InputGroupText>
                <Icon icon="mdi:email" />             
            </InputGroupText>
             <Input
                 type="email"
                 bind:value={email}
                 placeholder="Email"
                 class="form-control"
                 required
             />
         </InputGroup>
 
         <InputGroup class="mb-3">
             <InputGroupText>
                <Icon icon="mdi:lock" />
                         </InputGroupText>
             <Input
                 type="password"
                 bind:value={password}
                 placeholder="Password"
                 class="form-control"
                 required
             />
         </InputGroup>
 
         <Button color="primary" block on:click={handleSubmit}>
             Register
         </Button>
 
         {#if showError}
             <Alert color="danger" class="mt-3">
                 {errorMessage}
             </Alert>
         {/if}
 
         <div class="text-center mt-3">
             <p class="p">
                 Already have an account? <a href="/">Login</a>.
             </p>
         </div>
     </div>
 </div>
 

 