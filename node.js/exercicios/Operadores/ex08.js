const prompt = require("prompt-sync")();

const deposito = parseFloat(prompt("Valor do depósito: $"));
const taxaJuros = parseInt(prompt("Taxa de juros: "));
const rendimento = deposito * taxaJuros / 100;
const valorTotal = deposito + rendimento;

console.log(`O valor do rendimento foi de $${rendimento.toFixed(2)} e o total ficou $${valorTotal.toFixed(2)}`);