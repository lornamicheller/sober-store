/* global $ */

$(document).ready(() => {

$(document).on('click', 'ul li', function () {
  $(this).addClass('active').siblings().removeClass('active');
})

$('#shop-button').on('mouseenter', () => {
  $('.shop-box').slideToggle(300);
})

$('#shop-button').on('mouseleave', () => {
  $('.shop-box').slideToggle(300);
})

$('#sign-in-button').on('mouseenter', () => {
  $('.sign-in-form').slideToggle(300);
})

$('#sign-in-button').on('mouseleave', () => {
  $('.sign-in-form').slideToggle(300);
})

$('#cart-button').on('mouseenter', () => {
  $('.cart-container').slideToggle(300);
})

$('#cart-button').on('mouseleave', () => {
  $('.cart-container').slideToggle(300);
})

});