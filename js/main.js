const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Ban dau load trinh duyet se run function start
function start() {
    
    // listenWindowResize();
}

start();

//slider
// var slides = $$('.app__slider-link');

// Array.from(slides);
// var indexCurrentSlide = 0;
// var indexNewSlide = 0;

// function activeSlide (newSlide) {
//     newSlide.classList.add('active');
// }

// function removeSlide(currentSlide) {
//     currentSlide.classList.remove('active');
// }

// setInterval(() => {
//     //sau 1 s thi remove slide active hien tai
//     removeSlide(slides[indexCurrentSlide])
//     //sau 1s thi chuyen sang slide khac va active slide
//     if (indexCurrentSlide === slides.length -1) indexNewSlide = 0;
//     else indexNewSlide = indexCurrentSlide + 1;
//     activeSlide(slides[indexNewSlide]);
//     //active xong thi gan lai
//     indexCurrentSlide = indexNewSlide;
//     //
// }, 3000);

// function listenWindowResize() {
//     //Tinh margin-top cho app content khi height cua slider thay doi
//     var appSliderLink = $('.app__slider-link.active');
//     var appSlider = $('.app__slider');

//     appSlider.style.height = appSliderLink.clientHeight + 'px';

//     window.addEventListener('resize', function(event){
//         appSlider.style.height = appSliderLink.clientHeight + 'px';
//     });
// }
// Tinh margin-top cho app content khi height cua slider thay doi
// var appSliderImg = $('.app__slider-img');
// var appSlider = $('.app__slider');

// appSlider.style.height = appSliderImg.clientHeight + 'px';

// window.addEventListener('resize', function(event){
//     appSlider.style.height = appSliderImg.clientHeight + 'px';
// });