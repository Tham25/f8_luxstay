

//slider
var slides = document.querySelectorAll('.app__slider-link');

Array.from(slides);
var indexCurrentSlide = 0;
var indexNewSlide = 0;

function activeSlide (newSlide) {
    newSlide.classList.add('active');
}

function removeSlide(currentSlide) {
    currentSlide.classList.remove('active');
}

setInterval(() => {
    //sau 1 s thi remove slide active hien tai
    removeSlide(slides[indexCurrentSlide])
    //sau 1s thi chuyen sang slide khac va active slide
    if (indexCurrentSlide === slides.length -1) indexNewSlide = 0;
    else indexNewSlide = indexCurrentSlide + 1;
    activeSlide(slides[indexNewSlide]);
    //active xong thi gan lai
    indexCurrentSlide = indexNewSlide;
    //
}, 3000);