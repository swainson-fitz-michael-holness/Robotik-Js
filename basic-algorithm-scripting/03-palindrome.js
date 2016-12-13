// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

//============================================
//  03 Check for Palindromes
//============================================
// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
    var tmp = '';
    var update = str.replace(/ |_|\.|,|-|\(|\)/g, '').toLowerCase();
    
    for(var i = update.length - 1; i >= 0; i--){
        tmp += update[i];
    }
    if(tmp === update){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}



palindrome("0_0 (: /-\ :) 0-0"); 