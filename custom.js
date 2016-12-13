$(document).ready( function() {

	// Quick fix for collapsing the navbar after pressing one of the sections
	$('nav a').click(function(){
   		$('nav button').click();
	});

	// When the user scrolls down, the navbar should fade out and the responsive button should fade in
	/* $(window).scroll( function() {
		if ($(window).scrollTop() > 0) {		
		});
	*/


});