"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const message = document.createElement("div");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Page Navigation
btnScrollTo.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
