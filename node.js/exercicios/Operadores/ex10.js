const prompt = require("prompt-sync")();

const raio = parseFloat(prompt("Digite a medida do raio do circulo: "));
const pi = 3.14;
const areaCirculo = pi * Math.pow(raio, 2);

console.log(`A área do circulo é ${areaCirculo}`);
