const compass = document.getElementById('compass');
const projectCarouselTrack = document.querySelector('.projects-carousel_track');
let projectItems = Array.from(document.getElementsByClassName('project_item'));

console.log(compass);
console.log(projectCarouselTrack);
console.log(projectItems);

let clonesHeight;
let trackHeight;
let projectItemClones = [];

projectItems.forEach(slide => {
    let clone = slide.cloneNode(true);
    clone.classList.add('duplicate');

    projectCarouselTrack.appendChild(clone);

    let classCheck = clone.classList.contains('current-item');
    if (classCheck == true) {
        clone.classList.remove('current-item');
    };

    projectItems.push(clone);
});


function rotateCompass(index) {
    let angle = (360 / 5) * index;
    compass.style.transform = 'rotate(' + angle + 'deg)';
}

function handleScroll() {
    // Get the scroll position
    var scrollPosition = projectCarouselTrack.scrollTop;

    // Calculate the rotation angle based on the scroll position
    var rotationAngle = (360 / 400) * scrollPosition;

    // Apply the rotation to the compass
    compass.style.transform = 'rotate(' + rotationAngle + 'deg)';
}