import { fetchCarouselData } from "./fetch.js";

// display carousel categories from database
window.addEventListener("DOMContentLoaded", async function () {
  let carouselData = await fetchCarouselData();
  displayCarouselData(carouselData);
  displayControls();
});

// display carousel data
const displayCarouselData = (carouselData) => {
  document.querySelector(".slides").innerHTML = "";

  // loop through carouselData
  carouselData.forEach((item) => {
    document.querySelector(".slides").innerHTML += `
      <figure class="carousel-container">
        <a href="#${item.id}">
          <img src="${item.imageUrl}" alt="slide image" />
          <figcaption class="carousel-text">${item.title}</figcaption>
          <figcaption class="carousel-subtext">${item.description}</figcaption>
        </a>
      </figure>
    `;
  });
};

// display carousel controls
const displayControls = () => {
  document.querySelector(".controls").innerHTML = "";

  // display controls
  document.querySelector(".controls").innerHTML += `
    <div class="control prev" id=\"prev\"></div>
    <div class="control next" id=\"next\"></div>
  `;

  document.getElementById("prev").onclick = function () {
    changeSlide(false);
    restart();
  };

  document.getElementById("next").onclick = function () {
    changeSlide();
    restart();
  };

  // CAROUSEL FUNCTIONALITY
  const delay = 5000; //ms
  const slides = document.querySelector(".slides");
  const slidesCount = slides.childElementCount;
  const maxLeftSlide = (slidesCount - 1) * 100 * -1;

  let currentSlide = 0;

  const changeSlide = (next = true) => {
    if (next) {
      currentSlide += currentSlide > maxLeftSlide ? -100 : currentSlide * -1;
    } else {
      currentSlide = currentSlide < 0 ? currentSlide + 100 : maxLeftSlide;
    }

    slides.style.left = currentSlide + "%";
  };
  let autoChange = setInterval(changeSlide, delay);

  const restart = () => {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, delay);
  };
};
