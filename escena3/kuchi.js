var kuchichao = document.querySelector(".kuchiSola")
var kuchi = document.querySelector(".kuchi")
var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);


function move() {
    kuchichao.classList.add("oculta")

    interaccionchao.classList.add("oculta");

    interaccionchao.classList.remove("titilar");

    kuchi.classList.remove("oculta");

    kuchi.classList.add("Kuchicaminado")

}