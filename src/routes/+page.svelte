<script lang="ts">
	import Home from '$lib/Home.svelte';
	import Login from '$lib/Login.svelte';
	import Logo from '$lib/assets/uabc-logo.png';
	import { redirect } from '@sveltejs/kit';

	// throw redirect(302, '/login');
</script>

<div class="container mx-auto flex justify-center items-center my-10">
	<div class="space-y-6 text-center flex flex-col items-center">
		<img class="w-40" src={Logo} alt="Logo de la UABC" />
		<h2 class="h2 text-primary-500 font-bold">Universidad Autónoma de Baja California</h2>
		<h3 class="text-2xl text-secondary-500">
			SIGEP - Sistema de Información de Gestión Psicopedagógica
		</h3>
		<div>
			<Login />
		</div>
	</div>
</div>
