/* Verifique se a sua idade é maior do que a de algum parente
Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor' */
let minhaIdade = 25;
let outraIdade = 24;
if (minhaIdade > outraIdade) {
  console.log("Sua idade é maior");
} else if (minhaIdade === outraIdade) {
  console.log("Suas idades são iguais");
} else {
  console.log("Sua idade é menor");
}

/* Qual valor é retornado na seguinte expressão? "3" pois nessa caso como não há valores falsos a condição "&&"" vai retornar o ultimo valor verdadeiro */
let expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao); //3

// Verifique se as seguintes variáveis são Truthy ou Falsy
let nome = "Andre"; //True
let idade = 28; //True
let possuiDoutorado = false; //False
let empregoFuturo; //False
let dinheiroNaConta = 0; //False
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
let brasil = 207;
let china = 1340;

if (brasil > china) {
  console.log("Brasil tem mais habitantes");
} else if (brasil === china) {
  console.log("Brasil e China tem o mesmo número de Habitantes");
} else {
  console.log("Brasil tem menos habitantes que a China");
}

// O que irá aparecer no console? "Falso" Poís a condição && vai retornar o primeiro valor Falso que encontrar
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

// O que irá aparecer no console? "Cão"
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //nesse caso a condição && retorna o ultimo valor verdadeiro
} else {
  console.log("Falso");
}
