// This file compares performance of the recurive conditional sort method to to the insertion sort method.

var givenArray = [
    1, 78, 35, 3, 78, 34, 125, 7, 12, 23,84,12,14,623,2436,136,2,33457,2136,13,52,4,246,2,727,25,12,1,64,2,64,26,3612,6246,246,2615,325,727,351
];

//Recursive conditional sort
function sort1(arr){
    var orderedArr = [];
    var index = arr.length - 1;
    var order = orderedArr.length;
    (function recursiveSort(){
        if(orderedArr.length === 0){
            orderedArr.push(arr[index])
            index -= 1;
            //* console.log('START path '+orderedArr);
            recursiveSort();     
        } else if(orderedArr.length < givenArray.length){
            if(arr[index] < orderedArr[order] && order === 0){
                orderedArr.unshift(arr[index]);
                order = orderedArr.length - 1;
                index -= 1;
                // console.log('LESS path '+orderedArr);
                recursiveSort();
            } else if(arr[index] < orderedArr[order] && order > 0){
                order -= 1;
                // console.log('SKIP path '+orderedArr);
                recursiveSort();
            } else if(arr[index] >= orderedArr[order]){
                orderedArr.splice(order + 1, 0, arr[index]);
                order = orderedArr.length - 1;
                index -= 1;
                // console.log('index is '+index+'. and order is '+order);
                // console.log('GREAT path '+orderedArr);
                recursiveSort();
            }
        } else {
            // console.log(orderedArr);
            return orderedArr;
        }
    })();
};
//end

// Insertion Sort
function sort2(unsortedList) {  
    var len = unsortedList.length;
    for (var i = 0; i < len; i++) {
        var tmp = unsortedList[i];
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            unsortedList[j + 1] = unsortedList[j];
        }
        unsortedList[j + 1] = tmp;      
    }
    // console.log(unsortedList);
}
//end

// sort2(givenArray);

//Performance Test
var iterations = 10000;

console.time('recursion conditional sort');
for(var i = 0; i < iterations; i++ ){
    sort1(givenArray);
};
console.timeEnd('recursion conditional sort')

console.time('insertion sort');
for(var i = 0; i < iterations; i++ ){
    sort2(givenArray);
};
console.timeEnd('insertion sort')
