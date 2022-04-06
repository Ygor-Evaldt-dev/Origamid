const prompt = require("prompt-sync")();

const salarioBase = parseFloat(prompt("Salario do colaborador: $"));
const bonificacao = 50;
const imposto = salarioBase * (10 / 100);
const salarioReceber = (salarioBase - imposto) + bonificacao;

console.log(`Salario a receber: $${salarioReceber.toFixed(2)}`);
