const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const header = document.querySelector("header");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    header.style.overflow = "visible"; 
});

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");
    header.style.overflow = "hidden"; 
})
