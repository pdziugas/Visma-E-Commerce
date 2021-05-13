import { deleteItemData, editItemData } from "../fetch.js";

const container = document.querySelector(".container");

//edit item
const editButton = document.querySelector("#edit");
const modalEditItem = document.querySelector("#editItemModal");
const editItem = document.querySelector(".edit-product");
const inputEditTitle = document.querySelector("#editTitle");
const inputEditDescription = document.querySelector("#editDescription");
const inputEditPrice = document.querySelector("#editPrice");
const inputEditImageUrl = document.querySelector("#editImageUrl");
const close = document.querySelectorAll(".closeEditModal")[0];

const displayProducts = (productData) => {
  const products = productData
    .map(
      (product) => `
      <div class="card-container">
        <h3 class="card-price">$${product.price}</h3>
        <h2 class="card-title">${product.title}</h2>
        <figure class="card-image-container">
          <img src='${product.imageUrl}' alt="product-image" />
        </figure>
        <div class="card-buttons">
          <button class="btn btn--edit" id="edit-${product.id}" type="button">Edit</button>
          <button class="btn btn--delete" id="delete-${product.id}" type="button">Delete</button>
        </div>
      </div>
    `
    )
    .join("");

  container.innerHTML += products;

  productData.map((product) => {
    document
      .querySelector(`#edit-${product.id}`)
      .addEventListener("click", () => {
        openEditModal(product);
      });

    document
      .querySelector(`#delete-${product.id}`)
      .addEventListener("click", () => {
        deleteItem(product);
      });
  });
};

// === EDIT ITEM FUNCTIONALITY ===
const openEditModal = (product) => {
  modalEditItem.style.display = "block";
  close.addEventListener("click", closeEditModal);

  populateFormWithValues(product);
  editItem.addEventListener("click", () => {
    let itemEdited = {
      title: inputEditTitle.value,
      description: inputEditDescription.value,
      price: inputEditPrice.value,
      imageUrl: inputEditImageUrl.value,
    };

    editItemData(itemEdited, product.id);
    resetForm();
    closeEditModal();
    document.location.reload();
  });
};

const closeEditModal = () => {
  modalEditItem.style.display = "none";
  close.removeEventListener("click", closeEditModal);
  editItem.removeEventListener("click", closeEditModal);
};

const populateFormWithValues = (product) => {
  inputEditTitle.value = product.title;
  inputEditDescription.value = product.description;
  inputEditPrice.value = product.price;
  inputEditImageUrl.value = product.imageUrl;
};

const resetForm = () => {
  inputEditTitle.value = "";
  inputEditDescription.value = "";
  inputEditPrice.value = "";
  inputEditImageUrl.value = "";
};

// === DELETE ITEM FUNCTIONALITY ===
const deleteItem = (product) => {
  let confirmation = confirm("Are you sure you want to delete this item?");
  if (confirmation == true) {
    deleteItemData(product.id);
    location.reload();
  }
};

export { displayProducts };
