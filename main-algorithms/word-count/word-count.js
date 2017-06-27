function word_count(str) {
  var count_arr = wrd_freq(str);
  var sum = 0
  for(var j = 0; j < count_arr.length; j++){
    sum += count_arr[j][1];
  }
  var output = "Word count: "+ sum + ", Unique Count: "+ count_arr.length
  return output;
}

function wrd_freq(str) {
  //define variables
  var holding_arr = [];
  var update = str.replace(/'/g, "").replace(/\W/g, " ");
  var arr = update.split(" ");
   
  //split words into an array
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "") {
      arr.splice(i, 1);
    }
  }  
   
  //create an aray with unique unique words and their frequency in paragraph 
  for ( var k = 0; k < arr.length; k++){
    var pairing_arr = [];
    pairing_arr.push(arr[k]);
    var temp = arr.filter(function(x){
       return arr[k] === x;
    });
    pairing_arr.push(temp.length);
    arr = arr.filter(function(x){
       return arr[k] !== x;
    });
    holding_arr.push(pairing_arr);
    k--;
  }
  return holding_arr;
}
