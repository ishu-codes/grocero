"use strict";

let cart;

function setToggleMenu() {
    const menuIcon = document.querySelector("#menu-icon");
    const imgIcon = document.querySelector("#menu-icon img");
    const navSection = document.querySelector("#nav-section");

    menuIcon.addEventListener("click", () => {
        let imgPath = imgIcon.getAttribute("src");
        let isActive = imgPath.includes("close");
        imgPath = isActive
            ? imgPath.replace("close", "menu")
            : imgPath.replace("menu", "close");
        imgIcon.setAttribute("src", imgPath);

        let navDisplay = isActive ? "none" : "block";
        navSection.setAttribute("style", `display:${navDisplay}`);
    });
}

function getCart() {
    cart = localStorage.getItem("cart");
    console.log(cart);
}
function addToCart(id) {
    console.log(`Product ${1} added to cart!`);
}

// window.document.onload(() => {
setToggleMenu();
getCart();
// });
