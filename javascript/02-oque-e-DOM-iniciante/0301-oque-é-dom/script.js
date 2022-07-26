/* Retorne o url da página atual utilizando o objeto window */
const url = location.href;
const resultado = document.querySelector(".textoHref");
resultado.addEventListener("click", function () {
  const textoParagrafo = document.querySelector(".href");
  textoParagrafo.innerHTML = url;
});

/* Seleciona o primeiro elemento da página que possua a classe ativo */
const ativo = document.querySelector(".ativo");
const botao = document.querySelector(".buttonClassAtiva");
botao.addEventListener("click", function () {
  paragrago = document.querySelector(".primeiraClass");
  paragrago.innerText = ativo;
});

/* Retorne a linguagem do navegador */
const linguagem = navigator.languages;
const buttonLinguagem = document.querySelector(".buttonLinguagem");
buttonLinguagem.addEventListener("click", function () {
  linguagemDoNavegador = document.querySelector(".linguagem");
  linguagemDoNavegador.innerText = linguagem[1];
});

/* Retorne a largura da janela */
const larguraJanela = window.innerWidth;
const botaoLarguraJanela = document.querySelector(".botaoLarguraJanela");
botaoLarguraJanela.addEventListener("click", function () {
  larguraDaJanela = document.querySelector(".larguraJanela");
  larguraDaJanela.innerHTML = larguraJanela;
});
