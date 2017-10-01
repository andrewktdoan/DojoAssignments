$(document).ready(function(){

//CONNECTION CHECK
		// $("button").click(function() {
		// (alert) ("you clicked");
		// });

		$("img").click(function() {
			$(this).animate({"opacity":"0"}, 500);
		});


		$("button").click(function() {
		$(".ninjas").animate({"opacity":"1"}, 500);
		});


});