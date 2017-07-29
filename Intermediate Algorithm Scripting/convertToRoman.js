
// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

// FCC Description:
// Convert the given number into a roman numeral.

function convertToRoman(num) {
  function createNumerals (sym1, sym2, sym3) {
  var symArr =[];
  
  for (var i = 0; i < 10; i++) {
    if (i === 0) {
      symArr.push(sym1);
    } else if (i > 0 && i <= 2) {
      symArr.push(symArr[i-1].concat(symArr[0]));
    } else if (i === 3) {
      symArr.push(sym1.concat(sym2));
      symArr.push(sym2);
    } else if (i > 3 && i < 7) {
      symArr.push(symArr[i].concat(symArr[0]));
    } else if (i === 7) {
      symArr.push(symArr[0].concat(sym3));
    }
  }
  return symArr;
  }
  
  function createNum(sym1, sym2, sym3, sym4, sym5, sym6, sym7) {
  var numArr = [];
  numArr.push(createNumerals(sym1, sym2, sym3));
  numArr.push(createNumerals(sym3, sym4, sym5));
  numArr.push(createNumerals(sym5, sym6, sym7));
  
    return numArr;
 }
  var numData = createNum("I", "V", "X", "L", "C", "D", "M");
  var naughtyFix = ["M", "MM", "MMM", "MMMM", "MMMMM", "MMMMMM", "MMMMMMM","MMMMMMMM", "MMMMMMMMM"];
  numData.push(naughtyFix);
  var exp = num.toString().length - 1;
  var tempArr = [];
  var numTemp = num;
  for(var x = exp; x >= 0; x--) {
    var temp = Math.floor(numTemp / Math.pow(10, x)) ;
    numTemp = numTemp - temp * Math.pow(10, x);
    tempArr.push(temp);
  } 
  console.log(tempArr);

  
  var newArr = [];
  var k = 0;
  for(var y = tempArr.length; y >= 1; y--) {
    if (tempArr[y-1] === 0) {
      newArr.push("");
    } else {
      newArr.push(numData[k][tempArr[y-1] - 1]);
    }
    k++; 
  }
  var supa = "";
  for(var g = newArr.length - 1; g >= 0; g--) {
    supa = supa.concat(newArr[g]);
  }
  console.log(newArr);
  console.log(supa);
  return supa;
}

convertToRoman(5001);
