'use strict';

// Copy email on click

emailBtn.addEventListener('click', function () {
  const emailAddress = 'zulaicapedro@gmail.com';
  navigator.clipboard.writeText(emailAddress.value);
  /* Alert the copied text */
  alert('Copied the text: ' + copyText.value);
});

function copyEmail() {
  const emailAddress = 'zulaicapedro@gmail.com';

  navigator.clipboard.writeText(emailAddress);
  /* Alert the copied text */
  setTimeout(function () {
    alert("My email address it's copied to your clipboard");
  }, 1);
}

///////////////////////////////////////////////////////////////////////////
// Navigation Menu
const logo = document.querySelector('.navigation__logo-wrapper');
const burger = document.querySelector('.hamburger'); // Select Burger
const navMenu = document.querySelector('.navigation__list'); // Select Navigation Menu
const navLink = document.querySelectorAll('.navigation__link'); // Select Navigation Links
const body = document.body; // Select BODY element
const windowWidth = window.innerWidth; // Create variable with the page width

const blurOverlay = document.querySelector('.blur-overlay');

// Create a function to close the 'navMenu' when any 'navLink' is clicked (for phone and tablet)
const NavMenuPhones = function () {
  if (windowWidth <= 768) {
    navLink.forEach(function (item, i) {
      item.addEventListener('click', function () {
        navMenu.style.visibility = 'hidden'; // Close Menu
        body.style.overflow = 'scroll'; // Make body scroll again (default)
        burger.classList.toggle('is-active');
        blurOverlay.style.visibility = 'hidden';
      });
    });
  }
};
NavMenuPhones();

// Open and close navMenu when burger is clicked
burger.addEventListener('click', function () {
  if (navMenu.style.visibility === 'visible') {
    body.style.overflow = 'scroll'; // Make body scroll again (default)
    navMenu.style.visibility = 'hidden';
    burger.classList.toggle('is-active');
    blurOverlay.style.visibility = 'hidden';
    logo.style.visibility = 'visible';
  } else {
    body.style.overflow = 'hidden'; // Make body stop scroll when 'navMenu' opened
    navMenu.style.visibility = 'visible';
    burger.classList.toggle('is-active');
    blurOverlay.style.visibility = 'visible';
    logo.style.visibility = 'hidden';
  }
});

const aboutBgText = document.querySelector('.bg-text-about');
const projectsBgText = document.querySelector('.bg-text-projects');
const cloneAboutBgtext = aboutBgText.cloneNode(true);
const cloneProjectsBgtext = projectsBgText.cloneNode(true);

const aboutBgWrapper = document.querySelector('.bg-text-wrapper--about');
const projectsBgWrapper = document.querySelector('.bg-text-wrapper--projects');
aboutBgWrapper.insertAdjacentElement('afterbegin', cloneAboutBgtext);
projectsBgWrapper.insertAdjacentElement('afterbegin', cloneProjectsBgtext);

// const scrollContainer = document.querySelector('.aboutBgWrapper');

// scrollContainer.addEventListener('wheel', (evt) => {
//   evt.preventDefault();
//   scrollContainer.scrollLeft += evt.deltaY;
// });

// document.querySelector('.bg-text-wrapper').insertAdjacentHTML(before, cloneAboutBgtext);

// const slides = document.querySelectorAll('.experience-wrapper__slider__slide'); // Select slides
// const ballBox = document.querySelector('.experience-wrapper__nav__balls'); // Select Ball Box
// const goBack = document.querySelector(".experience-wrapper__nav__btn--back"); // Select back arrow
// const goNext = document.querySelector(".experience-wrapper__nav__btn--next"); // Select next arrow

// let currentSlide = 0;
// const maxSlide = slides.length;

// // Create a function that translateX every video
// const goToSlide = function (slide) {
//   slides.forEach((s, i) => (s.style.transform = `translateX(${150 * (i - slide)}%`));
// };

// // Create BallDots for every slide
// const createBalls = function (slide) {
//   slides.forEach(function (s, i) {
//     const ball = `<button class="ball ball-active" data-slide="${i}"></button>`;
//     ballBox.insertAdjacentHTML('afterbegin', ball); // Every dot is inserted inside the ball-box
//   });
// };

// // Depend on current slide one of the balls will be activated
// const activateBall = function (slide) {
//   document.querySelectorAll('.ball').forEach((ball) => ball.classList.remove('ball-active')); // First remove active from all balls

//   document.querySelector(`.ball[data-slide="${slide}"]`).classList.add('ball-active'); // And add active to the current slide
// };

// // Initialize all functions
// const init = function () {
//   goToSlide(0);
//   createBalls();
//   activateBall(0);
//   // swapTitle();
// };
// init();

// // Function to make the Right Arrow work to slide between videos
// const nextSlide = function () {
// 	if (currentSlide === maxSlide - 1) {
// 		currentSlide = 0;
// 	} else {
// 		currentSlide++;
// 	}
// 	goToSlide(currentSlide);
// 	activateBall(currentSlide);
// 	// swapTitle();
// };

// // Function to make the Left Arrow work to slide between videos
// const prevSlide = function () {
// 	if (currentSlide === 0) {
// 		currentSlide = maxSlide - 1;
// 	} else {
// 		currentSlide--;
// 	}
// 	goToSlide(currentSlide);
// 	activateBall(currentSlide);
// 	// swapTitle();
// };

// goNext.addEventListener("click", nextSlide);
// goBack.addEventListener("click", prevSlide);
