let nomes = [];

function adicionar() {
	let nomeAmigo = document.getElementById('nome-amigo').value;
	if (nomeAmigo === '') {
		alert('Digite um nome');
		focaLimpa();
		return;
	}
	if (nomes.includes(nomeAmigo)) {
		alert('Nome já adicionado');
		focaLimpa();
		return;
	}
	nomes.push(nomeAmigo);

	let listaAmigos = document.getElementById('lista-amigos');
	if (listaAmigos.innerText === '') {
		listaAmigos.innerText += `${nomeAmigo}`;
	} else {
		listaAmigos.innerText += `, ${nomeAmigo}`;
	}

	focaLimpa();
}

function sortear() {
	let copiaNomes = nomes.slice();
	let listaSorteio = document.getElementById('lista-sorteio');
	listaSorteio.innerText = '';

	for (let i = 0; i < nomes.length; i++) {
		let nomesParaSorteio = copiaNomes.filter(
			(nome) => nome !== nomes[i]
		);
		let indiceSorteado = Math.floor(
			Math.random() * nomesParaSorteio.length
		);
		let sorteado = nomesParaSorteio[indiceSorteado];
		if (sorteado === undefined) {
			sorteado = 'ninguém';
		}
		listaSorteio.innerText += `${nomes[i]} -> ${sorteado} \n`;

		// Remove o nome sorteado da lista de cópia para não ser sorteado novamente
		let indiceNaCopia = copiaNomes.indexOf(sorteado);
		if (indiceNaCopia !== -1) {
			copiaNomes.splice(indiceNaCopia, 1);
		}
	}
}

function focaLimpa() {
	document.getElementById('nome-amigo').value = '';
	document.getElementById('nome-amigo').focus();
}

function reiniciar() {
	nomes = [];
	document.getElementById('lista-amigos').innerText = '';
	document.getElementById('lista-sorteio').innerText = '';
	focaLimpa();
}
