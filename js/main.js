
const main_app = {
    start: function () {
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        //====Begin: Slider==============//
        //doi mau` button - slider
        var buttonLeft = $('.app__slider .MS-left');
        var buttonRight = $('.app__slider .MS-right');
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
        //====End: Slider==============//
    
        // //======Begin: Place List==============//
        var contentPlaceImg = $('.content-place__img');
        var contentPlaceList = $('.content-place__list');
        contentPlaceList.style.height = 4*(contentPlaceImg.clientWidth)/3 + 'px';
        
        window.addEventListener('resize', function() {
            contentPlaceList.style.height = 4*(contentPlaceImg.clientWidth)/3 + 'px';
        });
        var numItemPlace = $$('.content-place__list .item').length,//so luong phan tu cua list Place
            numViewPlace = ($('.content-place__list').clientWidth / $('.content-place__list .list-item').clientWidth),
            btnCtrLeftPlace = $('.content-place__list .MS-left'),
            btnCtrRightPlace = $('.content-place__list .MS-right');
        stateBtnControl(btnCtrLeftPlace, btnCtrRightPlace, numItemPlace, numViewPlace);
        //======End: Place List==============//
        //======Begin: Recommend Luxstay List==============//
        var numItemLuxstay = $$('.content-recommend__luxstay .item').length,//so luong phan tu cua list Luxstay
            numViewLuxstay = ($('.content-recommend__luxstay').clientWidth / $('.content-recommend__luxstay .list-item').clientWidth),
            btnCtrLeftLuxstay = $('.content-recommend__luxstay .MS-left'),
            btnCtrRightLuxstay = $('.content-recommend__luxstay .MS-right');
        stateBtnControl(btnCtrLeftLuxstay, btnCtrRightLuxstay, numItemLuxstay, numViewLuxstay);
        //======End: Recommend Luxstay List==============//
        
        function stateBtnControl (btnCtrLeft, btnCtrRight, numItem, numView) {
            //lay 2 nut bam control List   
            //khoi tao vi tri hien thi cua phan tu dau va cuoi mang
            var positionFirst = 0; 
            var positionLast;
            
            positionLast = numItem;
            var changeStateBtn = function () {
                if (positionFirst == 0) {
                    btnCtrLeft.disabled  = true;
                } else {
                    btnCtrLeft.disabled  = false;
                }
                if (positionLast == numView) {
                    btnCtrRight.disabled  = true;
                } else {
                    btnCtrRight.disabled  = false;
                }
            }
            
            btnCtrLeft.onclick  = function() {
                positionFirst--;
                positionLast++;
                changeStateBtn();
            }
            btnCtrRight.onclick = function() {
                positionFirst++;
                positionLast--;
                changeStateBtn();
            };
        }
    }
}

main_app.start();
