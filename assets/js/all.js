"use strict";

$(function () {
  console.log('Hello Bootstrap5'); //購物說明

  $('.shop-direction .collapse').on('shown.bs.collapse', function () {
    $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
  }); //aos

  AOS.init();
});
//# sourceMappingURL=all.js.map
