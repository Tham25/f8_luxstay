function main() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    //doi mau button - slider
    var buttonLeft = $('.MS-left');
    var buttonRight = $('.MS-right');

    if (buttonRight && buttonLeft) {
        setInterval(function(){
            buttonLeft.classList.toggle('active');
            buttonRight.classList.toggle('active');
        }, 7000);
    }

    buttonLeft.onclick = function () {
        buttonRight.classList.remove('active');
        buttonLeft.classList.add('active');
    }

    buttonRight.onclick = function () {
        buttonLeft.classList.remove('active');
        buttonRight.classList.add('active');
    }


    //Lay kich thuoc cua app_wrapper - chieu cao = 4/3 chieu rong
    var contentPlaceImg = $('.content-place__img');
    var contentPlaceList = $('.content-place__list');
    contentPlaceList.style.height = 4*(contentPlaceImg.clientWidth)/3 + 'px';
    
    window.addEventListener('resize', function() {
        contentPlaceList.style.height = 4*(contentPlaceImg.clientWidth)/3 + 'px';
    });


    //
}
