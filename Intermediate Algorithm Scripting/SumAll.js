function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;
  for(var i = min; i <= max; i++){
      sum += i;     
  }
  console.log("sum("+min+" < "+max+") = "+sum);
  return sum;
}

sumAll([55, 9]);
