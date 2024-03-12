<script lang="ts">
	export let text: string = 'Default Text';
	export let handleClick: () => void = () => {};
</script>

<div class="space-y-5">
	<button class="btn-sm rounded bg-primary-500 text-white" on:click={handleClick}>{text}</button>
</div>
