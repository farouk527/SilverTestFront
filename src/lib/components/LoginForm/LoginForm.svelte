<script lang="ts">
    import { Alert, Button, Input, InputGroupText, InputGroup } from '@sveltestrap/sveltestrap';
    import { login } from '../../../services/authService.js'; 
    import { goto } from '$app/navigation';
    import Icon from "@iconify/svelte";

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
            goto("/home");
            email = '';
            password = '';
        }
    };
</script>

<div class="form-container">
    <h3 class="text-center mb-4 text-primary">Login</h3>
    <div class="form-group">
        <div>
            <InputGroup class="mb-3">
                <InputGroupText>
                    <Icon icon="mdi:email" />
                </InputGroupText>
                <Input type="email" bind:value={email} placeholder="Enter Your Email"  required />
            </InputGroup>
        </div>

        <InputGroup class="mb-3">
            <InputGroupText>
                <Icon icon="mdi:lock" />
            </InputGroupText>
            <Input type="password" bind:value={password} placeholder="Enter Your Password"  required />
        </InputGroup>

        <Button color="primary" block on:click={handleLogin}>Login</Button>

        <div class="text-center mt-3">
            <p>If you don't have an account, <a href="/register">Please Register</a>.</p>
        </div>

        {#if AlertTrue}
            <Alert color="danger">
                {errorMessage}
            </Alert>
        {/if}
    </div>
</div>
