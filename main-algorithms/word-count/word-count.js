function word_count(str) {
  var count_arr = wrd_freq(str);
  var sum = 0
  for(var j = 0; j < count_arr.length; j++){
    sum += count_arr[j][1];
  }
  var output = "Word count: "+ sum + ", Unique Count: "+ count_arr.length
  return output;
}
