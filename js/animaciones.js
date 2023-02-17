paceOptions = {
    ajax: true,  //Checks AJAX requests
    document: true //Document is ready
}
Pace.on('done', () => {

    const preloader = document.querySelector('#preloader');
    const pace = document.querySelector('.pace');
    const hiddenContent = document.querySelector('.hidden-content');
    const displayContent = document.querySelector('#hidden-display');
  
    gsap.timeline()
      .to(pace, {
        transform: 'scale(10, 1)',
        duration: 4,
      })
      .to(pace, {
        height: "100%",
        duration: 1,
      })
      .to('.loading__text', {
        delay: .2,
        duration: 3,
        opacity: 0,
        yPercent: -400,
        ease: "BezierEasing(0.19,1,0.22,1)",
      }, '-=2.5')
      .to('.title', {
        duration: 2,
        delay: .3,
        y: -10,
        opacity: -1,
        ease: Expo.easeInOut,
      }, '-=2.5')
      .to(preloader, {
        delay: .3,
        backgroundColor: 'transparent',
        duration: .5,
        ease: 'Power2.easeOut',
      }, '-=2')
      .to(pace, {
        delay: .3,
        opacity: 0,
        duration: .5,
        ease: 'Power2.easeOut',
        onComplete: () => {
          preloader.style.display = 'none';
          hiddenContent.style.display = 'block';  
          displayContent.style.display = 'block';
        }
      }, '-=.5');
  });
  
  // Seleccionar la imagen
// Seleccionar la imagen
const image = document.querySelector('#img-hero');


const imageAbout = document.querySelector('#img-about');
const titles = document.querySelector('#hero-txt');
const cards = document.querySelectorAll(".certificaciones__card");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal__img");


// Crear la animación
gsap.to(image, {
  duration: 1,
  x: "-=20",
  scale: 1.2,
  ease: "none",
  repeat: -1,
  yoyo: true
});


// Crear la animación del título
gsap.from(titles, {
  duration: 2,
  y: "-=100",
  ease: "bounce"
});

// Crear la animación
gsap.to(imageAbout, {
  duration: 2,
  scale: 1.1,
  yoyo: true,
  repeat: -1,
  ease: "bounce"
});


cards.forEach(card => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    const imgSrc = card.querySelector("img").getAttribute("src");
    modalImg.setAttribute("src", imgSrc);
    modal.style.display = "block";

    gsap.to(modal, {duration: 0.5, opacity: 1});
    gsap.to(modalImg, {duration: 0.5, scale: 1});
  });
});

modal.addEventListener("click", () => {
  gsap.to(modalImg, {duration: 0.5, scale: 0});
  gsap.to(modal, {duration: 0.5, opacity: 0, onComplete: () => {
    modal.style.display = "none";
  }});
});
