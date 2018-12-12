/* global $ */

$(document).ready(() => {

$(document).on('click', 'ul li', function () {
  $(this).addClass('active').siblings().removeClass('active');
})

$('#shop-button').on('mouseenter', () => {
  $('.shop-box').slideToggle(100);
})

$('#shop-button').on('mouseleave', () => {
  $('.shop-box').slideToggle(100);
})

$('#sign-in-button').on('mouseenter', () => {
  $('.sign-in-form').slideToggle(100);
})

$('#sign-in-button').on('mouseleave', () => {
  $('.sign-in-form').slideToggle(100);
})

});