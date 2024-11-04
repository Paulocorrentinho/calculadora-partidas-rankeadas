const entradaDeDados = require('prompt-sync')()

let vitorias
let derrotas
let resultadoVitorias = 0
let resp = "s"

function incerirDados() {
    vitorias = 0
    derrotas = 0
    vitorias = parseInt(entradaDeDados("Quantidade de vitórias: "))
    derrotas = parseInt(entradaDeDados("Quantidade de derrotas: "))
}

function calcularResultadoDeVitorias(valor1, valor2, retornarPositivo = true) {
    return valor1 - valor2
}

function nivelDoHeroi(resultadoVitorias) {
    
    if (resultadoVitorias < 10) {
        return "Ferro"
    } else if (resultadoVitorias > 11 && resultadoVitorias <= 20) {
        return "Bronze"
    } else if (resultadoVitorias > 21 && resultadoVitorias <= 50) {
        return "Prata"
    } else if (resultadoVitorias > 51 && resultadoVitorias <= 80) {
        return "Ouro"
    } else if (resultadoVitorias > 81 && resultadoVitorias <= 90) {
        return "Diamante"
    } else if (resultadoVitorias > 91 && resultadoVitorias <= 100) {
        return "Lendário"
    } else {
        return "Imortal"
    }
}

do {
    incerirDados();
    resultadoVitorias = calcularResultadoDeVitorias(vitorias, derrotas);
    let posicao = nivelDoHeroi(resultadoVitorias);

    //tratamento para quando o usuário esta com um saldo negativo
    if (resultadoVitorias <= 0) {
        console.log("Você não atingiu nível suficiente para entrar no ranking.")
    } else {
        console.log("O Heroi tem de saldo de " + resultadoVitorias + " e está no nivel de " + posicao)
    }

    resp = entradaDeDados("Gostaria de continuar com os testes?(s/n) ")
} while (resp === "s");