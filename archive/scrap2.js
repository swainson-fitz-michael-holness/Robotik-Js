const getPrimesO = (n) => {
    const p = [2, 3, 5, 7]
    const s = Array(n).fill(false);
    const h = [1, 3, 7, 9]
    let sum = 17;
    let outStep = 0;
    let inStep = 0;


    for (let i = 0; (10 * (Math.floor(i / 4) + 1)) + h[i % 4] <= n; i++) {
        let e = (10 * (Math.floor(i / 4) + 1)) + h[i % 4]
        let t = e % 3 === 0 || e % 7 === 0
        // console.log(outStep);
        outStep++;
        if (!s[e]) {
            if (t) s[e] = true

            if (!t) {
                s[e] = e;
                sum += e
                for (let g = 2 * e; g <= n; g += e) {
                    s[g] = true
                    inStep++
                }
            }


        }

    }

    return inStep + outStep
}

const getPrimesA = (n) => {
    const s = Array(n).fill(false);
    let sum = 0;


    for (let i = 2; i <= n; i++) {
        if (!s[i]) {
            s[i] = i;
            sum += i

            for (let g = 2 * i; g <= n; g += i) {
                s[g] = true
            }
        }

    }

    return sum
}

// console.log(getPrimes(200))

function sumPrimes(num) {
    var res = 0;
    let outer = 0;

    // Function to get the primes up to max in an array
    function getPrimes(max) {
        var sieve = [];
        var i;
        var j;
        var primes = [];

        for (i = 2; i <= max; ++i) {
            outer++
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                outer++
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }

        return primes;
    }

    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
        res += primes[p];
    }

    return outer;
}

// --------------------------------------------------------------------------------
// Debug via console logging flag
// --------------------------------------------------------------------------------
const debug = false;

// --------------------------------------------------------------------------------
// Brief: Sum primes from 2 to num (inclusive)
//
// Inputs:
//  num - upper bound to sum primes (inclusive)
//
// Outputs:
//  sum - sum of primes from 2 to num (inclusive)
// --------------------------------------------------------------------------------
function sumPrimes2(num) {
    let outStep = 0

    if (debug) console.log("WARNING - DEBUGGING LOGGING WILL DECREASE PREFORMANCE");

    // Bounds checking
    if (num <= 1)
        return 0;

    // Make boolean array of odd numbers
    const upper = Math.floor((num - 1) / 2);
    const isPrime = Array(upper).fill(true); // 'Guess' all are prime

    if (debug) console.log(" -- Upper: " + upper);

    // Mark multiples of each prime as false (not prime)
    const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2); // Done when i*i marked
    for (let i = 0; i <= sqrtUpper; ++i)

        // Check if number is multiple of any smaller odd number
        if (isPrime[i]) {
            // Loop bound values
            outStep++
            const prime = 2 * i + 3; // Note that number = index*2+3
            const primeSqaredIndex = 2 * i * i + 6 * i + 3; // Everything below prime*2 marked
            // Mark all multiples of this number as false (not prime)
            for (let j = primeSqaredIndex; j < upper; j += prime) {
                outStep++
                isPrime[j] = false;
            }

        }
    if (debug) console.log(" -- isPrime: " + isPrime);

    // Count sum
    let sum = 2
    for (let i = 0; i < upper; ++i)
        if (isPrime[i])
            sum += 2 * i + 3;
    if (debug) console.log(" -- Sum: " + sum);

    // Return
    if (debug) console.log("END DEBUGGING OUTPUT");
    return isPrime;
}

// const wheelPrime = (n) => {
//     let step = 0;

//     const p = [2, 3, 5]
//     // let sieve = Array(n).fill(false);
//     let sieve = Array(n).fill(false)

//     // const genPrime = [7, 11, 13, 17, 19, 23, 29, 31];

//     const inc = [4, 2, 4, 2, 4, 6, 2, 6]

//     let g = 0;
//     let h = 0;
//     let m = 0;
//     let k = 0;

//     // let wheelSum = 0
//     // let compSum


//     // sieve[7] = 7;

//     //fill genPrime using wheel
//     for (let i = 7; i + inc[g % 8] < n; i += inc[(g - 1) % 8]) {
//         sieve[i] = true;

//         // genPrime.push(i+ inc[i % 8])

//         g++
//         // console.log(inc[(g - 1) % 42])
//         step++
//     }

//     for (let v = 7; v < n; v += inc[(h - 1) % 8]) {
//         step++
//         m = k;
//         for (let s = v; s <= Math.floor(Math.sqrt(n)); s += inc[(m - 1) % 8]) {
//             step++
//             if (sieve[v * s]) sieve[v * s] = false
//             // console.log(s + " : " + m)
//             m++
//         }
//         k++
//         h++
//         // sieve[i+ inc[h % 8]] = i+ inc[h % 8]
//     }


