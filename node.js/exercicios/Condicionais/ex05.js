const prompt = require("prompt-sync")();

let numeros = [];
let aux = 1;
let opcao, resultado;
for (i = 0; i < 2; i++) {
  numeros[i] = parseInt(prompt(`${aux}º número: `));
}
console.log(
  "Opções:\n[1] - Média entre os números digitados.\n[2] - Diferença do maior pelo menos.\n[3] - Produto entre os números digitados\n[4] - Divisão do primeiro pelo segundo."
);
opcao = parseInt(prompt("Digite sua opção: "));
while (opcao < 1 || opcao > 4) {
  console.log("Opção inválida");
  opcao = parseInt(prompt("Digite sua opção: "));
}
switch (opcao) {
  case 1:
    resultado = (numeros[0] + numeros[1]) / numeros.length;
  case 2:
    resultado = Math.abs(numeros[0] - numeros[1]);
  case 3:
    resultado = numeros[0] * numeros[1];
  case 4:
    if (numeros[1] <= 0) {
      console.log("O 2º número tem que ser maior que 0");
    } else {
      resultado = numeros[0] / numeros[1];
    }
}
console.log(`Resultado: ${resultado}`);
