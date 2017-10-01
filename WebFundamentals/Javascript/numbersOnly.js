
var x = [1, "apple", -3, "orange", 0.5, "banana", 10]

function numbersOnly(arr){
	var newArr = []

	for(var i=0; i<=arr.length; i++){
		if(typeof arr[i] === "number"){
			newArr.push(arr[i]);
		}
	}
	console.log (newArr);

}

numbersOnly(x);


//SOLUTION

	console.log(typeof(numbersOnly))
	//run through the array
	//test each element to see what type it is
	//if it is a number, add to my new array
	function numbersOnly(arr){
		var new_array = [];
		for (var i = 0; i < arr.length; i++) {
			if(typeof(arr[i]) == "number"){
				new_array.push(arr[i])
			}
		}
		console.log(new_array);
		return new_array;
	}
	numbersOnly([1, "apple", -3, "orange", 0.5]); // [1, -3, "orange", .5]

	function numbersOnlyRemove(arr){
		for (var i = 0; i < arr.length; i++) {
			while(typeof(arr[i]) != "number"){
				for (var k = i; k < arr.length; k++) {
					arr[k] = arr[k+1]
				}
				arr.pop()
			}
		}
		console.log(arr);
	}
	numbersOnlyRemove([1, "apple", -3, "orange", 0.5])
