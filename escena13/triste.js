var felizchao = document.querySelector(".feliz")
var triste = document.querySelector(".triste")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {
    felizchao.classList.add("oculta")

    interaccionchao.classList.add("oculta");

    interaccionchao.classList.remove("titilar");

    felizchao.classList.add("triste")

}