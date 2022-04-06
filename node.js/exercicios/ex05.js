const prompt = require("prompt-sync")();

const colaborador = prompt("nome do colaborador: ");
const salario = parseFloat(prompt("Digite o salário: $"));
const percAumento = parseFloat(prompt("Percentual de aumento: "));
const valorAumento = salario * (percAumento / 100);
const novoSalario = salario + valorAumento;

console.log(`O novo salário do colaborador ${colaborador} é $${novoSalario.toFixed(2)} reais`);
