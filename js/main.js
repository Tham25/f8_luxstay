const main = (function() {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    //===Begin: navbars====//
    const barsBtn = $('.header__info-bars');
    barsBtn.onclick = function() {
        const listInfoMb = $('.header__info-list-mobile');
        listInfoMb.classList.toggle('show');
    };
    //====Begin: Slider==============//
    function stateBtnControl (btnCtrLeft, btnCtrRight, numItem, numView) {
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
