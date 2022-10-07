"use strict";
import "./slider/slider.js";
import "./dropdown/dropdown.js";

const headerDropdownsHover = document.querySelectorAll(".js-header-dropdown");

const nav = document.querySelector("js-header-nav");
const overlay = document.querySelector(".js-overlay");
const btnHeaderSearch = document.querySelector(".js-header-button-search");
const btnHeaderMenu = document.querySelector(".js-header-button-menu");
const btnHeaderClose = document.querySelector(".js-header-button-close");
const btnOverlaySearch = document.querySelector(".js-overlay-button-close");

const calendarYears = document.querySelectorAll(".js-calendar-tab");
const calendarTexts = document.querySelectorAll(".js-calendar-desc-box");

function openModal() {
  overlay.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
}

function openMenu() {
  this.classList.remove("hidden");
  btnHeaderSearch.classList.add("hidden");
  btnHeaderClose.classList.remove("hidden");
  nav.classList.remove("hidden");
}

function closeMenu() {
  this.classList.add("hidden");
  btnHeaderSearch.classList.remove("hidden");
  btnHeaderMenu.classList.remove("hidden");
  nav.classList.add("hidden");
}

function pickYear() {
  const selectedYear = this;

  calendarYears.forEach((year) => year.classList.remove("active"));
  selectedYear.classList.add("active");

  calendarTexts.forEach((text) => text.classList.add("hidden"));
  calendarTexts[selectedYear.dataset.year].classList.remove("hidden");
}

if (innerWidth > 1200) {
  headerDropdownsHover.forEach((dropdown) => dropdown.classList.add("hover"));
}

btnHeaderSearch.addEventListener("click", openModal);
btnOverlaySearch.addEventListener("click", closeModal);
calendarYears.forEach((year) => year.addEventListener("click", pickYear));
btnHeaderMenu.addEventListener("click", openMenu);
btnHeaderClose.addEventListener("click", closeMenu);
