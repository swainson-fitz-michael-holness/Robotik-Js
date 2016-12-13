function sort(arr){
    for(var index = 0; index < arr.length - 1; index++){
        if(arr[index] > arr[index+1]){
            arr.splice(index+2,0,arr[index]);
            arr.splice(index, 1);
            return sort(arr);
        }
    }
    return arr;
}

function getIndexToIns(arr, num) {
    sort(arr);
    for(var i = 0; i < arr.length; i++){
        if(num <= arr[i]){
            console.log(i);
            return i;
        } else if(num > arr[arr.length - 1]){
            console.log(arr.length);
            return arr.length;
        } 
    }
}

getIndexToIns([3, 10, 5], 3);
getIndexToIns([2, 5, 10], 15);
getIndexToIns([10, 20, 30, 40, 50], 35);
