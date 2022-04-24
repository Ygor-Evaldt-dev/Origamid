/*Média para ser aprovado: 7*/
const prompt = require("prompt-sync")();

const mediaAprovado = 7;
let notas = [],
  i,
  mediaAritimetica,
  soma = 0;

for (i = 0; i < 4; i++) {
  notas[i] = parseFloat(prompt(`Digite a ${i + 1}º nota: `));
  soma += notas[i];
}
mediaAritimetica = soma / i;
if (mediaAritimetica >= 7) {
  console.log(`\nMédia ${mediaAritimetica.toFixed(1)} - Aprovado.`);
} else {
  console.log(`\nMéida ${mediaAritimetica} - Reprovado`);
}
