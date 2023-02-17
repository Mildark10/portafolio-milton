'use strict';
// Usa el arreglo `projects` aquí como lo hacías antes


/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});




/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}

const expBtnBox = document.querySelector("[data-toggle-exp]");
const expBtns = document.querySelectorAll("[data-toggle-btn-exp]");
const expBox = document.querySelector("[data-skills-box-exp]");

for (let i = 0; i < expBtns.length; i++) {
  expBtns[i].addEventListener("click", function () {

    elemToggleFunc(expBtnBox);
    for (let i = 0; i < expBtns.length; i++) { elemToggleFunc(expBtns[i]); }
    elemToggleFunc(expBox);

  });
}


/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


/* 
const myImage = document.querySelector("#img-gsap");
const myImageParent = myImage.parentNode;

// Move the image off the screen to the right
TweenLite.set(myImage, { x: 1000 });

// Animate the image back to its original position
TweenLite.to(myImage, 1, {
  x: 0,
  ease: Elastic.easeOut,
  onComplete: function() {
    // Animate the image to move up and rotate 360 degrees
    TweenLite.to(myImage, 1, {
      y: -100,
      rotation: 360,
      ease: Power2.easeOut,
      onComplete: function() {
        // Animate the image parent to scale down
        TweenLite.to(myImageParent, 1, {
          scale: 0.5,
          ease: Power2.easeOut
        });
      }
    });
  }
});

TweenMax.fromTo(myImage, 2, {
  scale: 0.95,
  rotation: -5
}, {
  scale: 1.05,
  rotation: 5,
  repeat: -1,
  yoyo: true,
  ease: Elastic.easeOut
});
//text-gsap

const title = document.querySelector("#text-gsap");

gsap.from("#text-gsap", {duration: 2, y: 50, opacity: 0, ease: "bounce"});
gsap.to("#text-gsap", {duration: 2, delay: 1, text: {value: "desarrollador de software", delimiter: ""}});

gsap.to(".curtain.left", {
  duration: 1,
  x: "100%",
  rotationY: -90,
  ease: "power2.inOut"
});
gsap.to(".curtain.right", {
  duration: 1,
  x: "-100%",
  rotationY: 90,
  ease: "power2.inOut",
  delay: 0.5
});
gsap.to(".curtain-container", {
  duration: 1,
  opacity: 0,
  delay: 1.5,
  onComplete: function() {
    document.querySelector(".curtain-container").style.display = "none";
  }
});

// Seleccionar el elemento con ID "miTexto"
const miTexto = document.querySelector('#miTexto');

// Crear la animación
TweenMax.from(miTexto, 2, {
  opacity: 0,
  scale: 0.5,
  delay: 1,
  ease: Elastic.easeOut
});

const miImagen = document.querySelector('#w-img');

// Crear la animación
TweenMax.to(miImagen, 0.5, {
  scale: 1.05,
  repeat: -1,
  yoyo: true,
  ease: Power0.easeNone
});
 */
/*SCROLL projects*/

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".project-img", { interval: 200 });
