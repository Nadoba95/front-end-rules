"use strict";
import "./slider/slider.js";

const overlay = document.querySelector(".overlay");
const btnOverlaySearch = document.querySelector(".overlay__button-close");
const btnHeaderSearch = document.querySelector(".header__button-search");

const accordionItems = document.querySelectorAll(".accordion__head");
const calendarYears = document.querySelectorAll(".calendar__year");
const calendarTexts = document.querySelectorAll(".calendar__desc-box");

function openModal() {
  overlay.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
}

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

btnHeaderSearch.addEventListener("click", openModal);
btnOverlaySearch.addEventListener("click", closeModal);
calendarYears.forEach((year) => year.addEventListener("click", pickYear));
accordionItems.forEach((item) =>
  item.addEventListener("click", accordionDropdown)
);
