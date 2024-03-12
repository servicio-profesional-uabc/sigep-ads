<script lang="ts">
	import { error, redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	import { pb } from '$lib/utils/pocketbase';
	import { browser } from '$app/environment';
	import { currentUser } from '$lib/utils/pocketbase';
	import Record from '$lib/components/Record.svelte';
	import { onMount } from 'svelte';

	/*onMount(() => {
		if (pb.authStore.isValid) {
			if (browser) {
				goto('/');
			}
		}
	});*/
</script>

{#if !$currentUser}
	<p>Please sign in</p>
{/if}
<Record />
