"use strict";

function setActiveCategory(nextCategory) {
    // Setting active class to next category
    const categoryElems = document.querySelectorAll(".category");
    for (let categoryElem of categoryElems) {
        if (
            categoryElem.attributes.getNamedItem("data-value").value ===
            nextCategory
        ) {
            categoryElem.classList.add("active");
            generateProducts(nextCategory);
        } else {
            categoryElem.classList.remove("active");
        }
    }
}

function setCategories() {
    // Adding event listeners to change class, and products
    const categoryElems = document.querySelectorAll(".category");
    for (let categoryElem of categoryElems) {
        categoryElem.addEventListener("click", () => {
            setActiveCategory(
                categoryElem.attributes.getNamedItem("data-value").value
            );
        });
    }
}

function generateCartBtns(productId) {
    let quantity = 0;
    let product = cart.find((prod) => prod.id === productId);
    if (product) {
        quantity = product.quantity;
    }

    let btnElem = Object.assign(document.createElement("div"), {
        className: `quantity ${quantity ? "" : "quantity-1"}`,
        innerHTML: quantity
            ? `<button onclick="removeFromCart(${productId})">&minus;</button>
                <p>${quantity}</p>
                <button onclick="addToCart(${productId})">&plus;</button>`
            : `<button onclick="addToCart(${productId})">Add to cart</button>`,
    });
    return btnElem;
}

function generateProducts(category = "all") {
    const productsSection = document.querySelector("#products-section");

    // Removing existing products
    while (productsSection.childElementCount) {
        let child = productsSection.children[0];
        productsSection.removeChild(child);
    }

    // Generating product based on category
    for (let product of PRODUCTS) {
        if (category !== "all" && category !== product.category) continue;
        let childElem = Object.assign(document.createElement("div"), {
            className: "product",
            id: product.id,
            innerHTML: `
                <div class="product-img">
                    <img src="./assets/products/${product.name}.png" alt="${product.name}" />
                </div>
                <h2>${product.name}</h2>
                <p>&#8377; ${product.rate}</p>
            `,
        });
        childElem.appendChild(generateCartBtns(product.id));
        productsSection.appendChild(childElem);
    }
}

function main() {
    generateProducts("all");
    setCategories();
}
main();
