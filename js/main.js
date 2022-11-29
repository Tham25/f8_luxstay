const main = (function() {
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

    return {
        controlViewBtn(nameOfClass) {
            var numItemVisit = $$(`${nameOfClass} .item`).length,//so luong phan tu cua list Visit
            numViewVisit = ($(`${nameOfClass}`).clientWidth / $(`${nameOfClass} .list-item`).clientWidth),
            btnCtrLeftVisit = $(`${nameOfClass} .MS-left`),
            btnCtrRightVisit = $(`${nameOfClass} .MS-right`);
            stateBtnControl(btnCtrLeftVisit, btnCtrRightVisit, numItemVisit, numViewVisit);
        },
    };
})();
