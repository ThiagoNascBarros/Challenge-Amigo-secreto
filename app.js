let amigos = [];

function limparCaixa() {
    entradaDoUsuario = document.querySelector('input');
    entradaDoUsuario.value = '';
}

function adicionarAmigo() {
    let entradaDoUsuario = document.querySelector('input').value;

    if (entradaDoUsuario === '') {
        alert('Por favor, insira um nome!');
    } else {
        amigos.push(entradaDoUsuario);
    }

    atualizaLista();
    limparCaixa();
}

function atualizaLista() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigo = document.createElement('li');

        amigo.innerHTML = amigos[i];

        lista.appendChild(amigo)
    }
}