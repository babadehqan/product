/* MOBILE MENU */
function toggleMenu(){
  document.querySelector(".menu").classList.toggle("open");
}

/* SMOOTH SCROLL FIX (IMPORTANT) */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    }

    document.querySelector(".menu").classList.remove("open");
  });
});
