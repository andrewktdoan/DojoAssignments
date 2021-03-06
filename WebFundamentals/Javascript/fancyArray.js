// ["James", "Jill", "Jane", "Jack"]

// var arr = ["James", "Jill", "Jane", "Jack"]

// 	console.log(arr[0]);
// 	console.log(arr[1]);
// 	console.log(arr[2]);
// 	console.log(arr[3]);

SOLUTION:

// 		Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:

// [ "James", "Jill", "Jane", "Jack" ]
// Let's make it look fancy! Write a function that will make it print like:

// 0 -> James
// 1 -> Jill
// 2 -> Jane
// 3 -> Jack
	var array = ["James", "Jill", "Jane", "Jack"];
	function fancyPrint(arr){
		for (var i = 0; i < arr.length; i++) {
			console.log(`${i} -> ${arr[i]}`)
		}
	}
	fancyPrint(array, "-")

// 	Bonus (Only If You Have Time):

// Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
	function fancyPrint(arr, symbol="->"){
		for (var i = 0; i < arr.length; i++) {
			console.log(`${i} ${symbol} ${arr[i]}`)
		}
	} 
	//or
	function fancyPrint(arr, symbol){
		if(symbol == undefined){
			symbol = "->"
		}
		for (var i = 0; i < arr.length; i++) {
			console.log(`${i} ${symbol} ${arr[i]}`)
		}
	}
// Have an extra parameter reversed. If the user passes true, print the elements in reverse order
	function fancyPrint(arr, symbol, reversed){
		if(symbol == undefined){
			symbol = "->"
		}
		if(reversed){
			for (var i = Things.length - 1; i >= 0; i--) {
				console.log(`${i} ${symbol} ${arr[i]}`)
			}
		}else{
			for (var i = 0; i < arr.length; i++) {
				console.log(`${i} ${symbol} ${arr[i]}`)
			}
		}
	}