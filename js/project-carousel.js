const mobileScreenSizes = window.matchMedia("(max-width:767px)");

const projectCarousel = document.getElementById('project-carousel');
const projectCarouselTrack = projectCarousel.querySelector('.project-carousel__track');
const projectItems = Array.from(projectCarouselTrack.getElementsByClassName('project_item'));

const firstItemIndex = 0;
const lastItemIndex = projectItems.length - 1;
const allTrackItems = projectItems.length;

let activeSlide = 0;
let prevSlide = activeSlide - 1;
let nextSlide = activeSlide + 1;

let slideHeight = projectItems[0].clientHeight;
let slideWidth = projectItems[0].clientWidth;
let slideMaxHeight = (slideHeight * allTrackItems) - slideHeight;
let slideMaxWidth = (slideWidth * allTrackItems) - slideWidth;

let currentSliderScrollPos = 0;
let newSliderScrollPos;

// Function that adds in the current, prev, and next classes to their respective slides
const addClasses = (active, prev, next) => {
    projectItems[active].classList.add('current-item');
    projectItems[prev].classList.add('prev-item');
    projectItems[next].classList.add('next-item');
};

// Compass Rotation Function
const compass = document.getElementById('compass');
const angle = 360 / allTrackItems;
let rotateDegree = 0;
let counterClockwise;
let clockwise;

function rotateCompass(counterClockwise, clockwise) {
    if (clockwise) {
        rotateDegree += angle;
        compass.style.transform = `rotate(${rotateDegree}deg)`;
        return rotateDegree;
    } else if (counterClockwise) {
        rotateDegree -= angle;
        compass.style.transform = `rotate(${rotateDegree}deg)`;
        return rotateDegree;
    };
}; 



// Prev Button Functionality
function goToPrevItem() {
    document.getElementById('carousel-button').disabled = true;

    // Removes the current, prev, and next classes from the slides
    projectItems.forEach(slide => {
        slide.classList.remove('prev-item', 'current-item', 'next-item');
    });

    switch(mobileScreenSizes.matches) {
        case true:
            if (activeSlide === firstItemIndex) {
                activeSlide = lastItemIndex;
                prevSlide = activeSlide - 1;
                nextSlide = firstItemIndex;

                newSliderScrollPos = slideMaxWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(currentSliderScrollPos, 0);
            } else if (activeSlide === lastItemIndex) {
                activeSlide = lastItemIndex - 1;
                prevSlide = activeSlide - 1;
                nextSlide = activeSlide + 1;

                newSliderScrollPos = slideMaxWidth - slideWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(currentSliderScrollPos, 0);
            } else {
                activeSlide = activeSlide - 1;

                if (prevSlide === firstItemIndex) {
                    prevSlide = lastItemIndex;
                } else {
                    prevSlide = activeSlide - 1;
                };

                nextSlide = activeSlide + 1;
        
                newSliderScrollPos = currentSliderScrollPos - slideWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(currentSliderScrollPos, 0);
            };

            break;

        default:
            if (activeSlide === firstItemIndex) {
                activeSlide = lastItemIndex;
                prevSlide = activeSlide - 1;
                nextSlide = firstItemIndex;

                newSliderScrollPos = slideMaxHeight;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(0, currentSliderScrollPos);
            } else if (activeSlide === lastItemIndex) {
                activeSlide = lastItemIndex - 1;
                prevSlide = activeSlide - 1;
                nextSlide = activeSlide + 1;

                newSliderScrollPos = slideMaxHeight - slideHeight;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(0, currentSliderScrollPos);
            } else {
                activeSlide = activeSlide - 1;

                if (prevSlide === firstItemIndex) {
                    prevSlide = lastItemIndex;
                } else {
                    prevSlide = activeSlide - 1;
                };

                nextSlide = activeSlide + 1;
        
                newSliderScrollPos = currentSliderScrollPos - slideHeight;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(0, currentSliderScrollPos);
            };
    };

    counterClockwise = true;
    rotateCompass(counterClockwise, null);
    counterClockwise = false;

    addClasses(activeSlide, prevSlide, nextSlide);

    document.getElementById('carousel-button').disabled = false;
};



