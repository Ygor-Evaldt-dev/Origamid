const prompt = require("prompt-sync")();

const pes = parseInt(prompt("Digite um valor em pes: "));
const polegada = pes * 12;
const jardas = pes / 3;
const milhas = jardas / 1760;

console.log(`${pes} pés equivale a:\n${polegada.toFixed(2)} polegadas.\n${jardas.toFixed(2)} jardas.\n${milhas.toFixed(4)} milhas.`);
