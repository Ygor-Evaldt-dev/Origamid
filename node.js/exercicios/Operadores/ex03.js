const prompt = require("prompt-sync")();

let i = 0;
let notaPeso = 0;
let somaPeso = 0;
let mediaPonderada;
const nome = prompt("Nome do aluno: ");
while (i < 3) {
  let peso = parseInt(prompt("Peso do trimestre: "));
  let nota = parseInt(prompt("Nota do aluno: "));
  somaPeso += peso;
  notaPeso += nota * peso;
  i++;
}
mediaPonderada = notaPeso / somaPeso;
console.log(`A média ponderada das notas de ${nome} foi de ${mediaPonderada}`);
