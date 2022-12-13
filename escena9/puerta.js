var door = document.querySelector(".puertaCimg");
door.addEventListener("click", abrir)
function abrir(){
    door.setAttribute("src","./imagenes/PuertaAbierta.png")
    door.style.marginRight = "-70px"
    door.style.marginTop = "-24px"
    door.style.width = "102px"


}

var interaccionchao = document.querySelector(".circulo")

interaccionchao.addEventListener("click",move);

function move() {
    interaccionchao.classList.remove("titilar");

}