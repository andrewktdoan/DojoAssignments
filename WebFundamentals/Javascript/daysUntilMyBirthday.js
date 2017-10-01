// The Challenge:

// For every day, print how many days left.

// If it's more than 30 days, print a sad message.

// If it's less than 30 days, print a message that sounds excited!

// If it's less than 5 days, SCREAM IT!

// ONCE IT'S YOUR BIRTHDAY HAVE PARTY!




// First try


// var daysUntilMyBirthday = 60
	
// 	for (var daysUntilMyBirthday = 60; daysUntilMyBirthday >= 0; daysUntilMyBirthday--) {
// 		// console.log(daysUntilMyBirthday + " days until my birthday...:(")

// 		if(daysUntilMyBirthday > 30){
// 			console.log(daysUntilMyBirthday + " days until my birthday...:(")
// 		}
// 		else if(daysUntilMyBirthday <= 30 && daysUntilMyBirthday > 5) {
// 			console.log(daysUntilMyBirthday + " days until my birthday. I'm excited!")
// 		}
// 		else if(daysUntilMyBirthday <= 5 || daysUntilMyBirthday > 0){
// 			console.log(daysUntilMyBirthday + " MORE DAYS. IT'S ALMOST HERE!!!")
// 		}
// 		else if(daysUntilMyBirthday = 0){
// 			console.log("Happy Birthday")
// 		}
// 	}	



// 2nd Attempt

var daysUntilMyBirthday = 60
	
	for (var daysUntilMyBirthday = 60; daysUntilMyBirthday >= 0; daysUntilMyBirthday--) {
		// console.log(daysUntilMyBirthday + " days until my birthday...:(")

		if(daysUntilMyBirthday > 30){
			console.log(daysUntilMyBirthday + " days until my birthday...:(")
		}
		else if(daysUntilMyBirthday <=30 && daysUntilMyBirthday >5){
			console.log(daysUntilMyBirthday + " more days. Getting excited!")
		}
		else if(daysUntilMyBirthday <= 5 && daysUntilMyBirthday >=1) {
			console.log(daysUntilMyBirthday + " MORE DAY!!!!!!")
		}
		else {
			console.log("!!!!!!HAPPY BIRTHDAY TO ME!!!!!!")
		}
	}	



// SOLUTION:


// var daysUntilMyBirthday = 0;
// 		if( daysUntilMyBirthday > 30){
// 			console.log(daysUntilMyBirthday, "days until my birthday. sad sad days...")
// 		}else if(daysUntilMyBirthday <= 30 > 1){
// 			console.log(daysUntilMyBirthday, "Lets gooooo!!!")
// 		}else {
// 			console.log(` ♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*
// 				♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪
// 				*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«`)
// 		}







