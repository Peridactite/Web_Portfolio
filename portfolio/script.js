//This scrolls to the about div
$(document).ready(function (){
	$("#aboutLink").click(function (){
		$('html, body').animate({
			scrollTop: $("#aboutDiv").offset().top
		}, 2000);
	});
});

//This scrolls to the dev div
$(document).ready(function (){
	$("#devLink").click(function (){
		$('html, body').animate({
			scrollTop: $("#devDiv").offset().top
		}, 2000);
	});
});

//This scrolls to the dev div
$(document).ready(function (){
	$("#artLink").click(function (){
		$('html, body').animate({
			scrollTop: $("#artDiv").offset().top
		}, 2000);
	});
});