const fetchCarouselData = () =>
  fetch("/carousel")
    .then((response) => response.json())
    .catch((error) => console.error(error));

const fetchProductData = () =>
  fetch("/products")
    .then((response) => response.json())
    .catch((error) => console.error(error));

export { fetchCarouselData, fetchProductData };
