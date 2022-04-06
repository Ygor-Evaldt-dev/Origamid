const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "));
while (numero <= 0) {
  console.log("Número inválido, o número precisa ser maior que 0");
  numero = parseInt(prompt("Digite um número: "));
}
const aoQuadrado = Math.pow(numero, 2);
const aoCubo = Math.pow(numero, 3);
const raizQuadrada = Math.sqrt(numero);
const raizCubica = Math.cbrt(numero);

console.log(`O numero ${numero} ao quadrado é ${aoQuadrado}\nAo cubo é ${aoCubo}\nA raiz quadrada é ${raizQuadrada.toFixed(2)}\nA raiz cubica é ${raizCubica.toFixed(2)}`);