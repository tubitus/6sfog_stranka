"use strict";

var hamburger = document.querySelector(".wrapper-hamburger");
var nav = document.querySelector("nav");
var state = false;
hamburger.addEventListener("click", function () {
  if (state == true) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
    state = false;
  } else {
    hamburger.classList.add("is-active");
    nav.classList.add("is-open");
    state = true;
  }
});

function ControlWidth() {
  var sirka = window.innerWidth;

  if (sirka > 768) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
    state = false;
  }
}

window.addEventListener('resize', ControlWidth);