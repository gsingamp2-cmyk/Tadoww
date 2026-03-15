const supabaseUrl = "https://rcpnjyjggulbrkesgjob.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjcG5qeWpnZ3VsYnJrZXNnam9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MzQwOTAsImV4cCI6MjA4OTExMDA5MH0._VZVOXRvhcDQBPCSolB0zJ2MujbQBbtdYhNqbbfpe1A"

const supabase = supabase.createClient(
  supabaseUrl,
  supabaseKey
)

const googleLoginButton = document.querySelector(".homepageGoogleLoginButton")

googleLoginButton.addEventListener("click", async () => {

  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "https://tadoww.netlify.app/home.html"
    }
  })

})
const navbarElement=document.querySelector(".autoHideNavbarMain")

if(document.body.classList.contains("homePage")){

    let lastScrollPosition=0
    let navbarVisibleState=true

    window.addEventListener("scroll",function(){

        let currentScrollPosition=window.pageYOffset

        if(currentScrollPosition>lastScrollPosition){
            navbarElement.style.top="-80px"
            navbarVisibleState=false
        }else{
            navbarElement.style.top="0"
            navbarVisibleState=true
        }

        lastScrollPosition=currentScrollPosition

    })

    document.addEventListener("mousemove",function(event){

        if(event.clientY<70 && !navbarVisibleState){
            navbarElement.style.top="0"
            navbarVisibleState=true
        }

        if(event.clientY>120 && navbarVisibleState){
            navbarElement.style.top="-80px"
            navbarVisibleState=false
        }

    })
}