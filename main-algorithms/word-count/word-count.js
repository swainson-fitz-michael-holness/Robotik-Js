//function wrd_count(str) {
//    var arr = [];
//    var update = str.replace(/'/g, "").replace(/\W/g, " ");
//    arr = update.split(" ");
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i] === "") {
//            arr.splice(i, 1);
//        }
//    }
//
//
//    return arr;
//}
//
//console.log(wrd_count("I want to test swainson's something. I am in the belief that I can control the energies around me. I have this picture in my mind where I am something akin to a magnet, a complicated attractive force that pushes away certain things and attracts certain things based on its makeup. "))

function wrd_count(str) {
  var holding_arr = [];;
  var update = str.replace(/'/g, '').replace(/\W/g, ' ');
  var arr = update.split(' ');
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === '') {
      arr.splice(i, 1);
    }
  }  
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
  return ;
}
console.log(wrd_count('I want to test swainson\'s something. I am in the belief that I can control the energies around me. I have this picture in my mind where I am something akin to a magnet, a complicated attractive force that pushes away certain things and attracts certain things based on its makeup.'));
