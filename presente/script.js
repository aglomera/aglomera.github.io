const paragrafos = [
  "Meu amor, eu te amo mais que tudo nesse mundo. Você é a pessoa mais importante da minha vida. Eu quero passar o resto dos meus dias ao seu lado.",
  "Você é a pessoa mais linda, inteligente e engraçada que eu já conheci. Eu me sinto tão sortudo por ter você na minha vida.",
  "Eu te amo mais do que palavras podem dizer.",
];

const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
  for (const paragrafo of paragrafos) {
    const paragrafoElemento = document.createElement("p");
    paragrafoElemento.textContent = paragrafo;
    document.body.appendChild(paragrafoElemento);
  }
});


/*const type = document.getElementById("botao");

botao.addEventListener("click", function() {
  const textoParagrafo = prompt("Digite o texto do parágrafo:");
  const paragrafoElemento = document.createElement("p");
  paragrafoElemento.textContent = textoParagrafo;
  document.body.appendChild(paragrafoElemento);
});*/


