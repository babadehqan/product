const products = [
    {
        id: 1,
        name: "Afghan Momtaz Black Tea",
        price: "10$",
        image:"images/pic1.jpg" ,
        decription: "Natural black tea for daily using"
    },
    {
        id: 2,
        name: "Afghan Momtaz Green Tea",
        price: "10$",
        image: "images/pic.jpg" ,
        decription: "Natural Green tea for daily using"
    },

    {
        id: 3,
        name: "Afghan Momtaz Black Tea",
        price: "10$",
        image:"images/pic1.jpg" ,
        decription: "Natural black tea for daily using"
    },
    {
        id: 4,
        name: "Afghan Momtaz Green Tea",
        price: "10$",
        image: "images/pic.jpg" ,
        decription: "Natural Green tea for daily using"
    },

    {
        id: 5,
        name: "Afghan Momtaz Black Tea",
        price: "10$",
        image:"images/pic1.jpg" ,
        decription: "Natural black tea for daily using"
    },
    {
        id: 6,
        name: "Afghan Momtaz Green Tea",
        price: "10$",
        image: "images/pic.jpg" ,
        decription: "Natural Green tea for daily using"
    }
];



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