//     // for (let j = 0; genPrime[j] < Math.floor(Math.sqrt(n)); j++) {
//     //     // let terminate;
//     //     step++
//     //     for (let g = j; genPrime[j] * genPrime[g] < n; g++) {
//     //         let primeComposite = genPrime[j] * genPrime[g]
//     //         if (sieve[primeComposite]) sieve[primeComposite] = false
//     //         // terminate = genPrime[j] * genPrime[g + 1]
//     //         step++
//     //     }

//     //     // if (terminate > n) {
//     //     //     break
//     //     // }

//     // }



//     return sieve

// }

// const wheelPrime = (n) => {
//     // let step = 0;

//     const p = [2, 3, 5]
//     // let b = Math.floor((n) / 30)
//     // let sieve = Array(n).fill(false);
//     // let sieve = Array(79).fill(false)
//     let sieve = []

//     let genPrime = Array(31).fill(false)
//     genPrime[7] = 0
//     genPrime[11] = 1
//     genPrime[13] = 2
//     genPrime[17] = 3
//     genPrime[19] = 4
//     genPrime[23] = 5
//     genPrime[29] = 6
//     genPrime[1] = -1

//     const inc = [4, 2, 4, 2, 4, 6, 2, 6]

//     let g = 0;
//     // let h = 0;

//     // let k = 0;

//     // let wheelSum = 0
//     // let compSum


//     // sieve[7] = 7;

//     //fill genPrime using wheel
//     for (let i = 7; i < n;) {
//         sieve[g] = i;
//         // console.log(i + inc[(g) % 8])
//         i += inc[g % 8]

//         // genPrime.push(i+ inc[i % 8])

//         g++
//         // console.log(inc[(g - 1) % 42])
//         // step++
//     }


//     for (let v = 0; v < sieve.length; v++) {
//         let m = v;
//         if (sieve[v]) {
//             for (let x = sieve[v]; x * sieve[v] <= n; x += inc[(m - 1) % 8]) {
//                 // console.log(x + " * " + sieve[v] + ":=" + v + "" + " = " + x * sieve[v] + " ::: " + sieve[genPrime[((x * sieve[v]) - (Math.floor(x * sieve[v] / 30) * 30))] + (8 * Math.floor(x * sieve[v] / 30))] + " : " + genPrime[((x * sieve[v]) - (Math.floor(x * sieve[v] / 30) * 30))] + " @+@ " + (8 * Math.floor(x * sieve[v] / 30)) + " = " + sieve[genPrime[((x * sieve[v]) - (Math.floor(x * sieve[v] / 30) * 30))] + (8 * Math.floor(x * sieve[v] / 30))] + " ::: " + genPrime[((x * sieve[v]) - (Math.floor(x * sieve[v] / 30) * 30))] + " + " + (8 * Math.floor(x * sieve[v] / 30)))
//                 // let val = x * sieve[v]
//                 // let postVal = 
//                 // console.log(postVal)
//                 // let posVal = val - (30 * mag)


//                 sieve[(genPrime[((x * sieve[v]) - (Math.floor(x * sieve[v] / 30) * 30))] + (8 * Math.floor(x * sieve[v] / 30)))] = false

//                 m++
//             }
//         }

//     }

//     // for (let v = 7; v < n; v += inc[(h - 1) % 8]) {
//     //     step++
//     //     m = k;
//     //     for (let s = v; s <= Math.floor(Math.sqrt(n)); s += inc[(m - 1) % 8]) {
//     //         step++
//     //         if (sieve[v * s]) sieve[v * s] = false
//     //         // console.log(s + " : " + m)
//     //         m++
//     //     }
//     //     k++
//     //     h++
//     //     // sieve[i+ inc[h % 8]] = i+ inc[h % 8]
//     // }


//     // for (let j = 0; genPrime[j] < Math.floor(Math.sqrt(n)); j++) {
//     //     // let terminate;
//     //     step++
//     //     for (let g = j; genPrime[j] * genPrime[g] < n; g++) {
//     //         let primeComposite = genPrime[j] * genPrime[g]
//     //         if (sieve[primeComposite]) sieve[primeComposite] = false
//     //         // terminate = genPrime[j] * genPrime[g + 1]
//     //         step++
//     //     }

//     //     // if (terminate > n) {
//     //     //     break
//     //     // }

//     // }



//     return sieve

// }


// ==========================================

