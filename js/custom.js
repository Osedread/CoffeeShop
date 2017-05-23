var $section = $("section");
var $h3 = $("h3");

$h3.hide();

$(document).ready( function() {

	//
	$(".nav-btn").on("click", function(){
		$(".nav-content").slideToggle("slow");
	});

	$section.on("inview", function(event, isInView) {

		if (isInView) {
			$section.each(function(){
				$(this).find("h3").fadeIn();
			});
		}
	});

});
