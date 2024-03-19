<script lang="ts">
	import { page } from '$app/stores';
	$: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-700' : '');
</script>

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
<nav class="list-nav text-white font-bold bg-primary-500">
	<ul>
		<li class="hover:bg-primary-400 transition-all">
			<a href="/admin/home/add_user" class={classesActive('/admin/home/add_user')}>
				<span>Agregar Usuarios</span>
			</a>
		</li>
		<li class="hover:bg-primary-400 transition-all">
			<a href="/admin/home/manage_users" class={classesActive('/admin/home/manage_users')}>
				<span>Administrar Usuarios</span>
			</a>
		</li>
	</ul>
</nav>
