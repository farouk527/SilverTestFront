<script lang="ts">
    import { Alert, Button, Input } from '@sveltestrap/sveltestrap';
    import '$lib/LoginForm/LoginStyle.css';
    import { login } from '../../../services/authService.js'; 
    import { goto } from '$app/navigation';
        
    let email: string = '';
    let password: string = '';
    let errorMessage: string = ''; 
    let AlertTrue: boolean = false;

    const handleLogin = async () => {
        const result = await login(email, password); 
        if (typeof result === 'string') {
            errorMessage = result;
            AlertTrue = true;
            

        } else {
            AlertTrue = false;
            goto("/register")
            email ='';
            password='';
            
        }
    };
</script>

<div class="form-container">
    <h3 class="text-center"  >Login</h3>
    <div class="form-group">
        <div>
            <Input type="email" bind:value={email} placeholder="Enter Your Email" class="mb-3" required />
        </div>
        <Input type="password" bind:value={password} placeholder="Enter Your Password" class="mb-3" required />
        <Button color="primary" block on:click={handleLogin}>Se connecter</Button>

        <div class="text-center mt-3">
            <p>if u don't have an Account, <a href="/register">Please Register</a>.</p>
        </div>

        {#if AlertTrue}
            <Alert color="danger">
                {errorMessage}
            </Alert>
        {/if}
    </div>
</div>
