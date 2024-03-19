<script lang="ts">
	import { AppShell, AppBar, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Home/Header.svelte';
	import AdminSidebar from '$lib/components/Home/AdminSidebar.svelte';
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { currentUser, pb } from '$lib/utils/pocketbase';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// if user is not logged in, redirect to login Page
	if (!$currentUser) {
		if (browser) {
			goto('/');
		}
	}
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-primary-500 w-44 rounded">
	<!-- Header -->
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>

	<!-- Side Bar -->
	<svelte:fragment slot="sidebarLeft">
		<AdminSidebar />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />

	<!-- Footer -->
	<svelte:fragment slot="footer"></svelte:fragment>
</AppShell>
