/* Crie um objeto com os seus dados pessoais
 Deve possui pelo menos duas propriedades nome e sobrenome*/
let dadosUsuario = {
  nome: "Ygor",
  sobrenome: "Evaldt",
  idade: 25,
  dataDeNascimento: "16/12/1996",
  cidade: "Três Cachoeiras",
};

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosUsuario.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(dadosUsuario.nomeCompleto());

// Modifique o valor da propriedade preco para 30000
let carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 30000;
console.log(carro.preco);

/* Crie um objeto de um cachorro que represente um labrador,
preto com 10 anos, que late ao ver um homem*/
let cachorro = {
  raça: "Labrador",
  cor: "Preto",
  idade: 10,
  viuHomem(viuHomem) {
    if (!!viuHomem == true) {
      return "au au au au au";
    } else {
      return "silêncio";
    }
  },
};
console.log(cachorro.viuHomem(""));
