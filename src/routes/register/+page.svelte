<script lang="ts">
    import RegisterForm from "$lib/components/RegisterForm/RegisterForm.svelte";
    import { register } from "../../services/authService.js";
    import { goto } from '$app/navigation';
    import "./register.css"
    
    let errorMessage: string = ''; 
    let showAlert: boolean = false; 
  
    const handleFormSubmit = async (event: CustomEvent<{ username: string; email: string; password: string }>) => {
      const { username, email, password } = event.detail;
      try {
        const successMessage = await register(username, email, password); 
        errorMessage = successMessage; 
        showAlert = false; 
        goto("/"); 
      } catch (error: unknown) {
        errorMessage = error instanceof Error ? error.message : "Une erreur inconnue s'est produite";
        showAlert = true; 
      }
    };
  </script>

<div>
    <RegisterForm
        username=""
        email=""
        password=""
        errorMessage={errorMessage}
        showError={showAlert}
        on:submit={handleFormSubmit}
    />
</div>
