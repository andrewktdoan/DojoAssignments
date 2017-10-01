var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

function tellMeTime(HOUR, MINUTE, PERIOD){
	if(PERIOD == "AM"){
		if(MINUTE >=30){
			console.log("It's almost " + (HOUR + 1) + " in the morning.");
		}
		else {
			console.log("It's just after", HOUR, "in the morning." );
		}
	}

	else {
		if(MINUTE >=30){
			console.log("It's almost " + (HOUR + 1) + " in the evening.");
			}
		else {
			console.log("It's just after", HOUR, "in the evening." );
			}
		}
	}

//check
tellMeTime(8, 31, "AM");


