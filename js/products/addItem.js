import { postItemData } from "../fetch.js";

const modalAddItem = document.querySelector("#addItemModal");
const modalForm = document.querySelector(".modal-form");
const button = document.querySelector("#modal-button");
const addItem = document.querySelector(".add-product");
const inputTitle = document.querySelector("#title");
const inputDescription = document.querySelector("#description");
const inputPrice = document.querySelector("#price");
const inputImageUrl = document.querySelector("#imageUrl");
const close = document.querySelectorAll(".closeAddModal")[0];

const openAddModal = () => {
  modalAddItem.style.display = "block";
  close.addEventListener("click", closeAddModal);
};

const closeAddModal = () => {
  modalAddItem.style.display = "none";
  close.removeEventListener("click", closeAddModal);
  addItem.removeEventListener("click", closeAddModal);
};

const validateForm = (itemAdded) => {
  if (
    inputTitle.value &&
    inputDescription.value &&
    inputPrice.value &&
    inputImageUrl.value !== ""
  ) {
    postItemData(itemAdded);
    modalForm.reset();
    closeAddModal();
    location.reload();
  } else {
    alert("Please fill in all missing fields");
    return false;
  }
};

const loadAddItem = () => {
  button.addEventListener("click", openAddModal);

  addItem.addEventListener("click", () => {
    let itemAdded = {
      title: inputTitle.value,
      description: inputDescription.value,
      price: inputPrice.value,
      imageUrl: inputImageUrl.value,
    };

    validateForm(itemAdded);
  });
};

export { loadAddItem };
