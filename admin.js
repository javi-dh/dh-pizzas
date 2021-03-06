const fs = require('fs');

const rutaPedidos = `${__dirname}/pedidos.json`;
const contenidoPedidos = fs.readFileSync(rutaPedidos, 'utf8');
let pedidos = contenidoPedidos.length > 0 ? JSON.parse(contenidoPedidos) : null;

if (pedidos == null) {
	console.log('No hay pedidos para generar el reporte');
} else {
	console.log('Si hay pedidos, vamos a generar el reporte');
	console.log(`Cantidad total de pedidos: ${pedidos.length}`);
	
	// 'Muzzarela', 'Jamón y morrón', 'Calabresa', 'Napolitana'
	let filtrarPorGusto = gusto => pedidos.filter(pedido => pedido.gustoPizza == gusto).length

	function longArray (array) {
		return array.length;
	}

	function filtrarPorLoQueSea (prop, dato, queQuere = null) {
		let arrayFinal = pedidos.filter(function (pedido) {
			return pedido[prop] == dato;
		});
		if (queQuere == 'long') {
			return longArray(arrayFinal);
		} 
		return arrayFinal;
	}

	let pizzasPersonales = filtrarPorLoQueSea('tamanioPizza', 'Personal');
	let cantPizzasPersonales = filtrarPorLoQueSea('tamanioPizza', 'Personal', 'long');

	console.log(pizzasPersonales);
	console.log(cantPizzasPersonales);
	

	let gustoMuzzarela = filtrarPorGusto('Muzzarela');
	console.log(gustoMuzzarela);

	// let gustoJamon = filtrarPorGusto('Jamón y morrón');
	// let gustoCalabresa = filtrarPorGusto('Calabresa');
	// let gustoNapolitana = filtrarPorGusto('Napolitana');

	// console.log(`Cantidad de Muzza: ${gustoMuzzarela}`);
	// console.log(`Cantidad de Jamón y morrón: ${gustoJamon}`);
	// console.log(`Cantidad de Calabresa: ${gustoCalabresa}`);
	// console.log(`Cantidad de Napolitana: ${gustoNapolitana}`);

	// let contenidoAGuardar = `
	// 	Cantidad total de pedidos: ${pedidos.length}
	// 	Cantidad de Muzza: ${gustoMuzzarela}
	// 	Cantidad de Jamón y morrón: ${gustoJamon}
	// 	Cantidad de Calabresa: ${gustoCalabresa}
	// 	Cantidad de Napolitana: ${gustoNapolitana}
	// `;

	// fs.writeFileSync(`${__dirname}/reporte.txt`, contenidoAGuardar);
}