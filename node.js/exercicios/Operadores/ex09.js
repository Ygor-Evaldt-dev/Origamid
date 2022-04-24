const prompt = require("prompt-sync")();

const base = parseFloat(prompt("Base do triângulo: "));
const altura = parseFloat(prompt("Altura do triângulo: "));
const area = (base * altura) / 2;

console.log(`Á área do triângulo é: ${area}`);
