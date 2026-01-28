/*const products = [
    {
        id: 1,
        name: "Afghan Momtaz Black Tea",
        price: "6$",
        image:"images/photo.jpg" ,
        decription: "Natural black tea for daily using"
    },
    {
        id: 2,
        name: "Afghan Momtaz Green Tea",
        price: "10$",
        image: "images/photo.jpg" ,
        decription: "Natural Green tea for daily using"
    },
];
*/

const menu = document.getElementById("menu");
const menuItem = document.getElementById("menuItems")

menu.onclick =() => {
    menuItem.style.display = 
    menuItem.style.display === "flex" ? "none": "flex";
};

const image =[
    "images/photo.jpg",
    "images/photo.jpg",
    "images/photo.jpg"
];

let index =0;
setInterval(() => {
    index = (index +1) % image.length;
    document.getElementById("slider-img").src = image[index];
},3000);

const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
    fades.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight -100){
            el.classList.add("show");
        }
    })
})

/*
window.onload = function(){
const container = document.getElementById("product-list");

products.forEach(product => {
    const card = document.createElement("div");
    card.className ="card";

    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.decription}</p>
    <span>${product.price}</span>
    `;

    container.appendChild(card);
});
};
*/