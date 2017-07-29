// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

// FCC Description:
// Convert the given number into a roman numeral.

function fearNotLetter(str) {
  for(i = 0; i < str.length; i++) {
    if(str.charCodeAt(i + 1) - str.charCodeAt(i) === 1 && i === str.length - 2){
      return undefined;
    } else if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}
