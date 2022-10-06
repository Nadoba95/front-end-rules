const slides1 = document.querySelectorAll(".slide--first");
const slides2 = document.querySelectorAll(".slide--second");

const btnLeft1 = document.querySelector(".slider__button-left-first");
const btnRight1 = document.querySelector(".slider__button-right-first");
const btnLeft2 = document.querySelector(".slider__button-left-second");
const btnRight2 = document.querySelector(".slider__button-right-second");

let currentSlide1 = 0;
let currentSlide2 = 0;
const maxSlide1 = slides1.length - 1;
const maxSlide2 = slides2.length - 1;

function goToSlide(slides, slide) {
  slides.forEach((s) => (s.style.transform = `translateX(${-100 * slide}%)`));
}

function nextSlide1() {
  if (currentSlide1 === maxSlide1) {
    goToSlide(slides1, 0);
    currentSlide1 = 0;
  } else {
    currentSlide1++;
    goToSlide(slides1, currentSlide1);
  }
}

function nextSlide2() {
  if (currentSlide2 === maxSlide2) {
    goToSlide(slides2, 0);
    currentSlide2 = 0;
  } else {
    currentSlide2++;
    goToSlide(slides2, currentSlide2);
  }
}

function prevSlide1() {
  if (currentSlide1 === 0) {
    goToSlide(slides1, maxSlide1);
    currentSlide1 = maxSlide1;
  } else {
    currentSlide1--;
    goToSlide(slides1, currentSlide1);
  }
}

function prevSlide2() {
  if (currentSlide2 === 0) {
    goToSlide(slides2, maxSlide2);
    currentSlide2 = maxSlide2;
  } else {
    currentSlide2--;
    goToSlide(slides2, currentSlide2);
  }
}

btnRight1.addEventListener("click", nextSlide1);
btnLeft1.addEventListener("click", prevSlide1);
btnRight2.addEventListener("click", nextSlide2);
btnLeft2.addEventListener("click", prevSlide2);
