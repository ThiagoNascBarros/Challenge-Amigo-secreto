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

    limparCaixa();
}

