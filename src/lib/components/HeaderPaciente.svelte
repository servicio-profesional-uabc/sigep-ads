<script lang="ts">
	import GreenBtn from './GreenBtn.svelte';
	// TODO: Añadir estructura de para la ficha
</script>

<div class="card card-hover p-4 container mx-auto justify-start w-full flex flex-row">
	<div class="space-y-0 text-center flex flex-col items-start">
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">Nombre(s):</h2>
			<h3 class="mx-2 text-base text-gray-500">John Doe</h3>
		</div>
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">NSS:</h2>
			<h3 class="mx-2 text-base text-gray-500">1234567890</h3>
		</div>
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">No. Empleado / Matricula:</h2>
			<h3 class="mx-2 text-base text-gray-500">01234567</h3>
		</div>
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">Últ. problemática:</h2>
			<h3 class="mx-2 text-base text-gray-500">Ansiedad</h3>
		</div>
	</div>

	<div class="space-y-3 text-center flex flex-col items-start mx-72">
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">Edad:</h2>
			<h3 class="mx-2 text-base text-gray-500">21</h3>
		</div>
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">Carrera:</h2>
			<h3 class="mx-2 text-base text-gray-500">ISTE</h3>
		</div>
		<div class="flex items-center">
			<!--TODO: make h2 text wrap for better clarity -->
			<h2 class="text-lg font-semibold whitespace-normal">Ciclo escolar de ingreso:</h2>
			<h3 class="mx-2 text-base text-gray-500">2020-2</h3>
		</div>
	</div>

	<div class="space-y-3 text-center flex flex-col items-start">
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">Ocupación:</h2>
			<h3 class="mx-2 text-base text-gray-500">Estudiante</h3>
		</div>
		<div class="flex items-center">
			<h2 class="text-lg font-semibold">Tel. de contacto:</h2>
			<h3 class="mx-2 text-base text-gray-500">(664) 123-4567</h3>
		</div>
		<div class="flex items-center">
			<!--TODO: make h2 text wrap for better clarity -->
			<h2 class="text-lg font-semibold whitespace-normal">Tel. contacto de emergencia:</h2>
			<h3 class="mx-2 text-base text-gray-500">(664) 123-4567</h3>
		</div>
		<div class="relative left-72"><GreenBtn text="Editar" /></div>
	</div>
</div>
