//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let tamanhoLista;

let indiceSorteado;
let nomeSorteado;

let nome;

function limparCampo() {
    document.querySelector("input").value = "";
}

function visualizarLista(nome) {
    let lista = document.getElementById("listaAmigos");
    let novoItem = document.createElement("li");

    novoItem.innerHTML = nome;

    lista.appendChild(novoItem);
}

function adicionarAmigo() {
    nome = document.querySelector("input").value;

    if (nome === "") {
        return alert("Por favor, insira um nome.");
    }

    listaAmigos.push(nome);

    visualizarLista(nome);

    limparCampo();
}

function sortearAmigo() {
    tamanhoLista = listaAmigos.length;

    if (tamanhoLista === 0) {
        return alert("A lista de amigos está vazia.");
    }

    indiceSorteado = parseInt((Math.random() * tamanhoLista));

    nomeSorteado = listaAmigos[indiceSorteado];

    listaAmigos = [];

    document.getElementById("listaAmigos").innerHTML = "";

    let lista = document.getElementById("resultado");
    let novoItem = document.createElement("li");

    novoItem.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;

    lista.appendChild(novoItem);
}