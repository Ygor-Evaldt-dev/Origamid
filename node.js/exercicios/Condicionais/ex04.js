const prompt = require("prompt-sync")();

let numeros = [];
let aux = 1;
for (i = 0; i < 3; i++) {
  numeros[i] = parseInt(prompt(`${aux}º número: `));
  aux++;
}
console.log(`${numeros.sort()}`);
