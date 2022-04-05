// Crie uma função para verificar se um valor é Truthy
function verificar(dado) {
  return !!dado;
}
console.log(verificar(" "));

/* Crie uma função matemática que retorne o perímetro de um quadrado
 lembrando: perímetro é a soma dos quatro lados do quadrado*/
function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(10));

/* Crie uma função que retorne o seu nome completo ela deve possuir os parâmetros: nome e sobrenome*/
function nomeCompleto(nome, sobrenome) {
  return `Seu nome completo é ${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Ygor", "Evaldt"));

// Crie uma função que verifica se um número é par
function numeroParImpar(numero) {
  if (numero % 2 === 1) {
    return `O ${numero} é um número impar`;
  } else {
    return `O ${numero} é um número par`;
  }
}
console.log(numeroParImpar(1));

/* Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)*/
function tipoDado(dado) {
  return typeof dado;
}
console.log(tipoDado(true));

/* addEventListener é uma função nativa do JavaScript
 o primeiro parâmetro é o evento que ocorre e o segundo o Callback
 utilize essa função para mostrar no console o seu nome completo
 quando o evento 'scroll' ocorrer.*/
addEventListener("scroll", function () {
  console.log("Ygor Evaldt");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(jaVisitei) {
  return `Já visitei ${jaVisitei} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
