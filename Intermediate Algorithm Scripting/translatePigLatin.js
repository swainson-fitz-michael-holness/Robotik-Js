function translatePigLatin(str) {
  var vowel = [
    'a',
    'e',
    'i',
    'o',
    'u'
  ];
  var token = str.split('');
  function loopy() {
    for (var s = 0; s < str.length; s++) {
      for (var g = 0; g < vowel.length; g++) {
        if (vowel[g] === str[s] && s === 0) {
          token.push('way');
          return;
        } else if (vowel[g] === str[s] && s > 0) {
          token.push('ay');
          return;
        } else if (g === vowel.length - 1){
          token.push(token.splice(0, 1) [0]);
          break;
        }
      }
    }
    
  } 
  loopy();
  return token.join("");
}
translatePigLatin('glory');
