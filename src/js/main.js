"use strict";
import "./slider/slider.js";

const accordionItems = document.querySelectorAll(".accordion__head");
const calendarYears = document.querySelectorAll(".calendar__year");
const calendarTexts = document.querySelectorAll(".calendar__desc-box");

function pickYear(e) {
  const selectedYear = e.currentTarget;

  calendarYears.forEach((year) => year.classList.remove("active"));
  selectedYear.classList.add("active");

  calendarTexts.forEach((text) => text.classList.add("hidden"));
  calendarTexts[selectedYear.dataset.year].classList.remove("hidden");
}

function accordionDropdown(e) {
  const accordionItem = e.currentTarget;
  const accordionBody = accordionItem.nextElementSibling;
  const plusIcon = accordionItem.querySelector(".icon-plus");
  const minusIcon = accordionItem.querySelector(".icon-minus");

  accordionItem.classList.toggle("active");

  if (accordionItem.classList.contains("active")) {
    accordionBody.style.paddingBottom = "60px";
    accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    plusIcon.classList.add("hidden");
    minusIcon.classList.remove("hidden");
  } else {
    accordionBody.style.paddingBottom = null;
    accordionBody.style.maxHeight = null;
    plusIcon.classList.remove("hidden");
    minusIcon.classList.add("hidden");
  }
}

accordionItems[0].nextElementSibling.style.paddingBottom = "60px";
accordionItems[0].nextElementSibling.style.maxHeight =
  accordionItems[0].nextElementSibling.scrollHeight + "px";

calendarYears.forEach((year) => year.addEventListener("click", pickYear));
accordionItems.forEach((item) =>
  item.addEventListener("click", accordionDropdown)
);
