"use strict";
import "./slider/slider.js";

const accordionItems = document.querySelectorAll(".accordion__head");

function accordionDropdown(e) {
  const accordionItem = e.currentTarget;
  const accordionBody = accordionItem.nextElementSibling;
  const plusIcon = accordionItem.querySelector(".accordion__plus-icon");
  const minusIcon = accordionItem.querySelector(".accordion__minus-icon");

  accordionItem.classList.toggle("active");

  if (accordionItem.classList.contains("active")) {
    accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    plusIcon.classList.add("hidden");
    minusIcon.classList.remove("hidden");
  } else {
    accordionBody.style.maxHeight = null;
    plusIcon.classList.remove("hidden");
    minusIcon.classList.add("hidden");
  }
}

accordionItems[0].nextElementSibling.style.maxHeight =
  accordionItems[0].nextElementSibling.scrollHeight + "px";

accordionItems.forEach((item) =>
  item.addEventListener("click", accordionDropdown)
);
