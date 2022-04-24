const prompt = require("prompt-sync")();

let numeros = [];
let i = 0;
while (i < 2) {
  numeros[i] = parseInt(prompt(`${i + 1}º Número: `));
  i++;
}
if (numeros[0] > numeros[1]) {
  console.log(`O número ${numeros[0]} é maior que o número ${numeros[1]}`);
} else if (numeros[1] > numeros[0]) {
  console.log(`O número ${numeros[1]} é maior que o número ${numeros[0]}`);
} else {
  console.log(`Os números são iguais`);
}