const wheelPrime = (n) => {


    const p = [2, 3, 5]


    let sieve = []

    let genPrime = Array(31).fill(false)
    genPrime[7] = 0
    genPrime[11] = 1
    genPrime[13] = 2
    genPrime[17] = 3
    genPrime[19] = 4
    genPrime[23] = 5
    genPrime[29] = 6
    genPrime[1] = -1

    const inc = [4, 2, 4, 2, 4, 6, 2, 6]

    let g = 0;

    for (let i = 7; i < n;) {
        sieve[g] = i
        i += inc[g % 8]
        g++

    }

    // related to fabio sieve
    for (let v = 0; v < sieve.length; v++) {
        let m = v;
        if (sieve[v]) {
            for (let x = sieve[v]; x * sieve[v] <= n; x += inc[(m - 1) % 8]) {

                sieve[(genPrime[((x * sieve[v]) - (Math.floor(x * sieve[v] / 30) * 30))] + (8 * Math.floor(x * sieve[v] / 30)))] = false

                m++
            }
        }

    }


    return sieve

}

//Dammit!!!

//OKay lets try again

const wheelOfEratosthenes = (n) => {
    let p;
    let A = [7, 11, 13, 17, 19, 23, 29, 31]
    // const pos = []
    // pos[7] = 0
    // pos[11] = 1
    // pos[13] = 2
    // pos[17] = 3
    // pos[19] = 4
    // pos[23] = 5
    // pos[29] = 6
    // pos[1] = 7

    // const pos = {
    //     7: 0,
    //     11: 1,
    //     13: 2,
    //     17: 3,
    //     19: 4,
    //     23: 5,
    //     29: 6,
    //     1: 7,
    // }
    let b = Math.floor((n) / 30)
    // let int = n - b * 30
    // let r = Math.floor(int / 8)

    // let s = Array(((b) * 8)).fill(false)
    let s = Array(n).fill(false)
    // let s = []


    for (let g = 0; A[g % 8] + (30 * (Math.floor(g / 8))) <= n; ++g) {
        let val = A[g % 8] + (30 * (Math.floor(g / 8)))
        // let inc = A[g % 8]
        if (!s[val]) {
            // if (val === 49) console.log(val)
            s[val] = true

            let h = g
            for (let j = val; j * val <= n; j = A[h % 8] + (30 * (Math.floor(h / 8)))) {

                // if (!s[j * val] && j * val === 49) {
                //     s[j * val] = true
                //     break
                // }
                if (!s[j * val]) {
                    // if (j * val === 49) alert(true)
                    s[j * val] = true

                }
                h++
            }

            // for (let j = s[g]; j * s[g] <= n; j = A[h % 8] + (30 * (Math.floor(h / 8)))) {
            //     // let pos = ((j * inc) % 30) + 30 * Math.floor((j * inc) / 8)

            //     let pos = (j * s[g]) - Math.floor(j * s[g] / 30) * 30
            //     p = pos[pos] + 8 * Math.floor(j * s[g] / 30)



            //     // p = pos[(j * s[g]) % 30] + (8 * (Math.floor((j * s[g]) - (j * s[g]) % 30) / 30))
            //     s[p] = false
            //     h++



            // }
        }

    }

    return s

}

function sieve(limit) {

    var bools = [];
    var primes = [];

    // generate a list of booleans all set to true initially
    // the array is indexed from 2 to limit representing all numbers
    // e.g. [true, true, true, true] = [2, 3, 4, 5]
    for (var i = 1; i < limit; i++) { bools.push(true); }

    // loop from 2 to limit setting the composite numbers to false
    // we start from 2 because we know 1 is not a prime number
    for (var i = 2; i < limit; i++) {
        if (bools[i - 2]) {
            for (var j = i * 2; j <= limit; j += i) {
                bools[j - 2] = false;
            }
        }
    }

    // now generate the list of primes only where
    // there is a true value in the bools array
    for (var p = 0; p < bools.length; p++) {
        if (bools[p]) { primes.push(p + 2); }
    }

    return primes;

}




// // console.log(getPrimesO(300))
// console.log(sumPrimes2(300))
console.log(sieve(300))
// console.log(wheelOfEratosthenes(300))
console.log(wheelPrime(300))

var m0 = performance.now();
sieve(100000001);
var m1 = performance.now();
console.log("Call to theirfunc took " + (m1 - m0) + " milliseconds.")



// // var t0 = performance.now();
// // wheelOfEratosthenes(30000001);
// // var t1 = performance.now();
// // console.log("Call to wheelOfEra took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now();
wheelPrime(100000001);
var t1 = performance.now();
console.log("Call to wheelPrime took " + (t1 - t0) + " milliseconds.")

