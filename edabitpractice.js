//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

//////////
// EXAMPLES
//////////

// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300

// function addUp(num) {
//     //You want a counter to tally up the sum. 
//     let sum = 0;
//     //Now we are looping over up until the num parameter
//     for (let i = 1; i <= num; i++) {
//     //every loop we add to the sum counter. 
//       sum += i; // sum = sum + i 
//     }
//     return sum;
//   }

//   console.log(addUp(4))

//////
//Function that converts minutes into seconds
//////

// function convert(minutes) {
//     return minutes * 60
// }

// console.log(convert(20))

////////
//Return the Remainder from Two Numbers
////////

//EXAMPLE

//There is a single operator in JavaScript, capable of providing the remainder of a division operation.
//Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0

// function remainder(x, y) {
//     if (x === y){
//         return 0 
//     } else (x % y != 0)
// 	return x
// }

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// console.log(remainder())
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

//TOO HARD TO ME --- 

// function minMax(arr) {
//   for (let i =0,i < arr.length, i++ ){

//   }
// 	arr.splice()
  
// }

let count = 0;

function cc(card) {

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(10))


//Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
//If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  return "Change Me!";
  // Only change code above this line
}

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

// function timeForMilkAndCookies(date) {
//   let day = date.getDate()
//   let month = date.getMonth()

//   if (day === 24 && month === 11){
//     return true
//   } else {
//     return false
//   }
// }

// console.log(timeForMilkAndCookies())

//////
// EASY SETS
//////
// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
	if (Math.min(...arr1) > Math.min(...arr2)){
    return true
  } else if (Math.max(...arr1) < Math.max(...arr2)) {
    return true
  } else {
    return false
  }
}

console.log(canNest(arr1, arr2))


//if arr1 can be nested in arr2 === true, else false. 