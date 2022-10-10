"use strict";
import "./slider/slider.js";
import "./dropdown/dropdown.js";
import "./tabs/tabs.js";

const nav = document.querySelector(".js-header-nav");
const overlay = document.querySelector(".js-overlay");
const headerDropdownsHover = document.querySelectorAll(".js-header-dropdown");

const btnHeaderSearch = document.querySelector(".js-header-button-search");
const btnHeaderMenu = document.querySelector(".js-header-button-menu");
const btnHeaderClose = document.querySelector(".js-header-button-close");
const btnOverlaySearch = document.querySelector(".js-overlay-button-close");

function openModal() {
  overlay.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
}

function openMenu() {
  this.classList.add("hidden");
  btnHeaderSearch.classList.add("hidden");
  btnHeaderClose.classList.remove("hidden");
  nav.style.display = "block";
}

function closeMenu() {
  this.classList.add("hidden");
  btnHeaderSearch.classList.remove("hidden");
  btnHeaderMenu.classList.remove("hidden");
  nav.style.display = "none";
}

if (innerWidth > 1200) {
  headerDropdownsHover.forEach((dropdown) => dropdown.classList.add("hover"));
}

btnHeaderSearch.addEventListener("click", openModal);
btnOverlaySearch.addEventListener("click", closeModal);
btnHeaderMenu.addEventListener("click", openMenu);
btnHeaderClose.addEventListener("click", closeMenu);
