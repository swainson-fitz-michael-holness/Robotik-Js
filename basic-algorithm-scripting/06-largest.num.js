// Author - Swainson Holness
// Contact - swainson.holness@gmail.com

//============================================
//  06 Return Largest Numbers in Arrays
//============================================
// Return an array consisting of the largest number from each provided sub-array.
// For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestNumArr(arr) {
    var newArr = [];

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

    for(var i = 0; i < arr.length; i++){
        sort(arr[i]);
        var tmpB = arr[i].pop();
        newArr.push(tmpB);
    } 
    arr = newArr;
    console.log(arr);
    return arr;   
}

largestNumArr([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
