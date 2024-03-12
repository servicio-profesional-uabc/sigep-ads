export function load({ params }) {
	return {
		post: {
			paciente: params.id_paciente
		}
	};
}
