'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);


// Scroll Reveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 200,
});

ScrollReveal().reveal('.hero', { 
    delay: 300,
    origin: 'top'
});

ScrollReveal().reveal('.about-banner', { 
    delay: 400,
    origin: 'top'
});

ScrollReveal().reveal('.about-content', { 
    delay: 400,
    origin: 'top'
});

ScrollReveal().reveal('.stats', { 
    delay: 400,
    origin: 'bottom'
});

ScrollReveal().reveal('.service', { 
    delay: 400,
    origin: 'top'
});


/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);