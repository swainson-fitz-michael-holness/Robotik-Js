//optimise code
function destroyer(arr) {
    for(var i = 1; i < arguments.length; i++){   
        var tmp = arguments[i];
        arr = arr.filter(function remove(val){
            return !(val === tmp);
        });
    }
    console.log(arr);
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
