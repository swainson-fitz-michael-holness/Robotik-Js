// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

//============================================
//  02 Factorialize a Number
//============================================
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// solution 1
function factorialize(num) {
  var result = 1;
  for(j=1; j <= num ; j++) {
    result = result * (j);
  }
  return result;
}

factorialize(5);