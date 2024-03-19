<script lang="ts">
	let academic_units = [
		{ id: 1, name: 'Facultad de Ciencias Administrativas' },
		{ id: 2, name: 'Facultad de Ciencias Químicas e Ingeniería' },
		{ id: 3, name: 'Facultad de Ciencias Sociales y Políticas' },
		{ id: 4, name: 'Facultad de Derecho' },
		{ id: 5, name: 'Facultad de Enfermería' },
		{ id: 6, name: 'Facultad de Medicina' },
		{ id: 7, name: 'Facultad de Odontología' },
		{ id: 8, name: 'Facultad de Trabajo Social' }
	];
</script>

<div>
	<div>
		<a href="/admin/home" class="">
			<button type="button" class="btn-icon-xl fa-solid fa-arrow-left" />
		</a>
	</div>

	<h2 class="text-3xl text-black text-center">AGREGAR USUARIOS</h2>

	<div class="flex items-center justify-center my-4">
		<div class="card p-4 w-[50pc] text-token space-y-5">
			<label class="label">
				<span>Nombre(s)</span>
				<input type="text" id="name" name="name" class="input" placeholder="Escriba su nombre" />
			</label>

			<label class="label">
				<span>Apellido(s)</span>
				<input
					type="text"
					id="surname"
					name="surname"
					class="input"
					placeholder="Escriba sus apellidos"
				/>
			</label>

			<label class="label">
				<span>ID de Empleado</span>
				<input
					type="text"
					id="employee_id"
					name="employee_id"
					class="input"
					placeholder="Escriba su número de empleado"
				/>
			</label>

			<label class="label">
				<span>Teléfono de contacto</span>
				<input
					type="text"
					id="contact_number"
					name="contact_number"
					class="input"
					placeholder="Escriba su número de teléfono"
				/>
			</label>

			<label class="label">
				<span>Unidad Académica</span>
				<select
					name="academic_unit"
					id="academic_unit"
					class="select"
					placeholder="Selecciona una Unidad Académica"
				>
					{#each academic_units as unit}
						<option value={unit.id}>{unit.name}</option>
					{/each}
				</select>
			</label>

			<label class="label">
				<span>Correo Electrónico</span>
				<input
					type="text"
					id="email"
					name="email"
					class="input"
					placeholder="Escriba su correo electrónico"
				/>
			</label>

			<label class="label">
				<span>Contraseña</span>
				<input
					type="text"
					id="password"
					name="password"
					class="input"
					placeholder="Escriba su contraseña"
				/>
			</label>

			<label class="label">
				<span>Confirmar contraseña</span>
				<input
					type="text"
					id="password_confirmation"
					name="password_confirmation"
					class="input"
					placeholder="Confirmar contraseña"
				/>
			</label>
		</div>
	</div>

	<!--
		<form action="/admin/home/add_user" method="post">
		<div class="flex flex-col space-y-5 items-center">
			<div class="flex flex-col">
				<label for="name" class="text-black">Nombre</label>
				<input type="text" id="name" name="name" class="input w-80 h-8" />
			</div>
			<div class="flex flex-col">
				<label for="email" class="text-black">Correo</label>
				<input type="email" id="email" name="email" class="input w-80 h-8" />
			</div>
			<div class="flex flex-col">
				<label for="password" class="text-black">Contraseña</label>
				<input type="password" id="password" name="password" class="input w-80 h-8" />
			</div>
			<div class="flex flex-col">
				<label for="password_confirmation" class="text-black">Confirmar contraseña</label>
				<input
					type="password"
					id="password_confirmation"
					name="password_confirmation"
					class="input w-80 h-8"
				/>
			</div>
			<div class="flex flex-col">
				<label for="role" class="text-black">Rol</label>
				<select id="role" name="role" class="input w-80 h-8">
					<option value="admin">Administrador</option>
					<option value="user">Usuario</option>
				</select>
			</div>
			<div class="flex flex-col">
				<label for="status" class="text-black">Estado</label>
				<select id="status" name="status" class="input w-80 h-8">
					<option value="active">Activo</option>
					<option value="inactive">Inactivo</option>
				</select>
			</div>
			<div class="flex flex-col">
				<button type="submit" class="btn-primary">Agregar</button>
			</div>
		</div>
	</form>
	-->
</div>
