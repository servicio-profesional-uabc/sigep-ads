<script lang="ts" context="module">
	import { currentUser, pb } from '../utils/pocketbase';
	import { error, redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let username: string;
	let password: string;

	async function login() {
		try {
			await pb.collection('users').authWithPassword(username, password);
		} catch (e) {
			console.log('Error: ', e);
			throw error(500, 'Something went wrong logging in');
		}
		console.log('Logged in');
		goto('/home');
	}

	async function signUp() {
		try {
			const data = {
				username,
				password,
				passwordConfirm: password,
				name: 'John Doe'
			};
			const createdUser = await pb.collection('users').create(data);
			await login();
		} catch (e) {
			console.error(e);
		}
	}

	function signOut() {
		pb.authStore.clear();
	}
</script>

<div class="container flex mx-auto space-y-20">
	<form class="space-y-2" on:submit|preventDefault>
		<label class="label" for="username">
			<span>Matrícula / No. de empleado</span>
			<input class="input" placeholder="Inserte su usuario" type="text" bind:value={username} />
		</label>
		<label class="label" for="password"
			><span>Contraseña</span><input
				class="input"
				placeholder="Inserte su contraseña"
				type="password"
				bind:value={password}
			/>
		</label>
		<br />
		<div class="space-y-5">
			<button on:click={login} class="btn bg-primary-500 text-white">Iniciar sesión</button>
		</div>
	</form>
</div>
