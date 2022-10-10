const calendarYears = document.querySelectorAll(".js-calendar-tab");
const calendarTexts = document.querySelectorAll(".js-calendar-desc-box");
const calendarYearsBox = document.querySelector(".js-calendar-years");
const btnCalendarArchive = document.querySelector(".js-calendar-archive");
const calendarDescContainer = document.querySelector(
  ".js-calendar-desc-container"
);
const calendarSelectedYear = document.querySelector(
  ".js-calendar-selected-year"
);

function pickYear() {
  const selectedYear = this;

  calendarYears.forEach((year) => year.classList.remove("active"));
  selectedYear.classList.add("active");

  calendarTexts.forEach((text) => text.classList.add("hidden"));
  calendarTexts[selectedYear.dataset.year].classList.remove("hidden");

  calendarSelectedYear.textContent = selectedYear.textContent;

  if (innerWidth < 768) {
    calendarYearsBox.classList.toggle("shown");
    calendarDescContainer.classList.remove("hidden");
  }
}

function toggleYears() {
  calendarYearsBox.classList.toggle("shown");
  calendarDescContainer.classList.toggle("hidden");
}

calendarYears.forEach((year) => year.addEventListener("click", pickYear));
btnCalendarArchive.addEventListener("click", toggleYears);
