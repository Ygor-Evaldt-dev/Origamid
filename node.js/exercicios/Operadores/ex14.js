const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome: ");
const dataNascimento = parseInt(prompt("Ano do nascimento: "));
const anoAtual = parseInt(prompt("Ano atual: "));
const idade = anoAtual - dataNascimento;
const anoFuturo = 2050;
const idadeFutura = anoFuturo - dataNascimento;

console.log(`A idade de ${nome} é ${idade} anos.\n${nome} terá ${idadeFutura} anos de idade em ${anoFuturo}.`);
