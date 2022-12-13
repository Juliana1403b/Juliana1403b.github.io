var samuraichao = document.querySelector(".samurai")
var texto = document.querySelector(".texto")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {
    samuraichao.classList.add("oculto")

    interaccionchao.classList.add("oculto");

    interaccionchao.classList.remove("titilar");

    texto.classList.remove("oculto");

    texto.classList.add("./imagenes/texto.png")

}