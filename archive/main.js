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
    let inStep = 0
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
    return outStep;
}

const wheelPrime = (n) => {
    let step = 0;

    const p = [2, 3, 5]
    // let sieve = Array(n).fill(false);
    let sieve = Array(n).fill(false)
    // let sieve2 = []

    const inc = [2, 4, 2, 4, 6, 2, 6, 4,
        2, 4, 6, 6, 2, 6, 4, 2,
        6, 4, 6, 8, 4, 2, 4, 2,
        4, 8, 6, 4, 6, 2, 4, 6,
        2, 6, 6, 4, 2, 4, 6, 2,
        6, 4, 2, 4, 2, 10, 2, 10,]

    let g = 0;
    let h = 0;
    let m = 0;
    let k = 0;

    let wheelSum = 0
    let compSum



    // for (let i = 11; i + inc[g % 48] < n; i += inc[(g - 1) % 48]) {
    //     sieve[i] = i;
    //     g++
    //     step++
    // }
    // Math.floor((Math.sqrt(n)))

    for (let v = 11; v <= n; v += inc[(h - 1) % 48]) {
        step++
        m = k;

        // sieve[v] = v
        for (let s = v; s * v < n; s += inc[(m - 1) % 48]) {

            step++
            if (!sieve[v]) sieve[v] = v
            if (sieve[v * s]) {
                sieve[v * s] = false
                // console.log("!")
            }
            m++
        }

        k++
        h++
    }


    return step

}

const helper = () => {
    let prime = [7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]
    let help = []
    for (let f = 0; f < prime.length - 1; f++) {
        help.push(prime[f + 1] - prime[f])
    }
    return help
}


console.log(getPrimesO(300))
console.log(sumPrimes2(300))
console.log(sumPrimes(300))
console.log(wheelPrime(300))
console.log(helper())


var t0 = performance.now();
wheelPrime(10000001);
var t1 = performance.now();
console.log("Call to myfunc took " + (t1 - t0) + " milliseconds.")

var m0 = performance.now();
sumPrimes2(10000001);
var m1 = performance.now();
console.log("Call to theirfunc took " + (m1 - m0) + " milliseconds.")