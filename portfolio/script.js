"use strict";
$(document).ready(function () {
    // Handler for .ready() called.
    //$('html, body').animate({
    //    scrollTop: $('#pageStart').offset().top
    //}, 2000);
	
	
	// Anchor Scroll
	$('.anchor-scroll').anchorScroll({
		scrollSpeed: 800 // scroll speed
	 });
	 
	 //Tipster tooltips
	$('.tooltip').tooltipster({
		theme: 'tooltipster-noir'
	});
	
	$("video").click(function(event){
		if($(this).hasClass("playingVideo")){
			$(this).get(0).pause();	
			$(this).toggleClass("playingVideo");
			
		}else{			
			$(this).get(0).play();		
			$(this).toggleClass("playingVideo");
			$('html, body').animate({
				scrollTop: $(this).offset().top
			}, 500);
		}
	});
});

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
	