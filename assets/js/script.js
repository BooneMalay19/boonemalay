'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let currentIndex = 0;

function showNextImage() {
  
  const imageWidth = images[0].clientWidth;

  currentIndex = (currentIndex + 1) % images.length;
  carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Ajusta o carrossel automaticamente a cada 3 segundos
setInterval(showNextImage, 3000);

window.addEventListener('resize', () => {
  carouselImages.style.transform = `translateX(-${currentIndex * images[0].clientWidth}px)`;
});


/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})

setTimeout(() => {
  const loadingScreen = document.querySelector('.loading-screen');

  loadingScreen.style.transform = 'translateY(-100%)';

  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1000);
}, 5000);