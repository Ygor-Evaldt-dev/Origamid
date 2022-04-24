const prompt = require("prompt-sync")();

let numero1 = parseInt(prompt("Digite um número maior que zero: "));
while(numero1 <= 0) {
  console.log("Numero inválido");
  numero1 = parseInt(prompt("Digite um número maior que zero: "));
}
let numero2 = parseInt(prompt("Digite outro número maior que zero: "));
while(numero2 <= 0) {
  console.log("Numero inválido");
  numero2 = parseInt(prompt("Digite um número maior que zero: "));
}
let resultado;

resultado = Math.pow(numero1, numero2);
console.log(`O número ${numero1} elevado ao número ${numero2} é igual a ${resultado}`);
