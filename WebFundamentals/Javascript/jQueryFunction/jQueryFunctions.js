$(document).ready(function(){

//CLICK
		$("#click").click(function() {
			(alert) ("you clicked");
		});


//HIDE
		$("#hide").click(function() {
			$("#hide p").hide();
		});

//SHOW
		$("#show").click(function() {
			$("#hide p").show();
		});

//TOGGLE
		$("#toggleButton").click(function() {
			$(".information p").toggle();
		});

//SLIDEDOWN
		$("#hover").hover(function() {
			$(".items").slideDown();
		}, function(){
				$(".items").slideUp();
		});

//SLIDEUP
		$("#hoverUp").click(function() {
			$(".itemsUp").slideUp();
	// }, function(){
	// 	$(".itemsUp").slideDown();
		});

//SLIDETOGGLE
		$("#slideToggle").click(function() {
			$(".slideToggleImage").slideToggle();
		});

//FADEIN
		$("#fadeIn").click(function() {
			$(".fadeInImage").fadeIn();
		});
//FADEOUT
		$("#fadeOut").click(function() {
			$(".fadeOutImage").fadeOut();
		});


//ADDCLASS
		$("#class").click(function() {
			$("#class").addClass("class");
		});



//BEFORE
		$("#beforeMe").before("<h2>HaHa! I've arrived before you!</h2>");


//AFTER
		$("#afterMe").after("<h2>OK, I'll go after you.</h2>");


//APPEND
		$("#appendButton").click(function() {
			$("#appendText").append("appended ");
		});


//HTML
		$("#copyButton").click(function() {
			var text = $("#originalHtmlText").html();
			$("#copyHtmlText").html(text);
		});


//ATTR
		var text = $("#link").attr("href"); //setter
		$("#attr").text(text);
		// alert(text);
		

//VAL
		$("#button").click(function() {
			var val = $("#name").val();
			$("#storage").text(val);
		});



//TEXT
		$("button").click(function() {
			$("#textfunc").text("Set Text for this <p>");
		});




//DATA
		$("#button1").click(function() {
			$("div").data("greeting", "Hello World");
		});

		$("#button2").click(function() {
			alert($("div").data("greeting"));
		});





});



