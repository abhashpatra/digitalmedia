"use strict";

// add event listener to multiple elements
const addEventOnElement = function(elements, evetType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(evetType, callback);
  }
};
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};
addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);


// prallax AnimationEffect


const parallaxElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", event => {
  for (let i = 0; i < parallaxElements.length; i++) {
    const movementX = (event.clientX/ window.innerWidth) *Number(parallaxElements[i].dataset.parallaxSpeed);

    const movementY = (event.clientY/ window.innerHeight) *Number(parallaxElements[i].dataset.parallaxSpeed);

    parallaxElements[i].animate({
      transform: `translate(${movementX}px ,${movementY}px)`
    },{duration: 500, fil: "forwards"} );
  }
})