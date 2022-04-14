const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');
const sliders = document.querySelector('.carousel-slider');
const imgs = document.querySelectorAll('.slider-img');
let currentIndex = 1;

const size = sliders.clientWidth;

console.log(size);
sliders.style.transform = 'translateX(' + currentIndex * -size + 'px)';


function imgTransitionEnd() { 
  console.log(imgs[currentIndex].id);
  if (imgs[currentIndex].id === 'first-img') {
    sliders.style.transition = 'none';
    currentIndex = imgs.length - currentIndex;
    sliders.style.transform = 'translateX(' + currentIndex * -size + 'px)';
  }
  if (imgs[currentIndex].id === 'last-img') {
    sliders.style.transition = 'none';
    currentIndex = imgs.length - 2;
    sliders.style.transform = 'translateX(' + currentIndex * -size + 'px)';
  }
}

function clickLeftHandeler() { 
  if (currentIndex <= 0) return;
  currentIndex--;
  sliders.style.transition = 'transform .4s ease';
  sliders.style.transform = 'translateX(' + currentIndex * -size + 'px)';
  console.log(currentIndex);
};

function clickrightHandeler() { 
  if (currentIndex >= imgs.length - 1) return;
  currentIndex++;
  sliders.style.transition = 'transform .4s ease';
  sliders.style.transform = 'translateX(' + currentIndex * -size + 'px)';
  console.log(currentIndex);
};


sliders.addEventListener('transitionend', imgTransitionEnd);
leftBtn.addEventListener('click', clickLeftHandeler);
rightBtn.addEventListener('click', clickrightHandeler);
