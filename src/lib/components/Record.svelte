<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	const sourceData = [
		{
			position: 1,
			exp: '001',
			nss: '1234567890',
			iniciales: 'M.A.C.G.',
			matricula: '12345678',
			facultad: 'FCQI',
			last_mod: '2021-09-01',
			riesgo: 'Alto'
		},
		{
			position: 2,
			exp: '002',
			nss: '1234567890',
			iniciales: 'M.A.C.G.',
			matricula: '12345678',
			facultad: 'FCQI',
			last_mod: '2021-09-01',
			riesgo: 'Alto'
		},
		{
			position: 3,
			exp: '003',
			nss: '1234567890',
			iniciales: 'M.A.C.G.',
			matricula: '12345678',
			facultad: 'FCQI',
			last_mod: '2021-09-01',
			riesgo: 'Alto'
		},
		{
			position: 4,
			exp: '004',
			nss: '1234567890',
			iniciales: 'M.A.C.G.',
			matricula: '12345678',
			facultad: 'FCQI',
			last_mod: '2021-09-01',
			riesgo: 'Alto'
		},
		{
			position: 5,
			exp: '005',
			nss: '1234567890',
			iniciales: 'M.A.C.G.',
			matricula: '12345678',
			facultad: 'FCQI',
			last_mod: '2021-09-01',
			riesgo: 'Alto'
		},
		{
			position: 6,
			exp: '006',
			nss: '1234567890',
			iniciales: 'M.A.C.G.',
			matricula: '12345678',
			facultad: 'FCQI',
			last_mod: '2021-09-01',
			riesgo: 'Alto'
		},
		{
			position: 7,
			exp: '007',
			nss: '1234567890',
			iniciales: 'M.A.C.G.',
			matricula: '12345678',
			facultad: 'FCQI',
			last_mod: '2021-09-01',
			riesgo: 'Alto'
		}
	];

	const tableSimple: TableSource = {
		head: ['No. exp', 'NSS', 'Iniciales', 'Matricula', 'Facultad', 'Última modificación', 'Riesgo'],
		body: tableMapperValues(sourceData, [
			'exp',
			'nss',
			'iniciales',
			'matricula',
			'facultad',
			'last_mod',
			'riesgo'
		]),
		meta: tableMapperValues(sourceData, [
			'position',
			'exp',
			'nss',
			'iniciales',
			'matricula',
			'facultad',
			'last_mod',
			'riesgo'
		])
	};
</script>

<div class="container items-center justify-center mx-auto"><Table source={tableSimple} /></div>