// Next Button Functionality
function goToNextItem() {
    document.getElementById('carousel-button').disabled = true;

    // Removes the current, prev, and next classes from the slides
    projectItems.forEach(slide => {
        slide.classList.remove('prev-item', 'current-item', 'next-item');
    });

    switch(mobileScreenSizes.matches) {
        case true:
            if (activeSlide === firstItemIndex) {
                activeSlide = firstItemIndex + 1;
                prevSlide = activeSlide - 1;
                nextSlide = activeSlide + 1;
        
                newSliderScrollPos = currentSliderScrollPos + slideWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(currentSliderScrollPos, 0);
            } else if (activeSlide === lastItemIndex) {
                activeSlide = firstItemIndex;
                prevSlide = lastItemIndex;
                nextSlide = activeSlide + 1;
        
                newSliderScrollPos = firstItemIndex;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(currentSliderScrollPos, 0);
            } else {
                activeSlide = activeSlide + 1;
                
                if (nextSlide === lastItemIndex) {
                    nextSlide = firstItemIndex;
                } else {
                    nextSlide = activeSlide + 1;
                };

                prevSlide = activeSlide - 1;

                newSliderScrollPos = currentSliderScrollPos + slideWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(currentSliderScrollPos, 0);
            };

            break;

        default:
            if (activeSlide === firstItemIndex) {
                activeSlide = firstItemIndex + 1;
                prevSlide = activeSlide - 1;
                nextSlide = activeSlide + 1;
        
                newSliderScrollPos = currentSliderScrollPos + slideHeight;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(0, currentSliderScrollPos);
            } else if (activeSlide === lastItemIndex) {
                activeSlide = firstItemIndex;
                prevSlide = lastItemIndex;
                nextSlide = activeSlide + 1;
        
                newSliderScrollPos = firstItemIndex;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(0, currentSliderScrollPos);
            } else {
                activeSlide = activeSlide + 1;
                
                if (nextSlide === lastItemIndex) {
                    nextSlide = firstItemIndex;
                } else {
                    nextSlide = activeSlide + 1;
                };

                prevSlide = activeSlide - 1;

                newSliderScrollPos = currentSliderScrollPos + slideHeight;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(0, currentSliderScrollPos);
            };
    };

    clockwise = true;
    rotateCompass(null, clockwise);
    clockwise = false;

    addClasses(activeSlide, prevSlide, nextSlide);

    document.getElementById('carousel-button').disabled = false;
};



// Resets the Scroll Position for the carousel on page reload --> ON CHROME
window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

// Resets the Scroll Position for the carousel on page reload --> ON FIREFOX
window.onload = () => {
    projectCarouselTrack.scrollTop = 0;
    projectCarouselTrack.scrollLeft = 0;
};



// Button Event Listeners
const prevButton = document.querySelector('.buttons-container__prev-button');
const nextButton = document.querySelector('.buttons-container__next-button');

prevButton.addEventListener("click", goToPrevItem, true);
nextButton.addEventListener("click", goToNextItem, true);



// Notes for Future Development:
    //  Currently, the following snippet creates a slide clone, adds a class to it and removes the "current-item", "prev-item", and "next-item" classes if available,
    //  then appends that clone/duplicate back into the projectItems array.

// projectItems.forEach(slide => {
//     let currentSlide = slide.classList.contains('current-item');
//     let nextSlide = slide.classList.contains('next-item');
//     let prevSlide = slide.classList.contains('prev-item');
//     let clone = slide.cloneNode(true);
//     clone.classList.add('duplicate');

//     while (currentSlide == true) {
// // do something to the current slide.
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