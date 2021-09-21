/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close"),
whatS = document.getElementById("whatsapp");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu");
        whatS.style.bottom  = "10rem";
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
        whatS.style.bottom = "3rem"
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach( i => i.addEventListener("click", linkAction))

//navLink.forEach(navLink, [i])

let tempoAtual = new Date(); 
let horaAtual = tempoAtual.getHours; 
let diaAtual = tempoAtual.getDay();
const aberto = document.querySelector(".aberto")

function Eaberto(){
    if(diaAtual > 0 && diaAtual < 6){
        if(horaAtual >= 8 && horaAtual <= 17){
            return aberto.innerHTML = `<h2>Aberto</h2> <i class="uit uit-check icons"></i>`
        }
    }else if(diaAtual === 6){
        if(horaAtual >= 8 && horaAtual <= 12){
            return aberto.innerHTML = `<h2>Aberto</h2> <i class="uit uit-check icons"></i>`
        }
    }
}
Eaberto();
