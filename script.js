/* MENU */
function toggleMenu(){
document.querySelector(".menu").classList.toggle("open");
}

/* SCROLL ANIMATION */
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
elements.forEach(el => {
if(el.getBoundingClientRect().top < window.innerHeight - 100){
el.classList.add("show");
}
});
});

/* SLIDER */
let images = [
"",
"",
""
];

let i = 0;
let slide = document.getElementById("slide");

function show(){
if(slide && images[i]){
slide.src = images[i];
}
}

function next(){
i = (i + 1) % images.length;
show();
}

function prev(){
i = (i - 1 + images.length) % images.length;
show();
}

setInterval(next, 4000);

show();
