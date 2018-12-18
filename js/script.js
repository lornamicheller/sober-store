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

$('.arrow-button-1').on('click', () => {
  $('.price-one').slideToggle(300);
})

$('.arrow-button-2').on('click', () => {
  $('.price-two').slideToggle(300);
})

$('.arrow-button-3').on('click', () => {
  $('.price-three').slideToggle(300);
})

$('.arrow-button-4').on('click', () => {
  $('.price-four').slideToggle(300);
})

$('.fa-angle-double-down').on('click', () => {
  event.preventDefault();
  $('.about-us-paragraph').slideToggle(600);
})



$(document).ready(function() {
  $('.slider').slick();
})

});