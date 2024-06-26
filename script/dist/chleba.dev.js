"use strict";

var pull = document.querySelector(".wrapper-hamburger");
var state = false;
pull.addEventListener("click", function () {
  if (state == true) {
    pull.classList.remove("pull");
    state = false;
  }
});