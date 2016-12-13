// Author - Swainson Holness

//=====================
//Prime factor function
//=====================

//We enter the positive integer we want to find the prime factor of.
function primeFactor(selectNum) {
    //The divisor is the prime number that can divide the selectNum and will be stored in an array
    var divisor = 2;
    //This is the array that will store the divisor
    var primeArr = [];
    //We call this loop to check and see if the divisor is prime. notice that the loop terminates as selectNum is continuously checked 
    for (i = 0; i <= selectNum; i++) {
        //Some primes have a large gap at larger numbers. These primes take too long to run and can break the system. 
        //To avoid this we cap selectNum to a certain size 
        if (selectNum > 10000000000000000) {
            return console.log("The number selected is too large!")
        }
        //This important step checks that a divisor is prime and stores it while changing the value of select um so we dont include composite umbers
        else if (selectNum % divisor === 0) {
            var selectNum = selectNum / divisor;
            primeArr.push(divisor);
            //This is important. If we allow i to incrament then it will skip some primes and not store them. 
            //by allowing i to depricate it gives space to list all primes unless the number is composite in which case it incraments.
            i--;
        }
        //Here we incrament the divisor and i so that we can check if a number < selectNum is prime. 
        else {
            divisor++;
        }
    }
    //lastly we display the array with all the logged primes.
    console.log(primeArr);
}




// Optimized code
function findPrimeFactor(max) {
    var nonPrime = []; // array is initially 'null'
    var prime = [];

    for (var i = 2; i <= max; ++i) {
        if (!nonPrime[i] && (max % i === 0)) {
            // Edit.1 "max % i === 0" Checks to see if max is divisible by prime number
            // i is null (which is falsey),it is a prime number
            // i is true, it's a nonPrime and we skip to next number
            prime.push(i);
            max = max / i // reduces max so we can find the mext prime multiple
            for (var j = i; j <= max; j += i) {
                // Find every multiple of the found Prime (j += i)
                // Use the multiple as an index and set the value
                // at that index in the nonPrime array to 'true'
                if (max % i === 0) { i--; break; } //if the reduced max value is still divisible by i it breaks out of the loop and reduces i by 1 so we can add the   
                nonPrime[j] = true;
            }
        }
    }
    return prime;
}

console.log(findPrimeFactor(100));