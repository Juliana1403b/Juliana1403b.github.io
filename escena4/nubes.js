var samuraichao = document.querySelector(".nube1")
var nube2 = document.querySelector(".nube2")
var nube3 = document.querySelector(".nube3")
var nube4 = document.querySelector(".nube4")
var interaccionchao = document.querySelector(".interaccion")

interaccionchao.addEventListener("click",move);


function move() {
    interaccionchao.classList.add("oculto")
    samuraichao.classList.add("anim1")
    nube2.classList.add("anim2")
    nube3.classList.add("anim3")
    nube4.classList.add("anim4")


    
}