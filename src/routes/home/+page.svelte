<script lang="ts">
	import { error, redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { pb } from '$lib/pocketbase';
	import { browser } from '$app/environment';
	import { currentUser } from '$lib/pocketbase';
	import Record from '$lib/Record.svelte';

	/*if (pb.authStore.isValid) {
		if (browser) {
			goto('/');
		}
	}*/
</script>

{#if !currentUser}
	<p>Please sign in</p>
{/if}
<Record />
