const compass = document.getElementById('compass');
const projectCarousel = document.getElementById('project-carousel');
const projectCarouselTrack = document.querySelector('ul.project-carousel_track');
let projectItems = Array.from(document.getElementsByClassName('project_item'));
let currentItem = document.getElementsByClassName('current-item');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// console.log(compass);
// console.log(projectCarousel);
// console.log(projectCarouselTrack);
// console.log(projectItems);

let clonesHeight;
let trackHeight;

// Creates a slide clone, adds a class to it and removes the "current-item", "prev-item", and "next-item" classes if available, then appends that clone/duplicate back into the projectItems array.
// Also increases the scale of the element with a class list containing 'current-item' as one of its classes.


// projectItems.forEach(slide => {
//     let currentSlide = slide.classList.contains('current-item');
//     let nextSlide = slide.classList.contains('next-item');
//     let prevSlide = slide.classList.contains('prev-item');
//     let clone = slide.cloneNode(true);
//     clone.classList.add('duplicate');

//     while (currentSlide == true) {
// // do something to the current slide.
//         slide.style.transform = "scale(1.1)";
//         clone.classList.remove('current-item');
//         break;
//     };

//     while (nextSlide == true) {
//         clone.classList.remove('next-item');
//         break;
//     }

//     while (prevSlide == true) {
//         slide.classList.remove('prev-item');
//         break;
//     }

//     projectCarouselTrack.appendChild(clone);
//     projectItems.push(clone);
// });

// console.log(projectItems);

// let nextSlide = slide[1].classList.contains('prev-item');



const firstItemIndex = 0;
const lastItemIndex = projectItems.length - 1;
let activeItem = 0;

// let projectCarouselTrackItems = projectCarouselTrack.querySelectorAll('.project_item').length;
let projectCarouselTrackItems = projectItems.length;
let currentSliderScrollPos = 0;
let itemHeight = 400;
let itemMaxHeight = (projectCarouselTrackItems * itemHeight) - itemHeight;


// Button Controls
const goToPrevItem = () => {
    let prevItem = activeItem - 1;
    let nextItem = activeItem + 1;
    let newSliderScrollPos;

    projectItems.forEach(item => {
        item.classList.remove('prev-item', 'current-item', 'next-item');
    });

    if (activeItem === firstItemIndex) {
        projectItems[firstItemIndex].classList.add('next-item');
        projectItems[lastItemIndex].classList.add('current-item');

        activeItem = lastItemIndex;
        prevItem = activeItem - 1;
        nextItem = firstItemIndex;
        projectItems[prevItem].classList.add('prev-item');

        newSliderScrollPos = itemMaxHeight;
        currentSliderScrollPos = newSliderScrollPos;
        projectCarouselTrack.scrollTo(0, newSliderScrollPos);
    } else if (activeItem === lastItemIndex) {
        projectItems[lastItemIndex].classList.add('next-item');
        projectItems[prevItem].classList.add('current-item');

        activeItem = lastItemIndex - 1;
        prevItem = activeItem - 1;
        nextItem = lastItemIndex;
        projectItems[prevItem].classList.add('prev-item');

        newSliderScrollPos = itemMaxHeight - itemHeight;
        currentSliderScrollPos = newSliderScrollPos;
        projectCarouselTrack.scrollTo(0, newSliderScrollPos);
    } else {
        projectItems[prevItem].classList.add('current-item');
        projectItems[activeItem].classList.add('next-item');

        activeItem = prevItem;
        
        if (prevItem === firstItemIndex) {
            prevItem = lastItemIndex;
        } else {
            prevItem = activeItem - 1;
        }

        nextItem = activeItem + 1;
        projectItems[prevItem].classList.add('prev-item');

        newSliderScrollPos = currentSliderScrollPos - itemHeight;
        currentSliderScrollPos = newSliderScrollPos;
        projectCarouselTrack.scrollTo(0, newSliderScrollPos);
    };

    rotateCompass();
};



const goToNextItem = () => {
    let prevItem = activeItem - 1;
    let nextItem = activeItem + 1;
    let newSliderScrollPos;

    projectItems.forEach(item => {
        item.classList.remove('prev-item', 'current-item', 'next-item');
    });

    if (activeItem === firstItemIndex) {
        projectItems[firstItemIndex].classList.add('prev-item');
        projectItems[nextItem].classList.add('current-item');

        activeItem = nextItem;
        prevItem = firstItemIndex;
        nextItem = activeItem + 1;
        projectItems[nextItem].classList.add('next-item');

        newSliderScrollPos = currentSliderScrollPos + itemHeight;
        currentSliderScrollPos = newSliderScrollPos;
        projectCarouselTrack.scrollTo(0, newSliderScrollPos);
        console.log(currentSliderScrollPos);
        console.log(newSliderScrollPos);
    } else if (activeItem === lastItemIndex) {
        projectItems[firstItemIndex].classList.add('current-item');
        projectItems[lastItemIndex].classList.add('prev-item');

        activeItem = firstItemIndex;
        prevItem = lastItemIndex;
        nextItem = activeItem + 1;
        projectItems[nextItem].classList.add('next-item');

        newSliderScrollPos = firstItemIndex;
        currentSliderScrollPos = newSliderScrollPos;
        projectCarouselTrack.scrollTo(0, newSliderScrollPos);
        console.log(currentSliderScrollPos);
        console.log(newSliderScrollPos);
    } else {
        projectItems[activeItem].classList.add('prev-item');
        projectItems[nextItem].classList.add('current-item');

        activeItem = nextItem;
        
        if (nextItem === lastItemIndex) {
            nextItem = firstItemIndex;
        } else {
            nextItem = activeItem + 1;
        }

        projectItems[nextItem].classList.add('next-item');
        prevItem = activeItem - 1;

        newSliderScrollPos = currentSliderScrollPos + itemHeight;
        currentSliderScrollPos = newSliderScrollPos;
        projectCarouselTrack.scrollTo(0, newSliderScrollPos);
        console.log(currentSliderScrollPos);
        console.log(newSliderScrollPos);
    };

    rotateCompass();
};



function rotateCompass() {
    projectItems.forEach(slide => {
        let classCheck = slide.classList.contains('current-item');

        if (classCheck == true) {
            let index = projectItems.indexOf(slide);
            let itemsTotal = projectItems.length;
            let angle = (360 / itemsTotal) * index;
            compass.style.transform = 'rotate(' + angle + 'deg)';
        };
    });
};

prevButton.addEventListener("click", goToPrevItem);
nextButton.addEventListener("click", goToNextItem);

// function handleScroll() {
//     // Get the scroll position
//     var scrollPosition = projectCarouselTrack.scrollTop;
//     console.log(scrollPosition);

//     // Calculate the rotation angle based on the scroll position
//     var rotationAngle = (360 / 400) * scrollPosition;

//     // Apply the rotation to the compass
//     compass.style.transform = 'rotate(' + rotationAngle + 'deg)';
// }