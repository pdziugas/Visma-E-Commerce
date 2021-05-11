  
import { fetchCarouselData } from "./fetch.js";
const slides = document.querySelector(".slides");

window.addEventListener("DOMContentLoaded", async function () {
  let carouselData = await fetchCarouselData();
  displayCarousel(carouselData);
  displayControls();
});

const displayCarousel = (carouselData) => {
  const carouselItems = carouselData.map((item) => `
    <figure class="carousel-container">
      <a href="#${item.id}">
        <img src="${item.imageUrl}" alt="slide image" />
        <figcaption class="carousel-text">${item.title}</figcaption>
        <figcaption class="carousel-subtext">${item.description}</figcaption>
      </a>
    </figure>`).join("");

    slides.innerHTML = `
      ${carouselItems}
    `
} 

const displayControls = () => {
  document.getElementById("prev").onclick = function () {
    showPrevSlide()
    restartAutoChange();
  };

  document.getElementById("next").onclick = function () {
    showNextSlide()
    restartAutoChange();
  };

  // CAROUSEL FUNCTIONALITY
  const delay = 5000; //ms
  const slidesCount = slides.childElementCount;
  const maxLeftSlide = (slidesCount - 1) * 100 * -1;

  let currentSlide = 0;

  const showNextSlide = () => {
    currentSlide += currentSlide > maxLeftSlide ? -100 : currentSlide * -1;
    slides.style.left = currentSlide + "%";
  }
  
  const showPrevSlide = () => {
    currentSlide = currentSlide < 0 ? currentSlide + 100 : maxLeftSlide;
    slides.style.left = currentSlide + "%";
  }

  let autoChange = setInterval(showNextSlide, delay);

  const restartAutoChange = () => {
    clearInterval(autoChange);
    autoChange = setInterval(showNextSlide, delay);
  };
};