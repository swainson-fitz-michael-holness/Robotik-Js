function confirmEnding(str, target) {
    var tar = target.length - 1;
    var input = str.length -1;
    var pos = input - tar;
    var update = str.substr(pos, str.length - 1);
    if(update === target){
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

confirmEnding("He has to give me a new name", "name");