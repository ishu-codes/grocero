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

function getCartState() {
    cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
        cart = [];
        setCartState();
    }
}

function setCartState() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateProductCard(productId) {
    const productsSection = document.querySelector("#products-section");
    for (let product of productsSection.children) {
        if (product.id == productId) {
            product.children[3].remove();
            product.appendChild(generateCartBtns(productId));
            return;
        }
    }
}

function addToCart(productId) {
    if (!PRODUCTS.find((prod) => prod.id === productId)) return;

    let product = cart.find((prod) => prod.id === productId);
    if (product) {
        cart = cart.map((prod) =>
            prod.id === productId
                ? { ...prod, quantity: prod.quantity + 1 }
                : prod
        );
    } else {
        product = PRODUCTS.find((prod) => prod.id === productId);
        cart.push({ ...product, quantity: 1 });
    }
    setCartState();
    updateProductCard(product.id);
}

function removeFromCart(productId) {
    if (!PRODUCTS.find((prod) => prod.id === productId)) return;

    let product = cart.find((prod) => prod.id === productId);
    if (product) {
        cart = cart.map((prod) =>
            prod.id === productId
                ? { ...prod, quantity: prod.quantity - 1 }
                : prod
        );
    }
    setCartState();
    updateProductCard(product.id);
}

function main() {
    setToggleMenu();
    getCartState();
}
main();
