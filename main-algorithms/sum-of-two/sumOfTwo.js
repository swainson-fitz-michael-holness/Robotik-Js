// function sumOfTwo(a, b, v) {
//     for(let x = 0; x < a.length; x++) {
//         if (b.includes(Math.abs(a[x] - v))){
//             return true;
//         } 
//     }
//     return false;
// }


// function sumOfTwo(a, b, v) {
//     for(let x = 0; x < a.length; x++) {
//         if(b.findIndex(function(e) {return e === Math.abs(a[x] - v)}) > -1) {
//             return true;
//         }
//     }
//     return false;
// }

// function sumOfTwo(a, b, v) {
//     for(let x = 0; x < a.length; x++) {
//         b.push(v-a[x]);
//     }
//     return !([...Array.from(new Set(b))].length === b.length);
// }

// function sumOfTwo(a, b, v) {
//     for(let x = 0; x < a.length; x++) {
//         b.push(v-a[x]);
//         if([...Array.from(new Set(b))].length < b.length) {
//             return true;
//         } else {
//             b.pop();
//         }
//     }
//     return false;
// }

function sumOfTwo(a, b, v) {
    b = [...Array.from(new Set(b))];
    a = [...Array.from(new Set(a))];
    for(let x = 0; x < a.length; x++) {  
        b.push(v-a[x]);
    }
    return !([...Array.from(new Set(b))].length === b.length);
}
