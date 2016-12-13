function mutation(arr) {
    tmp = arr[1].toLowerCase();
    str = arr[0].toLowerCase();
    for(var i = 0; i < tmp.length; i++){
        if(str.indexOf(tmp[i]) === -1){
            console.log(false)
            return false;
        }
    }
    console.log(true);
    return true;
}
 
mutation(["hello", "hey"]); //should return false.
mutation(["hello", "Hello"]); //should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //should return true.
mutation(["Mary", "Army"]); //should return true.
mutation(["Mary", "Aarmy"]); //should return true.
mutation(["Alien", "line"]); //should return true.
mutation(["floor", "for"]); //should return true.
mutation(["hello", "neo"]); //should return false.
mutation(["voodoo", "no"]); //should return false.