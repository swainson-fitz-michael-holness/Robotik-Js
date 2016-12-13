// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

//*============================================
//  01 Reverse a String Basic 
//============================================
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.*


// solution 1
function reverseString(str) {
  var reverseArr =  [];
  for(i = str.length - 1; i >= 0; i--) {
    reverseArr.push(str[i]);
  }
  var stringCombined = reverseArr.join("");
  console.log(stringCombined);  
  return stringCombined;
}

reverseString("hello");

// solution 2
function reverseStr(str){
    console.log(str.split("").reverse().join(""));
    return str.split("").reverse().join(""); 
}

reverseStr("world");