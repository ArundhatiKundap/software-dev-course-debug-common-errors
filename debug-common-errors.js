

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

    
console.log("Welcome to the bootcamp");
// Error type was syntax error : Invalid or unexpected token.
//console.log statement is missing a closing parenthesis ')'.
//Correct the syntax by adding the missing ')'


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.


let numbers = [2, 4, 'eight'];
for (let i = 0; i < numbers.length; i++) {
 
    if (typeof numbers[i]=== 'number') {
        let doubled = numbers[i] * 2;
        console.log(doubled);
    }
}
  


//This code contains a runtime error due to attempting to multiply a string ("eight") by 2.
//When JavaScript tries to evaluate "eight" * 2, it results in NaN (Not a Number).

//The issue can be confirmed by running the code and checking the console output.
//Adding a console.log(typeof numbers[i]) before the multiplication can help identify the data type of each element.

//Ensure all array elements are numbers before performing arithmetic.
//Use type checking to skip non-numeric values.




// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;  
    }
  }
  return true; 
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong?
//This is a logic error because the function is returning the wrong boolean values for prime numbers.
//If a number is divisible by any i from 2 to num - 1, it means the number is not prime.
//Instead of returning true, it should return false.
//Swap the true and false return values.
