/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close"),
whatS = document.getElementById("whatsapp");

console.log(whatS)
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
