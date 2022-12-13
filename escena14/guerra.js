var mano = document.querySelector(".mano")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {

    interaccionchao.classList.add("oculto");

    interaccionchao.classList.remove("titilar");

    mano.classList.add("manito")

}