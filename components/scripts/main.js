// Mustache -----------------------------------------------------------

$(function() {
	var Mustache = require('mustache');

	$.getJSON('js/mb-data.json', function(data) {
	var template = $('#members').html();
	var html = Mustache.to_html(template, data);
	$('#members').html(html);
	}); //getJSON
});//function

// clickToggle ---------------------------------------------------------

$(document).ready(function () {
    var $targets = $('.target');
    $('#buttons .member').click(function () {
        var $target = $($(this).data('target')).fadeToggle();
        $targets.not($target).hide()
    });
});

// Slick Slider ------------------------------------------------------------

$(document).ready(function(){
      $('.responsive-slider').slick({
  draggable: false,
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow:7,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        draggable: true,
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  });