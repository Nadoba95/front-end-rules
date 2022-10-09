const sliders = document.querySelectorAll(".js-slider");

const tablet = innerWidth <= 1200;
const mobile = innerWidth <= 768;

sliders.forEach((slider) => {
  const slides = slider.querySelectorAll(".js-slide");
  const btnLeft = slider.querySelector(".js-slider-button-left");
  const btnRight = slider.querySelector(".js-slider-button-right");

  let currentSlide = 0;
  const maxSlide = slides.length - 1;

  function goToSlide(slides, slide) {
    slides.forEach(
      (s) =>
        (s.style.transform = `translateX(calc(${-100 * slide}% + ${
          tablet ? -slide * 28 : -slide * 70
        }px))`)
    );
  }

  function nextSlide() {
    if (currentSlide === maxSlide) {
      goToSlide(slides, 0);
      currentSlide = 0;
    } else {
      currentSlide++;
      goToSlide(slides, currentSlide);
    }
  }

  function prevSlide() {
    if (currentSlide === 0) {
      goToSlide(slides, maxSlide);
      currentSlide = maxSlide;
    } else {
      currentSlide--;
      goToSlide(slides, currentSlide);
    }
  }

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
});
