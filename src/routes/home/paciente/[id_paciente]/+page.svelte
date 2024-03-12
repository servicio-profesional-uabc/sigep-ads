<script lang="ts">
	import HeaderPaciente from '$lib/components/HeaderPaciente.svelte';
	export let data;
</script>

<HeaderPaciente id_paciente={data.post.paciente} />
