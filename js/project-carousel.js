const projectCarousel = document.getElementById('project-carousel');
const projectCarouselTrack = document.querySelector('.project-carousel__track');
let projectItems = Array.from(document.getElementsByClassName('project_item'));

const firstItemIndex = 0;
const lastItemIndex = projectItems.length - 1;
let activeItem = 0;

let numberOfTrackItems = projectItems.length;

let currentSliderScrollPos = 0;
let itemHeight = projectItems[0].clientHeight;
let itemWidth = projectItems[0].clientWidth;
let itemMaxHeight = (numberOfTrackItems * itemHeight) - itemHeight;
let itemMaxWidth = (numberOfTrackItems * itemWidth) - itemWidth;

var mobileScreenSizes = window.matchMedia("(max-width:767px)");

const goToPrevItem = () => {
    document.getElementById('carousel-button').disabled = true;
    let prevItem = activeItem - 1;
    let nextItem = activeItem + 1;
    let newSliderScrollPos;

    projectItems.forEach(item => {
        item.classList.remove('prev-item', 'current-item', 'next-item');
    });

    switch(mobileScreenSizes.matches) {
        case true:
            if (activeItem === firstItemIndex) {
                projectItems[firstItemIndex].classList.add('next-item');
                projectItems[lastItemIndex].classList.add('current-item');
        
                activeItem = lastItemIndex;
                prevItem = activeItem - 1;
                nextItem = firstItemIndex;
                projectItems[prevItem].classList.add('prev-item');
        
                newSliderScrollPos = itemMaxWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(newSliderScrollPos, 0);
            } else if (activeItem === lastItemIndex) {
                projectItems[lastItemIndex].classList.add('next-item');
                projectItems[prevItem].classList.add('current-item');
        
                activeItem = lastItemIndex - 1;
                prevItem = activeItem - 1;
                nextItem = lastItemIndex;
                projectItems[prevItem].classList.add('prev-item');
        
                newSliderScrollPos = itemMaxWidth - itemWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(newSliderScrollPos, 0);
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
        
                newSliderScrollPos = currentSliderScrollPos - itemWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(newSliderScrollPos, 0);
            };
            break;
        default:
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
    };

    rotateCompass();
    document.getElementById('carousel-button').disabled = false;
};

const goToNextItem = () => {
    document.getElementById('carousel-button').disabled = true;
    let prevItem = activeItem - 1;
    let nextItem = activeItem + 1;
    let newSliderScrollPos;

    projectItems.forEach(item => {
        item.classList.remove('prev-item', 'current-item', 'next-item');
    });

    switch(mobileScreenSizes.matches) {
        case true:
            if (activeItem === firstItemIndex) {
                projectItems[firstItemIndex].classList.add('prev-item');
                projectItems[nextItem].classList.add('current-item');
        
                activeItem = nextItem;
                prevItem = firstItemIndex;
                nextItem = activeItem + 1;
                projectItems[nextItem].classList.add('next-item');
        
                newSliderScrollPos = currentSliderScrollPos + itemWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(newSliderScrollPos, 0);
            } else if (activeItem === lastItemIndex) {
                projectItems[firstItemIndex].classList.add('current-item');
                projectItems[lastItemIndex].classList.add('prev-item');
        
                activeItem = firstItemIndex;
                prevItem = lastItemIndex;
                nextItem = activeItem + 1;
                projectItems[nextItem].classList.add('next-item');
        
                newSliderScrollPos = firstItemIndex;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(newSliderScrollPos, 0);
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
        
                newSliderScrollPos = currentSliderScrollPos + itemWidth;
                currentSliderScrollPos = newSliderScrollPos;
                projectCarouselTrack.scrollTo(newSliderScrollPos, 0);
            };
            break;
        default:
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
            };
    };

    rotateCompass();
    document.getElementById('carousel-button').disabled = false;
};



// Compass Rotation Function
const compass = document.getElementById('compass');

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



// Resets the Scroll Position for the carousel on page reload --> ON CHROME
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}



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