import {
    products
} from "./product.js";

function createProduct(parent, imgUrl, productTitle, textPrice) {
    const product = document.createElement("div");
    product.className = "product";

    createImg(product, imgUrl, productTitle);
    createText(product, productTitle, textPrice);
    parent.appendChild(product);
}

function createImg(parent, imgUrl, productTitle) {
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = productTitle;

    parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
    const title = document.createElement("h4");
    title.textContent = productTitle;

    const price = document.createElement("strong");
    price.textContent = `${textPrice} $`;

    parent.append(title, price);
}


const wrapperProducts = document.querySelector(".wrapper__products");


products.map((product) => {
    createProduct(wrapperProducts, product.image, product.title, product.price);
});