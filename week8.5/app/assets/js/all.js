$(document).ready(() => {
    console.log('hello')
    // 輪播大圖
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    //reservation
    $('#reserveDetail').click(function () {
        $('#reserveInfoDropDown').toggleClass('active')
        $('#phoneTotlePrice').toggleClass('invisible')
    })
    $('#detailListAdd').click(function () {
        $('.detail__reserveBox').addClass('active')
    })
    $('#detailReserveCancel').click(function () {
        $('.detail__reserveBox').removeClass('active')
    })
    $('#filiter').click(function () {
        $('.filterBox').addClass('active')
    })
    $('#filterBoxClose').click(function () {
        $('.filterBox').removeClass('active')
    })
    
})
