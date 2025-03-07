let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        input.value = '';
        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("apresentacao").textContent = "Amigo sorteado:";
        document.getElementById("resultado-amigo").textContent = amigoSorteado;
    } else {
        alert("Adicione amigos antes de sortear.");
    }
}

function resetarSorteio() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("apresentacao").textContent = "";
    document.getElementById("resultado-amigo").textContent = "";
    alert("Tudo zerado! Bora começar de novo!");
}