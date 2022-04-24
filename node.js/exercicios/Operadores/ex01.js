const prompt = require("prompt-sync")();

let i = 0;
let soma = 0;
while (i < 4) {
  let numero = parseInt(prompt("Digite um número: "));
  soma += numero;
  i++;
}
console.log(`A soma dos números digitados é: ${soma}`);
