$(function() {
	var Mustache = require('mustache');

	$.getJSON('js/mb-data.json', function(data) {
	var template = $('#members').html();
	var html = Mustache.to_html(template, data);
	$('#members').html(html);
	}); //getJSON
}); //function