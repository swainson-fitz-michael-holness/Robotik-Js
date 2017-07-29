// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

// FCC Description:
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.

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
