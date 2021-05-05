const delay = 5000; //ms
const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeftSlide = (slidesCount - 1) * 100 * -1;

let currentSlide = 0;

function changeSlide(next = true) {
  if (next) {
    currentSlide += currentSlide > maxLeftSlide ? -100 : currentSlide * -1;
  } else {
    currentSlide = currentSlide < 0 ? currentSlide + 100 : maxLeftSlide;
  }

  slides.style.left = currentSlide + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".prev").addEventListener("click", function () {
  changeSlide(false);
  restart();
});

document.querySelector(".next").addEventListener("click", function() {
    changeSlide();
    restart();
})
