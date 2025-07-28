//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let nome;

function adicionarAmigo() {
    nome = document.querySelector("input").value;

    if (nome === "") {
        return alert("Digite um nome válido.");
    }

    listaAmigos.push(nome);
}