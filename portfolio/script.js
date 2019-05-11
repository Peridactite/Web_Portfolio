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
	
	$("#ajaxDemo1").click(function(){
		console.log("ajax1 clicked");
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			console.log("readystatechange");
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("ajaxDemo1").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET", "ajax1.txt", true);
		xhttp.send();
		
	});
	$("#ajaxDemo2").ready(function(){
		console.log("jax2ready");
		$.ajax({
			type: "POST",
			//url: "https://www.metaweather.com/api/location/44418/2013/4/27/",
			url: "fakeJSON.json",
			dataType: "json",
			success: function (result, status, xhr) {
				var table = $("<table><tr><th>Weather Description</th></tr>");

				table.append("<tr><td>Max Temp:</td><td>" + result[0]["max_temp"] + "</td></tr>");

				$("#ajaxDemo2").html(table);
			},
			error: function (xhr, status, error) {
				alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
			}
		});
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

