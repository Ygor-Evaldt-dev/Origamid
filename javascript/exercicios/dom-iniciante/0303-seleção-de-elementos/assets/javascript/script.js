/* Retorne o url da página atual utilizando o objeto window*/
const endereço = location.href;
console.log(`O endereço https do site é ${endereço}`);

/* Seleciona o primeiro elemento da página que possua a classe ativo*/
const elementos = document.querySelector(".ativo");
console.log(elementos);

/*Retorne a linguagem do navegador*/
const linguagem = window.navigator.language;
console.log(linguagem);

/*Retorne a largura da janela*/
const larguraJanela = window.innerWidth;
console.log(larguraJanela);
