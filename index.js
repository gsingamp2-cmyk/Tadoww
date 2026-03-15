const navbarElement = document.querySelector(".autoHideNavbarMain")

if(document.body.classList.contains("homePage")){

    let lastScrollPosition = 0
    let navbarVisibleState = true

    window.addEventListener("scroll", function(){

        let currentScrollPosition = window.pageYOffset

        if(currentScrollPosition > lastScrollPosition){
            navbarElement.style.top = "-80px"
            navbarVisibleState = false
        }else{
            navbarElement.style.top = "0"
            navbarVisibleState = true
        }

        lastScrollPosition = currentScrollPosition

    })

    document.addEventListener("mousemove", function(event){

        if(event.clientY < 70 && !navbarVisibleState){
            navbarElement.style.top = "0"
            navbarVisibleState = true
        }

        if(event.clientY > 120 && navbarVisibleState){
            navbarElement.style.top = "-80px"
            navbarVisibleState = false
        }

    })
}