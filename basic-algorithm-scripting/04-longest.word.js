// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

//============================================
//  04 Find the Longest Word in a String
//============================================
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// Solution 1
function findLongestWord(str) {
  var tmp=0;
  var arr = str.split(" ");
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > tmp){
      tmp = arr[i].length; 
    }
    
  }
  console.log(tmp);
  return tmp;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
