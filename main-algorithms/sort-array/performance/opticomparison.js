// This file analyzes three forms of sort method. The light weight recursive bubble sort,
//and the built in sort method. 

var givenArray = [
    1, 78, 35, 3, 78, 34, 125, 7, 12,13,5,8,146,3,166,38,35,24724,4,6,27,17,46,27,583583,13,745,247,221,64,7, 23,84,12,14,623,2436,136,2,33457,2136,13,52,4,246,2,727,25,12,1,64,2,64,26,3612,6246,246,2615,325,727,351
];

// Recursion bubble sort XD
function sort1(arr){
    for(var index = 0; index < arr.length - 1; index++){
        if(arr[index] > arr[index+1]){
            arr.splice(index+2,0,arr[index]);
            arr.splice(index, 1);
            return sort1(arr);
        }
    }
}
//end

// Insertion sort
function sort2(unsortedList) {  
    var len = unsortedList.length;
    for (var i = 0; i < len; i++) {
        var tmp = unsortedList[i]; 
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            unsortedList[j + 1] = unsortedList[j];
        }
        unsortedList[j + 1] = tmp;
        
    }
}

//prototype.Array.Sort


// Performance
var iterations = 1000000;

console.time('recursion bubble sort');
for(var i = 0; i < iterations; i++ ){
    sort1(givenArray);
};
console.timeEnd('recursion bubble sort')

console.time('insertion sort');
for(var i = 0; i < iterations; i++ ){
    sort2(givenArray);
};
console.timeEnd('insertion sort')

console.time('built in sort');
for(var i = 0; i < iterations; i++ ){
    givenArray.sort();
};
console.timeEnd('built in sort')
