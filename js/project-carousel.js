document.addEventListener('DOMContentLoaded', () => {
  const projectCarousel = document.getElementById('projects-carousel');
  projectCarousel.addEventListener('scroll', throttle(handleScroll, 200));
  initCarousel();
  updateCompass();
});

function initCarousel() {
  const projectCarouselTrack = document.querySelector(
    '.projects-carousel-track'
  );
  const projectItems = Array.from(
    document.getElementsByClassName('project-item')
  );
  const fragment = document.createDocumentFragment();

  projectItems.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.classList.add('duplicate');
    clone.classList.remove('current-item');
    fragment.appendChild(clone);
  });

  projectCarouselTrack.appendChild(fragment);
}

function updateCompass() {
  const compass = document.getElementById('compass');
  const projectItems = Array.from(
    document.getElementsByClassName('project-item')
  );
  const activeItem = projectItems.find((item) =>
    item.classList.contains('current-item')
  );
  if (activeItem) {
    const index = projectItems.indexOf(activeItem);
    const angle = (180 / projectItems.length) * index;
    compass.style.transform = `rotate(${angle}deg)`;
  }
}

function handleScrollEvents() {
  const projectCarouselTrack = document.querySelector(
    '.projects-carousel-track'
  );
  projectCarouselTrack.addEventListener('scroll', throttle(handleScroll, 200));
}

function handleScroll() {
  const compass = document.getElementById('compass');
  const scrollPosition = this.scrollTop;
  const rotationAngle = (360 / 400) * scrollPosition;
  compass.style.transform = `rotate(${rotationAngle}deg)`;
}

function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn.apply(this, args);
  };
}
