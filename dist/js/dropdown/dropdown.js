const accordionItems = document.querySelectorAll(".js-accordion-button");
const btnsHeaderDropdown = document.querySelectorAll(
  ".js-header-dropdown-button"
);

function accordionDropdown() {
  const accordionItem = this;
  const accordionBody = accordionItem.nextElementSibling;
  const plusIcon = accordionItem.querySelector(".icon-plus");
  const minusIcon = accordionItem.querySelector(".icon-minus");

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

function headerDropdown() {
  const headerItem = this;
  const dropdownItem = headerItem.nextElementSibling;
  const iconShowMore = headerItem.querySelector(".icon-show-more-arrow");
  const iconShowMLess = headerItem.querySelector(".icon-show-less-arrow");

  headerItem.classList.toggle("active");

  if (headerItem.classList.contains("active")) {
    dropdownItem.style.maxHeight = dropdownItem.scrollHeight + "px";
    iconShowMore.classList.add("hidden");
    iconShowMLess.classList.remove("hidden");
  } else {
    dropdownItem.style.maxHeight = null;
    iconShowMore.classList.remove("hidden");
    iconShowMLess.classList.add("hidden");
  }
}

accordionItems[0].nextElementSibling.style.maxHeight =
  accordionItems[0].nextElementSibling.scrollHeight + "px";

btnsHeaderDropdown.forEach((dropdown) =>
  dropdown.addEventListener("click", headerDropdown)
);
accordionItems.forEach((item) =>
  item.addEventListener("click", accordionDropdown)
);
