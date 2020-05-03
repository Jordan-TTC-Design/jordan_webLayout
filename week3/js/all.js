$(document).ready(function () {
    $('#hamMenu').click(function (e) {
        e.preventDefault()
        $('.headerMenu').toggleClass('menuActive')
    })
})
