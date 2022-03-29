/* nomeie 3 propriedades ou métodos de strings */
let nome = "Ygor";
console.log(nome.length, nome.toLocaleLowerCase(), nome.toLocaleUpperCase());

/* nomeie 5 propriedades ou métodos de elementos do DOM */
let title = document.querySelector(".title");
/*
addEventListener
requestFullscreen
appendChild
*/
console.log(title);

/* busque na web um objeto (método) capaz de interagir com o clipboard, 
clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V*/
function clicar() {
  let paragraph = document.querySelector(".paragraph");
  paragraph.innerHTML = "Oi, sou o pagrafavo feito com JavaScript";
}
