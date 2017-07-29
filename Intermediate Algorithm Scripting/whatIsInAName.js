function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var token1 = [];
  var srcNum = Object.keys(source).length;
  for (var c = 0; c < collection.length; c++) {
    for (var name in source) {
      if (collection[c].hasOwnProperty(name) === true && source[name] === collection[c][name]) {
        if (srcNum === 1) {
          arr.push(collection[c]);
        } else if (srcNum > 1) {
          token1.push(collection[c]);
        }
      }
    }
  }
  if (srcNum > 1) {
    for (var g = 0; g < token1.length; g++) {
      for (var m = 0; m < token1.length; m++) {
        if (token1[m] === token1[g] && !(g === m)) {
          arr.push(token1[g]);
          token1.splice(m, 1);
        }
      }
    }
  }  
  console.log(arr);
  // Only change code above this line
  return arr;
}
