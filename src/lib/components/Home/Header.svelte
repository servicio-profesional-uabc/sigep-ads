<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import Logo from '$lib/assets/uabc-logo.png';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { currentUser, pb } from '$lib/utils/pocketbase';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	function signOut() {
		pb.authStore.clear();
		if (browser) {
			goto('/');
		}
	}

	let currentTile = 0;
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<div class="container mx-auto flex justify-start items-center w-f">
			<img class="w-20 mx-5" src={Logo} alt="Logo de la UABC" />
			<div class="space-y-0 text-center flex flex-col items-start">
				<h2 class="h3 text-primary-500 font-bold">Universidad Autónoma de Baja California</h2>
				<h3 class="text-lg text-secondary-500">
					SIGEP - Sistema de Información de Gestión Psicopedagógica
				</h3>
				<div class="space-y-2"></div>
			</div>
		</div>
	</svelte:fragment>
	<div class="container mx-auto flex justify-end items-center">
		<div class="space-y-0 text-center flex flex-col items-end">
			<h2 class="text-2xl text-tertiary-900 font-semibold">USUARIO</h2>
			<h3 class="text-lg text-tertiary-900">01234567 - {$currentUser?.username}</h3>
			<div class="space-y-2"></div>
		</div>
	</div>
	<svelte:fragment slot="trail">
		<button
			type="button"
			class="btn-icon-lg fa-solid fa-arrow-right-from-bracket"
			on:click={signOut}
		>
		</button>
	</svelte:fragment>
</AppBar>
