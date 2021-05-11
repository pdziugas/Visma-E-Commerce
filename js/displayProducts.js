import { fetchProductData } from "./fetch.js";

window.addEventListener("DOMContentLoaded", async function () {
  let productData = await fetchProductData();
  displayProducts(productData);
});

const displayProducts = (productData) => {
  document.querySelector(".container").innerHTML = "";
  productData.forEach((product) => {
    document.querySelector(".container").innerHTML += `
        <div class="card-container">
            <h3 class="card-price">$${product.price}</h3>
            <h2 class="card-title">${product.title}</h2>
            <figure class="card-image-container">
                <img src='${product.imageUrl}' alt="product-image" />
            </figure>
            <button class="btn btn--add-to-cart" type="button">Add to cart</button>
        </div>
    `;
  });
};