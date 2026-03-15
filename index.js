const navbarElement = document.querySelector(".autoHideNavbarMain")

let lastScrollPosition = 0

/* Hide / Show on scroll */

window.addEventListener("scroll", function(){

let currentScroll = window.pageYOffset

if(currentScroll > lastScrollPosition){

navbarElement.style.top = "-80px"

}else{

navbarElement.style.top = "0"

}

lastScrollPosition = currentScroll

})



/* Hover reveal when cursor near top */

document.addEventListener("mousemove", function(event){

if(event.clientY < 80){

navbarElement.style.top = "0"

}else{

navbarElement.style.top = "-80px"

}

})