<script lang="ts">
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import Logo from '$lib/assets/uabc-logo.png';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { currentUser, pb } from '$lib/utils/pocketbase';
	import { goto, invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// if user is not logged in, redirect to login Page
	if (!$currentUser) {
		if (browser) {
			goto('/');
		}
	}

	function signOut() {
		pb.authStore.clear();
		if (browser) {
			goto('/');
		}
	}

	let currentTile = 0;
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-primary-500 w-44 rounded">
	<svelte:fragment slot="header">
		<!-- App Bar -->
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
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div>
			<span class="text-white font-bold mx-2 text-left items-center justify-center flex">
				Buscar paciente de otra unidad academica</span
			>
		</div>
		<input
			class="text-xs rounded-sm items-center flex justify-center text-left w-full h-8 bg-white border-2 border-primary-500"
			type="text"
			placeholder="No. de empleado / Matricula"
		/>
		<Navigation />
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
