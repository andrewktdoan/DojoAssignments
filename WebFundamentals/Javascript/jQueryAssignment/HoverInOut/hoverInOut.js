$(document).ready(function(){

// CONNECTION CHECK

		// $("button").click(function() {
		// 	(alert) ("YOU ARE CONNECTED!");
		// });



	$("img").hover(function(){  	//when clicked
		var temp = $(this).attr("src");
		var alt = $(this).attr("alt")
		$(this).attr("src", alt);
		$(this).attr("alt", temp)	
	});


	







});

//Use this for toggling HORIZONTALLY
//		$('#element').animate({width: 'toggle'});
