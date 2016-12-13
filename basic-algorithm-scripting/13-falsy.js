function isFalsy(val){
    return false === !val;
}

function bouncer(arr) {
    console.log(arr.filter(isFalsy));
    return arr.filter(isFalsy);
}

bouncer([7, "ate", "", false, 9, null, NaN, undefined, 0]);