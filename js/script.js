/* global $ */

$(document).ready(() => {

$(document).on('click', 'ul li', function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('body').removeClass('active');
})

$('#shop-button').on('click', () => {
  $('.shop-box').slideToggle(300);
})


$('#sign-in-button').on('click', () => {
  $('.sign-in-form').slideToggle(300);
})


$('#cart-button').on('click', () => {
  $('.cart-container').slideToggle(300);
})

$('.fa-angle-double-down').on('click', () => {
  event.preventDefault();
  $('.about-us-paragraph').slideToggle(600);
})

$(document).ready(function() {
  $('.slider').slick();
})

});