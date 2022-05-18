const bd = [
	{nombre: 'Mario', edad: 29},
	{nombre:'Erick', edad:29},
	{nombre:'Alejandro', edad:54}
]

function usuario(fruta){
	return fruta.nombre === 'Alejandro';
}

console.log(bd.find(usuario));