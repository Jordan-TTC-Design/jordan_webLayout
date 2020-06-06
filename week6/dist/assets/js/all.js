"use strict";

$(document).ready(function () {
  console.log('Hello Bootstrap4'); // 輪播

  var swiper = new Swiper('.swiper-container', {
    // 更改過
    slidesPerView: 'auto',
    centeredSlides: false,
    //原生
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});
//# sourceMappingURL=all.js.map
