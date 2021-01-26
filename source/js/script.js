var mapJS = document.querySelector(".map-js");
var mapmarkerJS = document.querySelector(".map__marker");
var mainNav = document.querySelector(".main-nav");
var menuButton = document.querySelector(".main-nav__toggle");

mapJS.classList.remove("map-js--nojs");
mapmarkerJS.classList.add("map__marker--js");

mainNav.classList.add("main-nav--nojs");

// menuButton.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   if (mainNav.classList.contains('main-nav--closed')) {
//       mainNav.classList.remove('main-nav--closed');
//       mainNav.classList.add('main-nav--opened');
//     } else {
//       mainNav.classList.add('main-nav--closed');
//       mainNav.classList.remove('main-nav--opened');
//     }
// });
