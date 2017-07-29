function pairElement(str) {
  var Arr = [];
  var DNA = str.split("");
  
  for(var g = 0; g < str.length; g++) {
    if (DNA[g] === "A") {
      Arr.push(["A", "T"]);
    } else if (DNA[g] === "T") {
      Arr.push(["T", "A"]);
    } else if (DNA[g] === "G") {
      Arr.push(["G", "C"]);
    } else if (DNA[g] === "C") {
      Arr.push(["C", "G"]);
    }
  }
  return Arr;
}

pairElement("ACG");
