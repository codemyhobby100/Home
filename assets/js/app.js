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
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    // backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    // backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);



const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function SendMail() {
  var form = document.getElementById("elements");

  if (form.checkValidity()) {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      company: document.getElementById("company").value,
      number: document.getElementById("number").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_x2u3083", "template_m8vjedc", params).then(
      function (res) {
        swal("Success!","Your message has been successfully sent!", "success");
        form.reset();
      },
      function (error) {
        alert(error);
      }
    );
  } else {
    // Form is not valid, do not proceed with submission.    
    // The browser will display validation messages for required fields.
    swal("Sorry!", "Please fill the form completely", "error")
  }
}

// function SendMail(e){
  
//   var params = {
//     name : document.getElementById("name").value,
//     email : document.getElementById("email").value,
//     subject: document.getElementById("subject").value,
//     company : document.getElementById("company").value,
//     number : document.getElementById("number").value,
//     message: document.getElementById("message").value,
//   }
  
//   // e.preventDefault();
//   emailjs.send("service_x2u3083", "template_m8vjedc", params).then(function (res){
//     console.log(e);
//     alert("Your message has been succesfully sent!");
//     // e.target.reset()
//   },function(error){
//     console.log(e);

//     alert(error);
//   })
// }

