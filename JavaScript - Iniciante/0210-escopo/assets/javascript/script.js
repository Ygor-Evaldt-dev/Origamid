/* Por qual motivo o código abaixo retorna com erros? 
Porque o "console.log está tentando mostrar no concole variáveis que estão definidas em um bloco."*/
{
  let cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

/* Como corrigir o erro abaixo? 
Era só passar variavel "dois" para fora do escopo das funções */
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

/* O que fazer para total retornar 500? 
Tinha um laço "for" desnecessário.. para total retornar 500 basta apenas multiplicar o número por 10*/
const numero = 50;
const total = 10 * numero;
console.log(total);
