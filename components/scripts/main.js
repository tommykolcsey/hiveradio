// Navigation Dropdown Toggles -----------------------------------------
// Adapted from the jQuery Library

$(document).ready(function () {
$( "#dropdown-toggle" ).click(function() {
  $( ".dropdown-menu" ).slideToggle( "slow" );
  $("#dropdown-toggle .triangle").toggleClass("triangle-down");
});
});

$(document).ready(function () {
$( "#navBurger" ).click(function() {
  $( "#navbar-collapse" ).slideToggle();

});
});

// Contact Page 'Join The Hive' Dropdown Toggle -----------------------------------------
// Adapted from the jQuery Library
$(document).ready(function () {
$( "#get-involved" ).click(function() {
  $( "#ht-get-involved" ).slideToggle();

});
});

// Shows Description & Changes Selected Attributes --------------------------------------------
//Adapted from: http://stackoverflow.com/questions/20011477/get-number-in-class-name-jquery

$(document).ready(function () {
$('[id^=shows-title-]').on('click', function() {
  var num = $(this).attr('id').match(/\d+$/)[0];
  $('.shows-title-selected').removeClass('shows-title-selected');
  $('#shows-title-'+num).addClass('shows-title-selected');

  $('.selected').removeClass('selected');
  $('#shows-desc-'+num).addClass('selected');
});
});


// Slick Slider ------------------------------------------------------------
//Adapted from: http://kenwheeler.github.io/slick/

$(document).ready(function(){

       $('.slider-for').slick({
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        fade: true,
        asNavFor: '.slider-nav',
        
      });
      $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        asNavFor: '.slider-for',
        dots: false,
        speed: 800,
        focusOnSelect: true,
         responsive: [
           {
             breakpoint: 992,
             settings: {
               slidesToShow: 5,
               slidesToScroll: 3,
               infinite: true
             }
           },
           {
             breakpoint: 479,
             settings: {
               draggable: true,
               slidesToShow: 4,
               slidesToScroll: 3,
               infinite: true
             }
           },
           {
             breakpoint: 320,
             settings: {
               draggable: true,
             slidesToShow: 2,
               slidesToScroll: 2
             }
           }
        ]
      });
  });