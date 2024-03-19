<script lang="ts">
	const active_status = [
		{ id: 0, name: 'Activo' },
		{ id: 1, name: 'Inactivo' }
	];

	const academic_units = [
		{ id: 1, name: 'Facultad de Ciencias Administrativas' },
		{ id: 2, name: 'Facultad de Ciencias Químicas e Ingeniería' },
		{ id: 3, name: 'Facultad de Ciencias Sociales y Políticas' },
		{ id: 4, name: 'Facultad de Derecho' },
		{ id: 5, name: 'Facultad de Enfermería' },
		{ id: 6, name: 'Facultad de Medicina' },
		{ id: 7, name: 'Facultad de Odontología' },
		{ id: 8, name: 'Facultad de Trabajo Social' }
	];

	let data = [
		{ name: 'Miguel Cuevas', id: '01234567', academic_unit: 4, status: 0 },
		{ name: 'Maria Barriba', id: '12345678', academic_unit: 3, status: 0 },
		{ name: 'Sebastian Valenzuela', id: '23456789', academic_unit: 2, status: 1 },
		{ name: 'Marco Leon', id: '34567890', academic_unit: 1, status: 0 }
	];
</script>

<div>
	<div>
		<a href="/admin/home" class="">
			<button type="button" class="btn-icon-xl fa-solid fa-arrow-left h-0" />
		</a>
	</div>
	<h2 class="text-3xl text-black text-center">ADMINISTRAR USUARIOS</h2>

	<div class="table-container flex items-center justify-center my-8">
		<!-- Native Table Element -->
		<table class="table table-hover w-auto">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Matricula</th>
					<th>Unidad Academica</th>
					<th>Estado de Actividad</th>
				</tr>
			</thead>
			<tbody>
				{#each data as item (item.id)}
					<tr>
						<td>{item.name}</td>
						<td>{item.id}</td>
						<td>
							<label class="label">
								<span>Unidad Académica</span>
								<select
									name="academic_unit"
									id="academic_unit"
									class="select"
									bind:value={item.academic_unit}
									on:change={() => console.log(item.academic_unit)}
								>
									{#each academic_units as unit}
										<option value={unit.id} selected={unit.id === item.academic_unit}
											>{unit.name}</option
										>
									{/each}
								</select>
							</label></td
						>

						<td>
							<label class="label">
								<span>Estado de actividad</span>
								<select
									name="active_status"
									id="active_status"
									class="select"
									bind:value={item.status}
									on:change={() => console.log(item.status)}
								>
									{#each active_status as status}
										<option value={status.id} selected={status.id === item.status}
											>{status.name}</option
										>
									{/each}
								</select>
							</label></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="items-center flex flex-col">
		<button type="submit" class="btn bg-primary-500 text-white">Guardar</button>
	</div>
</div>
