"use strict";

var test = document.querySelector(".zmizik");
var brambor = document.querySelector(".gulas");
var brambory = document.querySelector(".submenu");
test.addEventListener("mouseover", function () {
  if (state == false) {
    test.classList.remove("is-on");
    state = true;
  } else {
    setTimeout(function () {
      return test.classList.add("is-on");
    }, 1000000);
    state = false;
  }
});
test.addEventListener("mouseleave", function () {
  if (state == true) {
    setTimeout(function () {
      return test.classList.add("is-on");
    }, 5000);
    state = false;
  }
});
brambor.addEventListener("mouseover", function () {
  if (state == false) {
    test.classList.remove("is-on");
    state = true;
  } else {
    test.classList.add("is-on");
    state = false;
  }
});
brambor.addEventListener("mouseleave", function () {
  if (state == true) {
    setTimeout(function () {
      return test.classList.add("is-on");
    }, 5000);
    state = false;
  }
});
brambory.addEventListener("mouseover", function () {
  if (state == false) {
    test.classList.remove("is-on");
    state = true;
  } else {
    test.classList.add("is-on");
    state = false;
  }
});
brambory.addEventListener("mouseleave", function () {
  if (state == true) {
    setTimeout(function () {
      return test.classList.add("is-on");
    }, 5000);
    state = false;
  }
});