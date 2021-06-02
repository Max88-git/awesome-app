//handle the click event of .btn
//select the .submenu element and open/close it using the slideToggle method
//500ms for the animation speed
$(function() {
	$('.btn').click(function() {
		$('.submenu').slideToggle(500);
	});
});
//A mouseup event is to first checked upon the document
//The closest() method is called on the target click
//The element is hidden using the hide() method
$(document).mouseup(function(e) {
	if ($(e.target).closest('.submenu').length === 0) {
		$('.submenu').hide(300);
	}
});
