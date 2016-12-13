// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

//============================================
//  05 Title Case a Sentence
//============================================
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// Solution 1
function titleCase(str) {
    var newArr = [];
    var arr = str.split(" ");
    var size = arr.length;
    for(var i = 0; i < size; i++){
        var tmpA = arr.shift();
        tmpA = tmpA.toLowerCase();
        var tmpB  = tmpA.slice(0,1);
        tmpB = tmpB.toUpperCase(); 
        var fin = tmpA.slice(1, tmpA.length);
        newArr.push(tmpB+fin);
    }
    console.log(newArr.join(" "));
    return newArr.join(" ");
}

titleCase("I'm a little tea pot");

