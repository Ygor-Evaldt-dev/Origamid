const prompt = require("prompt-sync")();

const salario = parseFloat(prompt("Digite o salário do colaborador: $"));
const percAumento = parseFloat(prompt("Percentual de aumento: "));
const novoSalario = salario + (salario * percAumento / 100);

console.log(`Novo salário do colaborador: $${novoSalario.toFixed(2)} reais`);

