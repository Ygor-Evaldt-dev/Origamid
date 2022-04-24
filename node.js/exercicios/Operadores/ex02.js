const prompt = require("prompt-sync")();

let i = 1;
let somaNotas = 0;
let mediaAritimetica = 0;
let nomeAluno = prompt("Nome do aluno: ");

while (i < 4) {
  let nota = parseInt(prompt(`Nota do ${i}º trimestre: `));
  somaNotas += nota;
  i++;
  }
console.log(`A média aritimética das notas do aluno ${nomeAluno} foi ${ somaNotas / (i - 1)}`);
