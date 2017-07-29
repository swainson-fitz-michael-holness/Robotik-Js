// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

// FCC Description:
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var temp = [];
  var newArr = [];
  
  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      if(arr1[i] === arr2[j]) {
       temp = arr2.splice(arr2.indexOf(arr2[j]), 1).concat(temp);
      } 
    }
  }

  for(var m = 0; m < temp.length; m++) {
    for(var n = 0; n < arr1.length; n++) {
      if(temp[m] === arr1[n]) {
        arr1.splice(arr1.indexOf(arr1[n]), 1);
      } 
    }
  }
  
  newArr = arr1.concat(arr2);
  
  console.log(temp);
  console.log(arr2);
  console.log(arr1);
  console.log(newArr);
  return newArr;
}

diffArray( [1, 7, 3, 4], ["man", 1, 7, 3, "piglet"]);
