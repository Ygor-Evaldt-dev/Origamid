const prompt = require("prompt-sync")();

let precoVeiculo = parseFloat(prompt("Valor do veículo: $"));
let lucroDistribuidor = parseFloat(prompt("Percentual de lucro do distribuidor: "));
let imposto = parseFloat(prompt("Percentual de imposto: "));
let precoFinal;

lucroDistribuidor = precoVeiculo * (lucroDistribuidor / 100);
imposto = precoVeiculo * (imposto / 100);
precoFinal = precoVeiculo + lucroDistribuidor + imposto;

console.log(`O lucro do distribuidor será de: $${lucroDistribuidor.toFixed(2)}.\nO valor do imposto sobre o valor do veiculo será de: $${imposto.toFixed(2)}.\nO preço final do veiculo será: $${precoFinal.toFixed(2)}.`)