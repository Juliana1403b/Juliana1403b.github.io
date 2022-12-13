var samuraichao = document.querySelector(".samuraiSolo")
var samurai = document.querySelector(".samurai")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {
    samuraichao.classList.add("oculto")

    interaccionchao.classList.add("oculto");

    interaccionchao.classList.remove("titilar");

    samurai.classList.remove("oculto");

    samurai.classList.add("Samuraicaminando")

}