const prompt = require("prompt-sync")();

let valorSalario = parseFloat(prompt("Valor do salário: $"));
let horasTrabalhadas = parseInt(prompt("Horas trabalhadas: "));
let valorHora = valorSalario / 2;
let salarioBruto = horasTrabalhadas * valorHora;
let imposto = salarioBruto * (3 / 100);
let salarioReceber = salarioBruto - imposto;

console.log(`Valor da hora trabalhada: ${valorHora}.\nSalario bruto: ${salarioBruto}.\nImposto: ${imposto}.\nSalario a receber: $${salarioReceber}.`);
