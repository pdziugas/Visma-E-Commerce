import { fetchProductData } from "../fetch.js";
import { displayProducts } from "./displayProducts.js";
import { loadAddItem } from "./addItem.js";

window.addEventListener("DOMContentLoaded", async function () {
  let productData = await fetchProductData();
  displayProducts(productData);
  loadAddItem();
});
