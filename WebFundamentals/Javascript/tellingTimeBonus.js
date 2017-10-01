//BONUS


function tellMeTime(HOUR, MINUTE, PERIOD){
	if(PERIOD == "AM"){
		if(MINUTE == 5) {
				console.log("It is five after", HOUR, " in the morning.")
			}
		else if(MINUTE <= 15){
				console.log("It's a quarter past", HOUR, " in the morning.")
		}
		else if
			(MINUTE == 30) {
				console.log("It is half past", HOUR, " in the morning.")
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
tellMeTime(8, 13, "AM");
