
function slasher(arr, howMany) {
    var tmp = arr.slice(howMany, arr.length);
    console.log(tmp);
    return tmp;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);