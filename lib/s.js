$(document).ready(function() {

	$('body').append('<footer>Add Container <input type="checkbox" id="cto"></footer>');
	$('body').wrapInner("<div id='twr'></div>");
	$('#twr').prepend('<div id="i1"><h2 class="visible-lg">LG View</h2><h2 class="visible-md">MD View</h2><h2 class="visible-sm">SM View</h2><h2 class="visible-xs">XS View</h2></div>' +
		'<div id="i2"><h2 class="visible-lg">Bootstrap Demo</h2><h2 class="visible-md">Bootstrap Demo</h2><h2 class="visible-sm">Bootstrap Demo</h2><h2 class="visible-xs">Bootstrap Demo</h2></div>');

	//Page Width
	$( window ).resize(function() {
		$('#i2 h2').html($('body').width()+"px");
	});
	//Container Control
	$('#cto').change(function() {
		$('#twr').toggleClass("container");
	});
});