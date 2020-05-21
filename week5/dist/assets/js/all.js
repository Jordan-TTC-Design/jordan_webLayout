"use strict";

console.log('Hello!');
$(document).ready(function () {
  // var $linkContent = $('.nav__link').attr('value')
  // console.log($linkContent)
  $('#qusReplyOpen').click(function () {
    $('.replayBox').addClass('active');
  });
  $('#qusRaplySend').click(function () {
    $('.replayBox').removeClass('active');
  });
});
//# sourceMappingURL=all.js.map
