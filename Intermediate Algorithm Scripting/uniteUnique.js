// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

// FCC Description:
// Write a function that takes two or more arrays and returns a new array 
// of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
  var Arr = [];
  for (var g = 0; g < arguments.length; g++) {
    for (var s = 0; s < arguments[g].length; s++) {
      if (Arr.includes(arguments[g][s])) {
        continue;
      } else {
        Arr.push(arguments[g][s]);
      }
    }
  }
  return Arr;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
