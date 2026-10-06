const botao = document.getElementById("botao");
const texto = document.getElementById("texto");
const tema = document.getElementById("tema");

botao.addEventListener("click", function() {
texto.textContent = "Cleo Denile é a rainha do Egito! 👑";
});

tema.addEventListener("click", function() {
document.body.style.background = "black";
});
