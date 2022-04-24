const prompt = require("prompt-sync")();
const aprovado = 7,
  exame = 4;

let notas = [],
  i = 0,
  soma = 0,
  mediaAritimetica;
while (notas.length < 2) {
  notas[i] = parseFloat(prompt(`${i + 1}º Nota: `));
  while (notas[i] < 0 || notas[i] > 10) {
    console.log("Nota inválida.");
    notas[i] = parseFloat(prompt(`${i + 1}º Nota: `));
  }
  soma += notas[i];
  i++;
}
mediaAritimetica = soma / i;
if (mediaAritimetica >= aprovado) {
  console.log(`Média ${mediaAritimetica} - Aprovado`);
} else if (mediaAritimetica < exame) {
  console.log(`Média ${mediaAritimetica} - Reprovado`);
} else {
  console.log(`Média ${mediaAritimetica} - Exame`);
}
