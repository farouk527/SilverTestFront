<script>
    import FormLogin from '$lib/components/LoginForm/LoginForm.svelte'; 
	import { onMount } from 'svelte';
    import '../app.css'
	import { checkAuth } from '../utils/auth.ts';


    onMount(()=>{
      checkAuth();
    })

  </script>
  
  <div>
    <!--calling the Form LoginForm in / route--> 
    <FormLogin />
   
  </div>