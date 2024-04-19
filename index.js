"use strict";

function generateProducts() {
    const productSection = document.querySelector("#products-section");

    for (let product of PRODUCTS) {
        let childElem = Object.assign(document.createElement("div"), {
            // id: 'id',
            className: "product",
            innerHTML: `
                <div class="product-img">
                    <img src="./assets/products/${product.name}.png" alt="${product.name}" />
                </div>
                <h2>${product.name}</h2>
                <p>&#8377; ${product.rate}</p>
                <div class="quantity quantity-1">
                    <button>Add to cart</button>
                </div>
            `,
        });
        productSection.appendChild(childElem);
    }
}

generateProducts();
