const prompt = require("prompt-sync")();

const salario =  parseFloat(prompt("Digite o valor do salario: $"));
const gratificacao = salario * (5 / 100);
const imposto = salario * (7 / 100);
const salarioReceber = (salario + gratificacao) - imposto;

console.log(`O salario a receber é de $${salarioReceber.toFixed(2)}`);

