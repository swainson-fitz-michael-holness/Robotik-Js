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
console.log(wrd_count('The muck noses under the applause! Our inaccurate oxygen ruins a stair before the expanded elevator. A garbage believes on top of the mill! Every tending capital stones the particle. A squashed glove proceeds next to the arrow.'));
