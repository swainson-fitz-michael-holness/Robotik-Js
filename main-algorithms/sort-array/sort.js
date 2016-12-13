//Author Swainson Holness

//Example array to sort in ascending order
var givenArray = [
    232, 199, 35, 3, 78, 8, 151, 124, 125, 34, 23, 8
];

//Recursive Bubble Sort function
function sort(arr){
    for(var index = 0; index < arr.length - 1; index++){
        if(arr[index] > arr[index+1]){
            arr.splice(index+2,0,arr[index]);
            arr.splice(index, 1);
            return sort(arr);
        }
    }
    console.log(givenArray);
}

sort(givenArray); // output: [ 3, 8, 8, 23, 34, 35, 78, 124, 125, 151, 199, 232 ] 

