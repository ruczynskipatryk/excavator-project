// nav animation
const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function () {
  mobileNav.classList.toggle('active');
  burgerIcon.classList.toggle('active');
});

// slider with photos

let activeSliderNumber = 1;

let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

let hideActiveSlide = () => {
  let activeElement = document.querySelector('.active');
  activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
  hideActiveSlide();
  document.querySelector('#slide' + slideNumber).classList.add('active');
};

let showNextSlide = () => {
  if (activeSliderNumber === 3) {
    activeSliderNumber = 1;
  } else {
    activeSliderNumber = activeSliderNumber + 1;
  }
  showSlide(activeSliderNumber);
};

let showPreviousSlide = () => {
  if (activeSliderNumber === 1) {
    activeSliderNumber = 3;
  } else {
    activeSliderNumber = activeSliderNumber - 1;
  }
  showSlide(activeSliderNumber);
};

for (let i = 1; i <= 3; i++) {
  let showSlideI = () => {
    showSlide(i);
  };
  document.querySelector('#dot' + i).addEventListener('click', showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click', showNextSlide);
