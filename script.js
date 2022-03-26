"use strict";

const ratingsEl = document.querySelector(".rating-numbers");
const defaultStateEl = document.querySelector(".default-state");
const thankYouStateEl = document.querySelector(".thank-you-state");

const btnRatings = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");

let active = 0;

// activation rating
ratingsEl.addEventListener("click", function (e) {
  if (e.target.matches(".btn-rating")) {
    // remvoing active class from all the elements and then adding to the selected one
    btnRatings.forEach((btn) => btn.classList.remove("active"));
    const currRating = e.target;
    currRating.classList.add("active");

    // setting rating number value to the span class
    active = document.querySelector(".number").textContent =
      currRating.textContent;
  }
});

// Submitting ratings
btnSubmit.addEventListener("click", function () {
  if (active) {
    defaultStateEl.classList.add("hidden");
    thankYouStateEl.classList.remove("hidden");
  }
});
