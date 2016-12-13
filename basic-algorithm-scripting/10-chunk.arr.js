
function chunkArrayInGroups(arr, size) {
    holdingArr = [];
    var limit = Math.ceil(arr.length / size) - 1;
    for(var i = 0; i <= limit; i++ ){
        var group = arr.slice(i*size, (i+1)*size);
        holdingArr.push(group);
    }
    
    console.log(holdingArr)
    return holdingArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
