"use strict";

let cart = [];

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
    if (!cart) cart = [];
    localStorage.setItem("cart", cart);
    console.log(cart);
    // console.log(cart);
}
function addToCart(prodId) {
    // console.log(`Product ${1} added to cart!`);

    if (!PRODUCTS.find((prod) => prod.id === prodId)) return;

    let product = cart.find((prod) => prod.id === prodId);

    if (!product) {
        console.log("Product is: ", product);
        product = PRODUCTS.find((prod) => prod.id === prodId);
    }
    console.log({ cart, product });
    let initQuantity = 1;
    if (product) initQuantity = product.quantity + 1;
    cart.push({ ...product, quantity: initQuantity });

    localStorage.setItem("cart", cart);
}

// window.document.onload(() => {
setToggleMenu();
getCart();
// });
