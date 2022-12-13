var carta = document.querySelector(".carta")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {

    interaccionchao.classList.add("oculto");

    interaccionchao.classList.remove("titilar");

    carta.classList.add("cartica")

}