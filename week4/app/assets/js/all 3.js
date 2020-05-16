$(document).ready(function () {
    // 以下code:漢堡選單按鈕
    $('#header__hamMenu').click(function (e) {
        e.preventDefault()
        $('.header__navMenu').toggleClass('active')
    })

    // 請問老師、助教，該怎麼選id="pagination__btn--Number--1" 但是後面數字不同
    // // 以下code:產品選單按鈕
    // $('.productsNav__btn').click(function (e) {
    //     e.preventDefault()
    //     $('.productsNav__btn').toggleClass('active')
    // })
    // // 以下code:頁碼按鈕
    // $('.pagination__btn--pageNumbern').click(function (e) {
    //     e.preventDefault()
    //     $('.pagination__btn--pageNumber').toggleClass('active')
    // })
})
