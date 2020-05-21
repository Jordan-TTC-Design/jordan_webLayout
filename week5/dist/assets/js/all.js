"use strict";

console.log('Hello!');
$(document).ready(function () {
  // var $linkContent = $('.nav__link').attr('value')
  // console.log($linkContent)
  $('.user-stateBox').click(function () {
    $('.user-box__btnBox').toggleClass('active');
  });
  $('#qusReplyOpen').click(function () {
    $('.replayBox').addClass('active');
  });
  $('#qusRaplySend').click(function () {
    $('.replayBox').removeClass('active');
  });
});
//# sourceMappingURL=all.js.map
