$(document).ready(function(){
	/*
	Challenge:
	Write a program that prints the numbers from 1 to 100. 
	But for multiples of three print ‘Fizz’ instead of the number 
	and for the multiples of five print ‘Buzz’. For numbers which 
	are multiples of both three and five print ‘FizzBuzz’.
	*/
	;(function fizzbuzz(){
		//Run through every number between 1 and 100
		for(let i = 1; i <= 100; i++){
			//Printing logic
			if(checkMultiple(i, 3)){
				if(checkMultiple(i, 5)){
					console.log('FizzBuzz');
				} else{
					console.log('Fizz');
				}
			} else if(checkMultiple(i, 5)){
				console.log('Buzz');
			} else{
				console.log(i);
			}
		}
	})()
	//Check if the second input is a multiple of the first input (div stands for divisor)
	function checkMultiple(num, div){
		let remainder = num % div;
		if(remainder === 0) 
			return true;
		else 
			return false;
	}


	/*
	Next Challenge
	*/


});
